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
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createAdherence } from "../graphql/mutations";
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
export default function AdherenceCreateForm(props) {
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
    code: "",
    campaignCode: "",
    start: "",
    expiration: "",
    discountPercentage: "",
    discountValue: "",
    qtyLimit: "",
    qtyUsed: "",
    qtyProduct: "",
    qtyProductUsed: "",
    orientation: "",
    orderMessage: "",
    zipCodeCoverage: [],
    search: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [code, setCode] = React.useState(initialValues.code);
  const [campaignCode, setCampaignCode] = React.useState(
    initialValues.campaignCode
  );
  const [start, setStart] = React.useState(initialValues.start);
  const [expiration, setExpiration] = React.useState(initialValues.expiration);
  const [discountPercentage, setDiscountPercentage] = React.useState(
    initialValues.discountPercentage
  );
  const [discountValue, setDiscountValue] = React.useState(
    initialValues.discountValue
  );
  const [qtyLimit, setQtyLimit] = React.useState(initialValues.qtyLimit);
  const [qtyUsed, setQtyUsed] = React.useState(initialValues.qtyUsed);
  const [qtyProduct, setQtyProduct] = React.useState(initialValues.qtyProduct);
  const [qtyProductUsed, setQtyProductUsed] = React.useState(
    initialValues.qtyProductUsed
  );
  const [orientation, setOrientation] = React.useState(
    initialValues.orientation
  );
  const [orderMessage, setOrderMessage] = React.useState(
    initialValues.orderMessage
  );
  const [zipCodeCoverage, setZipCodeCoverage] = React.useState(
    initialValues.zipCodeCoverage
  );
  const [search, setSearch] = React.useState(initialValues.search);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setDescription(initialValues.description);
    setCode(initialValues.code);
    setCampaignCode(initialValues.campaignCode);
    setStart(initialValues.start);
    setExpiration(initialValues.expiration);
    setDiscountPercentage(initialValues.discountPercentage);
    setDiscountValue(initialValues.discountValue);
    setQtyLimit(initialValues.qtyLimit);
    setQtyUsed(initialValues.qtyUsed);
    setQtyProduct(initialValues.qtyProduct);
    setQtyProductUsed(initialValues.qtyProductUsed);
    setOrientation(initialValues.orientation);
    setOrderMessage(initialValues.orderMessage);
    setZipCodeCoverage(initialValues.zipCodeCoverage);
    setCurrentZipCodeCoverageValue("");
    setSearch(initialValues.search);
    setErrors({});
  };
  const [currentZipCodeCoverageValue, setCurrentZipCodeCoverageValue] =
    React.useState("");
  const zipCodeCoverageRef = React.createRef();
  const validations = {
    name: [{ type: "Required" }],
    description: [],
    code: [{ type: "Required" }],
    campaignCode: [],
    start: [],
    expiration: [],
    discountPercentage: [],
    discountValue: [],
    qtyLimit: [],
    qtyUsed: [],
    qtyProduct: [],
    qtyProductUsed: [],
    orientation: [],
    orderMessage: [],
    zipCodeCoverage: [],
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
          code,
          campaignCode,
          start,
          expiration,
          discountPercentage,
          discountValue,
          qtyLimit,
          qtyUsed,
          qtyProduct,
          qtyProductUsed,
          orientation,
          orderMessage,
          zipCodeCoverage,
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
            query: createAdherence.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "AdherenceCreateForm")}
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
              code,
              campaignCode,
              start,
              expiration,
              discountPercentage,
              discountValue,
              qtyLimit,
              qtyUsed,
              qtyProduct,
              qtyProductUsed,
              orientation,
              orderMessage,
              zipCodeCoverage,
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
              name,
              description: value,
              code,
              campaignCode,
              start,
              expiration,
              discountPercentage,
              discountValue,
              qtyLimit,
              qtyUsed,
              qtyProduct,
              qtyProductUsed,
              orientation,
              orderMessage,
              zipCodeCoverage,
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
        label="Code"
        isRequired={true}
        isReadOnly={false}
        value={code}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              code: value,
              campaignCode,
              start,
              expiration,
              discountPercentage,
              discountValue,
              qtyLimit,
              qtyUsed,
              qtyProduct,
              qtyProductUsed,
              orientation,
              orderMessage,
              zipCodeCoverage,
              search,
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
              code,
              campaignCode: value,
              start,
              expiration,
              discountPercentage,
              discountValue,
              qtyLimit,
              qtyUsed,
              qtyProduct,
              qtyProductUsed,
              orientation,
              orderMessage,
              zipCodeCoverage,
              search,
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
              code,
              campaignCode,
              start: value,
              expiration,
              discountPercentage,
              discountValue,
              qtyLimit,
              qtyUsed,
              qtyProduct,
              qtyProductUsed,
              orientation,
              orderMessage,
              zipCodeCoverage,
              search,
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
              code,
              campaignCode,
              start,
              expiration: value,
              discountPercentage,
              discountValue,
              qtyLimit,
              qtyUsed,
              qtyProduct,
              qtyProductUsed,
              orientation,
              orderMessage,
              zipCodeCoverage,
              search,
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
        label="Discount percentage"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={discountPercentage}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              code,
              campaignCode,
              start,
              expiration,
              discountPercentage: value,
              discountValue,
              qtyLimit,
              qtyUsed,
              qtyProduct,
              qtyProductUsed,
              orientation,
              orderMessage,
              zipCodeCoverage,
              search,
            };
            const result = onChange(modelFields);
            value = result?.discountPercentage ?? value;
          }
          if (errors.discountPercentage?.hasError) {
            runValidationTasks("discountPercentage", value);
          }
          setDiscountPercentage(value);
        }}
        onBlur={() =>
          runValidationTasks("discountPercentage", discountPercentage)
        }
        errorMessage={errors.discountPercentage?.errorMessage}
        hasError={errors.discountPercentage?.hasError}
        {...getOverrideProps(overrides, "discountPercentage")}
      ></TextField>
      <TextField
        label="Discount value"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={discountValue}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              code,
              campaignCode,
              start,
              expiration,
              discountPercentage,
              discountValue: value,
              qtyLimit,
              qtyUsed,
              qtyProduct,
              qtyProductUsed,
              orientation,
              orderMessage,
              zipCodeCoverage,
              search,
            };
            const result = onChange(modelFields);
            value = result?.discountValue ?? value;
          }
          if (errors.discountValue?.hasError) {
            runValidationTasks("discountValue", value);
          }
          setDiscountValue(value);
        }}
        onBlur={() => runValidationTasks("discountValue", discountValue)}
        errorMessage={errors.discountValue?.errorMessage}
        hasError={errors.discountValue?.hasError}
        {...getOverrideProps(overrides, "discountValue")}
      ></TextField>
      <TextField
        label="Qty limit"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={qtyLimit}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              code,
              campaignCode,
              start,
              expiration,
              discountPercentage,
              discountValue,
              qtyLimit: value,
              qtyUsed,
              qtyProduct,
              qtyProductUsed,
              orientation,
              orderMessage,
              zipCodeCoverage,
              search,
            };
            const result = onChange(modelFields);
            value = result?.qtyLimit ?? value;
          }
          if (errors.qtyLimit?.hasError) {
            runValidationTasks("qtyLimit", value);
          }
          setQtyLimit(value);
        }}
        onBlur={() => runValidationTasks("qtyLimit", qtyLimit)}
        errorMessage={errors.qtyLimit?.errorMessage}
        hasError={errors.qtyLimit?.hasError}
        {...getOverrideProps(overrides, "qtyLimit")}
      ></TextField>
      <TextField
        label="Qty used"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={qtyUsed}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              code,
              campaignCode,
              start,
              expiration,
              discountPercentage,
              discountValue,
              qtyLimit,
              qtyUsed: value,
              qtyProduct,
              qtyProductUsed,
              orientation,
              orderMessage,
              zipCodeCoverage,
              search,
            };
            const result = onChange(modelFields);
            value = result?.qtyUsed ?? value;
          }
          if (errors.qtyUsed?.hasError) {
            runValidationTasks("qtyUsed", value);
          }
          setQtyUsed(value);
        }}
        onBlur={() => runValidationTasks("qtyUsed", qtyUsed)}
        errorMessage={errors.qtyUsed?.errorMessage}
        hasError={errors.qtyUsed?.hasError}
        {...getOverrideProps(overrides, "qtyUsed")}
      ></TextField>
      <TextField
        label="Qty product"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={qtyProduct}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              code,
              campaignCode,
              start,
              expiration,
              discountPercentage,
              discountValue,
              qtyLimit,
              qtyUsed,
              qtyProduct: value,
              qtyProductUsed,
              orientation,
              orderMessage,
              zipCodeCoverage,
              search,
            };
            const result = onChange(modelFields);
            value = result?.qtyProduct ?? value;
          }
          if (errors.qtyProduct?.hasError) {
            runValidationTasks("qtyProduct", value);
          }
          setQtyProduct(value);
        }}
        onBlur={() => runValidationTasks("qtyProduct", qtyProduct)}
        errorMessage={errors.qtyProduct?.errorMessage}
        hasError={errors.qtyProduct?.hasError}
        {...getOverrideProps(overrides, "qtyProduct")}
      ></TextField>
      <TextField
        label="Qty product used"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={qtyProductUsed}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              code,
              campaignCode,
              start,
              expiration,
              discountPercentage,
              discountValue,
              qtyLimit,
              qtyUsed,
              qtyProduct,
              qtyProductUsed: value,
              orientation,
              orderMessage,
              zipCodeCoverage,
              search,
            };
            const result = onChange(modelFields);
            value = result?.qtyProductUsed ?? value;
          }
          if (errors.qtyProductUsed?.hasError) {
            runValidationTasks("qtyProductUsed", value);
          }
          setQtyProductUsed(value);
        }}
        onBlur={() => runValidationTasks("qtyProductUsed", qtyProductUsed)}
        errorMessage={errors.qtyProductUsed?.errorMessage}
        hasError={errors.qtyProductUsed?.hasError}
        {...getOverrideProps(overrides, "qtyProductUsed")}
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
              code,
              campaignCode,
              start,
              expiration,
              discountPercentage,
              discountValue,
              qtyLimit,
              qtyUsed,
              qtyProduct,
              qtyProductUsed,
              orientation: value,
              orderMessage,
              zipCodeCoverage,
              search,
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
        label="Order message"
        isRequired={false}
        isReadOnly={false}
        value={orderMessage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              code,
              campaignCode,
              start,
              expiration,
              discountPercentage,
              discountValue,
              qtyLimit,
              qtyUsed,
              qtyProduct,
              qtyProductUsed,
              orientation,
              orderMessage: value,
              zipCodeCoverage,
              search,
            };
            const result = onChange(modelFields);
            value = result?.orderMessage ?? value;
          }
          if (errors.orderMessage?.hasError) {
            runValidationTasks("orderMessage", value);
          }
          setOrderMessage(value);
        }}
        onBlur={() => runValidationTasks("orderMessage", orderMessage)}
        errorMessage={errors.orderMessage?.errorMessage}
        hasError={errors.orderMessage?.hasError}
        {...getOverrideProps(overrides, "orderMessage")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              description,
              code,
              campaignCode,
              start,
              expiration,
              discountPercentage,
              discountValue,
              qtyLimit,
              qtyUsed,
              qtyProduct,
              qtyProductUsed,
              orientation,
              orderMessage,
              zipCodeCoverage: values,
              search,
            };
            const result = onChange(modelFields);
            values = result?.zipCodeCoverage ?? values;
          }
          setZipCodeCoverage(values);
          setCurrentZipCodeCoverageValue("");
        }}
        currentFieldValue={currentZipCodeCoverageValue}
        label={"Zip code coverage"}
        items={zipCodeCoverage}
        hasError={errors?.zipCodeCoverage?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "zipCodeCoverage",
            currentZipCodeCoverageValue
          )
        }
        errorMessage={errors?.zipCodeCoverage?.errorMessage}
        setFieldValue={setCurrentZipCodeCoverageValue}
        inputFieldRef={zipCodeCoverageRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Zip code coverage"
          isRequired={false}
          isReadOnly={false}
          value={currentZipCodeCoverageValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.zipCodeCoverage?.hasError) {
              runValidationTasks("zipCodeCoverage", value);
            }
            setCurrentZipCodeCoverageValue(value);
          }}
          onBlur={() =>
            runValidationTasks("zipCodeCoverage", currentZipCodeCoverageValue)
          }
          errorMessage={errors.zipCodeCoverage?.errorMessage}
          hasError={errors.zipCodeCoverage?.hasError}
          ref={zipCodeCoverageRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "zipCodeCoverage")}
        ></TextField>
      </ArrayField>
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
              code,
              campaignCode,
              start,
              expiration,
              discountPercentage,
              discountValue,
              qtyLimit,
              qtyUsed,
              qtyProduct,
              qtyProductUsed,
              orientation,
              orderMessage,
              zipCodeCoverage,
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
