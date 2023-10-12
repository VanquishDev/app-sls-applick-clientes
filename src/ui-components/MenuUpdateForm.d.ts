/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Menu } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MenuUpdateFormInputValues = {
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
export declare type MenuUpdateFormValidationValues = {
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
export declare type MenuUpdateFormOverridesProps = {
    MenuUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type MenuUpdateFormProps = React.PropsWithChildren<{
    overrides?: MenuUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    menu?: Menu;
    onSubmit?: (fields: MenuUpdateFormInputValues) => MenuUpdateFormInputValues;
    onSuccess?: (fields: MenuUpdateFormInputValues) => void;
    onError?: (fields: MenuUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MenuUpdateFormInputValues) => MenuUpdateFormInputValues;
    onValidate?: MenuUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MenuUpdateForm(props: MenuUpdateFormProps): React.ReactElement;
