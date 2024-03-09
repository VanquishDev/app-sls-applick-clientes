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
export declare type AuthorizationListMemberCreateFormInputValues = {
    authorizationListID?: string;
    name?: string;
    key?: string;
    cpf?: string;
    birth?: string;
    search?: string;
    others?: string;
};
export declare type AuthorizationListMemberCreateFormValidationValues = {
    authorizationListID?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    key?: ValidationFunction<string>;
    cpf?: ValidationFunction<string>;
    birth?: ValidationFunction<string>;
    search?: ValidationFunction<string>;
    others?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AuthorizationListMemberCreateFormOverridesProps = {
    AuthorizationListMemberCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    authorizationListID?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    key?: PrimitiveOverrideProps<TextFieldProps>;
    cpf?: PrimitiveOverrideProps<TextFieldProps>;
    birth?: PrimitiveOverrideProps<TextFieldProps>;
    search?: PrimitiveOverrideProps<TextFieldProps>;
    others?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AuthorizationListMemberCreateFormProps = React.PropsWithChildren<{
    overrides?: AuthorizationListMemberCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AuthorizationListMemberCreateFormInputValues) => AuthorizationListMemberCreateFormInputValues;
    onSuccess?: (fields: AuthorizationListMemberCreateFormInputValues) => void;
    onError?: (fields: AuthorizationListMemberCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AuthorizationListMemberCreateFormInputValues) => AuthorizationListMemberCreateFormInputValues;
    onValidate?: AuthorizationListMemberCreateFormValidationValues;
} & React.CSSProperties>;
export default function AuthorizationListMemberCreateForm(props: AuthorizationListMemberCreateFormProps): React.ReactElement;
