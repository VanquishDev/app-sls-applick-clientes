/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AuthorizationListClosureCreateFormInputValues = {
    authorizationListID?: string;
    contactName?: string;
    contactPhone?: string;
    contactEmail?: string;
    notes?: string;
    qtyApplication?: number;
    qtyReturned?: number;
    professionalID?: string;
    OS?: string;
    createdAt?: string;
};
export declare type AuthorizationListClosureCreateFormValidationValues = {
    authorizationListID?: ValidationFunction<string>;
    contactName?: ValidationFunction<string>;
    contactPhone?: ValidationFunction<string>;
    contactEmail?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    qtyApplication?: ValidationFunction<number>;
    qtyReturned?: ValidationFunction<number>;
    professionalID?: ValidationFunction<string>;
    OS?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AuthorizationListClosureCreateFormOverridesProps = {
    AuthorizationListClosureCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    authorizationListID?: PrimitiveOverrideProps<TextFieldProps>;
    contactName?: PrimitiveOverrideProps<TextFieldProps>;
    contactPhone?: PrimitiveOverrideProps<TextFieldProps>;
    contactEmail?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    qtyApplication?: PrimitiveOverrideProps<TextFieldProps>;
    qtyReturned?: PrimitiveOverrideProps<TextFieldProps>;
    professionalID?: PrimitiveOverrideProps<TextFieldProps>;
    OS?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AuthorizationListClosureCreateFormProps = React.PropsWithChildren<{
    overrides?: AuthorizationListClosureCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AuthorizationListClosureCreateFormInputValues) => AuthorizationListClosureCreateFormInputValues;
    onSuccess?: (fields: AuthorizationListClosureCreateFormInputValues) => void;
    onError?: (fields: AuthorizationListClosureCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AuthorizationListClosureCreateFormInputValues) => AuthorizationListClosureCreateFormInputValues;
    onValidate?: AuthorizationListClosureCreateFormValidationValues;
} & React.CSSProperties>;
export default function AuthorizationListClosureCreateForm(props: AuthorizationListClosureCreateFormProps): React.ReactElement;
