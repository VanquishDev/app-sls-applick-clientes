/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DeliveryMethodOrderCreateFormInputValues = {
    name?: string;
    zipCode?: string[];
    price?: number;
};
export declare type DeliveryMethodOrderCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    zipCode?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DeliveryMethodOrderCreateFormOverridesProps = {
    DeliveryMethodOrderCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    zipCode?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DeliveryMethodOrderCreateFormProps = React.PropsWithChildren<{
    overrides?: DeliveryMethodOrderCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DeliveryMethodOrderCreateFormInputValues) => DeliveryMethodOrderCreateFormInputValues;
    onSuccess?: (fields: DeliveryMethodOrderCreateFormInputValues) => void;
    onError?: (fields: DeliveryMethodOrderCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DeliveryMethodOrderCreateFormInputValues) => DeliveryMethodOrderCreateFormInputValues;
    onValidate?: DeliveryMethodOrderCreateFormValidationValues;
} & React.CSSProperties>;
export default function DeliveryMethodOrderCreateForm(props: DeliveryMethodOrderCreateFormProps): React.ReactElement;
