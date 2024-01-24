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
import { createBlock } from "../graphql/mutations";
export default function BlockCreateForm(props) {
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
    order: "",
    component: "",
    content: "",
    config: "",
  };
  const [order, setOrder] = React.useState(initialValues.order);
  const [component, setComponent] = React.useState(initialValues.component);
  const [content, setContent] = React.useState(initialValues.content);
  const [config, setConfig] = React.useState(initialValues.config);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setOrder(initialValues.order);
    setComponent(initialValues.component);
    setContent(initialValues.content);
    setConfig(initialValues.config);
    setErrors({});
  };
  const validations = {
    order: [{ type: "Required" }],
    component: [{ type: "Required" }],
    content: [{ type: "Required" }],
    config: [],
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
          order,
          component,
          content,
          config,
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
            query: createBlock.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "BlockCreateForm")}
      {...rest}
    >
      <TextField
        label="Order"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={order}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              order: value,
              component,
              content,
              config,
            };
            const result = onChange(modelFields);
            value = result?.order ?? value;
          }
          if (errors.order?.hasError) {
            runValidationTasks("order", value);
          }
          setOrder(value);
        }}
        onBlur={() => runValidationTasks("order", order)}
        errorMessage={errors.order?.errorMessage}
        hasError={errors.order?.hasError}
        {...getOverrideProps(overrides, "order")}
      ></TextField>
      <TextField
        label="Component"
        isRequired={true}
        isReadOnly={false}
        value={component}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              order,
              component: value,
              content,
              config,
            };
            const result = onChange(modelFields);
            value = result?.component ?? value;
          }
          if (errors.component?.hasError) {
            runValidationTasks("component", value);
          }
          setComponent(value);
        }}
        onBlur={() => runValidationTasks("component", component)}
        errorMessage={errors.component?.errorMessage}
        hasError={errors.component?.hasError}
        {...getOverrideProps(overrides, "component")}
      ></TextField>
      <TextField
        label="Content"
        isRequired={true}
        isReadOnly={false}
        value={content}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              order,
              component,
              content: value,
              config,
            };
            const result = onChange(modelFields);
            value = result?.content ?? value;
          }
          if (errors.content?.hasError) {
            runValidationTasks("content", value);
          }
          setContent(value);
        }}
        onBlur={() => runValidationTasks("content", content)}
        errorMessage={errors.content?.errorMessage}
        hasError={errors.content?.hasError}
        {...getOverrideProps(overrides, "content")}
      ></TextField>
      <TextField
        label="Config"
        isRequired={false}
        isReadOnly={false}
        value={config}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              order,
              component,
              content,
              config: value,
            };
            const result = onChange(modelFields);
            value = result?.config ?? value;
          }
          if (errors.config?.hasError) {
            runValidationTasks("config", value);
          }
          setConfig(value);
        }}
        onBlur={() => runValidationTasks("config", config)}
        errorMessage={errors.config?.errorMessage}
        hasError={errors.config?.hasError}
        {...getOverrideProps(overrides, "config")}
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
