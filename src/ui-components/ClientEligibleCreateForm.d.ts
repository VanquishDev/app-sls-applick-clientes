/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ClientEligibleCreateFormInputValues = {
    clientID?: string;
    key?: string;
    name?: string;
    cpf?: string;
    rg?: string;
    birth?: string;
    notes?: string;
    search?: string;
    relationship?: string;
    isDependent?: boolean;
};
export declare type ClientEligibleCreateFormValidationValues = {
    clientID?: ValidationFunction<string>;
    key?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    cpf?: ValidationFunction<string>;
    rg?: ValidationFunction<string>;
    birth?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    search?: ValidationFunction<string>;
    relationship?: ValidationFunction<string>;
    isDependent?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClientEligibleCreateFormOverridesProps = {
    ClientEligibleCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    clientID?: PrimitiveOverrideProps<TextFieldProps>;
    key?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    cpf?: PrimitiveOverrideProps<TextFieldProps>;
    rg?: PrimitiveOverrideProps<TextFieldProps>;
    birth?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    search?: PrimitiveOverrideProps<TextFieldProps>;
    relationship?: PrimitiveOverrideProps<TextFieldProps>;
    isDependent?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ClientEligibleCreateFormProps = React.PropsWithChildren<{
    overrides?: ClientEligibleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ClientEligibleCreateFormInputValues) => ClientEligibleCreateFormInputValues;
    onSuccess?: (fields: ClientEligibleCreateFormInputValues) => void;
    onError?: (fields: ClientEligibleCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClientEligibleCreateFormInputValues) => ClientEligibleCreateFormInputValues;
    onValidate?: ClientEligibleCreateFormValidationValues;
} & React.CSSProperties>;
export default function ClientEligibleCreateForm(props: ClientEligibleCreateFormProps): React.ReactElement;
