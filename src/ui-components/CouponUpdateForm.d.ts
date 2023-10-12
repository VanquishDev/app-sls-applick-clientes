/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Coupon } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CouponUpdateFormInputValues = {
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
export declare type CouponUpdateFormValidationValues = {
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
export declare type CouponUpdateFormOverridesProps = {
    CouponUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type CouponUpdateFormProps = React.PropsWithChildren<{
    overrides?: CouponUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    coupon?: Coupon;
    onSubmit?: (fields: CouponUpdateFormInputValues) => CouponUpdateFormInputValues;
    onSuccess?: (fields: CouponUpdateFormInputValues) => void;
    onError?: (fields: CouponUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CouponUpdateFormInputValues) => CouponUpdateFormInputValues;
    onValidate?: CouponUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CouponUpdateForm(props: CouponUpdateFormProps): React.ReactElement;
