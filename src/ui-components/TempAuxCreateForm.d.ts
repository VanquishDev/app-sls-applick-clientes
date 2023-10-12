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
export declare type TempAuxCreateFormInputValues = {
    name?: string;
    doc?: string;
    birth?: string;
};
export declare type TempAuxCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    doc?: ValidationFunction<string>;
    birth?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TempAuxCreateFormOverridesProps = {
    TempAuxCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    doc?: PrimitiveOverrideProps<TextFieldProps>;
    birth?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TempAuxCreateFormProps = React.PropsWithChildren<{
    overrides?: TempAuxCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TempAuxCreateFormInputValues) => TempAuxCreateFormInputValues;
    onSuccess?: (fields: TempAuxCreateFormInputValues) => void;
    onError?: (fields: TempAuxCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TempAuxCreateFormInputValues) => TempAuxCreateFormInputValues;
    onValidate?: TempAuxCreateFormValidationValues;
} & React.CSSProperties>;
export default function TempAuxCreateForm(props: TempAuxCreateFormProps): React.ReactElement;
