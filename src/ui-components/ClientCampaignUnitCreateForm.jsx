/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createClientCampaignUnit } from "../graphql/mutations";
export default function ClientCampaignUnitCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    cnpj: "",
    notes: "",
    search: "",
    street: "",
    number: "",
    complement: "",
    zipcode: "",
    neighborhood: "",
    city: "",
    state: "",
    country: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    totalEligibles: "",
    totalContractedVaccines: "",
    qtyVisits: "",
    qtyVisitsConfirmed: "",
    qtyProfessional: "",
    servicePoints: "",
    serviceResponsible: "",
    vaccination: "",
    typeService: "",
    idx: "",
    routingRegionID: "",
    code: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [cnpj, setCnpj] = React.useState(initialValues.cnpj);
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [search, setSearch] = React.useState(initialValues.search);
  const [street, setStreet] = React.useState(initialValues.street);
  const [number, setNumber] = React.useState(initialValues.number);
  const [complement, setComplement] = React.useState(initialValues.complement);
  const [zipcode, setZipcode] = React.useState(initialValues.zipcode);
  const [neighborhood, setNeighborhood] = React.useState(
    initialValues.neighborhood
  );
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [country, setCountry] = React.useState(initialValues.country);
  const [contactName, setContactName] = React.useState(
    initialValues.contactName
  );
  const [contactEmail, setContactEmail] = React.useState(
    initialValues.contactEmail
  );
  const [contactPhone, setContactPhone] = React.useState(
    initialValues.contactPhone
  );
  const [totalEligibles, setTotalEligibles] = React.useState(
    initialValues.totalEligibles
  );
  const [totalContractedVaccines, setTotalContractedVaccines] = React.useState(
    initialValues.totalContractedVaccines
  );
  const [qtyVisits, setQtyVisits] = React.useState(initialValues.qtyVisits);
  const [qtyVisitsConfirmed, setQtyVisitsConfirmed] = React.useState(
    initialValues.qtyVisitsConfirmed
  );
  const [qtyProfessional, setQtyProfessional] = React.useState(
    initialValues.qtyProfessional
  );
  const [servicePoints, setServicePoints] = React.useState(
    initialValues.servicePoints
  );
  const [serviceResponsible, setServiceResponsible] = React.useState(
    initialValues.serviceResponsible
  );
  const [vaccination, setVaccination] = React.useState(
    initialValues.vaccination
  );
  const [typeService, setTypeService] = React.useState(
    initialValues.typeService
  );
  const [idx, setIdx] = React.useState(initialValues.idx);
  const [routingRegionID, setRoutingRegionID] = React.useState(
    initialValues.routingRegionID
  );
  const [code, setCode] = React.useState(initialValues.code);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setCnpj(initialValues.cnpj);
    setNotes(initialValues.notes);
    setSearch(initialValues.search);
    setStreet(initialValues.street);
    setNumber(initialValues.number);
    setComplement(initialValues.complement);
    setZipcode(initialValues.zipcode);
    setNeighborhood(initialValues.neighborhood);
    setCity(initialValues.city);
    setState(initialValues.state);
    setCountry(initialValues.country);
    setContactName(initialValues.contactName);
    setContactEmail(initialValues.contactEmail);
    setContactPhone(initialValues.contactPhone);
    setTotalEligibles(initialValues.totalEligibles);
    setTotalContractedVaccines(initialValues.totalContractedVaccines);
    setQtyVisits(initialValues.qtyVisits);
    setQtyVisitsConfirmed(initialValues.qtyVisitsConfirmed);
    setQtyProfessional(initialValues.qtyProfessional);
    setServicePoints(initialValues.servicePoints);
    setServiceResponsible(initialValues.serviceResponsible);
    setVaccination(initialValues.vaccination);
    setTypeService(initialValues.typeService);
    setIdx(initialValues.idx);
    setRoutingRegionID(initialValues.routingRegionID);
    setCode(initialValues.code);
    setErrors({});
  };
  const validations = {
    name: [],
    cnpj: [],
    notes: [],
    search: [],
    street: [],
    number: [],
    complement: [],
    zipcode: [],
    neighborhood: [],
    city: [],
    state: [],
    country: [],
    contactName: [],
    contactEmail: [],
    contactPhone: [],
    totalEligibles: [],
    totalContractedVaccines: [],
    qtyVisits: [],
    qtyVisitsConfirmed: [],
    qtyProfessional: [],
    servicePoints: [],
    serviceResponsible: [],
    vaccination: [],
    typeService: [],
    idx: [{ type: "Required" }],
    routingRegionID: [],
    code: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          cnpj,
          notes,
          search,
          street,
          number,
          complement,
          zipcode,
          neighborhood,
          city,
          state,
          country,
          contactName,
          contactEmail,
          contactPhone,
          totalEligibles,
          totalContractedVaccines,
          qtyVisits,
          qtyVisitsConfirmed,
          qtyProfessional,
          servicePoints,
          serviceResponsible,
          vaccination,
          typeService,
          idx,
          routingRegionID,
          code,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createClientCampaignUnit.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ClientCampaignUnitCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              cnpj,
              notes,
              search,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              contactName,
              contactEmail,
              contactPhone,
              totalEligibles,
              totalContractedVaccines,
              qtyVisits,
              qtyVisitsConfirmed,
              qtyProfessional,
              servicePoints,
              serviceResponsible,
              vaccination,
              typeService,
              idx,
              routingRegionID,
              code,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Cnpj"
        isRequired={false}
        isReadOnly={false}
        value={cnpj}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj: value,
              notes,
              search,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              contactName,
              contactEmail,
              contactPhone,
              totalEligibles,
              totalContractedVaccines,
              qtyVisits,
              qtyVisitsConfirmed,
              qtyProfessional,
              servicePoints,
              serviceResponsible,
              vaccination,
              typeService,
              idx,
              routingRegionID,
              code,
            };
            const result = onChange(modelFields);
            value = result?.cnpj ?? value;
          }
          if (errors.cnpj?.hasError) {
            runValidationTasks("cnpj", value);
          }
          setCnpj(value);
        }}
        onBlur={() => runValidationTasks("cnpj", cnpj)}
        errorMessage={errors.cnpj?.errorMessage}
        hasError={errors.cnpj?.hasError}
        {...getOverrideProps(overrides, "cnpj")}
      ></TextField>
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              notes: value,
              search,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              contactName,
              contactEmail,
              contactPhone,
              totalEligibles,
              totalContractedVaccines,
              qtyVisits,
              qtyVisitsConfirmed,
              qtyProfessional,
              servicePoints,
              serviceResponsible,
              vaccination,
              typeService,
              idx,
              routingRegionID,
              code,
            };
            const result = onChange(modelFields);
            value = result?.notes ?? value;
          }
          if (errors.notes?.hasError) {
            runValidationTasks("notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("notes", notes)}
        errorMessage={errors.notes?.errorMessage}
        hasError={errors.notes?.hasError}
        {...getOverrideProps(overrides, "notes")}
      ></TextField>
      <TextField
        label="Search"
        isRequired={false}
        isReadOnly={false}
        value={search}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              notes,
              search: value,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              contactName,
              contactEmail,
              contactPhone,
              totalEligibles,
              totalContractedVaccines,
              qtyVisits,
              qtyVisitsConfirmed,
              qtyProfessional,
              servicePoints,
              serviceResponsible,
              vaccination,
              typeService,
              idx,
              routingRegionID,
              code,
            };
            const result = onChange(modelFields);
            value = result?.search ?? value;
          }
          if (errors.search?.hasError) {
            runValidationTasks("search", value);
          }
          setSearch(value);
        }}
        onBlur={() => runValidationTasks("search", search)}
        errorMessage={errors.search?.errorMessage}
        hasError={errors.search?.hasError}
        {...getOverrideProps(overrides, "search")}
      ></TextField>
      <TextField
        label="Street"
        isRequired={false}
        isReadOnly={false}
        value={street}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              notes,
              search,
              street: value,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              contactName,
              contactEmail,
              contactPhone,
              totalEligibles,
              totalContractedVaccines,
              qtyVisits,
              qtyVisitsConfirmed,
              qtyProfessional,
              servicePoints,
              serviceResponsible,
              vaccination,
              typeService,
              idx,
              routingRegionID,
              code,
            };
            const result = onChange(modelFields);
            value = result?.street ?? value;
          }
          if (errors.street?.hasError) {
            runValidationTasks("street", value);
          }
          setStreet(value);
        }}
        onBlur={() => runValidationTasks("street", street)}
        errorMessage={errors.street?.errorMessage}
        hasError={errors.street?.hasError}
        {...getOverrideProps(overrides, "street")}
      ></TextField>
      <TextField
        label="Number"
        isRequired={false}
        isReadOnly={false}
        value={number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              notes,
              search,
              street,
              number: value,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              contactName,
              contactEmail,
              contactPhone,
              totalEligibles,
              totalContractedVaccines,
              qtyVisits,
              qtyVisitsConfirmed,
              qtyProfessional,
              servicePoints,
              serviceResponsible,
              vaccination,
              typeService,
              idx,
              routingRegionID,
              code,
            };
            const result = onChange(modelFields);
            value = result?.number ?? value;
          }
          if (errors.number?.hasError) {
            runValidationTasks("number", value);
          }
          setNumber(value);
        }}
        onBlur={() => runValidationTasks("number", number)}
        errorMessage={errors.number?.errorMessage}
        hasError={errors.number?.hasError}
        {...getOverrideProps(overrides, "number")}
      ></TextField>
      <TextField
        label="Complement"
        isRequired={false}
        isReadOnly={false}
        value={complement}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              notes,
              search,
              street,
              number,
              complement: value,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              contactName,
              contactEmail,
              contactPhone,
              totalEligibles,
              totalContractedVaccines,
              qtyVisits,
              qtyVisitsConfirmed,
              qtyProfessional,
              servicePoints,
              serviceResponsible,
              vaccination,
              typeService,
              idx,
              routingRegionID,
              code,
            };
            const result = onChange(modelFields);
            value = result?.complement ?? value;
          }
          if (errors.complement?.hasError) {
            runValidationTasks("complement", value);
          }
          setComplement(value);
        }}
        onBlur={() => runValidationTasks("complement", complement)}
        errorMessage={errors.complement?.errorMessage}
        hasError={errors.complement?.hasError}
        {...getOverrideProps(overrides, "complement")}
      ></TextField>
      <TextField
        label="Zipcode"
        isRequired={false}
        isReadOnly={false}
        value={zipcode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              notes,
              search,
              street,
              number,
              complement,
              zipcode: value,
              neighborhood,
              city,
              state,
              country,
              contactName,
              contactEmail,
              contactPhone,
              totalEligibles,
              totalContractedVaccines,
              qtyVisits,
              qtyVisitsConfirmed,
              qtyProfessional,
              servicePoints,
              serviceResponsible,
              vaccination,
              typeService,
              idx,
              routingRegionID,
              code,
            };
            const result = onChange(modelFields);
            value = result?.zipcode ?? value;
          }
          if (errors.zipcode?.hasError) {
            runValidationTasks("zipcode", value);
          }
          setZipcode(value);
        }}
        onBlur={() => runValidationTasks("zipcode", zipcode)}
        errorMessage={errors.zipcode?.errorMessage}
        hasError={errors.zipcode?.hasError}
        {...getOverrideProps(overrides, "zipcode")}
      ></TextField>
      <TextField
        label="Neighborhood"
        isRequired={false}
        isReadOnly={false}
        value={neighborhood}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              notes,
              search,
              street,
              number,
              complement,
              zipcode,
              neighborhood: value,
              city,
              state,
              country,
              contactName,
              contactEmail,
              contactPhone,
              totalEligibles,
              totalContractedVaccines,
              qtyVisits,
              qtyVisitsConfirmed,
              qtyProfessional,
              servicePoints,
              serviceResponsible,
              vaccination,
              typeService,
              idx,
              routingRegionID,
              code,
            };
            const result = onChange(modelFields);
            value = result?.neighborhood ?? value;
          }
          if (errors.neighborhood?.hasError) {
            runValidationTasks("neighborhood", value);
          }
          setNeighborhood(value);
        }}
        onBlur={() => runValidationTasks("neighborhood", neighborhood)}
        errorMessage={errors.neighborhood?.errorMessage}
        hasError={errors.neighborhood?.hasError}
        {...getOverrideProps(overrides, "neighborhood")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              notes,
              search,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city: value,
              state,
              country,
              contactName,
              contactEmail,
              contactPhone,
              totalEligibles,
              totalContractedVaccines,
              qtyVisits,
              qtyVisitsConfirmed,
              qtyProfessional,
              servicePoints,
              serviceResponsible,
              vaccination,
              typeService,
              idx,
              routingRegionID,
              code,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="State"
        isRequired={false}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              notes,
              search,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state: value,
              country,
              contactName,
              contactEmail,
              contactPhone,
              totalEligibles,
              totalContractedVaccines,
              qtyVisits,
              qtyVisitsConfirmed,
              qtyProfessional,
              servicePoints,
              serviceResponsible,
              vaccination,
              typeService,
              idx,
              routingRegionID,
              code,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              notes,
              search,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country: value,
              contactName,
              contactEmail,
              contactPhone,
              totalEligibles,
              totalContractedVaccines,
              qtyVisits,
              qtyVisitsConfirmed,
              qtyProfessional,
              servicePoints,
              serviceResponsible,
              vaccination,
              typeService,
              idx,
              routingRegionID,
              code,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
      ></TextField>
      <TextField
        label="Contact name"
        isRequired={false}
        isReadOnly={false}
        value={contactName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              notes,
              search,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              contactName: value,
              contactEmail,
              contactPhone,
              totalEligibles,
              totalContractedVaccines,
              qtyVisits,
              qtyVisitsConfirmed,
              qtyProfessional,
              servicePoints,
              serviceResponsible,
              vaccination,
              typeService,
              idx,
              routingRegionID,
              code,
            };
            const result = onChange(modelFields);
            value = result?.contactName ?? value;
          }
          if (errors.contactName?.hasError) {
            runValidationTasks("contactName", value);
          }
          setContactName(value);
        }}
        onBlur={() => runValidationTasks("contactName", contactName)}
        errorMessage={errors.contactName?.errorMessage}
        hasError={errors.contactName?.hasError}
        {...getOverrideProps(overrides, "contactName")}
      ></TextField>
      <TextField
        label="Contact email"
        isRequired={false}
        isReadOnly={false}
        value={contactEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              notes,
              search,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              contactName,
              contactEmail: value,
              contactPhone,
              totalEligibles,
              totalContractedVaccines,
              qtyVisits,
              qtyVisitsConfirmed,
              qtyProfessional,
              servicePoints,
              serviceResponsible,
              vaccination,
              typeService,
              idx,
              routingRegionID,
              code,
            };
            const result = onChange(modelFields);
            value = result?.contactEmail ?? value;
          }
          if (errors.contactEmail?.hasError) {
            runValidationTasks("contactEmail", value);
          }
          setContactEmail(value);
        }}
        onBlur={() => runValidationTasks("contactEmail", contactEmail)}
        errorMessage={errors.contactEmail?.errorMessage}
        hasError={errors.contactEmail?.hasError}
        {...getOverrideProps(overrides, "contactEmail")}
      ></TextField>
      <TextField
        label="Contact phone"
        isRequired={false}
        isReadOnly={false}
        value={contactPhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              notes,
              search,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              contactName,
              contactEmail,
              contactPhone: value,
              totalEligibles,
              totalContractedVaccines,
              qtyVisits,
              qtyVisitsConfirmed,
              qtyProfessional,
              servicePoints,
              serviceResponsible,
              vaccination,
              typeService,
              idx,
              routingRegionID,
              code,
            };
            const result = onChange(modelFields);
            value = result?.contactPhone ?? value;
          }
          if (errors.contactPhone?.hasError) {
            runValidationTasks("contactPhone", value);
          }
          setContactPhone(value);
        }}
        onBlur={() => runValidationTasks("contactPhone", contactPhone)}
        errorMessage={errors.contactPhone?.errorMessage}
        hasError={errors.contactPhone?.hasError}
        {...getOverrideProps(overrides, "contactPhone")}
      ></TextField>
      <TextField
        label="Total eligibles"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={totalEligibles}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              notes,
              search,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              contactName,
              contactEmail,
              contactPhone,
              totalEligibles: value,
              totalContractedVaccines,
              qtyVisits,
              qtyVisitsConfirmed,
              qtyProfessional,
              servicePoints,
              serviceResponsible,
              vaccination,
              typeService,
              idx,
              routingRegionID,
              code,
            };
            const result = onChange(modelFields);
            value = result?.totalEligibles ?? value;
          }
          if (errors.totalEligibles?.hasError) {
            runValidationTasks("totalEligibles", value);
          }
          setTotalEligibles(value);
        }}
        onBlur={() => runValidationTasks("totalEligibles", totalEligibles)}
        errorMessage={errors.totalEligibles?.errorMessage}
        hasError={errors.totalEligibles?.hasError}
        {...getOverrideProps(overrides, "totalEligibles")}
      ></TextField>
      <TextField
        label="Total contracted vaccines"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={totalContractedVaccines}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              notes,
              search,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              contactName,
              contactEmail,
              contactPhone,
              totalEligibles,
              totalContractedVaccines: value,
              qtyVisits,
              qtyVisitsConfirmed,
              qtyProfessional,
              servicePoints,
              serviceResponsible,
              vaccination,
              typeService,
              idx,
              routingRegionID,
              code,
            };
            const result = onChange(modelFields);
            value = result?.totalContractedVaccines ?? value;
          }
          if (errors.totalContractedVaccines?.hasError) {
            runValidationTasks("totalContractedVaccines", value);
          }
          setTotalContractedVaccines(value);
        }}
        onBlur={() =>
          runValidationTasks("totalContractedVaccines", totalContractedVaccines)
        }
        errorMessage={errors.totalContractedVaccines?.errorMessage}
        hasError={errors.totalContractedVaccines?.hasError}
        {...getOverrideProps(overrides, "totalContractedVaccines")}
      ></TextField>
      <TextField
        label="Qty visits"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={qtyVisits}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              notes,
              search,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              contactName,
              contactEmail,
              contactPhone,
              totalEligibles,
              totalContractedVaccines,
              qtyVisits: value,
              qtyVisitsConfirmed,
              qtyProfessional,
              servicePoints,
              serviceResponsible,
              vaccination,
              typeService,
              idx,
              routingRegionID,
              code,
            };
            const result = onChange(modelFields);
            value = result?.qtyVisits ?? value;
          }
          if (errors.qtyVisits?.hasError) {
            runValidationTasks("qtyVisits", value);
          }
          setQtyVisits(value);
        }}
        onBlur={() => runValidationTasks("qtyVisits", qtyVisits)}
        errorMessage={errors.qtyVisits?.errorMessage}
        hasError={errors.qtyVisits?.hasError}
        {...getOverrideProps(overrides, "qtyVisits")}
      ></TextField>
      <TextField
        label="Qty visits confirmed"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={qtyVisitsConfirmed}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              notes,
              search,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              contactName,
              contactEmail,
              contactPhone,
              totalEligibles,
              totalContractedVaccines,
              qtyVisits,
              qtyVisitsConfirmed: value,
              qtyProfessional,
              servicePoints,
              serviceResponsible,
              vaccination,
              typeService,
              idx,
              routingRegionID,
              code,
            };
            const result = onChange(modelFields);
            value = result?.qtyVisitsConfirmed ?? value;
          }
          if (errors.qtyVisitsConfirmed?.hasError) {
            runValidationTasks("qtyVisitsConfirmed", value);
          }
          setQtyVisitsConfirmed(value);
        }}
        onBlur={() =>
          runValidationTasks("qtyVisitsConfirmed", qtyVisitsConfirmed)
        }
        errorMessage={errors.qtyVisitsConfirmed?.errorMessage}
        hasError={errors.qtyVisitsConfirmed?.hasError}
        {...getOverrideProps(overrides, "qtyVisitsConfirmed")}
      ></TextField>
      <TextField
        label="Qty professional"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={qtyProfessional}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              notes,
              search,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              contactName,
              contactEmail,
              contactPhone,
              totalEligibles,
              totalContractedVaccines,
              qtyVisits,
              qtyVisitsConfirmed,
              qtyProfessional: value,
              servicePoints,
              serviceResponsible,
              vaccination,
              typeService,
              idx,
              routingRegionID,
              code,
            };
            const result = onChange(modelFields);
            value = result?.qtyProfessional ?? value;
          }
          if (errors.qtyProfessional?.hasError) {
            runValidationTasks("qtyProfessional", value);
          }
          setQtyProfessional(value);
        }}
        onBlur={() => runValidationTasks("qtyProfessional", qtyProfessional)}
        errorMessage={errors.qtyProfessional?.errorMessage}
        hasError={errors.qtyProfessional?.hasError}
        {...getOverrideProps(overrides, "qtyProfessional")}
      ></TextField>
      <TextField
        label="Service points"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={servicePoints}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              notes,
              search,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              contactName,
              contactEmail,
              contactPhone,
              totalEligibles,
              totalContractedVaccines,
              qtyVisits,
              qtyVisitsConfirmed,
              qtyProfessional,
              servicePoints: value,
              serviceResponsible,
              vaccination,
              typeService,
              idx,
              routingRegionID,
              code,
            };
            const result = onChange(modelFields);
            value = result?.servicePoints ?? value;
          }
          if (errors.servicePoints?.hasError) {
            runValidationTasks("servicePoints", value);
          }
          setServicePoints(value);
        }}
        onBlur={() => runValidationTasks("servicePoints", servicePoints)}
        errorMessage={errors.servicePoints?.errorMessage}
        hasError={errors.servicePoints?.hasError}
        {...getOverrideProps(overrides, "servicePoints")}
      ></TextField>
      <SelectField
        label="Service responsible"
        placeholder="Please select an option"
        isDisabled={false}
        value={serviceResponsible}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              notes,
              search,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              contactName,
              contactEmail,
              contactPhone,
              totalEligibles,
              totalContractedVaccines,
              qtyVisits,
              qtyVisitsConfirmed,
              qtyProfessional,
              servicePoints,
              serviceResponsible: value,
              vaccination,
              typeService,
              idx,
              routingRegionID,
              code,
            };
            const result = onChange(modelFields);
            value = result?.serviceResponsible ?? value;
          }
          if (errors.serviceResponsible?.hasError) {
            runValidationTasks("serviceResponsible", value);
          }
          setServiceResponsible(value);
        }}
        onBlur={() =>
          runValidationTasks("serviceResponsible", serviceResponsible)
        }
        errorMessage={errors.serviceResponsible?.errorMessage}
        hasError={errors.serviceResponsible?.hasError}
        {...getOverrideProps(overrides, "serviceResponsible")}
      >
        <option
          children="Procat"
          value="PROCAT"
          {...getOverrideProps(overrides, "serviceResponsibleoption0")}
        ></option>
        <option
          children="Partner"
          value="PARTNER"
          {...getOverrideProps(overrides, "serviceResponsibleoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Vaccination"
        isRequired={false}
        isReadOnly={false}
        value={vaccination}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              notes,
              search,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              contactName,
              contactEmail,
              contactPhone,
              totalEligibles,
              totalContractedVaccines,
              qtyVisits,
              qtyVisitsConfirmed,
              qtyProfessional,
              servicePoints,
              serviceResponsible,
              vaccination: value,
              typeService,
              idx,
              routingRegionID,
              code,
            };
            const result = onChange(modelFields);
            value = result?.vaccination ?? value;
          }
          if (errors.vaccination?.hasError) {
            runValidationTasks("vaccination", value);
          }
          setVaccination(value);
        }}
        onBlur={() => runValidationTasks("vaccination", vaccination)}
        errorMessage={errors.vaccination?.errorMessage}
        hasError={errors.vaccination?.hasError}
        {...getOverrideProps(overrides, "vaccination")}
      ></TextField>
      <SelectField
        label="Type service"
        placeholder="Please select an option"
        isDisabled={false}
        value={typeService}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              notes,
              search,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              contactName,
              contactEmail,
              contactPhone,
              totalEligibles,
              totalContractedVaccines,
              qtyVisits,
              qtyVisitsConfirmed,
              qtyProfessional,
              servicePoints,
              serviceResponsible,
              vaccination,
              typeService: value,
              idx,
              routingRegionID,
              code,
            };
            const result = onChange(modelFields);
            value = result?.typeService ?? value;
          }
          if (errors.typeService?.hasError) {
            runValidationTasks("typeService", value);
          }
          setTypeService(value);
        }}
        onBlur={() => runValidationTasks("typeService", typeService)}
        errorMessage={errors.typeService?.errorMessage}
        hasError={errors.typeService?.hasError}
        {...getOverrideProps(overrides, "typeService")}
      >
        <option
          children="In company"
          value="IN_COMPANY"
          {...getOverrideProps(overrides, "typeServiceoption0")}
        ></option>
        <option
          children="Desk"
          value="DESK"
          {...getOverrideProps(overrides, "typeServiceoption1")}
        ></option>
        <option
          children="Delivery"
          value="DELIVERY"
          {...getOverrideProps(overrides, "typeServiceoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Idx"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={idx}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              notes,
              search,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              contactName,
              contactEmail,
              contactPhone,
              totalEligibles,
              totalContractedVaccines,
              qtyVisits,
              qtyVisitsConfirmed,
              qtyProfessional,
              servicePoints,
              serviceResponsible,
              vaccination,
              typeService,
              idx: value,
              routingRegionID,
              code,
            };
            const result = onChange(modelFields);
            value = result?.idx ?? value;
          }
          if (errors.idx?.hasError) {
            runValidationTasks("idx", value);
          }
          setIdx(value);
        }}
        onBlur={() => runValidationTasks("idx", idx)}
        errorMessage={errors.idx?.errorMessage}
        hasError={errors.idx?.hasError}
        {...getOverrideProps(overrides, "idx")}
      ></TextField>
      <TextField
        label="Routing region id"
        isRequired={false}
        isReadOnly={false}
        value={routingRegionID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              notes,
              search,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              contactName,
              contactEmail,
              contactPhone,
              totalEligibles,
              totalContractedVaccines,
              qtyVisits,
              qtyVisitsConfirmed,
              qtyProfessional,
              servicePoints,
              serviceResponsible,
              vaccination,
              typeService,
              idx,
              routingRegionID: value,
              code,
            };
            const result = onChange(modelFields);
            value = result?.routingRegionID ?? value;
          }
          if (errors.routingRegionID?.hasError) {
            runValidationTasks("routingRegionID", value);
          }
          setRoutingRegionID(value);
        }}
        onBlur={() => runValidationTasks("routingRegionID", routingRegionID)}
        errorMessage={errors.routingRegionID?.errorMessage}
        hasError={errors.routingRegionID?.hasError}
        {...getOverrideProps(overrides, "routingRegionID")}
      ></TextField>
      <TextField
        label="Code"
        isRequired={false}
        isReadOnly={false}
        value={code}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              notes,
              search,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              contactName,
              contactEmail,
              contactPhone,
              totalEligibles,
              totalContractedVaccines,
              qtyVisits,
              qtyVisitsConfirmed,
              qtyProfessional,
              servicePoints,
              serviceResponsible,
              vaccination,
              typeService,
              idx,
              routingRegionID,
              code: value,
            };
            const result = onChange(modelFields);
            value = result?.code ?? value;
          }
          if (errors.code?.hasError) {
            runValidationTasks("code", value);
          }
          setCode(value);
        }}
        onBlur={() => runValidationTasks("code", code)}
        errorMessage={errors.code?.errorMessage}
        hasError={errors.code?.hasError}
        {...getOverrideProps(overrides, "code")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
