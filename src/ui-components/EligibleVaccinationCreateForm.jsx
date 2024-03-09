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
import { createEligibleVaccination } from "../graphql/mutations";
export default function EligibleVaccinationCreateForm(props) {
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
    osID: "",
    clientEligibleID: "",
    clientID: "",
    profissionalID: "",
    profissionalDoc: "",
    coren: "",
    applicationDate: "",
    reason: "",
    search: "",
    vaccination: "",
    status: "",
    localCity: "",
    localState: "",
  };
  const [osID, setOsID] = React.useState(initialValues.osID);
  const [clientEligibleID, setClientEligibleID] = React.useState(
    initialValues.clientEligibleID
  );
  const [clientID, setClientID] = React.useState(initialValues.clientID);
  const [profissionalID, setProfissionalID] = React.useState(
    initialValues.profissionalID
  );
  const [profissionalDoc, setProfissionalDoc] = React.useState(
    initialValues.profissionalDoc
  );
  const [coren, setCoren] = React.useState(initialValues.coren);
  const [applicationDate, setApplicationDate] = React.useState(
    initialValues.applicationDate
  );
  const [reason, setReason] = React.useState(initialValues.reason);
  const [search, setSearch] = React.useState(initialValues.search);
  const [vaccination, setVaccination] = React.useState(
    initialValues.vaccination
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [localCity, setLocalCity] = React.useState(initialValues.localCity);
  const [localState, setLocalState] = React.useState(initialValues.localState);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setOsID(initialValues.osID);
    setClientEligibleID(initialValues.clientEligibleID);
    setClientID(initialValues.clientID);
    setProfissionalID(initialValues.profissionalID);
    setProfissionalDoc(initialValues.profissionalDoc);
    setCoren(initialValues.coren);
    setApplicationDate(initialValues.applicationDate);
    setReason(initialValues.reason);
    setSearch(initialValues.search);
    setVaccination(initialValues.vaccination);
    setStatus(initialValues.status);
    setLocalCity(initialValues.localCity);
    setLocalState(initialValues.localState);
    setErrors({});
  };
  const validations = {
    osID: [{ type: "Required" }],
    clientEligibleID: [{ type: "Required" }],
    clientID: [{ type: "Required" }],
    profissionalID: [],
    profissionalDoc: [],
    coren: [],
    applicationDate: [],
    reason: [],
    search: [],
    vaccination: [],
    status: [],
    localCity: [],
    localState: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          osID,
          clientEligibleID,
          clientID,
          profissionalID,
          profissionalDoc,
          coren,
          applicationDate,
          reason,
          search,
          vaccination,
          status,
          localCity,
          localState,
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
            query: createEligibleVaccination.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "EligibleVaccinationCreateForm")}
      {...rest}
    >
      <TextField
        label="Os id"
        isRequired={true}
        isReadOnly={false}
        value={osID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              osID: value,
              clientEligibleID,
              clientID,
              profissionalID,
              profissionalDoc,
              coren,
              applicationDate,
              reason,
              search,
              vaccination,
              status,
              localCity,
              localState,
            };
            const result = onChange(modelFields);
            value = result?.osID ?? value;
          }
          if (errors.osID?.hasError) {
            runValidationTasks("osID", value);
          }
          setOsID(value);
        }}
        onBlur={() => runValidationTasks("osID", osID)}
        errorMessage={errors.osID?.errorMessage}
        hasError={errors.osID?.hasError}
        {...getOverrideProps(overrides, "osID")}
      ></TextField>
      <TextField
        label="Client eligible id"
        isRequired={true}
        isReadOnly={false}
        value={clientEligibleID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              osID,
              clientEligibleID: value,
              clientID,
              profissionalID,
              profissionalDoc,
              coren,
              applicationDate,
              reason,
              search,
              vaccination,
              status,
              localCity,
              localState,
            };
            const result = onChange(modelFields);
            value = result?.clientEligibleID ?? value;
          }
          if (errors.clientEligibleID?.hasError) {
            runValidationTasks("clientEligibleID", value);
          }
          setClientEligibleID(value);
        }}
        onBlur={() => runValidationTasks("clientEligibleID", clientEligibleID)}
        errorMessage={errors.clientEligibleID?.errorMessage}
        hasError={errors.clientEligibleID?.hasError}
        {...getOverrideProps(overrides, "clientEligibleID")}
      ></TextField>
      <TextField
        label="Client id"
        isRequired={true}
        isReadOnly={false}
        value={clientID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              osID,
              clientEligibleID,
              clientID: value,
              profissionalID,
              profissionalDoc,
              coren,
              applicationDate,
              reason,
              search,
              vaccination,
              status,
              localCity,
              localState,
            };
            const result = onChange(modelFields);
            value = result?.clientID ?? value;
          }
          if (errors.clientID?.hasError) {
            runValidationTasks("clientID", value);
          }
          setClientID(value);
        }}
        onBlur={() => runValidationTasks("clientID", clientID)}
        errorMessage={errors.clientID?.errorMessage}
        hasError={errors.clientID?.hasError}
        {...getOverrideProps(overrides, "clientID")}
      ></TextField>
      <TextField
        label="Profissional id"
        isRequired={false}
        isReadOnly={false}
        value={profissionalID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              osID,
              clientEligibleID,
              clientID,
              profissionalID: value,
              profissionalDoc,
              coren,
              applicationDate,
              reason,
              search,
              vaccination,
              status,
              localCity,
              localState,
            };
            const result = onChange(modelFields);
            value = result?.profissionalID ?? value;
          }
          if (errors.profissionalID?.hasError) {
            runValidationTasks("profissionalID", value);
          }
          setProfissionalID(value);
        }}
        onBlur={() => runValidationTasks("profissionalID", profissionalID)}
        errorMessage={errors.profissionalID?.errorMessage}
        hasError={errors.profissionalID?.hasError}
        {...getOverrideProps(overrides, "profissionalID")}
      ></TextField>
      <TextField
        label="Profissional doc"
        isRequired={false}
        isReadOnly={false}
        value={profissionalDoc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              osID,
              clientEligibleID,
              clientID,
              profissionalID,
              profissionalDoc: value,
              coren,
              applicationDate,
              reason,
              search,
              vaccination,
              status,
              localCity,
              localState,
            };
            const result = onChange(modelFields);
            value = result?.profissionalDoc ?? value;
          }
          if (errors.profissionalDoc?.hasError) {
            runValidationTasks("profissionalDoc", value);
          }
          setProfissionalDoc(value);
        }}
        onBlur={() => runValidationTasks("profissionalDoc", profissionalDoc)}
        errorMessage={errors.profissionalDoc?.errorMessage}
        hasError={errors.profissionalDoc?.hasError}
        {...getOverrideProps(overrides, "profissionalDoc")}
      ></TextField>
      <TextField
        label="Coren"
        isRequired={false}
        isReadOnly={false}
        value={coren}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              osID,
              clientEligibleID,
              clientID,
              profissionalID,
              profissionalDoc,
              coren: value,
              applicationDate,
              reason,
              search,
              vaccination,
              status,
              localCity,
              localState,
            };
            const result = onChange(modelFields);
            value = result?.coren ?? value;
          }
          if (errors.coren?.hasError) {
            runValidationTasks("coren", value);
          }
          setCoren(value);
        }}
        onBlur={() => runValidationTasks("coren", coren)}
        errorMessage={errors.coren?.errorMessage}
        hasError={errors.coren?.hasError}
        {...getOverrideProps(overrides, "coren")}
      ></TextField>
      <TextField
        label="Application date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={applicationDate && convertToLocal(new Date(applicationDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              osID,
              clientEligibleID,
              clientID,
              profissionalID,
              profissionalDoc,
              coren,
              applicationDate: value,
              reason,
              search,
              vaccination,
              status,
              localCity,
              localState,
            };
            const result = onChange(modelFields);
            value = result?.applicationDate ?? value;
          }
          if (errors.applicationDate?.hasError) {
            runValidationTasks("applicationDate", value);
          }
          setApplicationDate(value);
        }}
        onBlur={() => runValidationTasks("applicationDate", applicationDate)}
        errorMessage={errors.applicationDate?.errorMessage}
        hasError={errors.applicationDate?.hasError}
        {...getOverrideProps(overrides, "applicationDate")}
      ></TextField>
      <TextField
        label="Reason"
        isRequired={false}
        isReadOnly={false}
        value={reason}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              osID,
              clientEligibleID,
              clientID,
              profissionalID,
              profissionalDoc,
              coren,
              applicationDate,
              reason: value,
              search,
              vaccination,
              status,
              localCity,
              localState,
            };
            const result = onChange(modelFields);
            value = result?.reason ?? value;
          }
          if (errors.reason?.hasError) {
            runValidationTasks("reason", value);
          }
          setReason(value);
        }}
        onBlur={() => runValidationTasks("reason", reason)}
        errorMessage={errors.reason?.errorMessage}
        hasError={errors.reason?.hasError}
        {...getOverrideProps(overrides, "reason")}
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
              osID,
              clientEligibleID,
              clientID,
              profissionalID,
              profissionalDoc,
              coren,
              applicationDate,
              reason,
              search: value,
              vaccination,
              status,
              localCity,
              localState,
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
        label="Vaccination"
        isRequired={false}
        isReadOnly={false}
        value={vaccination}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              osID,
              clientEligibleID,
              clientID,
              profissionalID,
              profissionalDoc,
              coren,
              applicationDate,
              reason,
              search,
              vaccination: value,
              status,
              localCity,
              localState,
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
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              osID,
              clientEligibleID,
              clientID,
              profissionalID,
              profissionalDoc,
              coren,
              applicationDate,
              reason,
              search,
              vaccination,
              status: value,
              localCity,
              localState,
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
          children="Canceled"
          value="CANCELED"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Applied"
          value="APPLIED"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Local city"
        isRequired={false}
        isReadOnly={false}
        value={localCity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              osID,
              clientEligibleID,
              clientID,
              profissionalID,
              profissionalDoc,
              coren,
              applicationDate,
              reason,
              search,
              vaccination,
              status,
              localCity: value,
              localState,
            };
            const result = onChange(modelFields);
            value = result?.localCity ?? value;
          }
          if (errors.localCity?.hasError) {
            runValidationTasks("localCity", value);
          }
          setLocalCity(value);
        }}
        onBlur={() => runValidationTasks("localCity", localCity)}
        errorMessage={errors.localCity?.errorMessage}
        hasError={errors.localCity?.hasError}
        {...getOverrideProps(overrides, "localCity")}
      ></TextField>
      <TextField
        label="Local state"
        isRequired={false}
        isReadOnly={false}
        value={localState}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              osID,
              clientEligibleID,
              clientID,
              profissionalID,
              profissionalDoc,
              coren,
              applicationDate,
              reason,
              search,
              vaccination,
              status,
              localCity,
              localState: value,
            };
            const result = onChange(modelFields);
            value = result?.localState ?? value;
          }
          if (errors.localState?.hasError) {
            runValidationTasks("localState", value);
          }
          setLocalState(value);
        }}
        onBlur={() => runValidationTasks("localState", localState)}
        errorMessage={errors.localState?.errorMessage}
        hasError={errors.localState?.hasError}
        {...getOverrideProps(overrides, "localState")}
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
