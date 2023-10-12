/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ConfigCreateFormInputValues = {
    validationMode?: string;
    googleAnalyticsID?: string;
    googleSiteVerification?: string;
    inviteSubject?: string;
    inviteMessage?: string;
    inviteSMS?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    infoFooter?: string;
    minValueOrder?: number;
    phoneOrders?: string;
    allowPayOnDelivery?: boolean;
    allowLocalPickup?: boolean;
    deliveryOnSunday?: string;
    deliveryOnMonday?: string;
    deliveryOnTuesday?: string;
    deliveryOnWednesday?: string;
    deliveryOnThursday?: string;
    deliveryOnFriday?: string;
    deliveryOnSaturday?: string;
    deliveryOffSunday?: string;
    deliveryOffMonday?: string;
    deliveryOffTuesday?: string;
    deliveryOffWednesday?: string;
    deliveryOffThursday?: string;
    deliveryOffFriday?: string;
    deliveryOffSaturday?: string;
    showNotesCart?: boolean;
    notesCart?: string;
    soundOnNewOrder?: boolean;
};
export declare type ConfigCreateFormValidationValues = {
    validationMode?: ValidationFunction<string>;
    googleAnalyticsID?: ValidationFunction<string>;
    googleSiteVerification?: ValidationFunction<string>;
    inviteSubject?: ValidationFunction<string>;
    inviteMessage?: ValidationFunction<string>;
    inviteSMS?: ValidationFunction<string>;
    facebook?: ValidationFunction<string>;
    twitter?: ValidationFunction<string>;
    instagram?: ValidationFunction<string>;
    infoFooter?: ValidationFunction<string>;
    minValueOrder?: ValidationFunction<number>;
    phoneOrders?: ValidationFunction<string>;
    allowPayOnDelivery?: ValidationFunction<boolean>;
    allowLocalPickup?: ValidationFunction<boolean>;
    deliveryOnSunday?: ValidationFunction<string>;
    deliveryOnMonday?: ValidationFunction<string>;
    deliveryOnTuesday?: ValidationFunction<string>;
    deliveryOnWednesday?: ValidationFunction<string>;
    deliveryOnThursday?: ValidationFunction<string>;
    deliveryOnFriday?: ValidationFunction<string>;
    deliveryOnSaturday?: ValidationFunction<string>;
    deliveryOffSunday?: ValidationFunction<string>;
    deliveryOffMonday?: ValidationFunction<string>;
    deliveryOffTuesday?: ValidationFunction<string>;
    deliveryOffWednesday?: ValidationFunction<string>;
    deliveryOffThursday?: ValidationFunction<string>;
    deliveryOffFriday?: ValidationFunction<string>;
    deliveryOffSaturday?: ValidationFunction<string>;
    showNotesCart?: ValidationFunction<boolean>;
    notesCart?: ValidationFunction<string>;
    soundOnNewOrder?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConfigCreateFormOverridesProps = {
    ConfigCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    validationMode?: PrimitiveOverrideProps<SelectFieldProps>;
    googleAnalyticsID?: PrimitiveOverrideProps<TextFieldProps>;
    googleSiteVerification?: PrimitiveOverrideProps<TextFieldProps>;
    inviteSubject?: PrimitiveOverrideProps<TextFieldProps>;
    inviteMessage?: PrimitiveOverrideProps<TextFieldProps>;
    inviteSMS?: PrimitiveOverrideProps<TextFieldProps>;
    facebook?: PrimitiveOverrideProps<TextFieldProps>;
    twitter?: PrimitiveOverrideProps<TextFieldProps>;
    instagram?: PrimitiveOverrideProps<TextFieldProps>;
    infoFooter?: PrimitiveOverrideProps<TextFieldProps>;
    minValueOrder?: PrimitiveOverrideProps<TextFieldProps>;
    phoneOrders?: PrimitiveOverrideProps<TextFieldProps>;
    allowPayOnDelivery?: PrimitiveOverrideProps<SwitchFieldProps>;
    allowLocalPickup?: PrimitiveOverrideProps<SwitchFieldProps>;
    deliveryOnSunday?: PrimitiveOverrideProps<TextFieldProps>;
    deliveryOnMonday?: PrimitiveOverrideProps<TextFieldProps>;
    deliveryOnTuesday?: PrimitiveOverrideProps<TextFieldProps>;
    deliveryOnWednesday?: PrimitiveOverrideProps<TextFieldProps>;
    deliveryOnThursday?: PrimitiveOverrideProps<TextFieldProps>;
    deliveryOnFriday?: PrimitiveOverrideProps<TextFieldProps>;
    deliveryOnSaturday?: PrimitiveOverrideProps<TextFieldProps>;
    deliveryOffSunday?: PrimitiveOverrideProps<TextFieldProps>;
    deliveryOffMonday?: PrimitiveOverrideProps<TextFieldProps>;
    deliveryOffTuesday?: PrimitiveOverrideProps<TextFieldProps>;
    deliveryOffWednesday?: PrimitiveOverrideProps<TextFieldProps>;
    deliveryOffThursday?: PrimitiveOverrideProps<TextFieldProps>;
    deliveryOffFriday?: PrimitiveOverrideProps<TextFieldProps>;
    deliveryOffSaturday?: PrimitiveOverrideProps<TextFieldProps>;
    showNotesCart?: PrimitiveOverrideProps<SwitchFieldProps>;
    notesCart?: PrimitiveOverrideProps<TextFieldProps>;
    soundOnNewOrder?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ConfigCreateFormProps = React.PropsWithChildren<{
    overrides?: ConfigCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ConfigCreateFormInputValues) => ConfigCreateFormInputValues;
    onSuccess?: (fields: ConfigCreateFormInputValues) => void;
    onError?: (fields: ConfigCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConfigCreateFormInputValues) => ConfigCreateFormInputValues;
    onValidate?: ConfigCreateFormValidationValues;
} & React.CSSProperties>;
export default function ConfigCreateForm(props: ConfigCreateFormProps): React.ReactElement;
