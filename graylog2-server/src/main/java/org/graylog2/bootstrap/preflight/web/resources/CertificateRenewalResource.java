/*
 * Copyright (C) 2020 Graylog, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the Server Side Public License, version 1,
 * as published by MongoDB, Inc.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * Server Side Public License for more details.
 *
 * You should have received a copy of the Server Side Public License
 * along with this program. If not, see
 * <http://www.mongodb.com/licensing/server-side-public-license>.
 */
package org.graylog2.bootstrap.preflight.web.resources;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiParam;
import org.apache.shiro.authz.annotation.RequiresAuthentication;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.graylog.security.certutil.CertRenewalService;
import org.graylog2.audit.AuditEventTypes;
import org.graylog2.audit.jersey.AuditEvent;
import org.graylog2.plugin.rest.PluginRestResource;
import org.graylog2.shared.security.RestPermissions;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Api(value = "Certificates")
@Path("/certrenewal")
@Produces(MediaType.APPLICATION_JSON)
@RequiresAuthentication
public class CertificateRenewalResource implements PluginRestResource {
    private final CertRenewalService certRenewalService;

    @Inject
    public CertificateRenewalResource(final CertRenewalService certRenewalService) {
        this.certRenewalService = certRenewalService;
    }

    @GET
    // reusing permissions to be the same as for editing the renewal policy, which is below cluster configuration
    @RequiresPermissions(RestPermissions.CLUSTER_CONFIG_ENTRY_READ)
    public List<CertRenewalService.DataNode> listDataNodes() {
        // Nodes are not filtered right now so that you can manually initiate a renewal for every node available
        return certRenewalService.findNodes();
    }

    @POST
    @Path("{nodeID}")
    @AuditEvent(type = AuditEventTypes.CERTIFICATE_RENEWAL_MANUALLY_INITIATED)
    // reusing permissions to be the same as for editing the renewal policy, which is below cluster configuration
    @RequiresPermissions({RestPermissions.CLUSTER_CONFIG_ENTRY_CREATE, RestPermissions.CLUSTER_CONFIG_ENTRY_EDIT})
    public void initiateCertRenewalForNode(@ApiParam(name = "nodeID") @PathParam("nodeID") String nodeID) {
        certRenewalService.initiateRenewalForNode(nodeID);
    }
}