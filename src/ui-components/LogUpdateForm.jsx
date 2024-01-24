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
import { getLog } from "../graphql/queries";
import { updateLog } from "../graphql/mutations";
export default function LogUpdateForm(props) {
  const {
    id: idProp,
    log: logModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    tag: "",
    source: "",
    notes: "",
    message: "",
    page: "",
    manufacturer: "",
    model: "",
    osName: "",
    osVersion: "",
    platform: "",
    uuid: "",
    ip: "",
    city: "",
    region: "",
    country: "",
    provider: "",
    lat: "",
    lng: "",
    createdAt: "",
  };
  const [tag, setTag] = React.useState(initialValues.tag);
  const [source, setSource] = React.useState(initialValues.source);
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [message, setMessage] = React.useState(initialValues.message);
  const [page, setPage] = React.useState(initialValues.page);
  const [manufacturer, setManufacturer] = React.useState(
    initialValues.manufacturer
  );
  const [model, setModel] = React.useState(initialValues.model);
  const [osName, setOsName] = React.useState(initialValues.osName);
  const [osVersion, setOsVersion] = React.useState(initialValues.osVersion);
  const [platform, setPlatform] = React.useState(initialValues.platform);
  const [uuid, setUuid] = React.useState(initialValues.uuid);
  const [ip, setIp] = React.useState(initialValues.ip);
  const [city, setCity] = React.useState(initialValues.city);
  const [region, setRegion] = React.useState(initialValues.region);
  const [country, setCountry] = React.useState(initialValues.country);
  const [provider, setProvider] = React.useState(initialValues.provider);
  const [lat, setLat] = React.useState(initialValues.lat);
  const [lng, setLng] = React.useState(initialValues.lng);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = logRecord
      ? { ...initialValues, ...logRecord }
      : initialValues;
    setTag(cleanValues.tag);
    setSource(cleanValues.source);
    setNotes(cleanValues.notes);
    setMessage(cleanValues.message);
    setPage(cleanValues.page);
    setManufacturer(cleanValues.manufacturer);
    setModel(cleanValues.model);
    setOsName(cleanValues.osName);
    setOsVersion(cleanValues.osVersion);
    setPlatform(cleanValues.platform);
    setUuid(cleanValues.uuid);
    setIp(cleanValues.ip);
    setCity(cleanValues.city);
    setRegion(cleanValues.region);
    setCountry(cleanValues.country);
    setProvider(cleanValues.provider);
    setLat(cleanValues.lat);
    setLng(cleanValues.lng);
    setCreatedAt(cleanValues.createdAt);
    setErrors({});
  };
  const [logRecord, setLogRecord] = React.useState(logModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getLog.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getLog
        : logModelProp;
      setLogRecord(record);
    };
    queryData();
  }, [idProp, logModelProp]);
  React.useEffect(resetStateValues, [logRecord]);
  const validations = {
    tag: [{ type: "Required" }],
    source: [{ type: "Required" }],
    notes: [],
    message: [],
    page: [],
    manufacturer: [],
    model: [],
    osName: [],
    osVersion: [],
    platform: [],
    uuid: [],
    ip: [],
    city: [],
    region: [],
    country: [],
    provider: [],
    lat: [],
    lng: [],
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
          tag,
          source,
          notes: notes ?? null,
          message: message ?? null,
          page: page ?? null,
          manufacturer: manufacturer ?? null,
          model: model ?? null,
          osName: osName ?? null,
          osVersion: osVersion ?? null,
          platform: platform ?? null,
          uuid: uuid ?? null,
          ip: ip ?? null,
          city: city ?? null,
          region: region ?? null,
          country: country ?? null,
          provider: provider ?? null,
          lat: lat ?? null,
          lng: lng ?? null,
          createdAt: createdAt ?? null,
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
            query: updateLog.replaceAll("__typename", ""),
            variables: {
              input: {
                id: logRecord.id,
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
      {...getOverrideProps(overrides, "LogUpdateForm")}
      {...rest}
    >
      <TextField
        label="Tag"
        isRequired={true}
        isReadOnly={false}
        value={tag}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tag: value,
              source,
              notes,
              message,
              page,
              manufacturer,
              model,
              osName,
              osVersion,
              platform,
              uuid,
              ip,
              city,
              region,
              country,
              provider,
              lat,
              lng,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.tag ?? value;
          }
          if (errors.tag?.hasError) {
            runValidationTasks("tag", value);
          }
          setTag(value);
        }}
        onBlur={() => runValidationTasks("tag", tag)}
        errorMessage={errors.tag?.errorMessage}
        hasError={errors.tag?.hasError}
        {...getOverrideProps(overrides, "tag")}
      ></TextField>
      <SelectField
        label="Source"
        placeholder="Please select an option"
        isDisabled={false}
        value={source}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tag,
              source: value,
              notes,
              message,
              page,
              manufacturer,
              model,
              osName,
              osVersion,
              platform,
              uuid,
              ip,
              city,
              region,
              country,
              provider,
              lat,
              lng,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.source ?? value;
          }
          if (errors.source?.hasError) {
            runValidationTasks("source", value);
          }
          setSource(value);
        }}
        onBlur={() => runValidationTasks("source", source)}
        errorMessage={errors.source?.errorMessage}
        hasError={errors.source?.hasError}
        {...getOverrideProps(overrides, "source")}
      >
        <option
          children="App"
          value="APP"
          {...getOverrideProps(overrides, "sourceoption0")}
        ></option>
      </SelectField>
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tag,
              source,
              notes: value,
              message,
              page,
              manufacturer,
              model,
              osName,
              osVersion,
              platform,
              uuid,
              ip,
              city,
              region,
              country,
              provider,
              lat,
              lng,
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
        label="Message"
        isRequired={false}
        isReadOnly={false}
        value={message}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tag,
              source,
              notes,
              message: value,
              page,
              manufacturer,
              model,
              osName,
              osVersion,
              platform,
              uuid,
              ip,
              city,
              region,
              country,
              provider,
              lat,
              lng,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.message ?? value;
          }
          if (errors.message?.hasError) {
            runValidationTasks("message", value);
          }
          setMessage(value);
        }}
        onBlur={() => runValidationTasks("message", message)}
        errorMessage={errors.message?.errorMessage}
        hasError={errors.message?.hasError}
        {...getOverrideProps(overrides, "message")}
      ></TextField>
      <TextField
        label="Page"
        isRequired={false}
        isReadOnly={false}
        value={page}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tag,
              source,
              notes,
              message,
              page: value,
              manufacturer,
              model,
              osName,
              osVersion,
              platform,
              uuid,
              ip,
              city,
              region,
              country,
              provider,
              lat,
              lng,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.page ?? value;
          }
          if (errors.page?.hasError) {
            runValidationTasks("page", value);
          }
          setPage(value);
        }}
        onBlur={() => runValidationTasks("page", page)}
        errorMessage={errors.page?.errorMessage}
        hasError={errors.page?.hasError}
        {...getOverrideProps(overrides, "page")}
      ></TextField>
      <TextField
        label="Manufacturer"
        isRequired={false}
        isReadOnly={false}
        value={manufacturer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tag,
              source,
              notes,
              message,
              page,
              manufacturer: value,
              model,
              osName,
              osVersion,
              platform,
              uuid,
              ip,
              city,
              region,
              country,
              provider,
              lat,
              lng,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.manufacturer ?? value;
          }
          if (errors.manufacturer?.hasError) {
            runValidationTasks("manufacturer", value);
          }
          setManufacturer(value);
        }}
        onBlur={() => runValidationTasks("manufacturer", manufacturer)}
        errorMessage={errors.manufacturer?.errorMessage}
        hasError={errors.manufacturer?.hasError}
        {...getOverrideProps(overrides, "manufacturer")}
      ></TextField>
      <TextField
        label="Model"
        isRequired={false}
        isReadOnly={false}
        value={model}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tag,
              source,
              notes,
              message,
              page,
              manufacturer,
              model: value,
              osName,
              osVersion,
              platform,
              uuid,
              ip,
              city,
              region,
              country,
              provider,
              lat,
              lng,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.model ?? value;
          }
          if (errors.model?.hasError) {
            runValidationTasks("model", value);
          }
          setModel(value);
        }}
        onBlur={() => runValidationTasks("model", model)}
        errorMessage={errors.model?.errorMessage}
        hasError={errors.model?.hasError}
        {...getOverrideProps(overrides, "model")}
      ></TextField>
      <TextField
        label="Os name"
        isRequired={false}
        isReadOnly={false}
        value={osName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tag,
              source,
              notes,
              message,
              page,
              manufacturer,
              model,
              osName: value,
              osVersion,
              platform,
              uuid,
              ip,
              city,
              region,
              country,
              provider,
              lat,
              lng,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.osName ?? value;
          }
          if (errors.osName?.hasError) {
            runValidationTasks("osName", value);
          }
          setOsName(value);
        }}
        onBlur={() => runValidationTasks("osName", osName)}
        errorMessage={errors.osName?.errorMessage}
        hasError={errors.osName?.hasError}
        {...getOverrideProps(overrides, "osName")}
      ></TextField>
      <TextField
        label="Os version"
        isRequired={false}
        isReadOnly={false}
        value={osVersion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tag,
              source,
              notes,
              message,
              page,
              manufacturer,
              model,
              osName,
              osVersion: value,
              platform,
              uuid,
              ip,
              city,
              region,
              country,
              provider,
              lat,
              lng,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.osVersion ?? value;
          }
          if (errors.osVersion?.hasError) {
            runValidationTasks("osVersion", value);
          }
          setOsVersion(value);
        }}
        onBlur={() => runValidationTasks("osVersion", osVersion)}
        errorMessage={errors.osVersion?.errorMessage}
        hasError={errors.osVersion?.hasError}
        {...getOverrideProps(overrides, "osVersion")}
      ></TextField>
      <TextField
        label="Platform"
        isRequired={false}
        isReadOnly={false}
        value={platform}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tag,
              source,
              notes,
              message,
              page,
              manufacturer,
              model,
              osName,
              osVersion,
              platform: value,
              uuid,
              ip,
              city,
              region,
              country,
              provider,
              lat,
              lng,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.platform ?? value;
          }
          if (errors.platform?.hasError) {
            runValidationTasks("platform", value);
          }
          setPlatform(value);
        }}
        onBlur={() => runValidationTasks("platform", platform)}
        errorMessage={errors.platform?.errorMessage}
        hasError={errors.platform?.hasError}
        {...getOverrideProps(overrides, "platform")}
      ></TextField>
      <TextField
        label="Uuid"
        isRequired={false}
        isReadOnly={false}
        value={uuid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tag,
              source,
              notes,
              message,
              page,
              manufacturer,
              model,
              osName,
              osVersion,
              platform,
              uuid: value,
              ip,
              city,
              region,
              country,
              provider,
              lat,
              lng,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.uuid ?? value;
          }
          if (errors.uuid?.hasError) {
            runValidationTasks("uuid", value);
          }
          setUuid(value);
        }}
        onBlur={() => runValidationTasks("uuid", uuid)}
        errorMessage={errors.uuid?.errorMessage}
        hasError={errors.uuid?.hasError}
        {...getOverrideProps(overrides, "uuid")}
      ></TextField>
      <TextField
        label="Ip"
        isRequired={false}
        isReadOnly={false}
        value={ip}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tag,
              source,
              notes,
              message,
              page,
              manufacturer,
              model,
              osName,
              osVersion,
              platform,
              uuid,
              ip: value,
              city,
              region,
              country,
              provider,
              lat,
              lng,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.ip ?? value;
          }
          if (errors.ip?.hasError) {
            runValidationTasks("ip", value);
          }
          setIp(value);
        }}
        onBlur={() => runValidationTasks("ip", ip)}
        errorMessage={errors.ip?.errorMessage}
        hasError={errors.ip?.hasError}
        {...getOverrideProps(overrides, "ip")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tag,
              source,
              notes,
              message,
              page,
              manufacturer,
              model,
              osName,
              osVersion,
              platform,
              uuid,
              ip,
              city: value,
              region,
              country,
              provider,
              lat,
              lng,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="Region"
        isRequired={false}
        isReadOnly={false}
        value={region}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tag,
              source,
              notes,
              message,
              page,
              manufacturer,
              model,
              osName,
              osVersion,
              platform,
              uuid,
              ip,
              city,
              region: value,
              country,
              provider,
              lat,
              lng,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.region ?? value;
          }
          if (errors.region?.hasError) {
            runValidationTasks("region", value);
          }
          setRegion(value);
        }}
        onBlur={() => runValidationTasks("region", region)}
        errorMessage={errors.region?.errorMessage}
        hasError={errors.region?.hasError}
        {...getOverrideProps(overrides, "region")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tag,
              source,
              notes,
              message,
              page,
              manufacturer,
              model,
              osName,
              osVersion,
              platform,
              uuid,
              ip,
              city,
              region,
              country: value,
              provider,
              lat,
              lng,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
      ></TextField>
      <TextField
        label="Provider"
        isRequired={false}
        isReadOnly={false}
        value={provider}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tag,
              source,
              notes,
              message,
              page,
              manufacturer,
              model,
              osName,
              osVersion,
              platform,
              uuid,
              ip,
              city,
              region,
              country,
              provider: value,
              lat,
              lng,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.provider ?? value;
          }
          if (errors.provider?.hasError) {
            runValidationTasks("provider", value);
          }
          setProvider(value);
        }}
        onBlur={() => runValidationTasks("provider", provider)}
        errorMessage={errors.provider?.errorMessage}
        hasError={errors.provider?.hasError}
        {...getOverrideProps(overrides, "provider")}
      ></TextField>
      <TextField
        label="Lat"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={lat}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              tag,
              source,
              notes,
              message,
              page,
              manufacturer,
              model,
              osName,
              osVersion,
              platform,
              uuid,
              ip,
              city,
              region,
              country,
              provider,
              lat: value,
              lng,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.lat ?? value;
          }
          if (errors.lat?.hasError) {
            runValidationTasks("lat", value);
          }
          setLat(value);
        }}
        onBlur={() => runValidationTasks("lat", lat)}
        errorMessage={errors.lat?.errorMessage}
        hasError={errors.lat?.hasError}
        {...getOverrideProps(overrides, "lat")}
      ></TextField>
      <TextField
        label="Lng"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={lng}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              tag,
              source,
              notes,
              message,
              page,
              manufacturer,
              model,
              osName,
              osVersion,
              platform,
              uuid,
              ip,
              city,
              region,
              country,
              provider,
              lat,
              lng: value,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.lng ?? value;
          }
          if (errors.lng?.hasError) {
            runValidationTasks("lng", value);
          }
          setLng(value);
        }}
        onBlur={() => runValidationTasks("lng", lng)}
        errorMessage={errors.lng?.errorMessage}
        hasError={errors.lng?.hasError}
        {...getOverrideProps(overrides, "lng")}
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
              tag,
              source,
              notes,
              message,
              page,
              manufacturer,
              model,
              osName,
              osVersion,
              platform,
              uuid,
              ip,
              city,
              region,
              country,
              provider,
              lat,
              lng,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || logModelProp)}
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
              !(idProp || logModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
