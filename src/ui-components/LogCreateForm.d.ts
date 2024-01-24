/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LogCreateFormInputValues = {
    tag?: string;
    source?: string;
    notes?: string;
    message?: string;
    page?: string;
    manufacturer?: string;
    model?: string;
    osName?: string;
    osVersion?: string;
    platform?: string;
    uuid?: string;
    ip?: string;
    city?: string;
    region?: string;
    country?: string;
    provider?: string;
    lat?: number;
    lng?: number;
    createdAt?: string;
};
export declare type LogCreateFormValidationValues = {
    tag?: ValidationFunction<string>;
    source?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
    page?: ValidationFunction<string>;
    manufacturer?: ValidationFunction<string>;
    model?: ValidationFunction<string>;
    osName?: ValidationFunction<string>;
    osVersion?: ValidationFunction<string>;
    platform?: ValidationFunction<string>;
    uuid?: ValidationFunction<string>;
    ip?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    region?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    provider?: ValidationFunction<string>;
    lat?: ValidationFunction<number>;
    lng?: ValidationFunction<number>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LogCreateFormOverridesProps = {
    LogCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    tag?: PrimitiveOverrideProps<TextFieldProps>;
    source?: PrimitiveOverrideProps<SelectFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
    page?: PrimitiveOverrideProps<TextFieldProps>;
    manufacturer?: PrimitiveOverrideProps<TextFieldProps>;
    model?: PrimitiveOverrideProps<TextFieldProps>;
    osName?: PrimitiveOverrideProps<TextFieldProps>;
    osVersion?: PrimitiveOverrideProps<TextFieldProps>;
    platform?: PrimitiveOverrideProps<TextFieldProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    ip?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    region?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    provider?: PrimitiveOverrideProps<TextFieldProps>;
    lat?: PrimitiveOverrideProps<TextFieldProps>;
    lng?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LogCreateFormProps = React.PropsWithChildren<{
    overrides?: LogCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LogCreateFormInputValues) => LogCreateFormInputValues;
    onSuccess?: (fields: LogCreateFormInputValues) => void;
    onError?: (fields: LogCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LogCreateFormInputValues) => LogCreateFormInputValues;
    onValidate?: LogCreateFormValidationValues;
} & React.CSSProperties>;
export default function LogCreateForm(props: LogCreateFormProps): React.ReactElement;
