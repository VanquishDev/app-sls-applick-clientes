/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Order } from "../API.ts";
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
export declare type OrderUpdateFormInputValues = {
    status?: string;
    createdAt?: string;
    couponID?: string;
    couponName?: string;
    couponDiscount?: number;
    deliveryPrice?: number;
    total?: number;
    rating?: number;
    ratingNotes?: string;
    orderPagarmeID?: string;
    addressReference?: string;
    addressStreet?: string;
    addressNumber?: string;
    addressComplement?: string;
    addressZipcode?: string;
    addressNeighborhood?: string;
    addressCity?: string;
    addressState?: string;
    addressCountry?: string;
    notes?: string;
    adherenceID?: string;
    adherenceName?: string;
    adherenceOrientation?: string;
    clientCampaignID?: string;
    clientCampaignName?: string;
    companyName?: string;
    companyPhone?: string;
    companyOpeningHours?: string;
    clientCampaignUnitID?: string;
    clientCampaignUnitName?: string;
    qrCodePix?: string;
    qrCodePixUrl?: string;
    payMethod?: string;
    installments?: number;
    homeCareOrRetail?: string;
};
export declare type OrderUpdateFormValidationValues = {
    status?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    couponID?: ValidationFunction<string>;
    couponName?: ValidationFunction<string>;
    couponDiscount?: ValidationFunction<number>;
    deliveryPrice?: ValidationFunction<number>;
    total?: ValidationFunction<number>;
    rating?: ValidationFunction<number>;
    ratingNotes?: ValidationFunction<string>;
    orderPagarmeID?: ValidationFunction<string>;
    addressReference?: ValidationFunction<string>;
    addressStreet?: ValidationFunction<string>;
    addressNumber?: ValidationFunction<string>;
    addressComplement?: ValidationFunction<string>;
    addressZipcode?: ValidationFunction<string>;
    addressNeighborhood?: ValidationFunction<string>;
    addressCity?: ValidationFunction<string>;
    addressState?: ValidationFunction<string>;
    addressCountry?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    adherenceID?: ValidationFunction<string>;
    adherenceName?: ValidationFunction<string>;
    adherenceOrientation?: ValidationFunction<string>;
    clientCampaignID?: ValidationFunction<string>;
    clientCampaignName?: ValidationFunction<string>;
    companyName?: ValidationFunction<string>;
    companyPhone?: ValidationFunction<string>;
    companyOpeningHours?: ValidationFunction<string>;
    clientCampaignUnitID?: ValidationFunction<string>;
    clientCampaignUnitName?: ValidationFunction<string>;
    qrCodePix?: ValidationFunction<string>;
    qrCodePixUrl?: ValidationFunction<string>;
    payMethod?: ValidationFunction<string>;
    installments?: ValidationFunction<number>;
    homeCareOrRetail?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrderUpdateFormOverridesProps = {
    OrderUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    couponID?: PrimitiveOverrideProps<TextFieldProps>;
    couponName?: PrimitiveOverrideProps<TextFieldProps>;
    couponDiscount?: PrimitiveOverrideProps<TextFieldProps>;
    deliveryPrice?: PrimitiveOverrideProps<TextFieldProps>;
    total?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
    ratingNotes?: PrimitiveOverrideProps<TextFieldProps>;
    orderPagarmeID?: PrimitiveOverrideProps<TextFieldProps>;
    addressReference?: PrimitiveOverrideProps<TextFieldProps>;
    addressStreet?: PrimitiveOverrideProps<TextFieldProps>;
    addressNumber?: PrimitiveOverrideProps<TextFieldProps>;
    addressComplement?: PrimitiveOverrideProps<TextFieldProps>;
    addressZipcode?: PrimitiveOverrideProps<TextFieldProps>;
    addressNeighborhood?: PrimitiveOverrideProps<TextFieldProps>;
    addressCity?: PrimitiveOverrideProps<TextFieldProps>;
    addressState?: PrimitiveOverrideProps<TextFieldProps>;
    addressCountry?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    adherenceID?: PrimitiveOverrideProps<TextFieldProps>;
    adherenceName?: PrimitiveOverrideProps<TextFieldProps>;
    adherenceOrientation?: PrimitiveOverrideProps<TextFieldProps>;
    clientCampaignID?: PrimitiveOverrideProps<TextFieldProps>;
    clientCampaignName?: PrimitiveOverrideProps<TextFieldProps>;
    companyName?: PrimitiveOverrideProps<TextFieldProps>;
    companyPhone?: PrimitiveOverrideProps<TextFieldProps>;
    companyOpeningHours?: PrimitiveOverrideProps<TextFieldProps>;
    clientCampaignUnitID?: PrimitiveOverrideProps<TextFieldProps>;
    clientCampaignUnitName?: PrimitiveOverrideProps<TextFieldProps>;
    qrCodePix?: PrimitiveOverrideProps<TextFieldProps>;
    qrCodePixUrl?: PrimitiveOverrideProps<TextFieldProps>;
    payMethod?: PrimitiveOverrideProps<SelectFieldProps>;
    installments?: PrimitiveOverrideProps<TextFieldProps>;
    homeCareOrRetail?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrderUpdateFormProps = React.PropsWithChildren<{
    overrides?: OrderUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    order?: Order;
    onSubmit?: (fields: OrderUpdateFormInputValues) => OrderUpdateFormInputValues;
    onSuccess?: (fields: OrderUpdateFormInputValues) => void;
    onError?: (fields: OrderUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrderUpdateFormInputValues) => OrderUpdateFormInputValues;
    onValidate?: OrderUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OrderUpdateForm(props: OrderUpdateFormProps): React.ReactElement;
