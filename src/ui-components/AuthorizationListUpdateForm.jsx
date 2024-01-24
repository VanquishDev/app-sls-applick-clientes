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
import { getAuthorizationList } from "../graphql/queries";
import { updateAuthorizationList } from "../graphql/mutations";
export default function AuthorizationListUpdateForm(props) {
  const {
    id: idProp,
    authorizationList: authorizationListModelProp,
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
    start: "",
    expiration: "",
    orientation: "",
    search: "",
    qtyApplication: "",
    qtyReturned: "",
    contactNameFinished: "",
    contactPhoneFinished: "",
    contactEmailFinished: "",
    notesFinished: "",
    professionalFinished: "",
    withList: false,
    campaignCode: "",
    OS: "",
    status: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [start, setStart] = React.useState(initialValues.start);
  const [expiration, setExpiration] = React.useState(initialValues.expiration);
  const [orientation, setOrientation] = React.useState(
    initialValues.orientation
  );
  const [search, setSearch] = React.useState(initialValues.search);
  const [qtyApplication, setQtyApplication] = React.useState(
    initialValues.qtyApplication
  );
  const [qtyReturned, setQtyReturned] = React.useState(
    initialValues.qtyReturned
  );
  const [contactNameFinished, setContactNameFinished] = React.useState(
    initialValues.contactNameFinished
  );
  const [contactPhoneFinished, setContactPhoneFinished] = React.useState(
    initialValues.contactPhoneFinished
  );
  const [contactEmailFinished, setContactEmailFinished] = React.useState(
    initialValues.contactEmailFinished
  );
  const [notesFinished, setNotesFinished] = React.useState(
    initialValues.notesFinished
  );
  const [professionalFinished, setProfessionalFinished] = React.useState(
    initialValues.professionalFinished
  );
  const [withList, setWithList] = React.useState(initialValues.withList);
  const [campaignCode, setCampaignCode] = React.useState(
    initialValues.campaignCode
  );
  const [OS, setOS] = React.useState(initialValues.OS);
  const [status, setStatus] = React.useState(initialValues.status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = authorizationListRecord
      ? { ...initialValues, ...authorizationListRecord }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setStart(cleanValues.start);
    setExpiration(cleanValues.expiration);
    setOrientation(cleanValues.orientation);
    setSearch(cleanValues.search);
    setQtyApplication(cleanValues.qtyApplication);
    setQtyReturned(cleanValues.qtyReturned);
    setContactNameFinished(cleanValues.contactNameFinished);
    setContactPhoneFinished(cleanValues.contactPhoneFinished);
    setContactEmailFinished(cleanValues.contactEmailFinished);
    setNotesFinished(cleanValues.notesFinished);
    setProfessionalFinished(cleanValues.professionalFinished);
    setWithList(cleanValues.withList);
    setCampaignCode(cleanValues.campaignCode);
    setOS(cleanValues.OS);
    setStatus(cleanValues.status);
    setErrors({});
  };
  const [authorizationListRecord, setAuthorizationListRecord] = React.useState(
    authorizationListModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getAuthorizationList.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getAuthorizationList
        : authorizationListModelProp;
      setAuthorizationListRecord(record);
    };
    queryData();
  }, [idProp, authorizationListModelProp]);
  React.useEffect(resetStateValues, [authorizationListRecord]);
  const validations = {
    name: [{ type: "Required" }],
    description: [],
    start: [],
    expiration: [],
    orientation: [],
    search: [],
    qtyApplication: [],
    qtyReturned: [],
    contactNameFinished: [],
    contactPhoneFinished: [],
    contactEmailFinished: [],
    notesFinished: [],
    professionalFinished: [],
    withList: [],
    campaignCode: [],
    OS: [],
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
          name,
          description: description ?? null,
          start: start ?? null,
          expiration: expiration ?? null,
          orientation: orientation ?? null,
          search: search ?? null,
          qtyApplication: qtyApplication ?? null,
          qtyReturned: qtyReturned ?? null,
          contactNameFinished: contactNameFinished ?? null,
          contactPhoneFinished: contactPhoneFinished ?? null,
          contactEmailFinished: contactEmailFinished ?? null,
          notesFinished: notesFinished ?? null,
          professionalFinished: professionalFinished ?? null,
          withList: withList ?? null,
          campaignCode: campaignCode ?? null,
          OS: OS ?? null,
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
            query: updateAuthorizationList.replaceAll("__typename", ""),
            variables: {
              input: {
                id: authorizationListRecord.id,
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
      {...getOverrideProps(overrides, "AuthorizationListUpdateForm")}
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
              start,
              expiration,
              orientation,
              search,
              qtyApplication,
              qtyReturned,
              contactNameFinished,
              contactPhoneFinished,
              contactEmailFinished,
              notesFinished,
              professionalFinished,
              withList,
              campaignCode,
              OS,
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
              start,
              expiration,
              orientation,
              search,
              qtyApplication,
              qtyReturned,
              contactNameFinished,
              contactPhoneFinished,
              contactEmailFinished,
              notesFinished,
              professionalFinished,
              withList,
              campaignCode,
              OS,
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
        label="Start"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={start}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              start: value,
              expiration,
              orientation,
              search,
              qtyApplication,
              qtyReturned,
              contactNameFinished,
              contactPhoneFinished,
              contactEmailFinished,
              notesFinished,
              professionalFinished,
              withList,
              campaignCode,
              OS,
              status,
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
        label="Expiration"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={expiration}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              start,
              expiration: value,
              orientation,
              search,
              qtyApplication,
              qtyReturned,
              contactNameFinished,
              contactPhoneFinished,
              contactEmailFinished,
              notesFinished,
              professionalFinished,
              withList,
              campaignCode,
              OS,
              status,
            };
            const result = onChange(modelFields);
            value = result?.expiration ?? value;
          }
          if (errors.expiration?.hasError) {
            runValidationTasks("expiration", value);
          }
          setExpiration(value);
        }}
        onBlur={() => runValidationTasks("expiration", expiration)}
        errorMessage={errors.expiration?.errorMessage}
        hasError={errors.expiration?.hasError}
        {...getOverrideProps(overrides, "expiration")}
      ></TextField>
      <TextField
        label="Orientation"
        isRequired={false}
        isReadOnly={false}
        value={orientation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              start,
              expiration,
              orientation: value,
              search,
              qtyApplication,
              qtyReturned,
              contactNameFinished,
              contactPhoneFinished,
              contactEmailFinished,
              notesFinished,
              professionalFinished,
              withList,
              campaignCode,
              OS,
              status,
            };
            const result = onChange(modelFields);
            value = result?.orientation ?? value;
          }
          if (errors.orientation?.hasError) {
            runValidationTasks("orientation", value);
          }
          setOrientation(value);
        }}
        onBlur={() => runValidationTasks("orientation", orientation)}
        errorMessage={errors.orientation?.errorMessage}
        hasError={errors.orientation?.hasError}
        {...getOverrideProps(overrides, "orientation")}
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
              start,
              expiration,
              orientation,
              search: value,
              qtyApplication,
              qtyReturned,
              contactNameFinished,
              contactPhoneFinished,
              contactEmailFinished,
              notesFinished,
              professionalFinished,
              withList,
              campaignCode,
              OS,
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
              name,
              description,
              start,
              expiration,
              orientation,
              search,
              qtyApplication: value,
              qtyReturned,
              contactNameFinished,
              contactPhoneFinished,
              contactEmailFinished,
              notesFinished,
              professionalFinished,
              withList,
              campaignCode,
              OS,
              status,
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
              name,
              description,
              start,
              expiration,
              orientation,
              search,
              qtyApplication,
              qtyReturned: value,
              contactNameFinished,
              contactPhoneFinished,
              contactEmailFinished,
              notesFinished,
              professionalFinished,
              withList,
              campaignCode,
              OS,
              status,
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
        label="Contact name finished"
        isRequired={false}
        isReadOnly={false}
        value={contactNameFinished}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              start,
              expiration,
              orientation,
              search,
              qtyApplication,
              qtyReturned,
              contactNameFinished: value,
              contactPhoneFinished,
              contactEmailFinished,
              notesFinished,
              professionalFinished,
              withList,
              campaignCode,
              OS,
              status,
            };
            const result = onChange(modelFields);
            value = result?.contactNameFinished ?? value;
          }
          if (errors.contactNameFinished?.hasError) {
            runValidationTasks("contactNameFinished", value);
          }
          setContactNameFinished(value);
        }}
        onBlur={() =>
          runValidationTasks("contactNameFinished", contactNameFinished)
        }
        errorMessage={errors.contactNameFinished?.errorMessage}
        hasError={errors.contactNameFinished?.hasError}
        {...getOverrideProps(overrides, "contactNameFinished")}
      ></TextField>
      <TextField
        label="Contact phone finished"
        isRequired={false}
        isReadOnly={false}
        value={contactPhoneFinished}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              start,
              expiration,
              orientation,
              search,
              qtyApplication,
              qtyReturned,
              contactNameFinished,
              contactPhoneFinished: value,
              contactEmailFinished,
              notesFinished,
              professionalFinished,
              withList,
              campaignCode,
              OS,
              status,
            };
            const result = onChange(modelFields);
            value = result?.contactPhoneFinished ?? value;
          }
          if (errors.contactPhoneFinished?.hasError) {
            runValidationTasks("contactPhoneFinished", value);
          }
          setContactPhoneFinished(value);
        }}
        onBlur={() =>
          runValidationTasks("contactPhoneFinished", contactPhoneFinished)
        }
        errorMessage={errors.contactPhoneFinished?.errorMessage}
        hasError={errors.contactPhoneFinished?.hasError}
        {...getOverrideProps(overrides, "contactPhoneFinished")}
      ></TextField>
      <TextField
        label="Contact email finished"
        isRequired={false}
        isReadOnly={false}
        value={contactEmailFinished}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              start,
              expiration,
              orientation,
              search,
              qtyApplication,
              qtyReturned,
              contactNameFinished,
              contactPhoneFinished,
              contactEmailFinished: value,
              notesFinished,
              professionalFinished,
              withList,
              campaignCode,
              OS,
              status,
            };
            const result = onChange(modelFields);
            value = result?.contactEmailFinished ?? value;
          }
          if (errors.contactEmailFinished?.hasError) {
            runValidationTasks("contactEmailFinished", value);
          }
          setContactEmailFinished(value);
        }}
        onBlur={() =>
          runValidationTasks("contactEmailFinished", contactEmailFinished)
        }
        errorMessage={errors.contactEmailFinished?.errorMessage}
        hasError={errors.contactEmailFinished?.hasError}
        {...getOverrideProps(overrides, "contactEmailFinished")}
      ></TextField>
      <TextField
        label="Notes finished"
        isRequired={false}
        isReadOnly={false}
        value={notesFinished}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              start,
              expiration,
              orientation,
              search,
              qtyApplication,
              qtyReturned,
              contactNameFinished,
              contactPhoneFinished,
              contactEmailFinished,
              notesFinished: value,
              professionalFinished,
              withList,
              campaignCode,
              OS,
              status,
            };
            const result = onChange(modelFields);
            value = result?.notesFinished ?? value;
          }
          if (errors.notesFinished?.hasError) {
            runValidationTasks("notesFinished", value);
          }
          setNotesFinished(value);
        }}
        onBlur={() => runValidationTasks("notesFinished", notesFinished)}
        errorMessage={errors.notesFinished?.errorMessage}
        hasError={errors.notesFinished?.hasError}
        {...getOverrideProps(overrides, "notesFinished")}
      ></TextField>
      <TextField
        label="Professional finished"
        isRequired={false}
        isReadOnly={false}
        value={professionalFinished}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              start,
              expiration,
              orientation,
              search,
              qtyApplication,
              qtyReturned,
              contactNameFinished,
              contactPhoneFinished,
              contactEmailFinished,
              notesFinished,
              professionalFinished: value,
              withList,
              campaignCode,
              OS,
              status,
            };
            const result = onChange(modelFields);
            value = result?.professionalFinished ?? value;
          }
          if (errors.professionalFinished?.hasError) {
            runValidationTasks("professionalFinished", value);
          }
          setProfessionalFinished(value);
        }}
        onBlur={() =>
          runValidationTasks("professionalFinished", professionalFinished)
        }
        errorMessage={errors.professionalFinished?.errorMessage}
        hasError={errors.professionalFinished?.hasError}
        {...getOverrideProps(overrides, "professionalFinished")}
      ></TextField>
      <SwitchField
        label="With list"
        defaultChecked={false}
        isDisabled={false}
        isChecked={withList}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              description,
              start,
              expiration,
              orientation,
              search,
              qtyApplication,
              qtyReturned,
              contactNameFinished,
              contactPhoneFinished,
              contactEmailFinished,
              notesFinished,
              professionalFinished,
              withList: value,
              campaignCode,
              OS,
              status,
            };
            const result = onChange(modelFields);
            value = result?.withList ?? value;
          }
          if (errors.withList?.hasError) {
            runValidationTasks("withList", value);
          }
          setWithList(value);
        }}
        onBlur={() => runValidationTasks("withList", withList)}
        errorMessage={errors.withList?.errorMessage}
        hasError={errors.withList?.hasError}
        {...getOverrideProps(overrides, "withList")}
      ></SwitchField>
      <TextField
        label="Campaign code"
        isRequired={false}
        isReadOnly={false}
        value={campaignCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              start,
              expiration,
              orientation,
              search,
              qtyApplication,
              qtyReturned,
              contactNameFinished,
              contactPhoneFinished,
              contactEmailFinished,
              notesFinished,
              professionalFinished,
              withList,
              campaignCode: value,
              OS,
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
      <TextField
        label="Os"
        isRequired={false}
        isReadOnly={false}
        value={OS}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              start,
              expiration,
              orientation,
              search,
              qtyApplication,
              qtyReturned,
              contactNameFinished,
              contactPhoneFinished,
              contactEmailFinished,
              notesFinished,
              professionalFinished,
              withList,
              campaignCode,
              OS: value,
              status,
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
              start,
              expiration,
              orientation,
              search,
              qtyApplication,
              qtyReturned,
              contactNameFinished,
              contactPhoneFinished,
              contactEmailFinished,
              notesFinished,
              professionalFinished,
              withList,
              campaignCode,
              OS,
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
          children="Standby"
          value="STANDBY"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Started"
          value="STARTED"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Finished"
          value="FINISHED"
          {...getOverrideProps(overrides, "statusoption2")}
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
          isDisabled={!(idProp || authorizationListModelProp)}
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
              !(idProp || authorizationListModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
