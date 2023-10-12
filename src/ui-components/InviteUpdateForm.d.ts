/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Invite } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InviteUpdateFormInputValues = {
    name?: string;
    description?: string;
    email?: string;
    phone?: string;
    groups?: string[];
    status?: string;
    createdAt?: string;
};
export declare type InviteUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    groups?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InviteUpdateFormOverridesProps = {
    InviteUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    groups?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InviteUpdateFormProps = React.PropsWithChildren<{
    overrides?: InviteUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    invite?: Invite;
    onSubmit?: (fields: InviteUpdateFormInputValues) => InviteUpdateFormInputValues;
    onSuccess?: (fields: InviteUpdateFormInputValues) => void;
    onError?: (fields: InviteUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InviteUpdateFormInputValues) => InviteUpdateFormInputValues;
    onValidate?: InviteUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InviteUpdateForm(props: InviteUpdateFormProps): React.ReactElement;
