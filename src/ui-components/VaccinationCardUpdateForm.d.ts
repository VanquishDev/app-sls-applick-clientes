/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { VaccinationCard } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type VaccinationCardUpdateFormInputValues = {
    userID?: string;
    person?: string;
    doc?: string;
    birth?: string;
    relationship?: string;
    notes?: string;
    avatar?: string;
    isOwner?: boolean;
};
export declare type VaccinationCardUpdateFormValidationValues = {
    userID?: ValidationFunction<string>;
    person?: ValidationFunction<string>;
    doc?: ValidationFunction<string>;
    birth?: ValidationFunction<string>;
    relationship?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    avatar?: ValidationFunction<string>;
    isOwner?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VaccinationCardUpdateFormOverridesProps = {
    VaccinationCardUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    person?: PrimitiveOverrideProps<TextFieldProps>;
    doc?: PrimitiveOverrideProps<TextFieldProps>;
    birth?: PrimitiveOverrideProps<TextFieldProps>;
    relationship?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    avatar?: PrimitiveOverrideProps<TextFieldProps>;
    isOwner?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type VaccinationCardUpdateFormProps = React.PropsWithChildren<{
    overrides?: VaccinationCardUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    vaccinationCard?: VaccinationCard;
    onSubmit?: (fields: VaccinationCardUpdateFormInputValues) => VaccinationCardUpdateFormInputValues;
    onSuccess?: (fields: VaccinationCardUpdateFormInputValues) => void;
    onError?: (fields: VaccinationCardUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VaccinationCardUpdateFormInputValues) => VaccinationCardUpdateFormInputValues;
    onValidate?: VaccinationCardUpdateFormValidationValues;
} & React.CSSProperties>;
export default function VaccinationCardUpdateForm(props: VaccinationCardUpdateFormProps): React.ReactElement;
