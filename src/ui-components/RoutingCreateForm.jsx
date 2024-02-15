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
import { createRouting } from "../graphql/mutations";
export default function RoutingCreateForm(props) {
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
    start: "",
    end: "",
    regionID: "",
    qty: "",
    title: "",
    description: "",
    backgroundColor: "",
    textColor: "",
    borderColor: "",
    notes: "",
    search: "",
  };
  const [start, setStart] = React.useState(initialValues.start);
  const [end, setEnd] = React.useState(initialValues.end);
  const [regionID, setRegionID] = React.useState(initialValues.regionID);
  const [qty, setQty] = React.useState(initialValues.qty);
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [backgroundColor, setBackgroundColor] = React.useState(
    initialValues.backgroundColor
  );
  const [textColor, setTextColor] = React.useState(initialValues.textColor);
  const [borderColor, setBorderColor] = React.useState(
    initialValues.borderColor
  );
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [search, setSearch] = React.useState(initialValues.search);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setStart(initialValues.start);
    setEnd(initialValues.end);
    setRegionID(initialValues.regionID);
    setQty(initialValues.qty);
    setTitle(initialValues.title);
    setDescription(initialValues.description);
    setBackgroundColor(initialValues.backgroundColor);
    setTextColor(initialValues.textColor);
    setBorderColor(initialValues.borderColor);
    setNotes(initialValues.notes);
    setSearch(initialValues.search);
    setErrors({});
  };
  const validations = {
    start: [{ type: "Required" }],
    end: [{ type: "Required" }],
    regionID: [{ type: "Required" }],
    qty: [],
    title: [{ type: "Required" }],
    description: [],
    backgroundColor: [],
    textColor: [],
    borderColor: [],
    notes: [],
    search: [],
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
          start,
          end,
          regionID,
          qty,
          title,
          description,
          backgroundColor,
          textColor,
          borderColor,
          notes,
          search,
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
            query: createRouting.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "RoutingCreateForm")}
      {...rest}
    >
      <TextField
        label="Start"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={start && convertToLocal(new Date(start))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              start: value,
              end,
              regionID,
              qty,
              title,
              description,
              backgroundColor,
              textColor,
              borderColor,
              notes,
              search,
            };
            const result = onChange(modelFields);
            value = result?.start ?? value;
          }
          if (errors.start?.hasError) {
            runValidationTasks("start", value);
          }
          setStart(value);
        }}
        onBlur={() => runValidationTasks("start", start)}
        errorMessage={errors.start?.errorMessage}
        hasError={errors.start?.hasError}
        {...getOverrideProps(overrides, "start")}
      ></TextField>
      <TextField
        label="End"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={end && convertToLocal(new Date(end))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              start,
              end: value,
              regionID,
              qty,
              title,
              description,
              backgroundColor,
              textColor,
              borderColor,
              notes,
              search,
            };
            const result = onChange(modelFields);
            value = result?.end ?? value;
          }
          if (errors.end?.hasError) {
            runValidationTasks("end", value);
          }
          setEnd(value);
        }}
        onBlur={() => runValidationTasks("end", end)}
        errorMessage={errors.end?.errorMessage}
        hasError={errors.end?.hasError}
        {...getOverrideProps(overrides, "end")}
      ></TextField>
      <TextField
        label="Region id"
        isRequired={true}
        isReadOnly={false}
        value={regionID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              start,
              end,
              regionID: value,
              qty,
              title,
              description,
              backgroundColor,
              textColor,
              borderColor,
              notes,
              search,
            };
            const result = onChange(modelFields);
            value = result?.regionID ?? value;
          }
          if (errors.regionID?.hasError) {
            runValidationTasks("regionID", value);
          }
          setRegionID(value);
        }}
        onBlur={() => runValidationTasks("regionID", regionID)}
        errorMessage={errors.regionID?.errorMessage}
        hasError={errors.regionID?.hasError}
        {...getOverrideProps(overrides, "regionID")}
      ></TextField>
      <TextField
        label="Qty"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={qty}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              start,
              end,
              regionID,
              qty: value,
              title,
              description,
              backgroundColor,
              textColor,
              borderColor,
              notes,
              search,
            };
            const result = onChange(modelFields);
            value = result?.qty ?? value;
          }
          if (errors.qty?.hasError) {
            runValidationTasks("qty", value);
          }
          setQty(value);
        }}
        onBlur={() => runValidationTasks("qty", qty)}
        errorMessage={errors.qty?.errorMessage}
        hasError={errors.qty?.hasError}
        {...getOverrideProps(overrides, "qty")}
      ></TextField>
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              start,
              end,
              regionID,
              qty,
              title: value,
              description,
              backgroundColor,
              textColor,
              borderColor,
              notes,
              search,
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
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              start,
              end,
              regionID,
              qty,
              title,
              description: value,
              backgroundColor,
              textColor,
              borderColor,
              notes,
              search,
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
        label="Background color"
        isRequired={false}
        isReadOnly={false}
        value={backgroundColor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              start,
              end,
              regionID,
              qty,
              title,
              description,
              backgroundColor: value,
              textColor,
              borderColor,
              notes,
              search,
            };
            const result = onChange(modelFields);
            value = result?.backgroundColor ?? value;
          }
          if (errors.backgroundColor?.hasError) {
            runValidationTasks("backgroundColor", value);
          }
          setBackgroundColor(value);
        }}
        onBlur={() => runValidationTasks("backgroundColor", backgroundColor)}
        errorMessage={errors.backgroundColor?.errorMessage}
        hasError={errors.backgroundColor?.hasError}
        {...getOverrideProps(overrides, "backgroundColor")}
      ></TextField>
      <TextField
        label="Text color"
        isRequired={false}
        isReadOnly={false}
        value={textColor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              start,
              end,
              regionID,
              qty,
              title,
              description,
              backgroundColor,
              textColor: value,
              borderColor,
              notes,
              search,
            };
            const result = onChange(modelFields);
            value = result?.textColor ?? value;
          }
          if (errors.textColor?.hasError) {
            runValidationTasks("textColor", value);
          }
          setTextColor(value);
        }}
        onBlur={() => runValidationTasks("textColor", textColor)}
        errorMessage={errors.textColor?.errorMessage}
        hasError={errors.textColor?.hasError}
        {...getOverrideProps(overrides, "textColor")}
      ></TextField>
      <TextField
        label="Border color"
        isRequired={false}
        isReadOnly={false}
        value={borderColor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              start,
              end,
              regionID,
              qty,
              title,
              description,
              backgroundColor,
              textColor,
              borderColor: value,
              notes,
              search,
            };
            const result = onChange(modelFields);
            value = result?.borderColor ?? value;
          }
          if (errors.borderColor?.hasError) {
            runValidationTasks("borderColor", value);
          }
          setBorderColor(value);
        }}
        onBlur={() => runValidationTasks("borderColor", borderColor)}
        errorMessage={errors.borderColor?.errorMessage}
        hasError={errors.borderColor?.hasError}
        {...getOverrideProps(overrides, "borderColor")}
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
              start,
              end,
              regionID,
              qty,
              title,
              description,
              backgroundColor,
              textColor,
              borderColor,
              notes: value,
              search,
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
              start,
              end,
              regionID,
              qty,
              title,
              description,
              backgroundColor,
              textColor,
              borderColor,
              notes,
              search: value,
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
