/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getTempAux } from "../graphql/queries";
import { updateTempAux } from "../graphql/mutations";
export default function TempAuxUpdateForm(props) {
  const {
    id: idProp,
    tempAux: tempAuxModelProp,
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
    doc: "",
    birth: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [doc, setDoc] = React.useState(initialValues.doc);
  const [birth, setBirth] = React.useState(initialValues.birth);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = tempAuxRecord
      ? { ...initialValues, ...tempAuxRecord }
      : initialValues;
    setName(cleanValues.name);
    setDoc(cleanValues.doc);
    setBirth(cleanValues.birth);
    setErrors({});
  };
  const [tempAuxRecord, setTempAuxRecord] = React.useState(tempAuxModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getTempAux.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getTempAux
        : tempAuxModelProp;
      setTempAuxRecord(record);
    };
    queryData();
  }, [idProp, tempAuxModelProp]);
  React.useEffect(resetStateValues, [tempAuxRecord]);
  const validations = {
    name: [],
    doc: [],
    birth: [],
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
          name: name ?? null,
          doc: doc ?? null,
          birth: birth ?? null,
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
            query: updateTempAux.replaceAll("__typename", ""),
            variables: {
              input: {
                id: tempAuxRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "TempAuxUpdateForm")}
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
              doc,
              birth,
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
        label="Doc"
        isRequired={false}
        isReadOnly={false}
        value={doc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              doc: value,
              birth,
            };
            const result = onChange(modelFields);
            value = result?.doc ?? value;
          }
          if (errors.doc?.hasError) {
            runValidationTasks("doc", value);
          }
          setDoc(value);
        }}
        onBlur={() => runValidationTasks("doc", doc)}
        errorMessage={errors.doc?.errorMessage}
        hasError={errors.doc?.hasError}
        {...getOverrideProps(overrides, "doc")}
      ></TextField>
      <TextField
        label="Birth"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={birth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              doc,
              birth: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || tempAuxModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || tempAuxModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
