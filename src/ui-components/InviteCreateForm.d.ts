/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InviteCreateFormInputValues = {
    name?: string;
    description?: string;
    email?: string;
    phone?: string;
    groups?: string[];
    status?: string;
    createdAt?: string;
};
export declare type InviteCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    groups?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InviteCreateFormOverridesProps = {
    InviteCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    groups?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InviteCreateFormProps = React.PropsWithChildren<{
    overrides?: InviteCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InviteCreateFormInputValues) => InviteCreateFormInputValues;
    onSuccess?: (fields: InviteCreateFormInputValues) => void;
    onError?: (fields: InviteCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InviteCreateFormInputValues) => InviteCreateFormInputValues;
    onValidate?: InviteCreateFormValidationValues;
} & React.CSSProperties>;
export default function InviteCreateForm(props: InviteCreateFormProps): React.ReactElement;
