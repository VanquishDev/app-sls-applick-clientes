/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type NotifyCreateFormInputValues = {
    userID?: string;
    createdAt?: string;
    content?: string;
    link?: string;
    viewed?: boolean;
};
export declare type NotifyCreateFormValidationValues = {
    userID?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
    viewed?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotifyCreateFormOverridesProps = {
    NotifyCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    viewed?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type NotifyCreateFormProps = React.PropsWithChildren<{
    overrides?: NotifyCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NotifyCreateFormInputValues) => NotifyCreateFormInputValues;
    onSuccess?: (fields: NotifyCreateFormInputValues) => void;
    onError?: (fields: NotifyCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotifyCreateFormInputValues) => NotifyCreateFormInputValues;
    onValidate?: NotifyCreateFormValidationValues;
} & React.CSSProperties>;
export default function NotifyCreateForm(props: NotifyCreateFormProps): React.ReactElement;
