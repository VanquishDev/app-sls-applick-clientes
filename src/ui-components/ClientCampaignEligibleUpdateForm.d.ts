/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ClientCampaignEligible } from "../API.ts";
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
export declare type ClientCampaignEligibleUpdateFormInputValues = {
    clientCampaignID?: string;
    key?: string;
    name?: string;
    cpf?: string;
    rg?: string;
    birth?: string;
    notes?: string;
    search?: string;
    relationship?: string;
    isDependent?: boolean;
    cpfRelationship?: string;
    isThird?: boolean;
    thirdName?: string;
};
export declare type ClientCampaignEligibleUpdateFormValidationValues = {
    clientCampaignID?: ValidationFunction<string>;
    key?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    cpf?: ValidationFunction<string>;
    rg?: ValidationFunction<string>;
    birth?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    search?: ValidationFunction<string>;
    relationship?: ValidationFunction<string>;
    isDependent?: ValidationFunction<boolean>;
    cpfRelationship?: ValidationFunction<string>;
    isThird?: ValidationFunction<boolean>;
    thirdName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClientCampaignEligibleUpdateFormOverridesProps = {
    ClientCampaignEligibleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    clientCampaignID?: PrimitiveOverrideProps<TextFieldProps>;
    key?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    cpf?: PrimitiveOverrideProps<TextFieldProps>;
    rg?: PrimitiveOverrideProps<TextFieldProps>;
    birth?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    search?: PrimitiveOverrideProps<TextFieldProps>;
    relationship?: PrimitiveOverrideProps<TextFieldProps>;
    isDependent?: PrimitiveOverrideProps<SwitchFieldProps>;
    cpfRelationship?: PrimitiveOverrideProps<TextFieldProps>;
    isThird?: PrimitiveOverrideProps<SwitchFieldProps>;
    thirdName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClientCampaignEligibleUpdateFormProps = React.PropsWithChildren<{
    overrides?: ClientCampaignEligibleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    clientCampaignEligible?: ClientCampaignEligible;
    onSubmit?: (fields: ClientCampaignEligibleUpdateFormInputValues) => ClientCampaignEligibleUpdateFormInputValues;
    onSuccess?: (fields: ClientCampaignEligibleUpdateFormInputValues) => void;
    onError?: (fields: ClientCampaignEligibleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClientCampaignEligibleUpdateFormInputValues) => ClientCampaignEligibleUpdateFormInputValues;
    onValidate?: ClientCampaignEligibleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ClientCampaignEligibleUpdateForm(props: ClientCampaignEligibleUpdateFormProps): React.ReactElement;
