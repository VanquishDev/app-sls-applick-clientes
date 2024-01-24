/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Counter } from "../API.ts";
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
export declare type CounterUpdateFormInputValues = {
    id?: string;
    qty?: number;
};
export declare type CounterUpdateFormValidationValues = {
    id?: ValidationFunction<string>;
    qty?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CounterUpdateFormOverridesProps = {
    CounterUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    id?: PrimitiveOverrideProps<TextFieldProps>;
    qty?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CounterUpdateFormProps = React.PropsWithChildren<{
    overrides?: CounterUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    counter?: Counter;
    onSubmit?: (fields: CounterUpdateFormInputValues) => CounterUpdateFormInputValues;
    onSuccess?: (fields: CounterUpdateFormInputValues) => void;
    onError?: (fields: CounterUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CounterUpdateFormInputValues) => CounterUpdateFormInputValues;
    onValidate?: CounterUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CounterUpdateForm(props: CounterUpdateFormProps): React.ReactElement;
