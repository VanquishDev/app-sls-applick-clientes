/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Notify } from "../API.ts";
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
export declare type NotifyUpdateFormInputValues = {
    userID?: string;
    createdAt?: string;
    content?: string;
    link?: string;
    viewed?: boolean;
};
export declare type NotifyUpdateFormValidationValues = {
    userID?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
    viewed?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotifyUpdateFormOverridesProps = {
    NotifyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    viewed?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type NotifyUpdateFormProps = React.PropsWithChildren<{
    overrides?: NotifyUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    notify?: Notify;
    onSubmit?: (fields: NotifyUpdateFormInputValues) => NotifyUpdateFormInputValues;
    onSuccess?: (fields: NotifyUpdateFormInputValues) => void;
    onError?: (fields: NotifyUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotifyUpdateFormInputValues) => NotifyUpdateFormInputValues;
    onValidate?: NotifyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NotifyUpdateForm(props: NotifyUpdateFormProps): React.ReactElement;
