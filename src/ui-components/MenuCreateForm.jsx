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
import { createMenu } from "../graphql/mutations";
export default function MenuCreateForm(props) {
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
    alias: "",
    order: "",
    title: "",
    description: "",
    orderDesc: false,
    thumbnail: "",
    thumbnailSrc: "",
    thumbnailCropper: "",
    showDescriptionPage: "",
    showThumbnailPage: "",
    hide: false,
  };
  const [alias, setAlias] = React.useState(initialValues.alias);
  const [order, setOrder] = React.useState(initialValues.order);
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [orderDesc, setOrderDesc] = React.useState(initialValues.orderDesc);
  const [thumbnail, setThumbnail] = React.useState(initialValues.thumbnail);
  const [thumbnailSrc, setThumbnailSrc] = React.useState(
    initialValues.thumbnailSrc
  );
  const [thumbnailCropper, setThumbnailCropper] = React.useState(
    initialValues.thumbnailCropper
  );
  const [showDescriptionPage, setShowDescriptionPage] = React.useState(
    initialValues.showDescriptionPage
  );
  const [showThumbnailPage, setShowThumbnailPage] = React.useState(
    initialValues.showThumbnailPage
  );
  const [hide, setHide] = React.useState(initialValues.hide);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAlias(initialValues.alias);
    setOrder(initialValues.order);
    setTitle(initialValues.title);
    setDescription(initialValues.description);
    setOrderDesc(initialValues.orderDesc);
    setThumbnail(initialValues.thumbnail);
    setThumbnailSrc(initialValues.thumbnailSrc);
    setThumbnailCropper(initialValues.thumbnailCropper);
    setShowDescriptionPage(initialValues.showDescriptionPage);
    setShowThumbnailPage(initialValues.showThumbnailPage);
    setHide(initialValues.hide);
    setErrors({});
  };
  const validations = {
    alias: [{ type: "Required" }],
    order: [{ type: "Required" }],
    title: [],
    description: [],
    orderDesc: [],
    thumbnail: [],
    thumbnailSrc: [],
    thumbnailCropper: [],
    showDescriptionPage: [],
    showThumbnailPage: [],
    hide: [],
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
          alias,
          order,
          title,
          description,
          orderDesc,
          thumbnail,
          thumbnailSrc,
          thumbnailCropper,
          showDescriptionPage,
          showThumbnailPage,
          hide,
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
            query: createMenu.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "MenuCreateForm")}
      {...rest}
    >
      <TextField
        label="Alias"
        isRequired={true}
        isReadOnly={false}
        value={alias}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              alias: value,
              order,
              title,
              description,
              orderDesc,
              thumbnail,
              thumbnailSrc,
              thumbnailCropper,
              showDescriptionPage,
              showThumbnailPage,
              hide,
            };
            const result = onChange(modelFields);
            value = result?.alias ?? value;
          }
          if (errors.alias?.hasError) {
            runValidationTasks("alias", value);
          }
          setAlias(value);
        }}
        onBlur={() => runValidationTasks("alias", alias)}
        errorMessage={errors.alias?.errorMessage}
        hasError={errors.alias?.hasError}
        {...getOverrideProps(overrides, "alias")}
      ></TextField>
      <TextField
        label="Order"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={order}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              alias,
              order: value,
              title,
              description,
              orderDesc,
              thumbnail,
              thumbnailSrc,
              thumbnailCropper,
              showDescriptionPage,
              showThumbnailPage,
              hide,
            };
            const result = onChange(modelFields);
            value = result?.order ?? value;
          }
          if (errors.order?.hasError) {
            runValidationTasks("order", value);
          }
          setOrder(value);
        }}
        onBlur={() => runValidationTasks("order", order)}
        errorMessage={errors.order?.errorMessage}
        hasError={errors.order?.hasError}
        {...getOverrideProps(overrides, "order")}
      ></TextField>
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              alias,
              order,
              title: value,
              description,
              orderDesc,
              thumbnail,
              thumbnailSrc,
              thumbnailCropper,
              showDescriptionPage,
              showThumbnailPage,
              hide,
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
              alias,
              order,
              title,
              description: value,
              orderDesc,
              thumbnail,
              thumbnailSrc,
              thumbnailCropper,
              showDescriptionPage,
              showThumbnailPage,
              hide,
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
      <SwitchField
        label="Order desc"
        defaultChecked={false}
        isDisabled={false}
        isChecked={orderDesc}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              alias,
              order,
              title,
              description,
              orderDesc: value,
              thumbnail,
              thumbnailSrc,
              thumbnailCropper,
              showDescriptionPage,
              showThumbnailPage,
              hide,
            };
            const result = onChange(modelFields);
            value = result?.orderDesc ?? value;
          }
          if (errors.orderDesc?.hasError) {
            runValidationTasks("orderDesc", value);
          }
          setOrderDesc(value);
        }}
        onBlur={() => runValidationTasks("orderDesc", orderDesc)}
        errorMessage={errors.orderDesc?.errorMessage}
        hasError={errors.orderDesc?.hasError}
        {...getOverrideProps(overrides, "orderDesc")}
      ></SwitchField>
      <TextField
        label="Thumbnail"
        isRequired={false}
        isReadOnly={false}
        value={thumbnail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              alias,
              order,
              title,
              description,
              orderDesc,
              thumbnail: value,
              thumbnailSrc,
              thumbnailCropper,
              showDescriptionPage,
              showThumbnailPage,
              hide,
            };
            const result = onChange(modelFields);
            value = result?.thumbnail ?? value;
          }
          if (errors.thumbnail?.hasError) {
            runValidationTasks("thumbnail", value);
          }
          setThumbnail(value);
        }}
        onBlur={() => runValidationTasks("thumbnail", thumbnail)}
        errorMessage={errors.thumbnail?.errorMessage}
        hasError={errors.thumbnail?.hasError}
        {...getOverrideProps(overrides, "thumbnail")}
      ></TextField>
      <TextField
        label="Thumbnail src"
        isRequired={false}
        isReadOnly={false}
        value={thumbnailSrc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              alias,
              order,
              title,
              description,
              orderDesc,
              thumbnail,
              thumbnailSrc: value,
              thumbnailCropper,
              showDescriptionPage,
              showThumbnailPage,
              hide,
            };
            const result = onChange(modelFields);
            value = result?.thumbnailSrc ?? value;
          }
          if (errors.thumbnailSrc?.hasError) {
            runValidationTasks("thumbnailSrc", value);
          }
          setThumbnailSrc(value);
        }}
        onBlur={() => runValidationTasks("thumbnailSrc", thumbnailSrc)}
        errorMessage={errors.thumbnailSrc?.errorMessage}
        hasError={errors.thumbnailSrc?.hasError}
        {...getOverrideProps(overrides, "thumbnailSrc")}
      ></TextField>
      <TextField
        label="Thumbnail cropper"
        isRequired={false}
        isReadOnly={false}
        value={thumbnailCropper}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              alias,
              order,
              title,
              description,
              orderDesc,
              thumbnail,
              thumbnailSrc,
              thumbnailCropper: value,
              showDescriptionPage,
              showThumbnailPage,
              hide,
            };
            const result = onChange(modelFields);
            value = result?.thumbnailCropper ?? value;
          }
          if (errors.thumbnailCropper?.hasError) {
            runValidationTasks("thumbnailCropper", value);
          }
          setThumbnailCropper(value);
        }}
        onBlur={() => runValidationTasks("thumbnailCropper", thumbnailCropper)}
        errorMessage={errors.thumbnailCropper?.errorMessage}
        hasError={errors.thumbnailCropper?.hasError}
        {...getOverrideProps(overrides, "thumbnailCropper")}
      ></TextField>
      <TextField
        label="Show description page"
        isRequired={false}
        isReadOnly={false}
        value={showDescriptionPage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              alias,
              order,
              title,
              description,
              orderDesc,
              thumbnail,
              thumbnailSrc,
              thumbnailCropper,
              showDescriptionPage: value,
              showThumbnailPage,
              hide,
            };
            const result = onChange(modelFields);
            value = result?.showDescriptionPage ?? value;
          }
          if (errors.showDescriptionPage?.hasError) {
            runValidationTasks("showDescriptionPage", value);
          }
          setShowDescriptionPage(value);
        }}
        onBlur={() =>
          runValidationTasks("showDescriptionPage", showDescriptionPage)
        }
        errorMessage={errors.showDescriptionPage?.errorMessage}
        hasError={errors.showDescriptionPage?.hasError}
        {...getOverrideProps(overrides, "showDescriptionPage")}
      ></TextField>
      <TextField
        label="Show thumbnail page"
        isRequired={false}
        isReadOnly={false}
        value={showThumbnailPage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              alias,
              order,
              title,
              description,
              orderDesc,
              thumbnail,
              thumbnailSrc,
              thumbnailCropper,
              showDescriptionPage,
              showThumbnailPage: value,
              hide,
            };
            const result = onChange(modelFields);
            value = result?.showThumbnailPage ?? value;
          }
          if (errors.showThumbnailPage?.hasError) {
            runValidationTasks("showThumbnailPage", value);
          }
          setShowThumbnailPage(value);
        }}
        onBlur={() =>
          runValidationTasks("showThumbnailPage", showThumbnailPage)
        }
        errorMessage={errors.showThumbnailPage?.errorMessage}
        hasError={errors.showThumbnailPage?.hasError}
        {...getOverrideProps(overrides, "showThumbnailPage")}
      ></TextField>
      <SwitchField
        label="Hide"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hide}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              alias,
              order,
              title,
              description,
              orderDesc,
              thumbnail,
              thumbnailSrc,
              thumbnailCropper,
              showDescriptionPage,
              showThumbnailPage,
              hide: value,
            };
            const result = onChange(modelFields);
            value = result?.hide ?? value;
          }
          if (errors.hide?.hasError) {
            runValidationTasks("hide", value);
          }
          setHide(value);
        }}
        onBlur={() => runValidationTasks("hide", hide)}
        errorMessage={errors.hide?.errorMessage}
        hasError={errors.hide?.hasError}
        {...getOverrideProps(overrides, "hide")}
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
