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
export declare type CouponCreateFormInputValues = {
    name?: string;
    description?: string;
    code?: string;
    start?: string;
    expiration?: string;
    discountPercentage?: number;
    discountValue?: number;
    qtyLimit?: number;
    qtyUsed?: number;
    qtyProduct?: number;
    qtyProductUsed?: number;
    search?: string;
};
export declare type CouponCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    code?: ValidationFunction<string>;
    start?: ValidationFunction<string>;
    expiration?: ValidationFunction<string>;
    discountPercentage?: ValidationFunction<number>;
    discountValue?: ValidationFunction<number>;
    qtyLimit?: ValidationFunction<number>;
    qtyUsed?: ValidationFunction<number>;
    qtyProduct?: ValidationFunction<number>;
    qtyProductUsed?: ValidationFunction<number>;
    search?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CouponCreateFormOverridesProps = {
    CouponCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
    start?: PrimitiveOverrideProps<TextFieldProps>;
    expiration?: PrimitiveOverrideProps<TextFieldProps>;
    discountPercentage?: PrimitiveOverrideProps<TextFieldProps>;
    discountValue?: PrimitiveOverrideProps<TextFieldProps>;
    qtyLimit?: PrimitiveOverrideProps<TextFieldProps>;
    qtyUsed?: PrimitiveOverrideProps<TextFieldProps>;
    qtyProduct?: PrimitiveOverrideProps<TextFieldProps>;
    qtyProductUsed?: PrimitiveOverrideProps<TextFieldProps>;
    search?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CouponCreateFormProps = React.PropsWithChildren<{
    overrides?: CouponCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CouponCreateFormInputValues) => CouponCreateFormInputValues;
    onSuccess?: (fields: CouponCreateFormInputValues) => void;
    onError?: (fields: CouponCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CouponCreateFormInputValues) => CouponCreateFormInputValues;
    onValidate?: CouponCreateFormValidationValues;
} & React.CSSProperties>;
export default function CouponCreateForm(props: CouponCreateFormProps): React.ReactElement;
