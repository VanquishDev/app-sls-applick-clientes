/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getCompany } from "../graphql/queries";
import { updateCompany } from "../graphql/mutations";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function CompanyUpdateForm(props) {
  const {
    id: idProp,
    company: companyModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    cnpj: "",
    name: "",
    openingHours: "",
    phones: "",
    street: "",
    number: "",
    complement: "",
    zipcode: "",
    neighborhood: "",
    city: "",
    state: "",
    country: "",
    search: "",
    enableRetail: "",
    schedulesSunday: [],
    schedulesMonday: [],
    schedulesTuesday: [],
    schedulesWednesday: [],
    schedulesThursday: [],
    schedulesFriday: [],
    schedulesSaturday: [],
    status: "",
  };
  const [cnpj, setCnpj] = React.useState(initialValues.cnpj);
  const [name, setName] = React.useState(initialValues.name);
  const [openingHours, setOpeningHours] = React.useState(
    initialValues.openingHours
  );
  const [phones, setPhones] = React.useState(initialValues.phones);
  const [street, setStreet] = React.useState(initialValues.street);
  const [number, setNumber] = React.useState(initialValues.number);
  const [complement, setComplement] = React.useState(initialValues.complement);
  const [zipcode, setZipcode] = React.useState(initialValues.zipcode);
  const [neighborhood, setNeighborhood] = React.useState(
    initialValues.neighborhood
  );
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [country, setCountry] = React.useState(initialValues.country);
  const [search, setSearch] = React.useState(initialValues.search);
  const [enableRetail, setEnableRetail] = React.useState(
    initialValues.enableRetail
  );
  const [schedulesSunday, setSchedulesSunday] = React.useState(
    initialValues.schedulesSunday
  );
  const [schedulesMonday, setSchedulesMonday] = React.useState(
    initialValues.schedulesMonday
  );
  const [schedulesTuesday, setSchedulesTuesday] = React.useState(
    initialValues.schedulesTuesday
  );
  const [schedulesWednesday, setSchedulesWednesday] = React.useState(
    initialValues.schedulesWednesday
  );
  const [schedulesThursday, setSchedulesThursday] = React.useState(
    initialValues.schedulesThursday
  );
  const [schedulesFriday, setSchedulesFriday] = React.useState(
    initialValues.schedulesFriday
  );
  const [schedulesSaturday, setSchedulesSaturday] = React.useState(
    initialValues.schedulesSaturday
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = companyRecord
      ? { ...initialValues, ...companyRecord }
      : initialValues;
    setCnpj(cleanValues.cnpj);
    setName(cleanValues.name);
    setOpeningHours(cleanValues.openingHours);
    setPhones(cleanValues.phones);
    setStreet(cleanValues.street);
    setNumber(cleanValues.number);
    setComplement(cleanValues.complement);
    setZipcode(cleanValues.zipcode);
    setNeighborhood(cleanValues.neighborhood);
    setCity(cleanValues.city);
    setState(cleanValues.state);
    setCountry(cleanValues.country);
    setSearch(cleanValues.search);
    setEnableRetail(cleanValues.enableRetail);
    setSchedulesSunday(cleanValues.schedulesSunday ?? []);
    setCurrentSchedulesSundayValue("");
    setSchedulesMonday(cleanValues.schedulesMonday ?? []);
    setCurrentSchedulesMondayValue("");
    setSchedulesTuesday(cleanValues.schedulesTuesday ?? []);
    setCurrentSchedulesTuesdayValue("");
    setSchedulesWednesday(cleanValues.schedulesWednesday ?? []);
    setCurrentSchedulesWednesdayValue("");
    setSchedulesThursday(cleanValues.schedulesThursday ?? []);
    setCurrentSchedulesThursdayValue("");
    setSchedulesFriday(cleanValues.schedulesFriday ?? []);
    setCurrentSchedulesFridayValue("");
    setSchedulesSaturday(cleanValues.schedulesSaturday ?? []);
    setCurrentSchedulesSaturdayValue("");
    setStatus(cleanValues.status);
    setErrors({});
  };
  const [companyRecord, setCompanyRecord] = React.useState(companyModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getCompany.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCompany
        : companyModelProp;
      setCompanyRecord(record);
    };
    queryData();
  }, [idProp, companyModelProp]);
  React.useEffect(resetStateValues, [companyRecord]);
  const [currentSchedulesSundayValue, setCurrentSchedulesSundayValue] =
    React.useState("");
  const schedulesSundayRef = React.createRef();
  const [currentSchedulesMondayValue, setCurrentSchedulesMondayValue] =
    React.useState("");
  const schedulesMondayRef = React.createRef();
  const [currentSchedulesTuesdayValue, setCurrentSchedulesTuesdayValue] =
    React.useState("");
  const schedulesTuesdayRef = React.createRef();
  const [currentSchedulesWednesdayValue, setCurrentSchedulesWednesdayValue] =
    React.useState("");
  const schedulesWednesdayRef = React.createRef();
  const [currentSchedulesThursdayValue, setCurrentSchedulesThursdayValue] =
    React.useState("");
  const schedulesThursdayRef = React.createRef();
  const [currentSchedulesFridayValue, setCurrentSchedulesFridayValue] =
    React.useState("");
  const schedulesFridayRef = React.createRef();
  const [currentSchedulesSaturdayValue, setCurrentSchedulesSaturdayValue] =
    React.useState("");
  const schedulesSaturdayRef = React.createRef();
  const validations = {
    cnpj: [{ type: "Required" }],
    name: [{ type: "Required" }],
    openingHours: [],
    phones: [],
    street: [],
    number: [],
    complement: [],
    zipcode: [],
    neighborhood: [],
    city: [],
    state: [],
    country: [],
    search: [],
    enableRetail: [],
    schedulesSunday: [],
    schedulesMonday: [],
    schedulesTuesday: [],
    schedulesWednesday: [],
    schedulesThursday: [],
    schedulesFriday: [],
    schedulesSaturday: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          cnpj,
          name,
          openingHours: openingHours ?? null,
          phones: phones ?? null,
          street: street ?? null,
          number: number ?? null,
          complement: complement ?? null,
          zipcode: zipcode ?? null,
          neighborhood: neighborhood ?? null,
          city: city ?? null,
          state: state ?? null,
          country: country ?? null,
          search: search ?? null,
          enableRetail: enableRetail ?? null,
          schedulesSunday: schedulesSunday ?? null,
          schedulesMonday: schedulesMonday ?? null,
          schedulesTuesday: schedulesTuesday ?? null,
          schedulesWednesday: schedulesWednesday ?? null,
          schedulesThursday: schedulesThursday ?? null,
          schedulesFriday: schedulesFriday ?? null,
          schedulesSaturday: schedulesSaturday ?? null,
          status: status ?? null,
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
            query: updateCompany.replaceAll("__typename", ""),
            variables: {
              input: {
                id: companyRecord.id,
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
      {...getOverrideProps(overrides, "CompanyUpdateForm")}
      {...rest}
    >
      <TextField
        label="Cnpj"
        isRequired={true}
        isReadOnly={false}
        value={cnpj}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cnpj: value,
              name,
              openingHours,
              phones,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              search,
              enableRetail,
              schedulesSunday,
              schedulesMonday,
              schedulesTuesday,
              schedulesWednesday,
              schedulesThursday,
              schedulesFriday,
              schedulesSaturday,
              status,
            };
            const result = onChange(modelFields);
            value = result?.cnpj ?? value;
          }
          if (errors.cnpj?.hasError) {
            runValidationTasks("cnpj", value);
          }
          setCnpj(value);
        }}
        onBlur={() => runValidationTasks("cnpj", cnpj)}
        errorMessage={errors.cnpj?.errorMessage}
        hasError={errors.cnpj?.hasError}
        {...getOverrideProps(overrides, "cnpj")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cnpj,
              name: value,
              openingHours,
              phones,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              search,
              enableRetail,
              schedulesSunday,
              schedulesMonday,
              schedulesTuesday,
              schedulesWednesday,
              schedulesThursday,
              schedulesFriday,
              schedulesSaturday,
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
        label="Opening hours"
        isRequired={false}
        isReadOnly={false}
        value={openingHours}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cnpj,
              name,
              openingHours: value,
              phones,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              search,
              enableRetail,
              schedulesSunday,
              schedulesMonday,
              schedulesTuesday,
              schedulesWednesday,
              schedulesThursday,
              schedulesFriday,
              schedulesSaturday,
              status,
            };
            const result = onChange(modelFields);
            value = result?.openingHours ?? value;
          }
          if (errors.openingHours?.hasError) {
            runValidationTasks("openingHours", value);
          }
          setOpeningHours(value);
        }}
        onBlur={() => runValidationTasks("openingHours", openingHours)}
        errorMessage={errors.openingHours?.errorMessage}
        hasError={errors.openingHours?.hasError}
        {...getOverrideProps(overrides, "openingHours")}
      ></TextField>
      <TextField
        label="Phones"
        isRequired={false}
        isReadOnly={false}
        value={phones}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cnpj,
              name,
              openingHours,
              phones: value,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              search,
              enableRetail,
              schedulesSunday,
              schedulesMonday,
              schedulesTuesday,
              schedulesWednesday,
              schedulesThursday,
              schedulesFriday,
              schedulesSaturday,
              status,
            };
            const result = onChange(modelFields);
            value = result?.phones ?? value;
          }
          if (errors.phones?.hasError) {
            runValidationTasks("phones", value);
          }
          setPhones(value);
        }}
        onBlur={() => runValidationTasks("phones", phones)}
        errorMessage={errors.phones?.errorMessage}
        hasError={errors.phones?.hasError}
        {...getOverrideProps(overrides, "phones")}
      ></TextField>
      <TextField
        label="Street"
        isRequired={false}
        isReadOnly={false}
        value={street}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cnpj,
              name,
              openingHours,
              phones,
              street: value,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              search,
              enableRetail,
              schedulesSunday,
              schedulesMonday,
              schedulesTuesday,
              schedulesWednesday,
              schedulesThursday,
              schedulesFriday,
              schedulesSaturday,
              status,
            };
            const result = onChange(modelFields);
            value = result?.street ?? value;
          }
          if (errors.street?.hasError) {
            runValidationTasks("street", value);
          }
          setStreet(value);
        }}
        onBlur={() => runValidationTasks("street", street)}
        errorMessage={errors.street?.errorMessage}
        hasError={errors.street?.hasError}
        {...getOverrideProps(overrides, "street")}
      ></TextField>
      <TextField
        label="Number"
        isRequired={false}
        isReadOnly={false}
        value={number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cnpj,
              name,
              openingHours,
              phones,
              street,
              number: value,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              search,
              enableRetail,
              schedulesSunday,
              schedulesMonday,
              schedulesTuesday,
              schedulesWednesday,
              schedulesThursday,
              schedulesFriday,
              schedulesSaturday,
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
        label="Complement"
        isRequired={false}
        isReadOnly={false}
        value={complement}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cnpj,
              name,
              openingHours,
              phones,
              street,
              number,
              complement: value,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              search,
              enableRetail,
              schedulesSunday,
              schedulesMonday,
              schedulesTuesday,
              schedulesWednesday,
              schedulesThursday,
              schedulesFriday,
              schedulesSaturday,
              status,
            };
            const result = onChange(modelFields);
            value = result?.complement ?? value;
          }
          if (errors.complement?.hasError) {
            runValidationTasks("complement", value);
          }
          setComplement(value);
        }}
        onBlur={() => runValidationTasks("complement", complement)}
        errorMessage={errors.complement?.errorMessage}
        hasError={errors.complement?.hasError}
        {...getOverrideProps(overrides, "complement")}
      ></TextField>
      <TextField
        label="Zipcode"
        isRequired={false}
        isReadOnly={false}
        value={zipcode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cnpj,
              name,
              openingHours,
              phones,
              street,
              number,
              complement,
              zipcode: value,
              neighborhood,
              city,
              state,
              country,
              search,
              enableRetail,
              schedulesSunday,
              schedulesMonday,
              schedulesTuesday,
              schedulesWednesday,
              schedulesThursday,
              schedulesFriday,
              schedulesSaturday,
              status,
            };
            const result = onChange(modelFields);
            value = result?.zipcode ?? value;
          }
          if (errors.zipcode?.hasError) {
            runValidationTasks("zipcode", value);
          }
          setZipcode(value);
        }}
        onBlur={() => runValidationTasks("zipcode", zipcode)}
        errorMessage={errors.zipcode?.errorMessage}
        hasError={errors.zipcode?.hasError}
        {...getOverrideProps(overrides, "zipcode")}
      ></TextField>
      <TextField
        label="Neighborhood"
        isRequired={false}
        isReadOnly={false}
        value={neighborhood}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cnpj,
              name,
              openingHours,
              phones,
              street,
              number,
              complement,
              zipcode,
              neighborhood: value,
              city,
              state,
              country,
              search,
              enableRetail,
              schedulesSunday,
              schedulesMonday,
              schedulesTuesday,
              schedulesWednesday,
              schedulesThursday,
              schedulesFriday,
              schedulesSaturday,
              status,
            };
            const result = onChange(modelFields);
            value = result?.neighborhood ?? value;
          }
          if (errors.neighborhood?.hasError) {
            runValidationTasks("neighborhood", value);
          }
          setNeighborhood(value);
        }}
        onBlur={() => runValidationTasks("neighborhood", neighborhood)}
        errorMessage={errors.neighborhood?.errorMessage}
        hasError={errors.neighborhood?.hasError}
        {...getOverrideProps(overrides, "neighborhood")}
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
              cnpj,
              name,
              openingHours,
              phones,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city: value,
              state,
              country,
              search,
              enableRetail,
              schedulesSunday,
              schedulesMonday,
              schedulesTuesday,
              schedulesWednesday,
              schedulesThursday,
              schedulesFriday,
              schedulesSaturday,
              status,
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
        label="State"
        isRequired={false}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cnpj,
              name,
              openingHours,
              phones,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state: value,
              country,
              search,
              enableRetail,
              schedulesSunday,
              schedulesMonday,
              schedulesTuesday,
              schedulesWednesday,
              schedulesThursday,
              schedulesFriday,
              schedulesSaturday,
              status,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
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
              cnpj,
              name,
              openingHours,
              phones,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country: value,
              search,
              enableRetail,
              schedulesSunday,
              schedulesMonday,
              schedulesTuesday,
              schedulesWednesday,
              schedulesThursday,
              schedulesFriday,
              schedulesSaturday,
              status,
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
        label="Search"
        isRequired={false}
        isReadOnly={false}
        value={search}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cnpj,
              name,
              openingHours,
              phones,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              search: value,
              enableRetail,
              schedulesSunday,
              schedulesMonday,
              schedulesTuesday,
              schedulesWednesday,
              schedulesThursday,
              schedulesFriday,
              schedulesSaturday,
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
        label="Enable retail"
        isRequired={false}
        isReadOnly={false}
        value={enableRetail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cnpj,
              name,
              openingHours,
              phones,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              search,
              enableRetail: value,
              schedulesSunday,
              schedulesMonday,
              schedulesTuesday,
              schedulesWednesday,
              schedulesThursday,
              schedulesFriday,
              schedulesSaturday,
              status,
            };
            const result = onChange(modelFields);
            value = result?.enableRetail ?? value;
          }
          if (errors.enableRetail?.hasError) {
            runValidationTasks("enableRetail", value);
          }
          setEnableRetail(value);
        }}
        onBlur={() => runValidationTasks("enableRetail", enableRetail)}
        errorMessage={errors.enableRetail?.errorMessage}
        hasError={errors.enableRetail?.hasError}
        {...getOverrideProps(overrides, "enableRetail")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              cnpj,
              name,
              openingHours,
              phones,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              search,
              enableRetail,
              schedulesSunday: values,
              schedulesMonday,
              schedulesTuesday,
              schedulesWednesday,
              schedulesThursday,
              schedulesFriday,
              schedulesSaturday,
              status,
            };
            const result = onChange(modelFields);
            values = result?.schedulesSunday ?? values;
          }
          setSchedulesSunday(values);
          setCurrentSchedulesSundayValue("");
        }}
        currentFieldValue={currentSchedulesSundayValue}
        label={"Schedules sunday"}
        items={schedulesSunday}
        hasError={errors?.schedulesSunday?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "schedulesSunday",
            currentSchedulesSundayValue
          )
        }
        errorMessage={errors?.schedulesSunday?.errorMessage}
        setFieldValue={setCurrentSchedulesSundayValue}
        inputFieldRef={schedulesSundayRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Schedules sunday"
          isRequired={false}
          isReadOnly={false}
          value={currentSchedulesSundayValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.schedulesSunday?.hasError) {
              runValidationTasks("schedulesSunday", value);
            }
            setCurrentSchedulesSundayValue(value);
          }}
          onBlur={() =>
            runValidationTasks("schedulesSunday", currentSchedulesSundayValue)
          }
          errorMessage={errors.schedulesSunday?.errorMessage}
          hasError={errors.schedulesSunday?.hasError}
          ref={schedulesSundayRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "schedulesSunday")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              cnpj,
              name,
              openingHours,
              phones,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              search,
              enableRetail,
              schedulesSunday,
              schedulesMonday: values,
              schedulesTuesday,
              schedulesWednesday,
              schedulesThursday,
              schedulesFriday,
              schedulesSaturday,
              status,
            };
            const result = onChange(modelFields);
            values = result?.schedulesMonday ?? values;
          }
          setSchedulesMonday(values);
          setCurrentSchedulesMondayValue("");
        }}
        currentFieldValue={currentSchedulesMondayValue}
        label={"Schedules monday"}
        items={schedulesMonday}
        hasError={errors?.schedulesMonday?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "schedulesMonday",
            currentSchedulesMondayValue
          )
        }
        errorMessage={errors?.schedulesMonday?.errorMessage}
        setFieldValue={setCurrentSchedulesMondayValue}
        inputFieldRef={schedulesMondayRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Schedules monday"
          isRequired={false}
          isReadOnly={false}
          value={currentSchedulesMondayValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.schedulesMonday?.hasError) {
              runValidationTasks("schedulesMonday", value);
            }
            setCurrentSchedulesMondayValue(value);
          }}
          onBlur={() =>
            runValidationTasks("schedulesMonday", currentSchedulesMondayValue)
          }
          errorMessage={errors.schedulesMonday?.errorMessage}
          hasError={errors.schedulesMonday?.hasError}
          ref={schedulesMondayRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "schedulesMonday")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              cnpj,
              name,
              openingHours,
              phones,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              search,
              enableRetail,
              schedulesSunday,
              schedulesMonday,
              schedulesTuesday: values,
              schedulesWednesday,
              schedulesThursday,
              schedulesFriday,
              schedulesSaturday,
              status,
            };
            const result = onChange(modelFields);
            values = result?.schedulesTuesday ?? values;
          }
          setSchedulesTuesday(values);
          setCurrentSchedulesTuesdayValue("");
        }}
        currentFieldValue={currentSchedulesTuesdayValue}
        label={"Schedules tuesday"}
        items={schedulesTuesday}
        hasError={errors?.schedulesTuesday?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "schedulesTuesday",
            currentSchedulesTuesdayValue
          )
        }
        errorMessage={errors?.schedulesTuesday?.errorMessage}
        setFieldValue={setCurrentSchedulesTuesdayValue}
        inputFieldRef={schedulesTuesdayRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Schedules tuesday"
          isRequired={false}
          isReadOnly={false}
          value={currentSchedulesTuesdayValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.schedulesTuesday?.hasError) {
              runValidationTasks("schedulesTuesday", value);
            }
            setCurrentSchedulesTuesdayValue(value);
          }}
          onBlur={() =>
            runValidationTasks("schedulesTuesday", currentSchedulesTuesdayValue)
          }
          errorMessage={errors.schedulesTuesday?.errorMessage}
          hasError={errors.schedulesTuesday?.hasError}
          ref={schedulesTuesdayRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "schedulesTuesday")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              cnpj,
              name,
              openingHours,
              phones,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              search,
              enableRetail,
              schedulesSunday,
              schedulesMonday,
              schedulesTuesday,
              schedulesWednesday: values,
              schedulesThursday,
              schedulesFriday,
              schedulesSaturday,
              status,
            };
            const result = onChange(modelFields);
            values = result?.schedulesWednesday ?? values;
          }
          setSchedulesWednesday(values);
          setCurrentSchedulesWednesdayValue("");
        }}
        currentFieldValue={currentSchedulesWednesdayValue}
        label={"Schedules wednesday"}
        items={schedulesWednesday}
        hasError={errors?.schedulesWednesday?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "schedulesWednesday",
            currentSchedulesWednesdayValue
          )
        }
        errorMessage={errors?.schedulesWednesday?.errorMessage}
        setFieldValue={setCurrentSchedulesWednesdayValue}
        inputFieldRef={schedulesWednesdayRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Schedules wednesday"
          isRequired={false}
          isReadOnly={false}
          value={currentSchedulesWednesdayValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.schedulesWednesday?.hasError) {
              runValidationTasks("schedulesWednesday", value);
            }
            setCurrentSchedulesWednesdayValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "schedulesWednesday",
              currentSchedulesWednesdayValue
            )
          }
          errorMessage={errors.schedulesWednesday?.errorMessage}
          hasError={errors.schedulesWednesday?.hasError}
          ref={schedulesWednesdayRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "schedulesWednesday")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              cnpj,
              name,
              openingHours,
              phones,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              search,
              enableRetail,
              schedulesSunday,
              schedulesMonday,
              schedulesTuesday,
              schedulesWednesday,
              schedulesThursday: values,
              schedulesFriday,
              schedulesSaturday,
              status,
            };
            const result = onChange(modelFields);
            values = result?.schedulesThursday ?? values;
          }
          setSchedulesThursday(values);
          setCurrentSchedulesThursdayValue("");
        }}
        currentFieldValue={currentSchedulesThursdayValue}
        label={"Schedules thursday"}
        items={schedulesThursday}
        hasError={errors?.schedulesThursday?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "schedulesThursday",
            currentSchedulesThursdayValue
          )
        }
        errorMessage={errors?.schedulesThursday?.errorMessage}
        setFieldValue={setCurrentSchedulesThursdayValue}
        inputFieldRef={schedulesThursdayRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Schedules thursday"
          isRequired={false}
          isReadOnly={false}
          value={currentSchedulesThursdayValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.schedulesThursday?.hasError) {
              runValidationTasks("schedulesThursday", value);
            }
            setCurrentSchedulesThursdayValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "schedulesThursday",
              currentSchedulesThursdayValue
            )
          }
          errorMessage={errors.schedulesThursday?.errorMessage}
          hasError={errors.schedulesThursday?.hasError}
          ref={schedulesThursdayRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "schedulesThursday")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              cnpj,
              name,
              openingHours,
              phones,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              search,
              enableRetail,
              schedulesSunday,
              schedulesMonday,
              schedulesTuesday,
              schedulesWednesday,
              schedulesThursday,
              schedulesFriday: values,
              schedulesSaturday,
              status,
            };
            const result = onChange(modelFields);
            values = result?.schedulesFriday ?? values;
          }
          setSchedulesFriday(values);
          setCurrentSchedulesFridayValue("");
        }}
        currentFieldValue={currentSchedulesFridayValue}
        label={"Schedules friday"}
        items={schedulesFriday}
        hasError={errors?.schedulesFriday?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "schedulesFriday",
            currentSchedulesFridayValue
          )
        }
        errorMessage={errors?.schedulesFriday?.errorMessage}
        setFieldValue={setCurrentSchedulesFridayValue}
        inputFieldRef={schedulesFridayRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Schedules friday"
          isRequired={false}
          isReadOnly={false}
          value={currentSchedulesFridayValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.schedulesFriday?.hasError) {
              runValidationTasks("schedulesFriday", value);
            }
            setCurrentSchedulesFridayValue(value);
          }}
          onBlur={() =>
            runValidationTasks("schedulesFriday", currentSchedulesFridayValue)
          }
          errorMessage={errors.schedulesFriday?.errorMessage}
          hasError={errors.schedulesFriday?.hasError}
          ref={schedulesFridayRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "schedulesFriday")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              cnpj,
              name,
              openingHours,
              phones,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              search,
              enableRetail,
              schedulesSunday,
              schedulesMonday,
              schedulesTuesday,
              schedulesWednesday,
              schedulesThursday,
              schedulesFriday,
              schedulesSaturday: values,
              status,
            };
            const result = onChange(modelFields);
            values = result?.schedulesSaturday ?? values;
          }
          setSchedulesSaturday(values);
          setCurrentSchedulesSaturdayValue("");
        }}
        currentFieldValue={currentSchedulesSaturdayValue}
        label={"Schedules saturday"}
        items={schedulesSaturday}
        hasError={errors?.schedulesSaturday?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "schedulesSaturday",
            currentSchedulesSaturdayValue
          )
        }
        errorMessage={errors?.schedulesSaturday?.errorMessage}
        setFieldValue={setCurrentSchedulesSaturdayValue}
        inputFieldRef={schedulesSaturdayRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Schedules saturday"
          isRequired={false}
          isReadOnly={false}
          value={currentSchedulesSaturdayValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.schedulesSaturday?.hasError) {
              runValidationTasks("schedulesSaturday", value);
            }
            setCurrentSchedulesSaturdayValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "schedulesSaturday",
              currentSchedulesSaturdayValue
            )
          }
          errorMessage={errors.schedulesSaturday?.errorMessage}
          hasError={errors.schedulesSaturday?.hasError}
          ref={schedulesSaturdayRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "schedulesSaturday")}
        ></TextField>
      </ArrayField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cnpj,
              name,
              openingHours,
              phones,
              street,
              number,
              complement,
              zipcode,
              neighborhood,
              city,
              state,
              country,
              search,
              enableRetail,
              schedulesSunday,
              schedulesMonday,
              schedulesTuesday,
              schedulesWednesday,
              schedulesThursday,
              schedulesFriday,
              schedulesSaturday,
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
          children="On"
          value="ON"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Off"
          value="OFF"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
      </SelectField>
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
          isDisabled={!(idProp || companyModelProp)}
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
              !(idProp || companyModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
