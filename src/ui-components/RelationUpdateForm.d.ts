/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Relation } from "../API.ts";
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
export declare type RelationUpdateFormInputValues = {
    type?: string;
    mode?: string;
    name?: string;
    description?: string;
    avatar?: string;
    reference?: string;
    members?: string[];
    admins?: string[];
    updatedAt?: string;
    status?: string;
    search?: string;
};
export declare type RelationUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    mode?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    avatar?: ValidationFunction<string>;
    reference?: ValidationFunction<string>;
    members?: ValidationFunction<string>;
    admins?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    search?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RelationUpdateFormOverridesProps = {
    RelationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    mode?: PrimitiveOverrideProps<SelectFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    avatar?: PrimitiveOverrideProps<TextFieldProps>;
    reference?: PrimitiveOverrideProps<TextFieldProps>;
    members?: PrimitiveOverrideProps<TextFieldProps>;
    admins?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    search?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RelationUpdateFormProps = React.PropsWithChildren<{
    overrides?: RelationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    relation?: Relation;
    onSubmit?: (fields: RelationUpdateFormInputValues) => RelationUpdateFormInputValues;
    onSuccess?: (fields: RelationUpdateFormInputValues) => void;
    onError?: (fields: RelationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RelationUpdateFormInputValues) => RelationUpdateFormInputValues;
    onValidate?: RelationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RelationUpdateForm(props: RelationUpdateFormProps): React.ReactElement;
