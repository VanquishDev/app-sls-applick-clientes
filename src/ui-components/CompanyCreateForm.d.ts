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
export declare type CompanyCreateFormInputValues = {
    cnpj?: string;
    name?: string;
    openingHours?: string;
    phones?: string;
    street?: string;
    number?: string;
    complement?: string;
    zipcode?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    country?: string;
    search?: string;
    enableRetail?: string;
    schedulesSunday?: string[];
    schedulesMonday?: string[];
    schedulesTuesday?: string[];
    schedulesWednesday?: string[];
    schedulesThursday?: string[];
    schedulesFriday?: string[];
    schedulesSaturday?: string[];
    status?: string;
};
export declare type CompanyCreateFormValidationValues = {
    cnpj?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    openingHours?: ValidationFunction<string>;
    phones?: ValidationFunction<string>;
    street?: ValidationFunction<string>;
    number?: ValidationFunction<string>;
    complement?: ValidationFunction<string>;
    zipcode?: ValidationFunction<string>;
    neighborhood?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    search?: ValidationFunction<string>;
    enableRetail?: ValidationFunction<string>;
    schedulesSunday?: ValidationFunction<string>;
    schedulesMonday?: ValidationFunction<string>;
    schedulesTuesday?: ValidationFunction<string>;
    schedulesWednesday?: ValidationFunction<string>;
    schedulesThursday?: ValidationFunction<string>;
    schedulesFriday?: ValidationFunction<string>;
    schedulesSaturday?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompanyCreateFormOverridesProps = {
    CompanyCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cnpj?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    openingHours?: PrimitiveOverrideProps<TextFieldProps>;
    phones?: PrimitiveOverrideProps<TextFieldProps>;
    street?: PrimitiveOverrideProps<TextFieldProps>;
    number?: PrimitiveOverrideProps<TextFieldProps>;
    complement?: PrimitiveOverrideProps<TextFieldProps>;
    zipcode?: PrimitiveOverrideProps<TextFieldProps>;
    neighborhood?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    search?: PrimitiveOverrideProps<TextFieldProps>;
    enableRetail?: PrimitiveOverrideProps<TextFieldProps>;
    schedulesSunday?: PrimitiveOverrideProps<TextFieldProps>;
    schedulesMonday?: PrimitiveOverrideProps<TextFieldProps>;
    schedulesTuesday?: PrimitiveOverrideProps<TextFieldProps>;
    schedulesWednesday?: PrimitiveOverrideProps<TextFieldProps>;
    schedulesThursday?: PrimitiveOverrideProps<TextFieldProps>;
    schedulesFriday?: PrimitiveOverrideProps<TextFieldProps>;
    schedulesSaturday?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CompanyCreateFormProps = React.PropsWithChildren<{
    overrides?: CompanyCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CompanyCreateFormInputValues) => CompanyCreateFormInputValues;
    onSuccess?: (fields: CompanyCreateFormInputValues) => void;
    onError?: (fields: CompanyCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CompanyCreateFormInputValues) => CompanyCreateFormInputValues;
    onValidate?: CompanyCreateFormValidationValues;
} & React.CSSProperties>;
export default function CompanyCreateForm(props: CompanyCreateFormProps): React.ReactElement;
