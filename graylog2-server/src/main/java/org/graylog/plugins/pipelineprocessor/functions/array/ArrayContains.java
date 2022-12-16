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
package org.graylog.plugins.pipelineprocessor.functions.array;

import com.google.common.collect.ImmutableList;
import org.graylog.plugins.pipelineprocessor.EvaluationContext;
import org.graylog.plugins.pipelineprocessor.ast.functions.AbstractFunction;
import org.graylog.plugins.pipelineprocessor.ast.functions.FunctionArgs;
import org.graylog.plugins.pipelineprocessor.ast.functions.FunctionDescriptor;
import org.graylog.plugins.pipelineprocessor.ast.functions.ParameterDescriptor;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

public class ArrayContains extends AbstractFunction<Boolean> {
    public static final String NAME = "array_contains";

    private final ParameterDescriptor<Object, List> elementsParam;
    private final ParameterDescriptor<Object, Object> valueParam;
    private final ParameterDescriptor<Boolean, Boolean> caseSensitiveParam;

    public ArrayContains() {
        elementsParam = ParameterDescriptor.type("elements", Object.class, List.class)
                .transform(ArrayContains::toList)
                .description("The input array, all must have the same data type, may be null")
                .build();
        valueParam = ParameterDescriptor.object("value")
                .description("The input value").build();
        caseSensitiveParam = ParameterDescriptor.bool("case_sensitive")
                .optional()
                .description("Whether or not to ignore case when checking String Arrays").build();
    }

    @SuppressWarnings("rawtypes")
    private static List toList(Object obj) {
        if (obj instanceof Collection) {
            return ImmutableList.copyOf((Collection) obj);
        } else {
            throw new IllegalArgumentException("Unsupported data type for parameter 'elements': " + obj.getClass().getCanonicalName());
        }
    }

    @SuppressWarnings("unchecked")
    @Override
    public Boolean evaluate(FunctionArgs args, EvaluationContext context) {
        final List<Object> elements = elementsParam.optional(args, context).orElse(Collections.emptyList());
        final Object value = valueParam.required(args, context);
        final boolean caseSensitive = caseSensitiveParam.optional(args, context).orElse(false);

        if (elements.isEmpty()) {
            return false;
        }

        if (!caseSensitive && containsStringValue(elements)) {
            return elements.stream()
                    .anyMatch(e -> e.toString().equalsIgnoreCase(String.valueOf(value)));
        }

        return elements.contains(value);
    }

    private static boolean containsStringValue(List elements) {
        return elements.get(0) instanceof String;
    }

    @Override
    public FunctionDescriptor<Boolean> descriptor() {
        return FunctionDescriptor.<Boolean>builder()
                .name(NAME)
                .pure(true)
                .returnType(Boolean.class)
                .params(ImmutableList.of(elementsParam, valueParam, caseSensitiveParam))
                .description("Checks if the specified element is contained in the array")
                .build();
    }
}