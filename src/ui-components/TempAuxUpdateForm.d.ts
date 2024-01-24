/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TempAux } from "../API.ts";
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
export declare type TempAuxUpdateFormInputValues = {
    name?: string;
    doc?: string;
    birth?: string;
};
export declare type TempAuxUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    doc?: ValidationFunction<string>;
    birth?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TempAuxUpdateFormOverridesProps = {
    TempAuxUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    doc?: PrimitiveOverrideProps<TextFieldProps>;
    birth?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TempAuxUpdateFormProps = React.PropsWithChildren<{
    overrides?: TempAuxUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tempAux?: TempAux;
    onSubmit?: (fields: TempAuxUpdateFormInputValues) => TempAuxUpdateFormInputValues;
    onSuccess?: (fields: TempAuxUpdateFormInputValues) => void;
    onError?: (fields: TempAuxUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TempAuxUpdateFormInputValues) => TempAuxUpdateFormInputValues;
    onValidate?: TempAuxUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TempAuxUpdateForm(props: TempAuxUpdateFormProps): React.ReactElement;
