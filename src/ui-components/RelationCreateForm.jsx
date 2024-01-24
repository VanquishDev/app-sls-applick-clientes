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
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createRelation } from "../graphql/mutations";
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
export default function RelationCreateForm(props) {
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
    type: "",
    mode: "",
    name: "",
    description: "",
    avatar: "",
    reference: "",
    members: [],
    admins: [],
    updatedAt: "",
    status: "",
    search: "",
  };
  const [type, setType] = React.useState(initialValues.type);
  const [mode, setMode] = React.useState(initialValues.mode);
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [avatar, setAvatar] = React.useState(initialValues.avatar);
  const [reference, setReference] = React.useState(initialValues.reference);
  const [members, setMembers] = React.useState(initialValues.members);
  const [admins, setAdmins] = React.useState(initialValues.admins);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [status, setStatus] = React.useState(initialValues.status);
  const [search, setSearch] = React.useState(initialValues.search);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setType(initialValues.type);
    setMode(initialValues.mode);
    setName(initialValues.name);
    setDescription(initialValues.description);
    setAvatar(initialValues.avatar);
    setReference(initialValues.reference);
    setMembers(initialValues.members);
    setCurrentMembersValue("");
    setAdmins(initialValues.admins);
    setCurrentAdminsValue("");
    setUpdatedAt(initialValues.updatedAt);
    setStatus(initialValues.status);
    setSearch(initialValues.search);
    setErrors({});
  };
  const [currentMembersValue, setCurrentMembersValue] = React.useState("");
  const membersRef = React.createRef();
  const [currentAdminsValue, setCurrentAdminsValue] = React.useState("");
  const adminsRef = React.createRef();
  const validations = {
    type: [{ type: "Required" }],
    mode: [{ type: "Required" }],
    name: [],
    description: [],
    avatar: [],
    reference: [],
    members: [{ type: "Required" }],
    admins: [{ type: "Required" }],
    updatedAt: [],
    status: [{ type: "Required" }],
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
          type,
          mode,
          name,
          description,
          avatar,
          reference,
          members,
          admins,
          updatedAt,
          status,
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
            query: createRelation.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "RelationCreateForm")}
      {...rest}
    >
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type: value,
              mode,
              name,
              description,
              avatar,
              reference,
              members,
              admins,
              updatedAt,
              status,
              search,
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
      >
        <option
          children="Contact"
          value="CONTACT"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Document"
          value="DOCUMENT"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Mode"
        placeholder="Please select an option"
        isDisabled={false}
        value={mode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              mode: value,
              name,
              description,
              avatar,
              reference,
              members,
              admins,
              updatedAt,
              status,
              search,
            };
            const result = onChange(modelFields);
            value = result?.mode ?? value;
          }
          if (errors.mode?.hasError) {
            runValidationTasks("mode", value);
          }
          setMode(value);
        }}
        onBlur={() => runValidationTasks("mode", mode)}
        errorMessage={errors.mode?.errorMessage}
        hasError={errors.mode?.hasError}
        {...getOverrideProps(overrides, "mode")}
      >
        <option
          children="Private"
          value="PRIVATE"
          {...getOverrideProps(overrides, "modeoption0")}
        ></option>
        <option
          children="Group"
          value="GROUP"
          {...getOverrideProps(overrides, "modeoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              mode,
              name: value,
              description,
              avatar,
              reference,
              members,
              admins,
              updatedAt,
              status,
              search,
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
              type,
              mode,
              name,
              description: value,
              avatar,
              reference,
              members,
              admins,
              updatedAt,
              status,
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
        label="Avatar"
        isRequired={false}
        isReadOnly={false}
        value={avatar}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              mode,
              name,
              description,
              avatar: value,
              reference,
              members,
              admins,
              updatedAt,
              status,
              search,
            };
            const result = onChange(modelFields);
            value = result?.avatar ?? value;
          }
          if (errors.avatar?.hasError) {
            runValidationTasks("avatar", value);
          }
          setAvatar(value);
        }}
        onBlur={() => runValidationTasks("avatar", avatar)}
        errorMessage={errors.avatar?.errorMessage}
        hasError={errors.avatar?.hasError}
        {...getOverrideProps(overrides, "avatar")}
      ></TextField>
      <TextField
        label="Reference"
        isRequired={false}
        isReadOnly={false}
        value={reference}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              mode,
              name,
              description,
              avatar,
              reference: value,
              members,
              admins,
              updatedAt,
              status,
              search,
            };
            const result = onChange(modelFields);
            value = result?.reference ?? value;
          }
          if (errors.reference?.hasError) {
            runValidationTasks("reference", value);
          }
          setReference(value);
        }}
        onBlur={() => runValidationTasks("reference", reference)}
        errorMessage={errors.reference?.errorMessage}
        hasError={errors.reference?.hasError}
        {...getOverrideProps(overrides, "reference")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              type,
              mode,
              name,
              description,
              avatar,
              reference,
              members: values,
              admins,
              updatedAt,
              status,
              search,
            };
            const result = onChange(modelFields);
            values = result?.members ?? values;
          }
          setMembers(values);
          setCurrentMembersValue("");
        }}
        currentFieldValue={currentMembersValue}
        label={"Members"}
        items={members}
        hasError={errors?.members?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("members", currentMembersValue)
        }
        errorMessage={errors?.members?.errorMessage}
        setFieldValue={setCurrentMembersValue}
        inputFieldRef={membersRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Members"
          isRequired={true}
          isReadOnly={false}
          value={currentMembersValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.members?.hasError) {
              runValidationTasks("members", value);
            }
            setCurrentMembersValue(value);
          }}
          onBlur={() => runValidationTasks("members", currentMembersValue)}
          errorMessage={errors.members?.errorMessage}
          hasError={errors.members?.hasError}
          ref={membersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "members")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              type,
              mode,
              name,
              description,
              avatar,
              reference,
              members,
              admins: values,
              updatedAt,
              status,
              search,
            };
            const result = onChange(modelFields);
            values = result?.admins ?? values;
          }
          setAdmins(values);
          setCurrentAdminsValue("");
        }}
        currentFieldValue={currentAdminsValue}
        label={"Admins"}
        items={admins}
        hasError={errors?.admins?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("admins", currentAdminsValue)
        }
        errorMessage={errors?.admins?.errorMessage}
        setFieldValue={setCurrentAdminsValue}
        inputFieldRef={adminsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Admins"
          isRequired={true}
          isReadOnly={false}
          value={currentAdminsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.admins?.hasError) {
              runValidationTasks("admins", value);
            }
            setCurrentAdminsValue(value);
          }}
          onBlur={() => runValidationTasks("admins", currentAdminsValue)}
          errorMessage={errors.admins?.errorMessage}
          hasError={errors.admins?.hasError}
          ref={adminsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "admins")}
        ></TextField>
      </ArrayField>
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
              mode,
              name,
              description,
              avatar,
              reference,
              members,
              admins,
              updatedAt: value,
              status,
              search,
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
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              mode,
              name,
              description,
              avatar,
              reference,
              members,
              admins,
              updatedAt,
              status: value,
              search,
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
          children="Aborted"
          value="ABORTED"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Started"
          value="STARTED"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
        <option
          children="Finalized"
          value="FINALIZED"
          {...getOverrideProps(overrides, "statusoption3")}
        ></option>
        <option
          children="Inprogress"
          value="INPROGRESS"
          {...getOverrideProps(overrides, "statusoption4")}
        ></option>
        <option
          children="Inanalyze"
          value="INANALYZE"
          {...getOverrideProps(overrides, "statusoption5")}
        ></option>
        <option
          children="Active"
          value="ACTIVE"
          {...getOverrideProps(overrides, "statusoption6")}
        ></option>
        <option
          children="Archived"
          value="ARCHIVED"
          {...getOverrideProps(overrides, "statusoption7")}
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
              type,
              mode,
              name,
              description,
              avatar,
              reference,
              members,
              admins,
              updatedAt,
              status,
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
