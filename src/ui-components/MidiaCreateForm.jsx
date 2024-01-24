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
import { createMidia } from "../graphql/mutations";
export default function MidiaCreateForm(props) {
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
    key: "",
    type: "",
    title: "",
    subTitle: "",
    description: "",
    identifyText: "",
  };
  const [key, setKey] = React.useState(initialValues.key);
  const [type, setType] = React.useState(initialValues.type);
  const [title, setTitle] = React.useState(initialValues.title);
  const [subTitle, setSubTitle] = React.useState(initialValues.subTitle);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [identifyText, setIdentifyText] = React.useState(
    initialValues.identifyText
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setKey(initialValues.key);
    setType(initialValues.type);
    setTitle(initialValues.title);
    setSubTitle(initialValues.subTitle);
    setDescription(initialValues.description);
    setIdentifyText(initialValues.identifyText);
    setErrors({});
  };
  const validations = {
    key: [{ type: "Required" }],
    type: [],
    title: [],
    subTitle: [],
    description: [],
    identifyText: [],
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
          key,
          type,
          title,
          subTitle,
          description,
          identifyText,
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
            query: createMidia.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "MidiaCreateForm")}
      {...rest}
    >
      <TextField
        label="Key"
        isRequired={true}
        isReadOnly={false}
        value={key}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              key: value,
              type,
              title,
              subTitle,
              description,
              identifyText,
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
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              key,
              type: value,
              title,
              subTitle,
              description,
              identifyText,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      >
        <option
          children="Audio"
          value="AUDIO"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Video"
          value="VIDEO"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
        <option
          children="Image"
          value="IMAGE"
          {...getOverrideProps(overrides, "typeoption2")}
        ></option>
        <option
          children="Pdf"
          value="PDF"
          {...getOverrideProps(overrides, "typeoption3")}
        ></option>
        <option
          children="Doc"
          value="DOC"
          {...getOverrideProps(overrides, "typeoption4")}
        ></option>
        <option
          children="Xls"
          value="XLS"
          {...getOverrideProps(overrides, "typeoption5")}
        ></option>
        <option
          children="File"
          value="FILE"
          {...getOverrideProps(overrides, "typeoption6")}
        ></option>
        <option
          children="Zip"
          value="ZIP"
          {...getOverrideProps(overrides, "typeoption7")}
        ></option>
      </SelectField>
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              key,
              type,
              title: value,
              subTitle,
              description,
              identifyText,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Sub title"
        isRequired={false}
        isReadOnly={false}
        value={subTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              key,
              type,
              title,
              subTitle: value,
              description,
              identifyText,
            };
            const result = onChange(modelFields);
            value = result?.subTitle ?? value;
          }
          if (errors.subTitle?.hasError) {
            runValidationTasks("subTitle", value);
          }
          setSubTitle(value);
        }}
        onBlur={() => runValidationTasks("subTitle", subTitle)}
        errorMessage={errors.subTitle?.errorMessage}
        hasError={errors.subTitle?.hasError}
        {...getOverrideProps(overrides, "subTitle")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              key,
              type,
              title,
              subTitle,
              description: value,
              identifyText,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Identify text"
        isRequired={false}
        isReadOnly={false}
        value={identifyText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              key,
              type,
              title,
              subTitle,
              description,
              identifyText: value,
            };
            const result = onChange(modelFields);
            value = result?.identifyText ?? value;
          }
          if (errors.identifyText?.hasError) {
            runValidationTasks("identifyText", value);
          }
          setIdentifyText(value);
        }}
        onBlur={() => runValidationTasks("identifyText", identifyText)}
        errorMessage={errors.identifyText?.errorMessage}
        hasError={errors.identifyText?.hasError}
        {...getOverrideProps(overrides, "identifyText")}
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
