/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ClientCampaignUnitCreateFormInputValues = {
    name?: string;
    cnpj?: string;
    notes?: string;
    search?: string;
    street?: string;
    number?: string;
    complement?: string;
    zipcode?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    country?: string;
    contactName?: string;
    contactEmail?: string;
    contactPhone?: string;
    totalEligibles?: number;
    totalContractedVaccines?: number;
    qtyVisits?: number;
    qtyVisitsConfirmed?: number;
    qtyProfessional?: number;
    servicePoints?: number;
    serviceResponsible?: string;
    vaccination?: string;
    typeService?: string;
    idx?: number;
    routingRegionID?: string;
    code?: string;
};
export declare type ClientCampaignUnitCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    cnpj?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    search?: ValidationFunction<string>;
    street?: ValidationFunction<string>;
    number?: ValidationFunction<string>;
    complement?: ValidationFunction<string>;
    zipcode?: ValidationFunction<string>;
    neighborhood?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    contactName?: ValidationFunction<string>;
    contactEmail?: ValidationFunction<string>;
    contactPhone?: ValidationFunction<string>;
    totalEligibles?: ValidationFunction<number>;
    totalContractedVaccines?: ValidationFunction<number>;
    qtyVisits?: ValidationFunction<number>;
    qtyVisitsConfirmed?: ValidationFunction<number>;
    qtyProfessional?: ValidationFunction<number>;
    servicePoints?: ValidationFunction<number>;
    serviceResponsible?: ValidationFunction<string>;
    vaccination?: ValidationFunction<string>;
    typeService?: ValidationFunction<string>;
    idx?: ValidationFunction<number>;
    routingRegionID?: ValidationFunction<string>;
    code?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClientCampaignUnitCreateFormOverridesProps = {
    ClientCampaignUnitCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    cnpj?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    search?: PrimitiveOverrideProps<TextFieldProps>;
    street?: PrimitiveOverrideProps<TextFieldProps>;
    number?: PrimitiveOverrideProps<TextFieldProps>;
    complement?: PrimitiveOverrideProps<TextFieldProps>;
    zipcode?: PrimitiveOverrideProps<TextFieldProps>;
    neighborhood?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    contactName?: PrimitiveOverrideProps<TextFieldProps>;
    contactEmail?: PrimitiveOverrideProps<TextFieldProps>;
    contactPhone?: PrimitiveOverrideProps<TextFieldProps>;
    totalEligibles?: PrimitiveOverrideProps<TextFieldProps>;
    totalContractedVaccines?: PrimitiveOverrideProps<TextFieldProps>;
    qtyVisits?: PrimitiveOverrideProps<TextFieldProps>;
    qtyVisitsConfirmed?: PrimitiveOverrideProps<TextFieldProps>;
    qtyProfessional?: PrimitiveOverrideProps<TextFieldProps>;
    servicePoints?: PrimitiveOverrideProps<TextFieldProps>;
    serviceResponsible?: PrimitiveOverrideProps<SelectFieldProps>;
    vaccination?: PrimitiveOverrideProps<TextFieldProps>;
    typeService?: PrimitiveOverrideProps<SelectFieldProps>;
    idx?: PrimitiveOverrideProps<TextFieldProps>;
    routingRegionID?: PrimitiveOverrideProps<TextFieldProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClientCampaignUnitCreateFormProps = React.PropsWithChildren<{
    overrides?: ClientCampaignUnitCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ClientCampaignUnitCreateFormInputValues) => ClientCampaignUnitCreateFormInputValues;
    onSuccess?: (fields: ClientCampaignUnitCreateFormInputValues) => void;
    onError?: (fields: ClientCampaignUnitCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClientCampaignUnitCreateFormInputValues) => ClientCampaignUnitCreateFormInputValues;
    onValidate?: ClientCampaignUnitCreateFormValidationValues;
} & React.CSSProperties>;
export default function ClientCampaignUnitCreateForm(props: ClientCampaignUnitCreateFormProps): React.ReactElement;
