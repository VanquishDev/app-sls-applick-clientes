/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Company } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CompanyUpdateFormInputValues = {
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
export declare type CompanyUpdateFormValidationValues = {
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
export declare type CompanyUpdateFormOverridesProps = {
    CompanyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type CompanyUpdateFormProps = React.PropsWithChildren<{
    overrides?: CompanyUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    company?: Company;
    onSubmit?: (fields: CompanyUpdateFormInputValues) => CompanyUpdateFormInputValues;
    onSuccess?: (fields: CompanyUpdateFormInputValues) => void;
    onError?: (fields: CompanyUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CompanyUpdateFormInputValues) => CompanyUpdateFormInputValues;
    onValidate?: CompanyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CompanyUpdateForm(props: CompanyUpdateFormProps): React.ReactElement;
