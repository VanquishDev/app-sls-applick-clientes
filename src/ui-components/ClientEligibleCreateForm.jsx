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
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createClientEligible } from "../graphql/mutations";
export default function ClientEligibleCreateForm(props) {
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
    clientID: "",
    key: "",
    name: "",
    cpf: "",
    rg: "",
    birth: "",
    notes: "",
    search: "",
    relationship: "",
    isDependent: false,
  };
  const [clientID, setClientID] = React.useState(initialValues.clientID);
  const [key, setKey] = React.useState(initialValues.key);
  const [name, setName] = React.useState(initialValues.name);
  const [cpf, setCpf] = React.useState(initialValues.cpf);
  const [rg, setRg] = React.useState(initialValues.rg);
  const [birth, setBirth] = React.useState(initialValues.birth);
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [search, setSearch] = React.useState(initialValues.search);
  const [relationship, setRelationship] = React.useState(
    initialValues.relationship
  );
  const [isDependent, setIsDependent] = React.useState(
    initialValues.isDependent
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setClientID(initialValues.clientID);
    setKey(initialValues.key);
    setName(initialValues.name);
    setCpf(initialValues.cpf);
    setRg(initialValues.rg);
    setBirth(initialValues.birth);
    setNotes(initialValues.notes);
    setSearch(initialValues.search);
    setRelationship(initialValues.relationship);
    setIsDependent(initialValues.isDependent);
    setErrors({});
  };
  const validations = {
    clientID: [{ type: "Required" }],
    key: [{ type: "Required" }],
    name: [],
    cpf: [],
    rg: [],
    birth: [],
    notes: [],
    search: [],
    relationship: [],
    isDependent: [],
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
          clientID,
          key,
          name,
          cpf,
          rg,
          birth,
          notes,
          search,
          relationship,
          isDependent,
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
            query: createClientEligible.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "ClientEligibleCreateForm")}
      {...rest}
    >
      <TextField
        label="Client id"
        isRequired={true}
        isReadOnly={false}
        value={clientID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID: value,
              key,
              name,
              cpf,
              rg,
              birth,
              notes,
              search,
              relationship,
              isDependent,
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
        label="Key"
        isRequired={true}
        isReadOnly={false}
        value={key}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              key: value,
              name,
              cpf,
              rg,
              birth,
              notes,
              search,
              relationship,
              isDependent,
            };
            const result = onChange(modelFields);
            value = result?.key ?? value;
          }
          if (errors.key?.hasError) {
            runValidationTasks("key", value);
          }
          setKey(value);
        }}
        onBlur={() => runValidationTasks("key", key)}
        errorMessage={errors.key?.errorMessage}
        hasError={errors.key?.hasError}
        {...getOverrideProps(overrides, "key")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              key,
              name: value,
              cpf,
              rg,
              birth,
              notes,
              search,
              relationship,
              isDependent,
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
        label="Cpf"
        isRequired={false}
        isReadOnly={false}
        value={cpf}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              key,
              name,
              cpf: value,
              rg,
              birth,
              notes,
              search,
              relationship,
              isDependent,
            };
            const result = onChange(modelFields);
            value = result?.cpf ?? value;
          }
          if (errors.cpf?.hasError) {
            runValidationTasks("cpf", value);
          }
          setCpf(value);
        }}
        onBlur={() => runValidationTasks("cpf", cpf)}
        errorMessage={errors.cpf?.errorMessage}
        hasError={errors.cpf?.hasError}
        {...getOverrideProps(overrides, "cpf")}
      ></TextField>
      <TextField
        label="Rg"
        isRequired={false}
        isReadOnly={false}
        value={rg}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              key,
              name,
              cpf,
              rg: value,
              birth,
              notes,
              search,
              relationship,
              isDependent,
            };
            const result = onChange(modelFields);
            value = result?.rg ?? value;
          }
          if (errors.rg?.hasError) {
            runValidationTasks("rg", value);
          }
          setRg(value);
        }}
        onBlur={() => runValidationTasks("rg", rg)}
        errorMessage={errors.rg?.errorMessage}
        hasError={errors.rg?.hasError}
        {...getOverrideProps(overrides, "rg")}
      ></TextField>
      <TextField
        label="Birth"
        isRequired={false}
        isReadOnly={false}
        value={birth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              key,
              name,
              cpf,
              rg,
              birth: value,
              notes,
              search,
              relationship,
              isDependent,
            };
            const result = onChange(modelFields);
            value = result?.birth ?? value;
          }
          if (errors.birth?.hasError) {
            runValidationTasks("birth", value);
          }
          setBirth(value);
        }}
        onBlur={() => runValidationTasks("birth", birth)}
        errorMessage={errors.birth?.errorMessage}
        hasError={errors.birth?.hasError}
        {...getOverrideProps(overrides, "birth")}
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
              clientID,
              key,
              name,
              cpf,
              rg,
              birth,
              notes: value,
              search,
              relationship,
              isDependent,
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
              clientID,
              key,
              name,
              cpf,
              rg,
              birth,
              notes,
              search: value,
              relationship,
              isDependent,
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
        label="Relationship"
        isRequired={false}
        isReadOnly={false}
        value={relationship}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              key,
              name,
              cpf,
              rg,
              birth,
              notes,
              search,
              relationship: value,
              isDependent,
            };
            const result = onChange(modelFields);
            value = result?.relationship ?? value;
          }
          if (errors.relationship?.hasError) {
            runValidationTasks("relationship", value);
          }
          setRelationship(value);
        }}
        onBlur={() => runValidationTasks("relationship", relationship)}
        errorMessage={errors.relationship?.errorMessage}
        hasError={errors.relationship?.hasError}
        {...getOverrideProps(overrides, "relationship")}
      ></TextField>
      <SwitchField
        label="Is dependent"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isDependent}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              clientID,
              key,
              name,
              cpf,
              rg,
              birth,
              notes,
              search,
              relationship,
              isDependent: value,
            };
            const result = onChange(modelFields);
            value = result?.isDependent ?? value;
          }
          if (errors.isDependent?.hasError) {
            runValidationTasks("isDependent", value);
          }
          setIsDependent(value);
        }}
        onBlur={() => runValidationTasks("isDependent", isDependent)}
        errorMessage={errors.isDependent?.errorMessage}
        hasError={errors.isDependent?.hasError}
        {...getOverrideProps(overrides, "isDependent")}
      ></SwitchField>
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
