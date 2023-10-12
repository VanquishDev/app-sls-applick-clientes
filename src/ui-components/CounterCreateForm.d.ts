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
export declare type CounterCreateFormInputValues = {
    id?: string;
    qty?: number;
};
export declare type CounterCreateFormValidationValues = {
    id?: ValidationFunction<string>;
    qty?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CounterCreateFormOverridesProps = {
    CounterCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    id?: PrimitiveOverrideProps<TextFieldProps>;
    qty?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CounterCreateFormProps = React.PropsWithChildren<{
    overrides?: CounterCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CounterCreateFormInputValues) => CounterCreateFormInputValues;
    onSuccess?: (fields: CounterCreateFormInputValues) => void;
    onError?: (fields: CounterCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CounterCreateFormInputValues) => CounterCreateFormInputValues;
    onValidate?: CounterCreateFormValidationValues;
} & React.CSSProperties>;
export default function CounterCreateForm(props: CounterCreateFormProps): React.ReactElement;
