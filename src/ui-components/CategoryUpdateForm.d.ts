/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Category } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CategoryUpdateFormInputValues = {
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
export declare type CategoryUpdateFormValidationValues = {
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
export declare type CategoryUpdateFormOverridesProps = {
    CategoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type CategoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: CategoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    category?: Category;
    onSubmit?: (fields: CategoryUpdateFormInputValues) => CategoryUpdateFormInputValues;
    onSuccess?: (fields: CategoryUpdateFormInputValues) => void;
    onError?: (fields: CategoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CategoryUpdateFormInputValues) => CategoryUpdateFormInputValues;
    onValidate?: CategoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CategoryUpdateForm(props: CategoryUpdateFormProps): React.ReactElement;
