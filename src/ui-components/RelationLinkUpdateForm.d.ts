/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { RelationLink } from "../API.ts";
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
export declare type RelationLinkUpdateFormInputValues = {
    type?: string;
    notify?: number;
    updatedAt?: string;
    search?: string;
    percentage?: number;
};
export declare type RelationLinkUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    notify?: ValidationFunction<number>;
    updatedAt?: ValidationFunction<string>;
    search?: ValidationFunction<string>;
    percentage?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RelationLinkUpdateFormOverridesProps = {
    RelationLinkUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    notify?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
    search?: PrimitiveOverrideProps<TextFieldProps>;
    percentage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RelationLinkUpdateFormProps = React.PropsWithChildren<{
    overrides?: RelationLinkUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    relationLink?: RelationLink;
    onSubmit?: (fields: RelationLinkUpdateFormInputValues) => RelationLinkUpdateFormInputValues;
    onSuccess?: (fields: RelationLinkUpdateFormInputValues) => void;
    onError?: (fields: RelationLinkUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RelationLinkUpdateFormInputValues) => RelationLinkUpdateFormInputValues;
    onValidate?: RelationLinkUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RelationLinkUpdateForm(props: RelationLinkUpdateFormProps): React.ReactElement;
