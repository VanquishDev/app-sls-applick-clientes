/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { RoutingRegion } from "../API.ts";
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
export declare type RoutingRegionUpdateFormInputValues = {
    name?: string;
    zipCode?: string[];
};
export declare type RoutingRegionUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    zipCode?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RoutingRegionUpdateFormOverridesProps = {
    RoutingRegionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    zipCode?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RoutingRegionUpdateFormProps = React.PropsWithChildren<{
    overrides?: RoutingRegionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    routingRegion?: RoutingRegion;
    onSubmit?: (fields: RoutingRegionUpdateFormInputValues) => RoutingRegionUpdateFormInputValues;
    onSuccess?: (fields: RoutingRegionUpdateFormInputValues) => void;
    onError?: (fields: RoutingRegionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RoutingRegionUpdateFormInputValues) => RoutingRegionUpdateFormInputValues;
    onValidate?: RoutingRegionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RoutingRegionUpdateForm(props: RoutingRegionUpdateFormProps): React.ReactElement;
