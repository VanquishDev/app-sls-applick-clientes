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
import { createClient } from "../graphql/mutations";
export default function ClientCreateForm(props) {
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
    fullName: "",
    notes: "",
    group: "",
    origin: "",
    status: "",
    street: "",
    number: "",
    complement: "",
    zipcode: "",
    neighborhood: "",
    city: "",
    state: "",
    country: "",
    billingStreet: "",
    billingNumber: "",
    billingComplement: "",
    billingZipcode: "",
    billingNeighborhood: "",
    billingCity: "",
    billingState: "",
    billingCountry: "",
    search: "",
    logo: "",
    logoSrc: "",
    logoCropper: "",
    totalUnits: "",
    unitsServed: "",
    unitsExpected: "",
    firstOSDate: "",
    lastOSDate: "",
    scheduleRouted: "",
    scheduleConfirmed: "",
    schedulePending: "",
    totalEligibles: "",
    totalVaccinations: "",
    code: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [cnpj, setCnpj] = React.useState(initialValues.cnpj);
  const [fullName, setFullName] = React.useState(initialValues.fullName);
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [group, setGroup] = React.useState(initialValues.group);
  const [origin, setOrigin] = React.useState(initialValues.origin);
  const [status, setStatus] = React.useState(initialValues.status);
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
  const [billingStreet, setBillingStreet] = React.useState(
    initialValues.billingStreet
  );
  const [billingNumber, setBillingNumber] = React.useState(
    initialValues.billingNumber
  );
  const [billingComplement, setBillingComplement] = React.useState(
    initialValues.billingComplement
  );
  const [billingZipcode, setBillingZipcode] = React.useState(
    initialValues.billingZipcode
  );
  const [billingNeighborhood, setBillingNeighborhood] = React.useState(
    initialValues.billingNeighborhood
  );
  const [billingCity, setBillingCity] = React.useState(
    initialValues.billingCity
  );
  const [billingState, setBillingState] = React.useState(
    initialValues.billingState
  );
  const [billingCountry, setBillingCountry] = React.useState(
    initialValues.billingCountry
  );
  const [search, setSearch] = React.useState(initialValues.search);
  const [logo, setLogo] = React.useState(initialValues.logo);
  const [logoSrc, setLogoSrc] = React.useState(initialValues.logoSrc);
  const [logoCropper, setLogoCropper] = React.useState(
    initialValues.logoCropper
  );
  const [totalUnits, setTotalUnits] = React.useState(initialValues.totalUnits);
  const [unitsServed, setUnitsServed] = React.useState(
    initialValues.unitsServed
  );
  const [unitsExpected, setUnitsExpected] = React.useState(
    initialValues.unitsExpected
  );
  const [firstOSDate, setFirstOSDate] = React.useState(
    initialValues.firstOSDate
  );
  const [lastOSDate, setLastOSDate] = React.useState(initialValues.lastOSDate);
  const [scheduleRouted, setScheduleRouted] = React.useState(
    initialValues.scheduleRouted
  );
  const [scheduleConfirmed, setScheduleConfirmed] = React.useState(
    initialValues.scheduleConfirmed
  );
  const [schedulePending, setSchedulePending] = React.useState(
    initialValues.schedulePending
  );
  const [totalEligibles, setTotalEligibles] = React.useState(
    initialValues.totalEligibles
  );
  const [totalVaccinations, setTotalVaccinations] = React.useState(
    initialValues.totalVaccinations
  );
  const [code, setCode] = React.useState(initialValues.code);
  const [contactName, setContactName] = React.useState(
    initialValues.contactName
  );
  const [contactEmail, setContactEmail] = React.useState(
    initialValues.contactEmail
  );
  const [contactPhone, setContactPhone] = React.useState(
    initialValues.contactPhone
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setCnpj(initialValues.cnpj);
    setFullName(initialValues.fullName);
    setNotes(initialValues.notes);
    setGroup(initialValues.group);
    setOrigin(initialValues.origin);
    setStatus(initialValues.status);
    setStreet(initialValues.street);
    setNumber(initialValues.number);
    setComplement(initialValues.complement);
    setZipcode(initialValues.zipcode);
    setNeighborhood(initialValues.neighborhood);
    setCity(initialValues.city);
    setState(initialValues.state);
    setCountry(initialValues.country);
    setBillingStreet(initialValues.billingStreet);
    setBillingNumber(initialValues.billingNumber);
    setBillingComplement(initialValues.billingComplement);
    setBillingZipcode(initialValues.billingZipcode);
    setBillingNeighborhood(initialValues.billingNeighborhood);
    setBillingCity(initialValues.billingCity);
    setBillingState(initialValues.billingState);
    setBillingCountry(initialValues.billingCountry);
    setSearch(initialValues.search);
    setLogo(initialValues.logo);
    setLogoSrc(initialValues.logoSrc);
    setLogoCropper(initialValues.logoCropper);
    setTotalUnits(initialValues.totalUnits);
    setUnitsServed(initialValues.unitsServed);
    setUnitsExpected(initialValues.unitsExpected);
    setFirstOSDate(initialValues.firstOSDate);
    setLastOSDate(initialValues.lastOSDate);
    setScheduleRouted(initialValues.scheduleRouted);
    setScheduleConfirmed(initialValues.scheduleConfirmed);
    setSchedulePending(initialValues.schedulePending);
    setTotalEligibles(initialValues.totalEligibles);
    setTotalVaccinations(initialValues.totalVaccinations);
    setCode(initialValues.code);
    setContactName(initialValues.contactName);
    setContactEmail(initialValues.contactEmail);
    setContactPhone(initialValues.contactPhone);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    cnpj: [],
    fullName: [],
    notes: [],
    group: [],
    origin: [],
    status: [{ type: "Required" }],
    street: [],
    number: [],
    complement: [],
    zipcode: [],
    neighborhood: [],
    city: [],
    state: [],
    country: [],
    billingStreet: [],
    billingNumber: [],
    billingComplement: [],
    billingZipcode: [],
    billingNeighborhood: [],
    billingCity: [],
    billingState: [],
    billingCountry: [],
    search: [],
    logo: [],
    logoSrc: [],
    logoCropper: [],
    totalUnits: [],
    unitsServed: [],
    unitsExpected: [],
    firstOSDate: [],
    lastOSDate: [],
    scheduleRouted: [],
    scheduleConfirmed: [],
    schedulePending: [],
    totalEligibles: [],
    totalVaccinations: [],
    code: [],
    contactName: [],
    contactEmail: [],
    contactPhone: [],
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
          fullName,
          notes,
          group,
          origin,
          status,
          street,
          number,
          complement,
          zipcode,
          neighborhood,
          city,
          state,
          country,
          billingStreet,
          billingNumber,
          billingComplement,
          billingZipcode,
          billingNeighborhood,
          billingCity,
          billingState,
          billingCountry,
          search,
          logo,
          logoSrc,
          logoCropper,
          totalUnits,
          unitsServed,
          unitsExpected,
          firstOSDate,
          lastOSDate,
          scheduleRouted,
          scheduleConfirmed,
          schedulePending,
          totalEligibles,
          totalVaccinations,
          code,
          contactName,
          contactEmail,
          contactPhone,
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
            query: createClient.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "ClientCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              cnpj,
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
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
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
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
        label="Full name"
        isRequired={false}
        isReadOnly={false}
        value={fullName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              fullName: value,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
            };
            const result = onChange(modelFields);
            value = result?.fullName ?? value;
          }
          if (errors.fullName?.hasError) {
            runValidationTasks("fullName", value);
          }
          setFullName(value);
        }}
        onBlur={() => runValidationTasks("fullName", fullName)}
        errorMessage={errors.fullName?.errorMessage}
        hasError={errors.fullName?.hasError}
        {...getOverrideProps(overrides, "fullName")}
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
              fullName,
              notes: value,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
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
        label="Group"
        isRequired={false}
        isReadOnly={false}
        value={group}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              fullName,
              notes,
              group: value,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
            };
            const result = onChange(modelFields);
            value = result?.group ?? value;
          }
          if (errors.group?.hasError) {
            runValidationTasks("group", value);
          }
          setGroup(value);
        }}
        onBlur={() => runValidationTasks("group", group)}
        errorMessage={errors.group?.errorMessage}
        hasError={errors.group?.hasError}
        {...getOverrideProps(overrides, "group")}
      ></TextField>
      <TextField
        label="Origin"
        isRequired={false}
        isReadOnly={false}
        value={origin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              fullName,
              notes,
              group,
              origin: value,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
            };
            const result = onChange(modelFields);
            value = result?.origin ?? value;
          }
          if (errors.origin?.hasError) {
            runValidationTasks("origin", value);
          }
          setOrigin(value);
        }}
        onBlur={() => runValidationTasks("origin", origin)}
        errorMessage={errors.origin?.errorMessage}
        hasError={errors.origin?.hasError}
        {...getOverrideProps(overrides, "origin")}
      ></TextField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              fullName,
              notes,
              group,
              origin,
              status: value,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Active"
          value="ACTIVE"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Inactive"
          value="INACTIVE"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Suspended"
          value="SUSPENDED"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
      </SelectField>
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
              fullName,
              notes,
              group,
              origin,
              status,
              street: value,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
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
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number: value,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
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
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement: value,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
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
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode: value,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
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
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood: value,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
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
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city: value,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
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
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state: value,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
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
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country: value,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
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
        label="Billing street"
        isRequired={false}
        isReadOnly={false}
        value={billingStreet}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet: value,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
            };
            const result = onChange(modelFields);
            value = result?.billingStreet ?? value;
          }
          if (errors.billingStreet?.hasError) {
            runValidationTasks("billingStreet", value);
          }
          setBillingStreet(value);
        }}
        onBlur={() => runValidationTasks("billingStreet", billingStreet)}
        errorMessage={errors.billingStreet?.errorMessage}
        hasError={errors.billingStreet?.hasError}
        {...getOverrideProps(overrides, "billingStreet")}
      ></TextField>
      <TextField
        label="Billing number"
        isRequired={false}
        isReadOnly={false}
        value={billingNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber: value,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
            };
            const result = onChange(modelFields);
            value = result?.billingNumber ?? value;
          }
          if (errors.billingNumber?.hasError) {
            runValidationTasks("billingNumber", value);
          }
          setBillingNumber(value);
        }}
        onBlur={() => runValidationTasks("billingNumber", billingNumber)}
        errorMessage={errors.billingNumber?.errorMessage}
        hasError={errors.billingNumber?.hasError}
        {...getOverrideProps(overrides, "billingNumber")}
      ></TextField>
      <TextField
        label="Billing complement"
        isRequired={false}
        isReadOnly={false}
        value={billingComplement}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement: value,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
            };
            const result = onChange(modelFields);
            value = result?.billingComplement ?? value;
          }
          if (errors.billingComplement?.hasError) {
            runValidationTasks("billingComplement", value);
          }
          setBillingComplement(value);
        }}
        onBlur={() =>
          runValidationTasks("billingComplement", billingComplement)
        }
        errorMessage={errors.billingComplement?.errorMessage}
        hasError={errors.billingComplement?.hasError}
        {...getOverrideProps(overrides, "billingComplement")}
      ></TextField>
      <TextField
        label="Billing zipcode"
        isRequired={false}
        isReadOnly={false}
        value={billingZipcode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode: value,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
            };
            const result = onChange(modelFields);
            value = result?.billingZipcode ?? value;
          }
          if (errors.billingZipcode?.hasError) {
            runValidationTasks("billingZipcode", value);
          }
          setBillingZipcode(value);
        }}
        onBlur={() => runValidationTasks("billingZipcode", billingZipcode)}
        errorMessage={errors.billingZipcode?.errorMessage}
        hasError={errors.billingZipcode?.hasError}
        {...getOverrideProps(overrides, "billingZipcode")}
      ></TextField>
      <TextField
        label="Billing neighborhood"
        isRequired={false}
        isReadOnly={false}
        value={billingNeighborhood}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood: value,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
            };
            const result = onChange(modelFields);
            value = result?.billingNeighborhood ?? value;
          }
          if (errors.billingNeighborhood?.hasError) {
            runValidationTasks("billingNeighborhood", value);
          }
          setBillingNeighborhood(value);
        }}
        onBlur={() =>
          runValidationTasks("billingNeighborhood", billingNeighborhood)
        }
        errorMessage={errors.billingNeighborhood?.errorMessage}
        hasError={errors.billingNeighborhood?.hasError}
        {...getOverrideProps(overrides, "billingNeighborhood")}
      ></TextField>
      <TextField
        label="Billing city"
        isRequired={false}
        isReadOnly={false}
        value={billingCity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity: value,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
            };
            const result = onChange(modelFields);
            value = result?.billingCity ?? value;
          }
          if (errors.billingCity?.hasError) {
            runValidationTasks("billingCity", value);
          }
          setBillingCity(value);
        }}
        onBlur={() => runValidationTasks("billingCity", billingCity)}
        errorMessage={errors.billingCity?.errorMessage}
        hasError={errors.billingCity?.hasError}
        {...getOverrideProps(overrides, "billingCity")}
      ></TextField>
      <TextField
        label="Billing state"
        isRequired={false}
        isReadOnly={false}
        value={billingState}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState: value,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
            };
            const result = onChange(modelFields);
            value = result?.billingState ?? value;
          }
          if (errors.billingState?.hasError) {
            runValidationTasks("billingState", value);
          }
          setBillingState(value);
        }}
        onBlur={() => runValidationTasks("billingState", billingState)}
        errorMessage={errors.billingState?.errorMessage}
        hasError={errors.billingState?.hasError}
        {...getOverrideProps(overrides, "billingState")}
      ></TextField>
      <TextField
        label="Billing country"
        isRequired={false}
        isReadOnly={false}
        value={billingCountry}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry: value,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
            };
            const result = onChange(modelFields);
            value = result?.billingCountry ?? value;
          }
          if (errors.billingCountry?.hasError) {
            runValidationTasks("billingCountry", value);
          }
          setBillingCountry(value);
        }}
        onBlur={() => runValidationTasks("billingCountry", billingCountry)}
        errorMessage={errors.billingCountry?.errorMessage}
        hasError={errors.billingCountry?.hasError}
        {...getOverrideProps(overrides, "billingCountry")}
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
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search: value,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
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
        label="Logo"
        isRequired={false}
        isReadOnly={false}
        value={logo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo: value,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
            };
            const result = onChange(modelFields);
            value = result?.logo ?? value;
          }
          if (errors.logo?.hasError) {
            runValidationTasks("logo", value);
          }
          setLogo(value);
        }}
        onBlur={() => runValidationTasks("logo", logo)}
        errorMessage={errors.logo?.errorMessage}
        hasError={errors.logo?.hasError}
        {...getOverrideProps(overrides, "logo")}
      ></TextField>
      <TextField
        label="Logo src"
        isRequired={false}
        isReadOnly={false}
        value={logoSrc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc: value,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
            };
            const result = onChange(modelFields);
            value = result?.logoSrc ?? value;
          }
          if (errors.logoSrc?.hasError) {
            runValidationTasks("logoSrc", value);
          }
          setLogoSrc(value);
        }}
        onBlur={() => runValidationTasks("logoSrc", logoSrc)}
        errorMessage={errors.logoSrc?.errorMessage}
        hasError={errors.logoSrc?.hasError}
        {...getOverrideProps(overrides, "logoSrc")}
      ></TextField>
      <TextField
        label="Logo cropper"
        isRequired={false}
        isReadOnly={false}
        value={logoCropper}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper: value,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
            };
            const result = onChange(modelFields);
            value = result?.logoCropper ?? value;
          }
          if (errors.logoCropper?.hasError) {
            runValidationTasks("logoCropper", value);
          }
          setLogoCropper(value);
        }}
        onBlur={() => runValidationTasks("logoCropper", logoCropper)}
        errorMessage={errors.logoCropper?.errorMessage}
        hasError={errors.logoCropper?.hasError}
        {...getOverrideProps(overrides, "logoCropper")}
      ></TextField>
      <TextField
        label="Total units"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={totalUnits}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits: value,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
            };
            const result = onChange(modelFields);
            value = result?.totalUnits ?? value;
          }
          if (errors.totalUnits?.hasError) {
            runValidationTasks("totalUnits", value);
          }
          setTotalUnits(value);
        }}
        onBlur={() => runValidationTasks("totalUnits", totalUnits)}
        errorMessage={errors.totalUnits?.errorMessage}
        hasError={errors.totalUnits?.hasError}
        {...getOverrideProps(overrides, "totalUnits")}
      ></TextField>
      <TextField
        label="Units served"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={unitsServed}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed: value,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
            };
            const result = onChange(modelFields);
            value = result?.unitsServed ?? value;
          }
          if (errors.unitsServed?.hasError) {
            runValidationTasks("unitsServed", value);
          }
          setUnitsServed(value);
        }}
        onBlur={() => runValidationTasks("unitsServed", unitsServed)}
        errorMessage={errors.unitsServed?.errorMessage}
        hasError={errors.unitsServed?.hasError}
        {...getOverrideProps(overrides, "unitsServed")}
      ></TextField>
      <TextField
        label="Units expected"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={unitsExpected}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected: value,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
            };
            const result = onChange(modelFields);
            value = result?.unitsExpected ?? value;
          }
          if (errors.unitsExpected?.hasError) {
            runValidationTasks("unitsExpected", value);
          }
          setUnitsExpected(value);
        }}
        onBlur={() => runValidationTasks("unitsExpected", unitsExpected)}
        errorMessage={errors.unitsExpected?.errorMessage}
        hasError={errors.unitsExpected?.hasError}
        {...getOverrideProps(overrides, "unitsExpected")}
      ></TextField>
      <TextField
        label="First os date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={firstOSDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate: value,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
            };
            const result = onChange(modelFields);
            value = result?.firstOSDate ?? value;
          }
          if (errors.firstOSDate?.hasError) {
            runValidationTasks("firstOSDate", value);
          }
          setFirstOSDate(value);
        }}
        onBlur={() => runValidationTasks("firstOSDate", firstOSDate)}
        errorMessage={errors.firstOSDate?.errorMessage}
        hasError={errors.firstOSDate?.hasError}
        {...getOverrideProps(overrides, "firstOSDate")}
      ></TextField>
      <TextField
        label="Last os date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={lastOSDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate: value,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
            };
            const result = onChange(modelFields);
            value = result?.lastOSDate ?? value;
          }
          if (errors.lastOSDate?.hasError) {
            runValidationTasks("lastOSDate", value);
          }
          setLastOSDate(value);
        }}
        onBlur={() => runValidationTasks("lastOSDate", lastOSDate)}
        errorMessage={errors.lastOSDate?.errorMessage}
        hasError={errors.lastOSDate?.hasError}
        {...getOverrideProps(overrides, "lastOSDate")}
      ></TextField>
      <TextField
        label="Schedule routed"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={scheduleRouted}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted: value,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
            };
            const result = onChange(modelFields);
            value = result?.scheduleRouted ?? value;
          }
          if (errors.scheduleRouted?.hasError) {
            runValidationTasks("scheduleRouted", value);
          }
          setScheduleRouted(value);
        }}
        onBlur={() => runValidationTasks("scheduleRouted", scheduleRouted)}
        errorMessage={errors.scheduleRouted?.errorMessage}
        hasError={errors.scheduleRouted?.hasError}
        {...getOverrideProps(overrides, "scheduleRouted")}
      ></TextField>
      <TextField
        label="Schedule confirmed"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={scheduleConfirmed}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed: value,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
            };
            const result = onChange(modelFields);
            value = result?.scheduleConfirmed ?? value;
          }
          if (errors.scheduleConfirmed?.hasError) {
            runValidationTasks("scheduleConfirmed", value);
          }
          setScheduleConfirmed(value);
        }}
        onBlur={() =>
          runValidationTasks("scheduleConfirmed", scheduleConfirmed)
        }
        errorMessage={errors.scheduleConfirmed?.errorMessage}
        hasError={errors.scheduleConfirmed?.hasError}
        {...getOverrideProps(overrides, "scheduleConfirmed")}
      ></TextField>
      <TextField
        label="Schedule pending"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={schedulePending}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending: value,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
            };
            const result = onChange(modelFields);
            value = result?.schedulePending ?? value;
          }
          if (errors.schedulePending?.hasError) {
            runValidationTasks("schedulePending", value);
          }
          setSchedulePending(value);
        }}
        onBlur={() => runValidationTasks("schedulePending", schedulePending)}
        errorMessage={errors.schedulePending?.errorMessage}
        hasError={errors.schedulePending?.hasError}
        {...getOverrideProps(overrides, "schedulePending")}
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
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles: value,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone,
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
        label="Total vaccinations"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={totalVaccinations}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              cnpj,
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations: value,
              code,
              contactName,
              contactEmail,
              contactPhone,
            };
            const result = onChange(modelFields);
            value = result?.totalVaccinations ?? value;
          }
          if (errors.totalVaccinations?.hasError) {
            runValidationTasks("totalVaccinations", value);
          }
          setTotalVaccinations(value);
        }}
        onBlur={() =>
          runValidationTasks("totalVaccinations", totalVaccinations)
        }
        errorMessage={errors.totalVaccinations?.errorMessage}
        hasError={errors.totalVaccinations?.hasError}
        {...getOverrideProps(overrides, "totalVaccinations")}
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
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code: value,
              contactName,
              contactEmail,
              contactPhone,
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
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName: value,
              contactEmail,
              contactPhone,
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
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail: value,
              contactPhone,
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
              fullName,
              notes,
              group,
              origin,
              status,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              billingStreet,
              billingNumber,
              billingComplement,
              billingZipcode,
              billingNeighborhood,
              billingCity,
              billingState,
              billingCountry,
              search,
              logo,
              logoSrc,
              logoCropper,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
              contactName,
              contactEmail,
              contactPhone: value,
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
