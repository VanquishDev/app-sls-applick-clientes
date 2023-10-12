/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Campaign } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CampaignUpdateFormInputValues = {
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
    orientation?: string;
    orderMessage?: string;
    zipCodeCoverage?: string[];
    search?: string;
};
export declare type CampaignUpdateFormValidationValues = {
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
    orientation?: ValidationFunction<string>;
    orderMessage?: ValidationFunction<string>;
    zipCodeCoverage?: ValidationFunction<string>;
    search?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CampaignUpdateFormOverridesProps = {
    CampaignUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
    orientation?: PrimitiveOverrideProps<TextFieldProps>;
    orderMessage?: PrimitiveOverrideProps<TextFieldProps>;
    zipCodeCoverage?: PrimitiveOverrideProps<TextFieldProps>;
    search?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CampaignUpdateFormProps = React.PropsWithChildren<{
    overrides?: CampaignUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    campaign?: Campaign;
    onSubmit?: (fields: CampaignUpdateFormInputValues) => CampaignUpdateFormInputValues;
    onSuccess?: (fields: CampaignUpdateFormInputValues) => void;
    onError?: (fields: CampaignUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CampaignUpdateFormInputValues) => CampaignUpdateFormInputValues;
    onValidate?: CampaignUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CampaignUpdateForm(props: CampaignUpdateFormProps): React.ReactElement;
