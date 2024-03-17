/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type RoutingCreateFormInputValues = {
    idx?: number;
    routingRegionID?: string;
    start?: string;
    end?: string;
    title?: string;
    description?: string;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    notes?: string;
    search?: string;
};
export declare type RoutingCreateFormValidationValues = {
    idx?: ValidationFunction<number>;
    routingRegionID?: ValidationFunction<string>;
    start?: ValidationFunction<string>;
    end?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    backgroundColor?: ValidationFunction<string>;
    textColor?: ValidationFunction<string>;
    borderColor?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    search?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RoutingCreateFormOverridesProps = {
    RoutingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    idx?: PrimitiveOverrideProps<TextFieldProps>;
    routingRegionID?: PrimitiveOverrideProps<TextFieldProps>;
    start?: PrimitiveOverrideProps<TextFieldProps>;
    end?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    backgroundColor?: PrimitiveOverrideProps<TextFieldProps>;
    textColor?: PrimitiveOverrideProps<TextFieldProps>;
    borderColor?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    search?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RoutingCreateFormProps = React.PropsWithChildren<{
    overrides?: RoutingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RoutingCreateFormInputValues) => RoutingCreateFormInputValues;
    onSuccess?: (fields: RoutingCreateFormInputValues) => void;
    onError?: (fields: RoutingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RoutingCreateFormInputValues) => RoutingCreateFormInputValues;
    onValidate?: RoutingCreateFormValidationValues;
} & React.CSSProperties>;
export default function RoutingCreateForm(props: RoutingCreateFormProps): React.ReactElement;
