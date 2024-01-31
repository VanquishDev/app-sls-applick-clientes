/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Laboratory } from "../API.ts";
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
export declare type LaboratoryUpdateFormInputValues = {
    name?: string;
    description?: string;
};
export declare type LaboratoryUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LaboratoryUpdateFormOverridesProps = {
    LaboratoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LaboratoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: LaboratoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    laboratory?: Laboratory;
    onSubmit?: (fields: LaboratoryUpdateFormInputValues) => LaboratoryUpdateFormInputValues;
    onSuccess?: (fields: LaboratoryUpdateFormInputValues) => void;
    onError?: (fields: LaboratoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LaboratoryUpdateFormInputValues) => LaboratoryUpdateFormInputValues;
    onValidate?: LaboratoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LaboratoryUpdateForm(props: LaboratoryUpdateFormProps): React.ReactElement;
