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
export declare type MenuCreateFormInputValues = {
    alias?: string;
    order?: number;
    title?: string;
    description?: string;
    orderDesc?: boolean;
    thumbnail?: string;
    thumbnailSrc?: string;
    thumbnailCropper?: string;
    showDescriptionPage?: string;
    showThumbnailPage?: string;
    hide?: boolean;
};
export declare type MenuCreateFormValidationValues = {
    alias?: ValidationFunction<string>;
    order?: ValidationFunction<number>;
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    orderDesc?: ValidationFunction<boolean>;
    thumbnail?: ValidationFunction<string>;
    thumbnailSrc?: ValidationFunction<string>;
    thumbnailCropper?: ValidationFunction<string>;
    showDescriptionPage?: ValidationFunction<string>;
    showThumbnailPage?: ValidationFunction<string>;
    hide?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MenuCreateFormOverridesProps = {
    MenuCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    alias?: PrimitiveOverrideProps<TextFieldProps>;
    order?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    orderDesc?: PrimitiveOverrideProps<SwitchFieldProps>;
    thumbnail?: PrimitiveOverrideProps<TextFieldProps>;
    thumbnailSrc?: PrimitiveOverrideProps<TextFieldProps>;
    thumbnailCropper?: PrimitiveOverrideProps<TextFieldProps>;
    showDescriptionPage?: PrimitiveOverrideProps<TextFieldProps>;
    showThumbnailPage?: PrimitiveOverrideProps<TextFieldProps>;
    hide?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type MenuCreateFormProps = React.PropsWithChildren<{
    overrides?: MenuCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MenuCreateFormInputValues) => MenuCreateFormInputValues;
    onSuccess?: (fields: MenuCreateFormInputValues) => void;
    onError?: (fields: MenuCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MenuCreateFormInputValues) => MenuCreateFormInputValues;
    onValidate?: MenuCreateFormValidationValues;
} & React.CSSProperties>;
export default function MenuCreateForm(props: MenuCreateFormProps): React.ReactElement;
