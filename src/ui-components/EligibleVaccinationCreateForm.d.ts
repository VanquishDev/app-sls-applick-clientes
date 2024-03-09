/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type EligibleVaccinationCreateFormInputValues = {
    osID?: string;
    clientEligibleID?: string;
    clientID?: string;
    profissionalID?: string;
    profissionalDoc?: string;
    coren?: string;
    applicationDate?: string;
    reason?: string;
    search?: string;
    vaccination?: string;
    status?: string;
    localCity?: string;
    localState?: string;
};
export declare type EligibleVaccinationCreateFormValidationValues = {
    osID?: ValidationFunction<string>;
    clientEligibleID?: ValidationFunction<string>;
    clientID?: ValidationFunction<string>;
    profissionalID?: ValidationFunction<string>;
    profissionalDoc?: ValidationFunction<string>;
    coren?: ValidationFunction<string>;
    applicationDate?: ValidationFunction<string>;
    reason?: ValidationFunction<string>;
    search?: ValidationFunction<string>;
    vaccination?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    localCity?: ValidationFunction<string>;
    localState?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EligibleVaccinationCreateFormOverridesProps = {
    EligibleVaccinationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    osID?: PrimitiveOverrideProps<TextFieldProps>;
    clientEligibleID?: PrimitiveOverrideProps<TextFieldProps>;
    clientID?: PrimitiveOverrideProps<TextFieldProps>;
    profissionalID?: PrimitiveOverrideProps<TextFieldProps>;
    profissionalDoc?: PrimitiveOverrideProps<TextFieldProps>;
    coren?: PrimitiveOverrideProps<TextFieldProps>;
    applicationDate?: PrimitiveOverrideProps<TextFieldProps>;
    reason?: PrimitiveOverrideProps<TextFieldProps>;
    search?: PrimitiveOverrideProps<TextFieldProps>;
    vaccination?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    localCity?: PrimitiveOverrideProps<TextFieldProps>;
    localState?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EligibleVaccinationCreateFormProps = React.PropsWithChildren<{
    overrides?: EligibleVaccinationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EligibleVaccinationCreateFormInputValues) => EligibleVaccinationCreateFormInputValues;
    onSuccess?: (fields: EligibleVaccinationCreateFormInputValues) => void;
    onError?: (fields: EligibleVaccinationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EligibleVaccinationCreateFormInputValues) => EligibleVaccinationCreateFormInputValues;
    onValidate?: EligibleVaccinationCreateFormValidationValues;
} & React.CSSProperties>;
export default function EligibleVaccinationCreateForm(props: EligibleVaccinationCreateFormProps): React.ReactElement;
