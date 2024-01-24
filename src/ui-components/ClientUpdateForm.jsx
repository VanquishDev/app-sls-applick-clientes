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
import { getClient } from "../graphql/queries";
import { updateClient } from "../graphql/mutations";
export default function ClientUpdateForm(props) {
  const {
    id: idProp,
    client: clientModelProp,
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
    notes: "",
    status: "",
    search: "",
    totalUnits: "",
    unitsServed: "",
    unitsExpected: "",
    firstOSDate: "",
    lastOSDate: "",
    scheduleRouted: "",
    scheduleConfirmed: "",
    schedulePending: "",
    totalEligibles: "",
    totalVaccinations: "",
    code: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [status, setStatus] = React.useState(initialValues.status);
  const [search, setSearch] = React.useState(initialValues.search);
  const [totalUnits, setTotalUnits] = React.useState(initialValues.totalUnits);
  const [unitsServed, setUnitsServed] = React.useState(
    initialValues.unitsServed
  );
  const [unitsExpected, setUnitsExpected] = React.useState(
    initialValues.unitsExpected
  );
  const [firstOSDate, setFirstOSDate] = React.useState(
    initialValues.firstOSDate
  );
  const [lastOSDate, setLastOSDate] = React.useState(initialValues.lastOSDate);
  const [scheduleRouted, setScheduleRouted] = React.useState(
    initialValues.scheduleRouted
  );
  const [scheduleConfirmed, setScheduleConfirmed] = React.useState(
    initialValues.scheduleConfirmed
  );
  const [schedulePending, setSchedulePending] = React.useState(
    initialValues.schedulePending
  );
  const [totalEligibles, setTotalEligibles] = React.useState(
    initialValues.totalEligibles
  );
  const [totalVaccinations, setTotalVaccinations] = React.useState(
    initialValues.totalVaccinations
  );
  const [code, setCode] = React.useState(initialValues.code);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = clientRecord
      ? { ...initialValues, ...clientRecord }
      : initialValues;
    setName(cleanValues.name);
    setNotes(cleanValues.notes);
    setStatus(cleanValues.status);
    setSearch(cleanValues.search);
    setTotalUnits(cleanValues.totalUnits);
    setUnitsServed(cleanValues.unitsServed);
    setUnitsExpected(cleanValues.unitsExpected);
    setFirstOSDate(cleanValues.firstOSDate);
    setLastOSDate(cleanValues.lastOSDate);
    setScheduleRouted(cleanValues.scheduleRouted);
    setScheduleConfirmed(cleanValues.scheduleConfirmed);
    setSchedulePending(cleanValues.schedulePending);
    setTotalEligibles(cleanValues.totalEligibles);
    setTotalVaccinations(cleanValues.totalVaccinations);
    setCode(cleanValues.code);
    setErrors({});
  };
  const [clientRecord, setClientRecord] = React.useState(clientModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getClient.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getClient
        : clientModelProp;
      setClientRecord(record);
    };
    queryData();
  }, [idProp, clientModelProp]);
  React.useEffect(resetStateValues, [clientRecord]);
  const validations = {
    name: [{ type: "Required" }],
    notes: [],
    status: [{ type: "Required" }],
    search: [],
    totalUnits: [],
    unitsServed: [],
    unitsExpected: [],
    firstOSDate: [],
    lastOSDate: [],
    scheduleRouted: [],
    scheduleConfirmed: [],
    schedulePending: [],
    totalEligibles: [],
    totalVaccinations: [],
    code: [],
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
          name,
          notes: notes ?? null,
          status,
          search: search ?? null,
          totalUnits: totalUnits ?? null,
          unitsServed: unitsServed ?? null,
          unitsExpected: unitsExpected ?? null,
          firstOSDate: firstOSDate ?? null,
          lastOSDate: lastOSDate ?? null,
          scheduleRouted: scheduleRouted ?? null,
          scheduleConfirmed: scheduleConfirmed ?? null,
          schedulePending: schedulePending ?? null,
          totalEligibles: totalEligibles ?? null,
          totalVaccinations: totalVaccinations ?? null,
          code: code ?? null,
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
            query: updateClient.replaceAll("__typename", ""),
            variables: {
              input: {
                id: clientRecord.id,
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
      {...getOverrideProps(overrides, "ClientUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              notes,
              status,
              search,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
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
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              notes: value,
              status,
              search,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
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
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              notes,
              status: value,
              search,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
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
          children="Active"
          value="ACTIVE"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Suspended"
          value="SUSPENDED"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Search"
        isRequired={false}
        isReadOnly={false}
        value={search}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              notes,
              status,
              search: value,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
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
        label="Total units"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={totalUnits}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              notes,
              status,
              search,
              totalUnits: value,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
            };
            const result = onChange(modelFields);
            value = result?.totalUnits ?? value;
          }
          if (errors.totalUnits?.hasError) {
            runValidationTasks("totalUnits", value);
          }
          setTotalUnits(value);
        }}
        onBlur={() => runValidationTasks("totalUnits", totalUnits)}
        errorMessage={errors.totalUnits?.errorMessage}
        hasError={errors.totalUnits?.hasError}
        {...getOverrideProps(overrides, "totalUnits")}
      ></TextField>
      <TextField
        label="Units served"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={unitsServed}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              notes,
              status,
              search,
              totalUnits,
              unitsServed: value,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
            };
            const result = onChange(modelFields);
            value = result?.unitsServed ?? value;
          }
          if (errors.unitsServed?.hasError) {
            runValidationTasks("unitsServed", value);
          }
          setUnitsServed(value);
        }}
        onBlur={() => runValidationTasks("unitsServed", unitsServed)}
        errorMessage={errors.unitsServed?.errorMessage}
        hasError={errors.unitsServed?.hasError}
        {...getOverrideProps(overrides, "unitsServed")}
      ></TextField>
      <TextField
        label="Units expected"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={unitsExpected}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              notes,
              status,
              search,
              totalUnits,
              unitsServed,
              unitsExpected: value,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
            };
            const result = onChange(modelFields);
            value = result?.unitsExpected ?? value;
          }
          if (errors.unitsExpected?.hasError) {
            runValidationTasks("unitsExpected", value);
          }
          setUnitsExpected(value);
        }}
        onBlur={() => runValidationTasks("unitsExpected", unitsExpected)}
        errorMessage={errors.unitsExpected?.errorMessage}
        hasError={errors.unitsExpected?.hasError}
        {...getOverrideProps(overrides, "unitsExpected")}
      ></TextField>
      <TextField
        label="First os date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={firstOSDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              notes,
              status,
              search,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate: value,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
            };
            const result = onChange(modelFields);
            value = result?.firstOSDate ?? value;
          }
          if (errors.firstOSDate?.hasError) {
            runValidationTasks("firstOSDate", value);
          }
          setFirstOSDate(value);
        }}
        onBlur={() => runValidationTasks("firstOSDate", firstOSDate)}
        errorMessage={errors.firstOSDate?.errorMessage}
        hasError={errors.firstOSDate?.hasError}
        {...getOverrideProps(overrides, "firstOSDate")}
      ></TextField>
      <TextField
        label="Last os date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={lastOSDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              notes,
              status,
              search,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate: value,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
            };
            const result = onChange(modelFields);
            value = result?.lastOSDate ?? value;
          }
          if (errors.lastOSDate?.hasError) {
            runValidationTasks("lastOSDate", value);
          }
          setLastOSDate(value);
        }}
        onBlur={() => runValidationTasks("lastOSDate", lastOSDate)}
        errorMessage={errors.lastOSDate?.errorMessage}
        hasError={errors.lastOSDate?.hasError}
        {...getOverrideProps(overrides, "lastOSDate")}
      ></TextField>
      <TextField
        label="Schedule routed"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={scheduleRouted}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              notes,
              status,
              search,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted: value,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
            };
            const result = onChange(modelFields);
            value = result?.scheduleRouted ?? value;
          }
          if (errors.scheduleRouted?.hasError) {
            runValidationTasks("scheduleRouted", value);
          }
          setScheduleRouted(value);
        }}
        onBlur={() => runValidationTasks("scheduleRouted", scheduleRouted)}
        errorMessage={errors.scheduleRouted?.errorMessage}
        hasError={errors.scheduleRouted?.hasError}
        {...getOverrideProps(overrides, "scheduleRouted")}
      ></TextField>
      <TextField
        label="Schedule confirmed"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={scheduleConfirmed}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              notes,
              status,
              search,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed: value,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code,
            };
            const result = onChange(modelFields);
            value = result?.scheduleConfirmed ?? value;
          }
          if (errors.scheduleConfirmed?.hasError) {
            runValidationTasks("scheduleConfirmed", value);
          }
          setScheduleConfirmed(value);
        }}
        onBlur={() =>
          runValidationTasks("scheduleConfirmed", scheduleConfirmed)
        }
        errorMessage={errors.scheduleConfirmed?.errorMessage}
        hasError={errors.scheduleConfirmed?.hasError}
        {...getOverrideProps(overrides, "scheduleConfirmed")}
      ></TextField>
      <TextField
        label="Schedule pending"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={schedulePending}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              notes,
              status,
              search,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending: value,
              totalEligibles,
              totalVaccinations,
              code,
            };
            const result = onChange(modelFields);
            value = result?.schedulePending ?? value;
          }
          if (errors.schedulePending?.hasError) {
            runValidationTasks("schedulePending", value);
          }
          setSchedulePending(value);
        }}
        onBlur={() => runValidationTasks("schedulePending", schedulePending)}
        errorMessage={errors.schedulePending?.errorMessage}
        hasError={errors.schedulePending?.hasError}
        {...getOverrideProps(overrides, "schedulePending")}
      ></TextField>
      <TextField
        label="Total eligibles"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={totalEligibles}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              notes,
              status,
              search,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles: value,
              totalVaccinations,
              code,
            };
            const result = onChange(modelFields);
            value = result?.totalEligibles ?? value;
          }
          if (errors.totalEligibles?.hasError) {
            runValidationTasks("totalEligibles", value);
          }
          setTotalEligibles(value);
        }}
        onBlur={() => runValidationTasks("totalEligibles", totalEligibles)}
        errorMessage={errors.totalEligibles?.errorMessage}
        hasError={errors.totalEligibles?.hasError}
        {...getOverrideProps(overrides, "totalEligibles")}
      ></TextField>
      <TextField
        label="Total vaccinations"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={totalVaccinations}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              notes,
              status,
              search,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations: value,
              code,
            };
            const result = onChange(modelFields);
            value = result?.totalVaccinations ?? value;
          }
          if (errors.totalVaccinations?.hasError) {
            runValidationTasks("totalVaccinations", value);
          }
          setTotalVaccinations(value);
        }}
        onBlur={() =>
          runValidationTasks("totalVaccinations", totalVaccinations)
        }
        errorMessage={errors.totalVaccinations?.errorMessage}
        hasError={errors.totalVaccinations?.hasError}
        {...getOverrideProps(overrides, "totalVaccinations")}
      ></TextField>
      <TextField
        label="Code"
        isRequired={false}
        isReadOnly={false}
        value={code}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              notes,
              status,
              search,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              schedulePending,
              totalEligibles,
              totalVaccinations,
              code: value,
            };
            const result = onChange(modelFields);
            value = result?.code ?? value;
          }
          if (errors.code?.hasError) {
            runValidationTasks("code", value);
          }
          setCode(value);
        }}
        onBlur={() => runValidationTasks("code", code)}
        errorMessage={errors.code?.errorMessage}
        hasError={errors.code?.hasError}
        {...getOverrideProps(overrides, "code")}
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
          isDisabled={!(idProp || clientModelProp)}
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
              !(idProp || clientModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
