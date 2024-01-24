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
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createVaccinationCard } from "../graphql/mutations";
export default function VaccinationCardCreateForm(props) {
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
    userID: "",
    person: "",
    doc: "",
    birth: "",
    relationship: "",
    notes: "",
    avatar: "",
    isOwner: false,
  };
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [person, setPerson] = React.useState(initialValues.person);
  const [doc, setDoc] = React.useState(initialValues.doc);
  const [birth, setBirth] = React.useState(initialValues.birth);
  const [relationship, setRelationship] = React.useState(
    initialValues.relationship
  );
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [avatar, setAvatar] = React.useState(initialValues.avatar);
  const [isOwner, setIsOwner] = React.useState(initialValues.isOwner);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUserID(initialValues.userID);
    setPerson(initialValues.person);
    setDoc(initialValues.doc);
    setBirth(initialValues.birth);
    setRelationship(initialValues.relationship);
    setNotes(initialValues.notes);
    setAvatar(initialValues.avatar);
    setIsOwner(initialValues.isOwner);
    setErrors({});
  };
  const validations = {
    userID: [{ type: "Required" }],
    person: [{ type: "Required" }],
    doc: [],
    birth: [],
    relationship: [],
    notes: [],
    avatar: [],
    isOwner: [],
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
          userID,
          person,
          doc,
          birth,
          relationship,
          notes,
          avatar,
          isOwner,
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
            query: createVaccinationCard.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "VaccinationCardCreateForm")}
      {...rest}
    >
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID: value,
              person,
              doc,
              birth,
              relationship,
              notes,
              avatar,
              isOwner,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          if (errors.userID?.hasError) {
            runValidationTasks("userID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("userID", userID)}
        errorMessage={errors.userID?.errorMessage}
        hasError={errors.userID?.hasError}
        {...getOverrideProps(overrides, "userID")}
      ></TextField>
      <TextField
        label="Person"
        isRequired={true}
        isReadOnly={false}
        value={person}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              person: value,
              doc,
              birth,
              relationship,
              notes,
              avatar,
              isOwner,
            };
            const result = onChange(modelFields);
            value = result?.person ?? value;
          }
          if (errors.person?.hasError) {
            runValidationTasks("person", value);
          }
          setPerson(value);
        }}
        onBlur={() => runValidationTasks("person", person)}
        errorMessage={errors.person?.errorMessage}
        hasError={errors.person?.hasError}
        {...getOverrideProps(overrides, "person")}
      ></TextField>
      <TextField
        label="Doc"
        isRequired={false}
        isReadOnly={false}
        value={doc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              person,
              doc: value,
              birth,
              relationship,
              notes,
              avatar,
              isOwner,
            };
            const result = onChange(modelFields);
            value = result?.doc ?? value;
          }
          if (errors.doc?.hasError) {
            runValidationTasks("doc", value);
          }
          setDoc(value);
        }}
        onBlur={() => runValidationTasks("doc", doc)}
        errorMessage={errors.doc?.errorMessage}
        hasError={errors.doc?.hasError}
        {...getOverrideProps(overrides, "doc")}
      ></TextField>
      <TextField
        label="Birth"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={birth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              person,
              doc,
              birth: value,
              relationship,
              notes,
              avatar,
              isOwner,
            };
            const result = onChange(modelFields);
            value = result?.birth ?? value;
          }
          if (errors.birth?.hasError) {
            runValidationTasks("birth", value);
          }
          setBirth(value);
        }}
        onBlur={() => runValidationTasks("birth", birth)}
        errorMessage={errors.birth?.errorMessage}
        hasError={errors.birth?.hasError}
        {...getOverrideProps(overrides, "birth")}
      ></TextField>
      <TextField
        label="Relationship"
        isRequired={false}
        isReadOnly={false}
        value={relationship}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              person,
              doc,
              birth,
              relationship: value,
              notes,
              avatar,
              isOwner,
            };
            const result = onChange(modelFields);
            value = result?.relationship ?? value;
          }
          if (errors.relationship?.hasError) {
            runValidationTasks("relationship", value);
          }
          setRelationship(value);
        }}
        onBlur={() => runValidationTasks("relationship", relationship)}
        errorMessage={errors.relationship?.errorMessage}
        hasError={errors.relationship?.hasError}
        {...getOverrideProps(overrides, "relationship")}
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
              userID,
              person,
              doc,
              birth,
              relationship,
              notes: value,
              avatar,
              isOwner,
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
        label="Avatar"
        isRequired={false}
        isReadOnly={false}
        value={avatar}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              person,
              doc,
              birth,
              relationship,
              notes,
              avatar: value,
              isOwner,
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
      <SwitchField
        label="Is owner"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isOwner}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userID,
              person,
              doc,
              birth,
              relationship,
              notes,
              avatar,
              isOwner: value,
            };
            const result = onChange(modelFields);
            value = result?.isOwner ?? value;
          }
          if (errors.isOwner?.hasError) {
            runValidationTasks("isOwner", value);
          }
          setIsOwner(value);
        }}
        onBlur={() => runValidationTasks("isOwner", isOwner)}
        errorMessage={errors.isOwner?.errorMessage}
        hasError={errors.isOwner?.hasError}
        {...getOverrideProps(overrides, "isOwner")}
      ></SwitchField>
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
