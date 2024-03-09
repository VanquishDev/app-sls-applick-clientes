/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ClientCampaign } from "../API.ts";
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
export declare type ClientCampaignUpdateFormInputValues = {
    name?: string;
    description?: string;
    clientNotes?: string;
    internalNotes?: string;
    totalUnits?: number;
    unitsServed?: number;
    unitsExpected?: number;
    firstOSDate?: string;
    lastOSDate?: string;
    scheduleRouted?: number;
    scheduleConfirmed?: number;
    scheduleFinished?: number;
    totalEligibles?: number;
    totalEligiblesDependent?: number;
    totalEligiblesThird?: number;
    totalVaccinations?: number;
    totalVaccinationsDependent?: number;
    totalVaccinationsThird?: number;
    search?: string;
    responsible?: string;
    number?: number;
    contactName?: string;
    contactEmail?: string;
    contactPhone?: string;
    createdAt?: string;
    allowOffList?: boolean;
    leafDiscount?: boolean;
    idx?: number;
    campaignCode?: string;
    status?: string;
};
export declare type ClientCampaignUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    clientNotes?: ValidationFunction<string>;
    internalNotes?: ValidationFunction<string>;
    totalUnits?: ValidationFunction<number>;
    unitsServed?: ValidationFunction<number>;
    unitsExpected?: ValidationFunction<number>;
    firstOSDate?: ValidationFunction<string>;
    lastOSDate?: ValidationFunction<string>;
    scheduleRouted?: ValidationFunction<number>;
    scheduleConfirmed?: ValidationFunction<number>;
    scheduleFinished?: ValidationFunction<number>;
    totalEligibles?: ValidationFunction<number>;
    totalEligiblesDependent?: ValidationFunction<number>;
    totalEligiblesThird?: ValidationFunction<number>;
    totalVaccinations?: ValidationFunction<number>;
    totalVaccinationsDependent?: ValidationFunction<number>;
    totalVaccinationsThird?: ValidationFunction<number>;
    search?: ValidationFunction<string>;
    responsible?: ValidationFunction<string>;
    number?: ValidationFunction<number>;
    contactName?: ValidationFunction<string>;
    contactEmail?: ValidationFunction<string>;
    contactPhone?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    allowOffList?: ValidationFunction<boolean>;
    leafDiscount?: ValidationFunction<boolean>;
    idx?: ValidationFunction<number>;
    campaignCode?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClientCampaignUpdateFormOverridesProps = {
    ClientCampaignUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    clientNotes?: PrimitiveOverrideProps<TextFieldProps>;
    internalNotes?: PrimitiveOverrideProps<TextFieldProps>;
    totalUnits?: PrimitiveOverrideProps<TextFieldProps>;
    unitsServed?: PrimitiveOverrideProps<TextFieldProps>;
    unitsExpected?: PrimitiveOverrideProps<TextFieldProps>;
    firstOSDate?: PrimitiveOverrideProps<TextFieldProps>;
    lastOSDate?: PrimitiveOverrideProps<TextFieldProps>;
    scheduleRouted?: PrimitiveOverrideProps<TextFieldProps>;
    scheduleConfirmed?: PrimitiveOverrideProps<TextFieldProps>;
    scheduleFinished?: PrimitiveOverrideProps<TextFieldProps>;
    totalEligibles?: PrimitiveOverrideProps<TextFieldProps>;
    totalEligiblesDependent?: PrimitiveOverrideProps<TextFieldProps>;
    totalEligiblesThird?: PrimitiveOverrideProps<TextFieldProps>;
    totalVaccinations?: PrimitiveOverrideProps<TextFieldProps>;
    totalVaccinationsDependent?: PrimitiveOverrideProps<TextFieldProps>;
    totalVaccinationsThird?: PrimitiveOverrideProps<TextFieldProps>;
    search?: PrimitiveOverrideProps<TextFieldProps>;
    responsible?: PrimitiveOverrideProps<TextFieldProps>;
    number?: PrimitiveOverrideProps<TextFieldProps>;
    contactName?: PrimitiveOverrideProps<TextFieldProps>;
    contactEmail?: PrimitiveOverrideProps<TextFieldProps>;
    contactPhone?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    allowOffList?: PrimitiveOverrideProps<SwitchFieldProps>;
    leafDiscount?: PrimitiveOverrideProps<SwitchFieldProps>;
    idx?: PrimitiveOverrideProps<TextFieldProps>;
    campaignCode?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ClientCampaignUpdateFormProps = React.PropsWithChildren<{
    overrides?: ClientCampaignUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    clientCampaign?: ClientCampaign;
    onSubmit?: (fields: ClientCampaignUpdateFormInputValues) => ClientCampaignUpdateFormInputValues;
    onSuccess?: (fields: ClientCampaignUpdateFormInputValues) => void;
    onError?: (fields: ClientCampaignUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClientCampaignUpdateFormInputValues) => ClientCampaignUpdateFormInputValues;
    onValidate?: ClientCampaignUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ClientCampaignUpdateForm(props: ClientCampaignUpdateFormProps): React.ReactElement;
