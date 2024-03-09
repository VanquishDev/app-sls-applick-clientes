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
export declare type AuthorizationListMemberVaccinationCreateFormInputValues = {
    authorizationListID?: string;
    authorizationListMemberID?: string;
    profissionalID?: string;
    coren?: string;
    lote?: string;
    dueDate?: string;
    via?: string;
    OS?: string;
    applicationDate?: string;
    applicationTime?: string;
};
export declare type AuthorizationListMemberVaccinationCreateFormValidationValues = {
    authorizationListID?: ValidationFunction<string>;
    authorizationListMemberID?: ValidationFunction<string>;
    profissionalID?: ValidationFunction<string>;
    coren?: ValidationFunction<string>;
    lote?: ValidationFunction<string>;
    dueDate?: ValidationFunction<string>;
    via?: ValidationFunction<string>;
    OS?: ValidationFunction<string>;
    applicationDate?: ValidationFunction<string>;
    applicationTime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AuthorizationListMemberVaccinationCreateFormOverridesProps = {
    AuthorizationListMemberVaccinationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    authorizationListID?: PrimitiveOverrideProps<TextFieldProps>;
    authorizationListMemberID?: PrimitiveOverrideProps<TextFieldProps>;
    profissionalID?: PrimitiveOverrideProps<TextFieldProps>;
    coren?: PrimitiveOverrideProps<TextFieldProps>;
    lote?: PrimitiveOverrideProps<TextFieldProps>;
    dueDate?: PrimitiveOverrideProps<TextFieldProps>;
    via?: PrimitiveOverrideProps<TextFieldProps>;
    OS?: PrimitiveOverrideProps<TextFieldProps>;
    applicationDate?: PrimitiveOverrideProps<TextFieldProps>;
    applicationTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AuthorizationListMemberVaccinationCreateFormProps = React.PropsWithChildren<{
    overrides?: AuthorizationListMemberVaccinationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AuthorizationListMemberVaccinationCreateFormInputValues) => AuthorizationListMemberVaccinationCreateFormInputValues;
    onSuccess?: (fields: AuthorizationListMemberVaccinationCreateFormInputValues) => void;
    onError?: (fields: AuthorizationListMemberVaccinationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AuthorizationListMemberVaccinationCreateFormInputValues) => AuthorizationListMemberVaccinationCreateFormInputValues;
    onValidate?: AuthorizationListMemberVaccinationCreateFormValidationValues;
} & React.CSSProperties>;
export default function AuthorizationListMemberVaccinationCreateForm(props: AuthorizationListMemberVaccinationCreateFormProps): React.ReactElement;
