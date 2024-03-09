/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AuthorizationListMember } from "../API.ts";
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
export declare type AuthorizationListMemberUpdateFormInputValues = {
    authorizationListID?: string;
    name?: string;
    key?: string;
    cpf?: string;
    birth?: string;
    search?: string;
    others?: string;
};
export declare type AuthorizationListMemberUpdateFormValidationValues = {
    authorizationListID?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    key?: ValidationFunction<string>;
    cpf?: ValidationFunction<string>;
    birth?: ValidationFunction<string>;
    search?: ValidationFunction<string>;
    others?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AuthorizationListMemberUpdateFormOverridesProps = {
    AuthorizationListMemberUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    authorizationListID?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    key?: PrimitiveOverrideProps<TextFieldProps>;
    cpf?: PrimitiveOverrideProps<TextFieldProps>;
    birth?: PrimitiveOverrideProps<TextFieldProps>;
    search?: PrimitiveOverrideProps<TextFieldProps>;
    others?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AuthorizationListMemberUpdateFormProps = React.PropsWithChildren<{
    overrides?: AuthorizationListMemberUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    authorizationListMember?: AuthorizationListMember;
    onSubmit?: (fields: AuthorizationListMemberUpdateFormInputValues) => AuthorizationListMemberUpdateFormInputValues;
    onSuccess?: (fields: AuthorizationListMemberUpdateFormInputValues) => void;
    onError?: (fields: AuthorizationListMemberUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AuthorizationListMemberUpdateFormInputValues) => AuthorizationListMemberUpdateFormInputValues;
    onValidate?: AuthorizationListMemberUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AuthorizationListMemberUpdateForm(props: AuthorizationListMemberUpdateFormProps): React.ReactElement;
