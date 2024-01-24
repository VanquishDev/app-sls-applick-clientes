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
import { getRelationLink } from "../graphql/queries";
import { updateRelationLink } from "../graphql/mutations";
export default function RelationLinkUpdateForm(props) {
  const {
    id: idProp,
    relationLink: relationLinkModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    type: "",
    notify: "",
    updatedAt: "",
    search: "",
    percentage: "",
  };
  const [type, setType] = React.useState(initialValues.type);
  const [notify, setNotify] = React.useState(initialValues.notify);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [search, setSearch] = React.useState(initialValues.search);
  const [percentage, setPercentage] = React.useState(initialValues.percentage);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = relationLinkRecord
      ? { ...initialValues, ...relationLinkRecord }
      : initialValues;
    setType(cleanValues.type);
    setNotify(cleanValues.notify);
    setUpdatedAt(cleanValues.updatedAt);
    setSearch(cleanValues.search);
    setPercentage(cleanValues.percentage);
    setErrors({});
  };
  const [relationLinkRecord, setRelationLinkRecord] = React.useState(
    relationLinkModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getRelationLink.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getRelationLink
        : relationLinkModelProp;
      setRelationLinkRecord(record);
    };
    queryData();
  }, [idProp, relationLinkModelProp]);
  React.useEffect(resetStateValues, [relationLinkRecord]);
  const validations = {
    type: [{ type: "Required" }],
    notify: [{ type: "Required" }],
    updatedAt: [],
    search: [],
    percentage: [],
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
          type,
          notify,
          updatedAt: updatedAt ?? null,
          search: search ?? null,
          percentage: percentage ?? null,
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
            query: updateRelationLink.replaceAll("__typename", ""),
            variables: {
              input: {
                id: relationLinkRecord.id,
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
      {...getOverrideProps(overrides, "RelationLinkUpdateForm")}
      {...rest}
    >
      <TextField
        label="Type"
        isRequired={true}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type: value,
              notify,
              updatedAt,
              search,
              percentage,
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
      ></TextField>
      <TextField
        label="Notify"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={notify}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              type,
              notify: value,
              updatedAt,
              search,
              percentage,
            };
            const result = onChange(modelFields);
            value = result?.notify ?? value;
          }
          if (errors.notify?.hasError) {
            runValidationTasks("notify", value);
          }
          setNotify(value);
        }}
        onBlur={() => runValidationTasks("notify", notify)}
        errorMessage={errors.notify?.errorMessage}
        hasError={errors.notify?.hasError}
        {...getOverrideProps(overrides, "notify")}
      ></TextField>
      <TextField
        label="Updated at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={updatedAt && convertToLocal(new Date(updatedAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              type,
              notify,
              updatedAt: value,
              search,
              percentage,
            };
            const result = onChange(modelFields);
            value = result?.updatedAt ?? value;
          }
          if (errors.updatedAt?.hasError) {
            runValidationTasks("updatedAt", value);
          }
          setUpdatedAt(value);
        }}
        onBlur={() => runValidationTasks("updatedAt", updatedAt)}
        errorMessage={errors.updatedAt?.errorMessage}
        hasError={errors.updatedAt?.hasError}
        {...getOverrideProps(overrides, "updatedAt")}
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
              type,
              notify,
              updatedAt,
              search: value,
              percentage,
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
        label="Percentage"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={percentage}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              type,
              notify,
              updatedAt,
              search,
              percentage: value,
            };
            const result = onChange(modelFields);
            value = result?.percentage ?? value;
          }
          if (errors.percentage?.hasError) {
            runValidationTasks("percentage", value);
          }
          setPercentage(value);
        }}
        onBlur={() => runValidationTasks("percentage", percentage)}
        errorMessage={errors.percentage?.errorMessage}
        hasError={errors.percentage?.hasError}
        {...getOverrideProps(overrides, "percentage")}
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
          isDisabled={!(idProp || relationLinkModelProp)}
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
              !(idProp || relationLinkModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
