/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type AuthorizationListCreateFormInputValues = {
    name?: string;
    description?: string;
    start?: string;
    expiration?: string;
    orientation?: string;
    search?: string;
    qtyApplication?: number;
    qtyReturned?: number;
    contactNameFinished?: string;
    contactPhoneFinished?: string;
    contactEmailFinished?: string;
    notesFinished?: string;
    professionalFinished?: string;
    withList?: boolean;
    campaignCode?: string;
    OS?: string;
    status?: string;
};
export declare type AuthorizationListCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    start?: ValidationFunction<string>;
    expiration?: ValidationFunction<string>;
    orientation?: ValidationFunction<string>;
    search?: ValidationFunction<string>;
    qtyApplication?: ValidationFunction<number>;
    qtyReturned?: ValidationFunction<number>;
    contactNameFinished?: ValidationFunction<string>;
    contactPhoneFinished?: ValidationFunction<string>;
    contactEmailFinished?: ValidationFunction<string>;
    notesFinished?: ValidationFunction<string>;
    professionalFinished?: ValidationFunction<string>;
    withList?: ValidationFunction<boolean>;
    campaignCode?: ValidationFunction<string>;
    OS?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AuthorizationListCreateFormOverridesProps = {
    AuthorizationListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    start?: PrimitiveOverrideProps<TextFieldProps>;
    expiration?: PrimitiveOverrideProps<TextFieldProps>;
    orientation?: PrimitiveOverrideProps<TextFieldProps>;
    search?: PrimitiveOverrideProps<TextFieldProps>;
    qtyApplication?: PrimitiveOverrideProps<TextFieldProps>;
    qtyReturned?: PrimitiveOverrideProps<TextFieldProps>;
    contactNameFinished?: PrimitiveOverrideProps<TextFieldProps>;
    contactPhoneFinished?: PrimitiveOverrideProps<TextFieldProps>;
    contactEmailFinished?: PrimitiveOverrideProps<TextFieldProps>;
    notesFinished?: PrimitiveOverrideProps<TextFieldProps>;
    professionalFinished?: PrimitiveOverrideProps<TextFieldProps>;
    withList?: PrimitiveOverrideProps<SwitchFieldProps>;
    campaignCode?: PrimitiveOverrideProps<TextFieldProps>;
    OS?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type AuthorizationListCreateFormProps = React.PropsWithChildren<{
    overrides?: AuthorizationListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AuthorizationListCreateFormInputValues) => AuthorizationListCreateFormInputValues;
    onSuccess?: (fields: AuthorizationListCreateFormInputValues) => void;
    onError?: (fields: AuthorizationListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AuthorizationListCreateFormInputValues) => AuthorizationListCreateFormInputValues;
    onValidate?: AuthorizationListCreateFormValidationValues;
} & React.CSSProperties>;
export default function AuthorizationListCreateForm(props: AuthorizationListCreateFormProps): React.ReactElement;
