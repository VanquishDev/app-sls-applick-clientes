/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type BlockCreateFormInputValues = {
    order?: number;
    component?: string;
    content?: string;
    config?: string;
};
export declare type BlockCreateFormValidationValues = {
    order?: ValidationFunction<number>;
    component?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    config?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlockCreateFormOverridesProps = {
    BlockCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    order?: PrimitiveOverrideProps<TextFieldProps>;
    component?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    config?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BlockCreateFormProps = React.PropsWithChildren<{
    overrides?: BlockCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BlockCreateFormInputValues) => BlockCreateFormInputValues;
    onSuccess?: (fields: BlockCreateFormInputValues) => void;
    onError?: (fields: BlockCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BlockCreateFormInputValues) => BlockCreateFormInputValues;
    onValidate?: BlockCreateFormValidationValues;
} & React.CSSProperties>;
export default function BlockCreateForm(props: BlockCreateFormProps): React.ReactElement;
