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
import { createAuthorizationListClosure } from "../graphql/mutations";
export default function AuthorizationListClosureCreateForm(props) {
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
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    notes: "",
    qtyApplication: "",
    qtyReturned: "",
    professionalID: "",
    OS: "",
    createdAt: "",
  };
  const [authorizationListID, setAuthorizationListID] = React.useState(
    initialValues.authorizationListID
  );
  const [contactName, setContactName] = React.useState(
    initialValues.contactName
  );
  const [contactPhone, setContactPhone] = React.useState(
    initialValues.contactPhone
  );
  const [contactEmail, setContactEmail] = React.useState(
    initialValues.contactEmail
  );
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [qtyApplication, setQtyApplication] = React.useState(
    initialValues.qtyApplication
  );
  const [qtyReturned, setQtyReturned] = React.useState(
    initialValues.qtyReturned
  );
  const [professionalID, setProfessionalID] = React.useState(
    initialValues.professionalID
  );
  const [OS, setOS] = React.useState(initialValues.OS);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAuthorizationListID(initialValues.authorizationListID);
    setContactName(initialValues.contactName);
    setContactPhone(initialValues.contactPhone);
    setContactEmail(initialValues.contactEmail);
    setNotes(initialValues.notes);
    setQtyApplication(initialValues.qtyApplication);
    setQtyReturned(initialValues.qtyReturned);
    setProfessionalID(initialValues.professionalID);
    setOS(initialValues.OS);
    setCreatedAt(initialValues.createdAt);
    setErrors({});
  };
  const validations = {
    authorizationListID: [{ type: "Required" }],
    contactName: [],
    contactPhone: [],
    contactEmail: [],
    notes: [],
    qtyApplication: [],
    qtyReturned: [],
    professionalID: [],
    OS: [],
    createdAt: [],
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
          authorizationListID,
          contactName,
          contactPhone,
          contactEmail,
          notes,
          qtyApplication,
          qtyReturned,
          professionalID,
          OS,
          createdAt,
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
            query: createAuthorizationListClosure.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "AuthorizationListClosureCreateForm")}
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
              contactName,
              contactPhone,
              contactEmail,
              notes,
              qtyApplication,
              qtyReturned,
              professionalID,
              OS,
              createdAt,
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
        label="Contact name"
        isRequired={false}
        isReadOnly={false}
        value={contactName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              authorizationListID,
              contactName: value,
              contactPhone,
              contactEmail,
              notes,
              qtyApplication,
              qtyReturned,
              professionalID,
              OS,
              createdAt,
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
        label="Contact phone"
        isRequired={false}
        isReadOnly={false}
        value={contactPhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              authorizationListID,
              contactName,
              contactPhone: value,
              contactEmail,
              notes,
              qtyApplication,
              qtyReturned,
              professionalID,
              OS,
              createdAt,
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
        label="Contact email"
        isRequired={false}
        isReadOnly={false}
        value={contactEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              authorizationListID,
              contactName,
              contactPhone,
              contactEmail: value,
              notes,
              qtyApplication,
              qtyReturned,
              professionalID,
              OS,
              createdAt,
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
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              authorizationListID,
              contactName,
              contactPhone,
              contactEmail,
              notes: value,
              qtyApplication,
              qtyReturned,
              professionalID,
              OS,
              createdAt,
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
        label="Qty application"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={qtyApplication}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              authorizationListID,
              contactName,
              contactPhone,
              contactEmail,
              notes,
              qtyApplication: value,
              qtyReturned,
              professionalID,
              OS,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.qtyApplication ?? value;
          }
          if (errors.qtyApplication?.hasError) {
            runValidationTasks("qtyApplication", value);
          }
          setQtyApplication(value);
        }}
        onBlur={() => runValidationTasks("qtyApplication", qtyApplication)}
        errorMessage={errors.qtyApplication?.errorMessage}
        hasError={errors.qtyApplication?.hasError}
        {...getOverrideProps(overrides, "qtyApplication")}
      ></TextField>
      <TextField
        label="Qty returned"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={qtyReturned}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              authorizationListID,
              contactName,
              contactPhone,
              contactEmail,
              notes,
              qtyApplication,
              qtyReturned: value,
              professionalID,
              OS,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.qtyReturned ?? value;
          }
          if (errors.qtyReturned?.hasError) {
            runValidationTasks("qtyReturned", value);
          }
          setQtyReturned(value);
        }}
        onBlur={() => runValidationTasks("qtyReturned", qtyReturned)}
        errorMessage={errors.qtyReturned?.errorMessage}
        hasError={errors.qtyReturned?.hasError}
        {...getOverrideProps(overrides, "qtyReturned")}
      ></TextField>
      <TextField
        label="Professional id"
        isRequired={false}
        isReadOnly={false}
        value={professionalID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              authorizationListID,
              contactName,
              contactPhone,
              contactEmail,
              notes,
              qtyApplication,
              qtyReturned,
              professionalID: value,
              OS,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.professionalID ?? value;
          }
          if (errors.professionalID?.hasError) {
            runValidationTasks("professionalID", value);
          }
          setProfessionalID(value);
        }}
        onBlur={() => runValidationTasks("professionalID", professionalID)}
        errorMessage={errors.professionalID?.errorMessage}
        hasError={errors.professionalID?.hasError}
        {...getOverrideProps(overrides, "professionalID")}
      ></TextField>
      <TextField
        label="Os"
        isRequired={false}
        isReadOnly={false}
        value={OS}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              authorizationListID,
              contactName,
              contactPhone,
              contactEmail,
              notes,
              qtyApplication,
              qtyReturned,
              professionalID,
              OS: value,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.OS ?? value;
          }
          if (errors.OS?.hasError) {
            runValidationTasks("OS", value);
          }
          setOS(value);
        }}
        onBlur={() => runValidationTasks("OS", OS)}
        errorMessage={errors.OS?.errorMessage}
        hasError={errors.OS?.hasError}
        {...getOverrideProps(overrides, "OS")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={createdAt && convertToLocal(new Date(createdAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              authorizationListID,
              contactName,
              contactPhone,
              contactEmail,
              notes,
              qtyApplication,
              qtyReturned,
              professionalID,
              OS,
              createdAt: value,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
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
