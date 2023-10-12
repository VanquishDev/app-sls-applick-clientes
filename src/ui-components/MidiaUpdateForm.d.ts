/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Midia } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MidiaUpdateFormInputValues = {
    key?: string;
    type?: string;
    title?: string;
    subTitle?: string;
    description?: string;
    identifyText?: string;
};
export declare type MidiaUpdateFormValidationValues = {
    key?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    subTitle?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    identifyText?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MidiaUpdateFormOverridesProps = {
    MidiaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    key?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    subTitle?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    identifyText?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MidiaUpdateFormProps = React.PropsWithChildren<{
    overrides?: MidiaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    midia?: Midia;
    onSubmit?: (fields: MidiaUpdateFormInputValues) => MidiaUpdateFormInputValues;
    onSuccess?: (fields: MidiaUpdateFormInputValues) => void;
    onError?: (fields: MidiaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MidiaUpdateFormInputValues) => MidiaUpdateFormInputValues;
    onValidate?: MidiaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MidiaUpdateForm(props: MidiaUpdateFormProps): React.ReactElement;
