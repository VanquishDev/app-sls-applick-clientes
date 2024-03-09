/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AuthorizationListMemberVaccination } from "../API.ts";
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
export declare type AuthorizationListMemberVaccinationUpdateFormInputValues = {
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
export declare type AuthorizationListMemberVaccinationUpdateFormValidationValues = {
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
export declare type AuthorizationListMemberVaccinationUpdateFormOverridesProps = {
    AuthorizationListMemberVaccinationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type AuthorizationListMemberVaccinationUpdateFormProps = React.PropsWithChildren<{
    overrides?: AuthorizationListMemberVaccinationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    authorizationListMemberVaccination?: AuthorizationListMemberVaccination;
    onSubmit?: (fields: AuthorizationListMemberVaccinationUpdateFormInputValues) => AuthorizationListMemberVaccinationUpdateFormInputValues;
    onSuccess?: (fields: AuthorizationListMemberVaccinationUpdateFormInputValues) => void;
    onError?: (fields: AuthorizationListMemberVaccinationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AuthorizationListMemberVaccinationUpdateFormInputValues) => AuthorizationListMemberVaccinationUpdateFormInputValues;
    onValidate?: AuthorizationListMemberVaccinationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AuthorizationListMemberVaccinationUpdateForm(props: AuthorizationListMemberVaccinationUpdateFormProps): React.ReactElement;
