/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EligibleVaccination } from "../API.ts";
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
export declare type EligibleVaccinationUpdateFormInputValues = {
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
export declare type EligibleVaccinationUpdateFormValidationValues = {
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
export declare type EligibleVaccinationUpdateFormOverridesProps = {
    EligibleVaccinationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type EligibleVaccinationUpdateFormProps = React.PropsWithChildren<{
    overrides?: EligibleVaccinationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    eligibleVaccination?: EligibleVaccination;
    onSubmit?: (fields: EligibleVaccinationUpdateFormInputValues) => EligibleVaccinationUpdateFormInputValues;
    onSuccess?: (fields: EligibleVaccinationUpdateFormInputValues) => void;
    onError?: (fields: EligibleVaccinationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EligibleVaccinationUpdateFormInputValues) => EligibleVaccinationUpdateFormInputValues;
    onValidate?: EligibleVaccinationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EligibleVaccinationUpdateForm(props: EligibleVaccinationUpdateFormProps): React.ReactElement;
