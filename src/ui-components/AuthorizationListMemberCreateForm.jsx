/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createAuthorizationListMember } from "../graphql/mutations";
export default function AuthorizationListMemberCreateForm(props) {
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
    authorizationListID: "",
    name: "",
    key: "",
    cpf: "",
    birth: "",
    search: "",
    others: "",
  };
  const [authorizationListID, setAuthorizationListID] = React.useState(
    initialValues.authorizationListID
  );
  const [name, setName] = React.useState(initialValues.name);
  const [key, setKey] = React.useState(initialValues.key);
  const [cpf, setCpf] = React.useState(initialValues.cpf);
  const [birth, setBirth] = React.useState(initialValues.birth);
  const [search, setSearch] = React.useState(initialValues.search);
  const [others, setOthers] = React.useState(initialValues.others);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAuthorizationListID(initialValues.authorizationListID);
    setName(initialValues.name);
    setKey(initialValues.key);
    setCpf(initialValues.cpf);
    setBirth(initialValues.birth);
    setSearch(initialValues.search);
    setOthers(initialValues.others);
    setErrors({});
  };
  const validations = {
    authorizationListID: [{ type: "Required" }],
    name: [{ type: "Required" }],
    key: [],
    cpf: [],
    birth: [],
    search: [],
    others: [],
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
          authorizationListID,
          name,
          key,
          cpf,
          birth,
          search,
          others,
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
            query: createAuthorizationListMember.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "AuthorizationListMemberCreateForm")}
      {...rest}
    >
      <TextField
        label="Authorization list id"
        isRequired={true}
        isReadOnly={false}
        value={authorizationListID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              authorizationListID: value,
              name,
              key,
              cpf,
              birth,
              search,
              others,
            };
            const result = onChange(modelFields);
            value = result?.authorizationListID ?? value;
          }
          if (errors.authorizationListID?.hasError) {
            runValidationTasks("authorizationListID", value);
          }
          setAuthorizationListID(value);
        }}
        onBlur={() =>
          runValidationTasks("authorizationListID", authorizationListID)
        }
        errorMessage={errors.authorizationListID?.errorMessage}
        hasError={errors.authorizationListID?.hasError}
        {...getOverrideProps(overrides, "authorizationListID")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              authorizationListID,
              name: value,
              key,
              cpf,
              birth,
              search,
              others,
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
        label="Key"
        isRequired={false}
        isReadOnly={false}
        value={key}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              authorizationListID,
              name,
              key: value,
              cpf,
              birth,
              search,
              others,
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
        label="Cpf"
        isRequired={false}
        isReadOnly={false}
        value={cpf}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              authorizationListID,
              name,
              key,
              cpf: value,
              birth,
              search,
              others,
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
        label="Birth"
        isRequired={false}
        isReadOnly={false}
        value={birth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              authorizationListID,
              name,
              key,
              cpf,
              birth: value,
              search,
              others,
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
        label="Search"
        isRequired={false}
        isReadOnly={false}
        value={search}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              authorizationListID,
              name,
              key,
              cpf,
              birth,
              search: value,
              others,
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
        label="Others"
        isRequired={false}
        isReadOnly={false}
        value={others}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              authorizationListID,
              name,
              key,
              cpf,
              birth,
              search,
              others: value,
            };
            const result = onChange(modelFields);
            value = result?.others ?? value;
          }
          if (errors.others?.hasError) {
            runValidationTasks("others", value);
          }
          setOthers(value);
        }}
        onBlur={() => runValidationTasks("others", others)}
        errorMessage={errors.others?.errorMessage}
        hasError={errors.others?.hasError}
        {...getOverrideProps(overrides, "others")}
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
