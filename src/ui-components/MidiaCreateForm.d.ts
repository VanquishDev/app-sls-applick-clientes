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
export declare type MidiaCreateFormInputValues = {
    key?: string;
    type?: string;
    title?: string;
    subTitle?: string;
    description?: string;
    identifyText?: string;
};
export declare type MidiaCreateFormValidationValues = {
    key?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    subTitle?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    identifyText?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MidiaCreateFormOverridesProps = {
    MidiaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    key?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    subTitle?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    identifyText?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MidiaCreateFormProps = React.PropsWithChildren<{
    overrides?: MidiaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MidiaCreateFormInputValues) => MidiaCreateFormInputValues;
    onSuccess?: (fields: MidiaCreateFormInputValues) => void;
    onError?: (fields: MidiaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MidiaCreateFormInputValues) => MidiaCreateFormInputValues;
    onValidate?: MidiaCreateFormValidationValues;
} & React.CSSProperties>;
export default function MidiaCreateForm(props: MidiaCreateFormProps): React.ReactElement;
