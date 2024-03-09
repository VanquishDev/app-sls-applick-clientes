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
import { getAuthorizationListMemberVaccination } from "../graphql/queries";
import { updateAuthorizationListMemberVaccination } from "../graphql/mutations";
export default function AuthorizationListMemberVaccinationUpdateForm(props) {
  const {
    id: idProp,
    authorizationListMemberVaccination:
      authorizationListMemberVaccinationModelProp,
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
    authorizationListMemberID: "",
    profissionalID: "",
    coren: "",
    lote: "",
    dueDate: "",
    via: "",
    OS: "",
    applicationDate: "",
    applicationTime: "",
  };
  const [authorizationListID, setAuthorizationListID] = React.useState(
    initialValues.authorizationListID
  );
  const [authorizationListMemberID, setAuthorizationListMemberID] =
    React.useState(initialValues.authorizationListMemberID);
  const [profissionalID, setProfissionalID] = React.useState(
    initialValues.profissionalID
  );
  const [coren, setCoren] = React.useState(initialValues.coren);
  const [lote, setLote] = React.useState(initialValues.lote);
  const [dueDate, setDueDate] = React.useState(initialValues.dueDate);
  const [via, setVia] = React.useState(initialValues.via);
  const [OS, setOS] = React.useState(initialValues.OS);
  const [applicationDate, setApplicationDate] = React.useState(
    initialValues.applicationDate
  );
  const [applicationTime, setApplicationTime] = React.useState(
    initialValues.applicationTime
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = authorizationListMemberVaccinationRecord
      ? { ...initialValues, ...authorizationListMemberVaccinationRecord }
      : initialValues;
    setAuthorizationListID(cleanValues.authorizationListID);
    setAuthorizationListMemberID(cleanValues.authorizationListMemberID);
    setProfissionalID(cleanValues.profissionalID);
    setCoren(cleanValues.coren);
    setLote(cleanValues.lote);
    setDueDate(cleanValues.dueDate);
    setVia(cleanValues.via);
    setOS(cleanValues.OS);
    setApplicationDate(cleanValues.applicationDate);
    setApplicationTime(cleanValues.applicationTime);
    setErrors({});
  };
  const [
    authorizationListMemberVaccinationRecord,
    setAuthorizationListMemberVaccinationRecord,
  ] = React.useState(authorizationListMemberVaccinationModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getAuthorizationListMemberVaccination.replaceAll(
                "__typename",
                ""
              ),
              variables: { id: idProp },
            })
          )?.data?.getAuthorizationListMemberVaccination
        : authorizationListMemberVaccinationModelProp;
      setAuthorizationListMemberVaccinationRecord(record);
    };
    queryData();
  }, [idProp, authorizationListMemberVaccinationModelProp]);
  React.useEffect(resetStateValues, [authorizationListMemberVaccinationRecord]);
  const validations = {
    authorizationListID: [{ type: "Required" }],
    authorizationListMemberID: [{ type: "Required" }],
    profissionalID: [],
    coren: [],
    lote: [],
    dueDate: [],
    via: [],
    OS: [],
    applicationDate: [],
    applicationTime: [],
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
          authorizationListMemberID,
          profissionalID: profissionalID ?? null,
          coren: coren ?? null,
          lote: lote ?? null,
          dueDate: dueDate ?? null,
          via: via ?? null,
          OS: OS ?? null,
          applicationDate: applicationDate ?? null,
          applicationTime: applicationTime ?? null,
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
            query: updateAuthorizationListMemberVaccination.replaceAll(
              "__typename",
              ""
            ),
            variables: {
              input: {
                id: authorizationListMemberVaccinationRecord.id,
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
      {...getOverrideProps(
        overrides,
        "AuthorizationListMemberVaccinationUpdateForm"
      )}
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
              authorizationListMemberID,
              profissionalID,
              coren,
              lote,
              dueDate,
              via,
              OS,
              applicationDate,
              applicationTime,
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
        label="Authorization list member id"
        isRequired={true}
        isReadOnly={false}
        value={authorizationListMemberID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              authorizationListID,
              authorizationListMemberID: value,
              profissionalID,
              coren,
              lote,
              dueDate,
              via,
              OS,
              applicationDate,
              applicationTime,
            };
            const result = onChange(modelFields);
            value = result?.authorizationListMemberID ?? value;
          }
          if (errors.authorizationListMemberID?.hasError) {
            runValidationTasks("authorizationListMemberID", value);
          }
          setAuthorizationListMemberID(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "authorizationListMemberID",
            authorizationListMemberID
          )
        }
        errorMessage={errors.authorizationListMemberID?.errorMessage}
        hasError={errors.authorizationListMemberID?.hasError}
        {...getOverrideProps(overrides, "authorizationListMemberID")}
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
              authorizationListID,
              authorizationListMemberID,
              profissionalID: value,
              coren,
              lote,
              dueDate,
              via,
              OS,
              applicationDate,
              applicationTime,
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
        label="Coren"
        isRequired={false}
        isReadOnly={false}
        value={coren}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              authorizationListID,
              authorizationListMemberID,
              profissionalID,
              coren: value,
              lote,
              dueDate,
              via,
              OS,
              applicationDate,
              applicationTime,
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
        label="Lote"
        isRequired={false}
        isReadOnly={false}
        value={lote}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              authorizationListID,
              authorizationListMemberID,
              profissionalID,
              coren,
              lote: value,
              dueDate,
              via,
              OS,
              applicationDate,
              applicationTime,
            };
            const result = onChange(modelFields);
            value = result?.lote ?? value;
          }
          if (errors.lote?.hasError) {
            runValidationTasks("lote", value);
          }
          setLote(value);
        }}
        onBlur={() => runValidationTasks("lote", lote)}
        errorMessage={errors.lote?.errorMessage}
        hasError={errors.lote?.hasError}
        {...getOverrideProps(overrides, "lote")}
      ></TextField>
      <TextField
        label="Due date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={dueDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              authorizationListID,
              authorizationListMemberID,
              profissionalID,
              coren,
              lote,
              dueDate: value,
              via,
              OS,
              applicationDate,
              applicationTime,
            };
            const result = onChange(modelFields);
            value = result?.dueDate ?? value;
          }
          if (errors.dueDate?.hasError) {
            runValidationTasks("dueDate", value);
          }
          setDueDate(value);
        }}
        onBlur={() => runValidationTasks("dueDate", dueDate)}
        errorMessage={errors.dueDate?.errorMessage}
        hasError={errors.dueDate?.hasError}
        {...getOverrideProps(overrides, "dueDate")}
      ></TextField>
      <TextField
        label="Via"
        isRequired={false}
        isReadOnly={false}
        value={via}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              authorizationListID,
              authorizationListMemberID,
              profissionalID,
              coren,
              lote,
              dueDate,
              via: value,
              OS,
              applicationDate,
              applicationTime,
            };
            const result = onChange(modelFields);
            value = result?.via ?? value;
          }
          if (errors.via?.hasError) {
            runValidationTasks("via", value);
          }
          setVia(value);
        }}
        onBlur={() => runValidationTasks("via", via)}
        errorMessage={errors.via?.errorMessage}
        hasError={errors.via?.hasError}
        {...getOverrideProps(overrides, "via")}
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
              authorizationListMemberID,
              profissionalID,
              coren,
              lote,
              dueDate,
              via,
              OS: value,
              applicationDate,
              applicationTime,
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
        label="Application date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={applicationDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              authorizationListID,
              authorizationListMemberID,
              profissionalID,
              coren,
              lote,
              dueDate,
              via,
              OS,
              applicationDate: value,
              applicationTime,
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
        label="Application time"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={applicationTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              authorizationListID,
              authorizationListMemberID,
              profissionalID,
              coren,
              lote,
              dueDate,
              via,
              OS,
              applicationDate,
              applicationTime: value,
            };
            const result = onChange(modelFields);
            value = result?.applicationTime ?? value;
          }
          if (errors.applicationTime?.hasError) {
            runValidationTasks("applicationTime", value);
          }
          setApplicationTime(value);
        }}
        onBlur={() => runValidationTasks("applicationTime", applicationTime)}
        errorMessage={errors.applicationTime?.errorMessage}
        hasError={errors.applicationTime?.hasError}
        {...getOverrideProps(overrides, "applicationTime")}
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
          isDisabled={!(idProp || authorizationListMemberVaccinationModelProp)}
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
              !(idProp || authorizationListMemberVaccinationModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
