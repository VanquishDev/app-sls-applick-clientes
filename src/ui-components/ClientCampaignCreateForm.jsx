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
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createClientCampaign } from "../graphql/mutations";
export default function ClientCampaignCreateForm(props) {
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
    name: "",
    description: "",
    clientNotes: "",
    internalNotes: "",
    totalUnits: "",
    unitsServed: "",
    unitsExpected: "",
    firstOSDate: "",
    lastOSDate: "",
    scheduleRouted: "",
    scheduleConfirmed: "",
    scheduleFinished: "",
    totalEligibles: "",
    totalEligiblesDependent: "",
    totalEligiblesThird: "",
    totalVaccinations: "",
    totalVaccinationsDependent: "",
    totalVaccinationsThird: "",
    search: "",
    responsible: "",
    number: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    createdAt: "",
    allowOffList: false,
    leafDiscount: false,
    idx: "",
    campaignCode: "",
    status: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [clientNotes, setClientNotes] = React.useState(
    initialValues.clientNotes
  );
  const [internalNotes, setInternalNotes] = React.useState(
    initialValues.internalNotes
  );
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
  const [scheduleFinished, setScheduleFinished] = React.useState(
    initialValues.scheduleFinished
  );
  const [totalEligibles, setTotalEligibles] = React.useState(
    initialValues.totalEligibles
  );
  const [totalEligiblesDependent, setTotalEligiblesDependent] = React.useState(
    initialValues.totalEligiblesDependent
  );
  const [totalEligiblesThird, setTotalEligiblesThird] = React.useState(
    initialValues.totalEligiblesThird
  );
  const [totalVaccinations, setTotalVaccinations] = React.useState(
    initialValues.totalVaccinations
  );
  const [totalVaccinationsDependent, setTotalVaccinationsDependent] =
    React.useState(initialValues.totalVaccinationsDependent);
  const [totalVaccinationsThird, setTotalVaccinationsThird] = React.useState(
    initialValues.totalVaccinationsThird
  );
  const [search, setSearch] = React.useState(initialValues.search);
  const [responsible, setResponsible] = React.useState(
    initialValues.responsible
  );
  const [number, setNumber] = React.useState(initialValues.number);
  const [contactName, setContactName] = React.useState(
    initialValues.contactName
  );
  const [contactEmail, setContactEmail] = React.useState(
    initialValues.contactEmail
  );
  const [contactPhone, setContactPhone] = React.useState(
    initialValues.contactPhone
  );
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [allowOffList, setAllowOffList] = React.useState(
    initialValues.allowOffList
  );
  const [leafDiscount, setLeafDiscount] = React.useState(
    initialValues.leafDiscount
  );
  const [idx, setIdx] = React.useState(initialValues.idx);
  const [campaignCode, setCampaignCode] = React.useState(
    initialValues.campaignCode
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setDescription(initialValues.description);
    setClientNotes(initialValues.clientNotes);
    setInternalNotes(initialValues.internalNotes);
    setTotalUnits(initialValues.totalUnits);
    setUnitsServed(initialValues.unitsServed);
    setUnitsExpected(initialValues.unitsExpected);
    setFirstOSDate(initialValues.firstOSDate);
    setLastOSDate(initialValues.lastOSDate);
    setScheduleRouted(initialValues.scheduleRouted);
    setScheduleConfirmed(initialValues.scheduleConfirmed);
    setScheduleFinished(initialValues.scheduleFinished);
    setTotalEligibles(initialValues.totalEligibles);
    setTotalEligiblesDependent(initialValues.totalEligiblesDependent);
    setTotalEligiblesThird(initialValues.totalEligiblesThird);
    setTotalVaccinations(initialValues.totalVaccinations);
    setTotalVaccinationsDependent(initialValues.totalVaccinationsDependent);
    setTotalVaccinationsThird(initialValues.totalVaccinationsThird);
    setSearch(initialValues.search);
    setResponsible(initialValues.responsible);
    setNumber(initialValues.number);
    setContactName(initialValues.contactName);
    setContactEmail(initialValues.contactEmail);
    setContactPhone(initialValues.contactPhone);
    setCreatedAt(initialValues.createdAt);
    setAllowOffList(initialValues.allowOffList);
    setLeafDiscount(initialValues.leafDiscount);
    setIdx(initialValues.idx);
    setCampaignCode(initialValues.campaignCode);
    setStatus(initialValues.status);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    description: [],
    clientNotes: [],
    internalNotes: [],
    totalUnits: [],
    unitsServed: [],
    unitsExpected: [],
    firstOSDate: [],
    lastOSDate: [],
    scheduleRouted: [],
    scheduleConfirmed: [],
    scheduleFinished: [],
    totalEligibles: [],
    totalEligiblesDependent: [],
    totalEligiblesThird: [],
    totalVaccinations: [],
    totalVaccinationsDependent: [],
    totalVaccinationsThird: [],
    search: [],
    responsible: [],
    number: [],
    contactName: [],
    contactEmail: [{ type: "Email" }],
    contactPhone: [{ type: "Phone" }],
    createdAt: [],
    allowOffList: [],
    leafDiscount: [],
    idx: [{ type: "Required" }],
    campaignCode: [{ type: "Required" }],
    status: [],
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
          name,
          description,
          clientNotes,
          internalNotes,
          totalUnits,
          unitsServed,
          unitsExpected,
          firstOSDate,
          lastOSDate,
          scheduleRouted,
          scheduleConfirmed,
          scheduleFinished,
          totalEligibles,
          totalEligiblesDependent,
          totalEligiblesThird,
          totalVaccinations,
          totalVaccinationsDependent,
          totalVaccinationsThird,
          search,
          responsible,
          number,
          contactName,
          contactEmail,
          contactPhone,
          createdAt,
          allowOffList,
          leafDiscount,
          idx,
          campaignCode,
          status,
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
            query: createClientCampaign.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "ClientCampaignCreateForm")}
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
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status,
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
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status,
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
        label="Client notes"
        isRequired={false}
        isReadOnly={false}
        value={clientNotes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              clientNotes: value,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status,
            };
            const result = onChange(modelFields);
            value = result?.clientNotes ?? value;
          }
          if (errors.clientNotes?.hasError) {
            runValidationTasks("clientNotes", value);
          }
          setClientNotes(value);
        }}
        onBlur={() => runValidationTasks("clientNotes", clientNotes)}
        errorMessage={errors.clientNotes?.errorMessage}
        hasError={errors.clientNotes?.hasError}
        {...getOverrideProps(overrides, "clientNotes")}
      ></TextField>
      <TextField
        label="Internal notes"
        isRequired={false}
        isReadOnly={false}
        value={internalNotes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              clientNotes,
              internalNotes: value,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status,
            };
            const result = onChange(modelFields);
            value = result?.internalNotes ?? value;
          }
          if (errors.internalNotes?.hasError) {
            runValidationTasks("internalNotes", value);
          }
          setInternalNotes(value);
        }}
        onBlur={() => runValidationTasks("internalNotes", internalNotes)}
        errorMessage={errors.internalNotes?.errorMessage}
        hasError={errors.internalNotes?.hasError}
        {...getOverrideProps(overrides, "internalNotes")}
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
              description,
              clientNotes,
              internalNotes,
              totalUnits: value,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status,
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
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed: value,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status,
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
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected: value,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status,
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
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate: value,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status,
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
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate: value,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status,
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
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted: value,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status,
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
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed: value,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status,
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
        label="Schedule finished"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={scheduleFinished}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished: value,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status,
            };
            const result = onChange(modelFields);
            value = result?.scheduleFinished ?? value;
          }
          if (errors.scheduleFinished?.hasError) {
            runValidationTasks("scheduleFinished", value);
          }
          setScheduleFinished(value);
        }}
        onBlur={() => runValidationTasks("scheduleFinished", scheduleFinished)}
        errorMessage={errors.scheduleFinished?.errorMessage}
        hasError={errors.scheduleFinished?.hasError}
        {...getOverrideProps(overrides, "scheduleFinished")}
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
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles: value,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status,
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
        label="Total eligibles dependent"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={totalEligiblesDependent}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent: value,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status,
            };
            const result = onChange(modelFields);
            value = result?.totalEligiblesDependent ?? value;
          }
          if (errors.totalEligiblesDependent?.hasError) {
            runValidationTasks("totalEligiblesDependent", value);
          }
          setTotalEligiblesDependent(value);
        }}
        onBlur={() =>
          runValidationTasks("totalEligiblesDependent", totalEligiblesDependent)
        }
        errorMessage={errors.totalEligiblesDependent?.errorMessage}
        hasError={errors.totalEligiblesDependent?.hasError}
        {...getOverrideProps(overrides, "totalEligiblesDependent")}
      ></TextField>
      <TextField
        label="Total eligibles third"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={totalEligiblesThird}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird: value,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status,
            };
            const result = onChange(modelFields);
            value = result?.totalEligiblesThird ?? value;
          }
          if (errors.totalEligiblesThird?.hasError) {
            runValidationTasks("totalEligiblesThird", value);
          }
          setTotalEligiblesThird(value);
        }}
        onBlur={() =>
          runValidationTasks("totalEligiblesThird", totalEligiblesThird)
        }
        errorMessage={errors.totalEligiblesThird?.errorMessage}
        hasError={errors.totalEligiblesThird?.hasError}
        {...getOverrideProps(overrides, "totalEligiblesThird")}
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
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations: value,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status,
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
        label="Total vaccinations dependent"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={totalVaccinationsDependent}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent: value,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status,
            };
            const result = onChange(modelFields);
            value = result?.totalVaccinationsDependent ?? value;
          }
          if (errors.totalVaccinationsDependent?.hasError) {
            runValidationTasks("totalVaccinationsDependent", value);
          }
          setTotalVaccinationsDependent(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "totalVaccinationsDependent",
            totalVaccinationsDependent
          )
        }
        errorMessage={errors.totalVaccinationsDependent?.errorMessage}
        hasError={errors.totalVaccinationsDependent?.hasError}
        {...getOverrideProps(overrides, "totalVaccinationsDependent")}
      ></TextField>
      <TextField
        label="Total vaccinations third"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={totalVaccinationsThird}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird: value,
              search,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status,
            };
            const result = onChange(modelFields);
            value = result?.totalVaccinationsThird ?? value;
          }
          if (errors.totalVaccinationsThird?.hasError) {
            runValidationTasks("totalVaccinationsThird", value);
          }
          setTotalVaccinationsThird(value);
        }}
        onBlur={() =>
          runValidationTasks("totalVaccinationsThird", totalVaccinationsThird)
        }
        errorMessage={errors.totalVaccinationsThird?.errorMessage}
        hasError={errors.totalVaccinationsThird?.hasError}
        {...getOverrideProps(overrides, "totalVaccinationsThird")}
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
              name,
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search: value,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status,
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
        label="Responsible"
        isRequired={false}
        isReadOnly={false}
        value={responsible}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible: value,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status,
            };
            const result = onChange(modelFields);
            value = result?.responsible ?? value;
          }
          if (errors.responsible?.hasError) {
            runValidationTasks("responsible", value);
          }
          setResponsible(value);
        }}
        onBlur={() => runValidationTasks("responsible", responsible)}
        errorMessage={errors.responsible?.errorMessage}
        hasError={errors.responsible?.hasError}
        {...getOverrideProps(overrides, "responsible")}
      ></TextField>
      <TextField
        label="Number"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={number}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number: value,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status,
            };
            const result = onChange(modelFields);
            value = result?.number ?? value;
          }
          if (errors.number?.hasError) {
            runValidationTasks("number", value);
          }
          setNumber(value);
        }}
        onBlur={() => runValidationTasks("number", number)}
        errorMessage={errors.number?.errorMessage}
        hasError={errors.number?.hasError}
        {...getOverrideProps(overrides, "number")}
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
              name,
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName: value,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status,
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
        label="Contact email"
        isRequired={false}
        isReadOnly={false}
        value={contactEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName,
              contactEmail: value,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status,
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
        label="Contact phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={contactPhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone: value,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status,
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
              name,
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt: value,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status,
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
      <SwitchField
        label="Allow off list"
        defaultChecked={false}
        isDisabled={false}
        isChecked={allowOffList}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList: value,
              leafDiscount,
              idx,
              campaignCode,
              status,
            };
            const result = onChange(modelFields);
            value = result?.allowOffList ?? value;
          }
          if (errors.allowOffList?.hasError) {
            runValidationTasks("allowOffList", value);
          }
          setAllowOffList(value);
        }}
        onBlur={() => runValidationTasks("allowOffList", allowOffList)}
        errorMessage={errors.allowOffList?.errorMessage}
        hasError={errors.allowOffList?.hasError}
        {...getOverrideProps(overrides, "allowOffList")}
      ></SwitchField>
      <SwitchField
        label="Leaf discount"
        defaultChecked={false}
        isDisabled={false}
        isChecked={leafDiscount}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount: value,
              idx,
              campaignCode,
              status,
            };
            const result = onChange(modelFields);
            value = result?.leafDiscount ?? value;
          }
          if (errors.leafDiscount?.hasError) {
            runValidationTasks("leafDiscount", value);
          }
          setLeafDiscount(value);
        }}
        onBlur={() => runValidationTasks("leafDiscount", leafDiscount)}
        errorMessage={errors.leafDiscount?.errorMessage}
        hasError={errors.leafDiscount?.hasError}
        {...getOverrideProps(overrides, "leafDiscount")}
      ></SwitchField>
      <TextField
        label="Idx"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={idx}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx: value,
              campaignCode,
              status,
            };
            const result = onChange(modelFields);
            value = result?.idx ?? value;
          }
          if (errors.idx?.hasError) {
            runValidationTasks("idx", value);
          }
          setIdx(value);
        }}
        onBlur={() => runValidationTasks("idx", idx)}
        errorMessage={errors.idx?.errorMessage}
        hasError={errors.idx?.hasError}
        {...getOverrideProps(overrides, "idx")}
      ></TextField>
      <TextField
        label="Campaign code"
        isRequired={true}
        isReadOnly={false}
        value={campaignCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode: value,
              status,
            };
            const result = onChange(modelFields);
            value = result?.campaignCode ?? value;
          }
          if (errors.campaignCode?.hasError) {
            runValidationTasks("campaignCode", value);
          }
          setCampaignCode(value);
        }}
        onBlur={() => runValidationTasks("campaignCode", campaignCode)}
        errorMessage={errors.campaignCode?.errorMessage}
        hasError={errors.campaignCode?.hasError}
        {...getOverrideProps(overrides, "campaignCode")}
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
              description,
              clientNotes,
              internalNotes,
              totalUnits,
              unitsServed,
              unitsExpected,
              firstOSDate,
              lastOSDate,
              scheduleRouted,
              scheduleConfirmed,
              scheduleFinished,
              totalEligibles,
              totalEligiblesDependent,
              totalEligiblesThird,
              totalVaccinations,
              totalVaccinationsDependent,
              totalVaccinationsThird,
              search,
              responsible,
              number,
              contactName,
              contactEmail,
              contactPhone,
              createdAt,
              allowOffList,
              leafDiscount,
              idx,
              campaignCode,
              status: value,
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
          children="Proposal"
          value="PROPOSAL"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Released"
          value="RELEASED"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Service"
          value="SERVICE"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
        <option
          children="Finished"
          value="FINISHED"
          {...getOverrideProps(overrides, "statusoption3")}
        ></option>
        <option
          children="Invoiced"
          value="INVOICED"
          {...getOverrideProps(overrides, "statusoption4")}
        ></option>
        <option
          children="Completed"
          value="COMPLETED"
          {...getOverrideProps(overrides, "statusoption5")}
        ></option>
        <option
          children="Canceled"
          value="CANCELED"
          {...getOverrideProps(overrides, "statusoption6")}
        ></option>
        <option
          children="Suspended"
          value="SUSPENDED"
          {...getOverrideProps(overrides, "statusoption7")}
        ></option>
        <option
          children="Roterized"
          value="ROTERIZED"
          {...getOverrideProps(overrides, "statusoption8")}
        ></option>
        <option
          children="Scheduled"
          value="SCHEDULED"
          {...getOverrideProps(overrides, "statusoption9")}
        ></option>
        <option
          children="Standby"
          value="STANDBY"
          {...getOverrideProps(overrides, "statusoption10")}
        ></option>
        <option
          children="Started"
          value="STARTED"
          {...getOverrideProps(overrides, "statusoption11")}
        ></option>
      </SelectField>
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
