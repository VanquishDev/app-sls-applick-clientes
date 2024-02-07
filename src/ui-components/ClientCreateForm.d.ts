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
export declare type ClientCreateFormInputValues = {
    name?: string;
    notes?: string;
    group?: string;
    indication?: string;
    origin?: string;
    status?: string;
    search?: string;
    logo?: string;
    logoSrc?: string;
    logoCropper?: string;
    totalUnits?: number;
    unitsServed?: number;
    unitsExpected?: number;
    firstOSDate?: string;
    lastOSDate?: string;
    scheduleRouted?: number;
    scheduleConfirmed?: number;
    schedulePending?: number;
    totalEligibles?: number;
    totalVaccinations?: number;
    code?: string;
    contactName?: string;
    contactEmail?: string;
    contactPhone?: string;
};
export declare type ClientCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    group?: ValidationFunction<string>;
    indication?: ValidationFunction<string>;
    origin?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    search?: ValidationFunction<string>;
    logo?: ValidationFunction<string>;
    logoSrc?: ValidationFunction<string>;
    logoCropper?: ValidationFunction<string>;
    totalUnits?: ValidationFunction<number>;
    unitsServed?: ValidationFunction<number>;
    unitsExpected?: ValidationFunction<number>;
    firstOSDate?: ValidationFunction<string>;
    lastOSDate?: ValidationFunction<string>;
    scheduleRouted?: ValidationFunction<number>;
    scheduleConfirmed?: ValidationFunction<number>;
    schedulePending?: ValidationFunction<number>;
    totalEligibles?: ValidationFunction<number>;
    totalVaccinations?: ValidationFunction<number>;
    code?: ValidationFunction<string>;
    contactName?: ValidationFunction<string>;
    contactEmail?: ValidationFunction<string>;
    contactPhone?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClientCreateFormOverridesProps = {
    ClientCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    group?: PrimitiveOverrideProps<TextFieldProps>;
    indication?: PrimitiveOverrideProps<TextFieldProps>;
    origin?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    search?: PrimitiveOverrideProps<TextFieldProps>;
    logo?: PrimitiveOverrideProps<TextFieldProps>;
    logoSrc?: PrimitiveOverrideProps<TextFieldProps>;
    logoCropper?: PrimitiveOverrideProps<TextFieldProps>;
    totalUnits?: PrimitiveOverrideProps<TextFieldProps>;
    unitsServed?: PrimitiveOverrideProps<TextFieldProps>;
    unitsExpected?: PrimitiveOverrideProps<TextFieldProps>;
    firstOSDate?: PrimitiveOverrideProps<TextFieldProps>;
    lastOSDate?: PrimitiveOverrideProps<TextFieldProps>;
    scheduleRouted?: PrimitiveOverrideProps<TextFieldProps>;
    scheduleConfirmed?: PrimitiveOverrideProps<TextFieldProps>;
    schedulePending?: PrimitiveOverrideProps<TextFieldProps>;
    totalEligibles?: PrimitiveOverrideProps<TextFieldProps>;
    totalVaccinations?: PrimitiveOverrideProps<TextFieldProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
    contactName?: PrimitiveOverrideProps<TextFieldProps>;
    contactEmail?: PrimitiveOverrideProps<TextFieldProps>;
    contactPhone?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClientCreateFormProps = React.PropsWithChildren<{
    overrides?: ClientCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ClientCreateFormInputValues) => ClientCreateFormInputValues;
    onSuccess?: (fields: ClientCreateFormInputValues) => void;
    onError?: (fields: ClientCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClientCreateFormInputValues) => ClientCreateFormInputValues;
    onValidate?: ClientCreateFormValidationValues;
} & React.CSSProperties>;
export default function ClientCreateForm(props: ClientCreateFormProps): React.ReactElement;
