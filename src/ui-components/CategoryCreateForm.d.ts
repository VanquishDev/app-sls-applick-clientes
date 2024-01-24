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
export declare type CategoryCreateFormInputValues = {
    alias?: string;
    order?: number;
    title?: string;
    description?: string;
    thumbnail?: string;
    thumbnailSrc?: string;
    thumbnailCropper?: string;
    hide?: boolean;
    isSub?: boolean;
};
export declare type CategoryCreateFormValidationValues = {
    alias?: ValidationFunction<string>;
    order?: ValidationFunction<number>;
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    thumbnail?: ValidationFunction<string>;
    thumbnailSrc?: ValidationFunction<string>;
    thumbnailCropper?: ValidationFunction<string>;
    hide?: ValidationFunction<boolean>;
    isSub?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CategoryCreateFormOverridesProps = {
    CategoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    alias?: PrimitiveOverrideProps<TextFieldProps>;
    order?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    thumbnail?: PrimitiveOverrideProps<TextFieldProps>;
    thumbnailSrc?: PrimitiveOverrideProps<TextFieldProps>;
    thumbnailCropper?: PrimitiveOverrideProps<TextFieldProps>;
    hide?: PrimitiveOverrideProps<SwitchFieldProps>;
    isSub?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CategoryCreateFormProps = React.PropsWithChildren<{
    overrides?: CategoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CategoryCreateFormInputValues) => CategoryCreateFormInputValues;
    onSuccess?: (fields: CategoryCreateFormInputValues) => void;
    onError?: (fields: CategoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CategoryCreateFormInputValues) => CategoryCreateFormInputValues;
    onValidate?: CategoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function CategoryCreateForm(props: CategoryCreateFormProps): React.ReactElement;
