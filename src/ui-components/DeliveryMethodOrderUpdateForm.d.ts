/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DeliveryMethodOrder } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DeliveryMethodOrderUpdateFormInputValues = {
    name?: string;
    zipCode?: string[];
    price?: number;
};
export declare type DeliveryMethodOrderUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    zipCode?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DeliveryMethodOrderUpdateFormOverridesProps = {
    DeliveryMethodOrderUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    zipCode?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DeliveryMethodOrderUpdateFormProps = React.PropsWithChildren<{
    overrides?: DeliveryMethodOrderUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    deliveryMethodOrder?: DeliveryMethodOrder;
    onSubmit?: (fields: DeliveryMethodOrderUpdateFormInputValues) => DeliveryMethodOrderUpdateFormInputValues;
    onSuccess?: (fields: DeliveryMethodOrderUpdateFormInputValues) => void;
    onError?: (fields: DeliveryMethodOrderUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DeliveryMethodOrderUpdateFormInputValues) => DeliveryMethodOrderUpdateFormInputValues;
    onValidate?: DeliveryMethodOrderUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DeliveryMethodOrderUpdateForm(props: DeliveryMethodOrderUpdateFormProps): React.ReactElement;
