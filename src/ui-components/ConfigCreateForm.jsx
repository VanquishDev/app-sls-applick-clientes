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
import { createConfig } from "../graphql/mutations";
export default function ConfigCreateForm(props) {
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
    validationMode: "",
    googleAnalyticsID: "",
    googleSiteVerification: "",
    inviteSubject: "",
    inviteMessage: "",
    inviteSMS: "",
    facebook: "",
    twitter: "",
    instagram: "",
    infoFooter: "",
    minValueOrder: "",
    phoneOrders: "",
    allowPayOnDelivery: false,
    allowLocalPickup: false,
    deliveryOnSunday: "",
    deliveryOnMonday: "",
    deliveryOnTuesday: "",
    deliveryOnWednesday: "",
    deliveryOnThursday: "",
    deliveryOnFriday: "",
    deliveryOnSaturday: "",
    deliveryOffSunday: "",
    deliveryOffMonday: "",
    deliveryOffTuesday: "",
    deliveryOffWednesday: "",
    deliveryOffThursday: "",
    deliveryOffFriday: "",
    deliveryOffSaturday: "",
    showNotesCart: false,
    notesCart: "",
    soundOnNewOrder: false,
  };
  const [validationMode, setValidationMode] = React.useState(
    initialValues.validationMode
  );
  const [googleAnalyticsID, setGoogleAnalyticsID] = React.useState(
    initialValues.googleAnalyticsID
  );
  const [googleSiteVerification, setGoogleSiteVerification] = React.useState(
    initialValues.googleSiteVerification
  );
  const [inviteSubject, setInviteSubject] = React.useState(
    initialValues.inviteSubject
  );
  const [inviteMessage, setInviteMessage] = React.useState(
    initialValues.inviteMessage
  );
  const [inviteSMS, setInviteSMS] = React.useState(initialValues.inviteSMS);
  const [facebook, setFacebook] = React.useState(initialValues.facebook);
  const [twitter, setTwitter] = React.useState(initialValues.twitter);
  const [instagram, setInstagram] = React.useState(initialValues.instagram);
  const [infoFooter, setInfoFooter] = React.useState(initialValues.infoFooter);
  const [minValueOrder, setMinValueOrder] = React.useState(
    initialValues.minValueOrder
  );
  const [phoneOrders, setPhoneOrders] = React.useState(
    initialValues.phoneOrders
  );
  const [allowPayOnDelivery, setAllowPayOnDelivery] = React.useState(
    initialValues.allowPayOnDelivery
  );
  const [allowLocalPickup, setAllowLocalPickup] = React.useState(
    initialValues.allowLocalPickup
  );
  const [deliveryOnSunday, setDeliveryOnSunday] = React.useState(
    initialValues.deliveryOnSunday
  );
  const [deliveryOnMonday, setDeliveryOnMonday] = React.useState(
    initialValues.deliveryOnMonday
  );
  const [deliveryOnTuesday, setDeliveryOnTuesday] = React.useState(
    initialValues.deliveryOnTuesday
  );
  const [deliveryOnWednesday, setDeliveryOnWednesday] = React.useState(
    initialValues.deliveryOnWednesday
  );
  const [deliveryOnThursday, setDeliveryOnThursday] = React.useState(
    initialValues.deliveryOnThursday
  );
  const [deliveryOnFriday, setDeliveryOnFriday] = React.useState(
    initialValues.deliveryOnFriday
  );
  const [deliveryOnSaturday, setDeliveryOnSaturday] = React.useState(
    initialValues.deliveryOnSaturday
  );
  const [deliveryOffSunday, setDeliveryOffSunday] = React.useState(
    initialValues.deliveryOffSunday
  );
  const [deliveryOffMonday, setDeliveryOffMonday] = React.useState(
    initialValues.deliveryOffMonday
  );
  const [deliveryOffTuesday, setDeliveryOffTuesday] = React.useState(
    initialValues.deliveryOffTuesday
  );
  const [deliveryOffWednesday, setDeliveryOffWednesday] = React.useState(
    initialValues.deliveryOffWednesday
  );
  const [deliveryOffThursday, setDeliveryOffThursday] = React.useState(
    initialValues.deliveryOffThursday
  );
  const [deliveryOffFriday, setDeliveryOffFriday] = React.useState(
    initialValues.deliveryOffFriday
  );
  const [deliveryOffSaturday, setDeliveryOffSaturday] = React.useState(
    initialValues.deliveryOffSaturday
  );
  const [showNotesCart, setShowNotesCart] = React.useState(
    initialValues.showNotesCart
  );
  const [notesCart, setNotesCart] = React.useState(initialValues.notesCart);
  const [soundOnNewOrder, setSoundOnNewOrder] = React.useState(
    initialValues.soundOnNewOrder
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setValidationMode(initialValues.validationMode);
    setGoogleAnalyticsID(initialValues.googleAnalyticsID);
    setGoogleSiteVerification(initialValues.googleSiteVerification);
    setInviteSubject(initialValues.inviteSubject);
    setInviteMessage(initialValues.inviteMessage);
    setInviteSMS(initialValues.inviteSMS);
    setFacebook(initialValues.facebook);
    setTwitter(initialValues.twitter);
    setInstagram(initialValues.instagram);
    setInfoFooter(initialValues.infoFooter);
    setMinValueOrder(initialValues.minValueOrder);
    setPhoneOrders(initialValues.phoneOrders);
    setAllowPayOnDelivery(initialValues.allowPayOnDelivery);
    setAllowLocalPickup(initialValues.allowLocalPickup);
    setDeliveryOnSunday(initialValues.deliveryOnSunday);
    setDeliveryOnMonday(initialValues.deliveryOnMonday);
    setDeliveryOnTuesday(initialValues.deliveryOnTuesday);
    setDeliveryOnWednesday(initialValues.deliveryOnWednesday);
    setDeliveryOnThursday(initialValues.deliveryOnThursday);
    setDeliveryOnFriday(initialValues.deliveryOnFriday);
    setDeliveryOnSaturday(initialValues.deliveryOnSaturday);
    setDeliveryOffSunday(initialValues.deliveryOffSunday);
    setDeliveryOffMonday(initialValues.deliveryOffMonday);
    setDeliveryOffTuesday(initialValues.deliveryOffTuesday);
    setDeliveryOffWednesday(initialValues.deliveryOffWednesday);
    setDeliveryOffThursday(initialValues.deliveryOffThursday);
    setDeliveryOffFriday(initialValues.deliveryOffFriday);
    setDeliveryOffSaturday(initialValues.deliveryOffSaturday);
    setShowNotesCart(initialValues.showNotesCart);
    setNotesCart(initialValues.notesCart);
    setSoundOnNewOrder(initialValues.soundOnNewOrder);
    setErrors({});
  };
  const validations = {
    validationMode: [{ type: "Required" }],
    googleAnalyticsID: [],
    googleSiteVerification: [],
    inviteSubject: [],
    inviteMessage: [],
    inviteSMS: [],
    facebook: [],
    twitter: [],
    instagram: [],
    infoFooter: [],
    minValueOrder: [],
    phoneOrders: [{ type: "Phone" }],
    allowPayOnDelivery: [],
    allowLocalPickup: [],
    deliveryOnSunday: [],
    deliveryOnMonday: [],
    deliveryOnTuesday: [],
    deliveryOnWednesday: [],
    deliveryOnThursday: [],
    deliveryOnFriday: [],
    deliveryOnSaturday: [],
    deliveryOffSunday: [],
    deliveryOffMonday: [],
    deliveryOffTuesday: [],
    deliveryOffWednesday: [],
    deliveryOffThursday: [],
    deliveryOffFriday: [],
    deliveryOffSaturday: [],
    showNotesCart: [],
    notesCart: [],
    soundOnNewOrder: [],
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
          validationMode,
          googleAnalyticsID,
          googleSiteVerification,
          inviteSubject,
          inviteMessage,
          inviteSMS,
          facebook,
          twitter,
          instagram,
          infoFooter,
          minValueOrder,
          phoneOrders,
          allowPayOnDelivery,
          allowLocalPickup,
          deliveryOnSunday,
          deliveryOnMonday,
          deliveryOnTuesday,
          deliveryOnWednesday,
          deliveryOnThursday,
          deliveryOnFriday,
          deliveryOnSaturday,
          deliveryOffSunday,
          deliveryOffMonday,
          deliveryOffTuesday,
          deliveryOffWednesday,
          deliveryOffThursday,
          deliveryOffFriday,
          deliveryOffSaturday,
          showNotesCart,
          notesCart,
          soundOnNewOrder,
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
            query: createConfig.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "ConfigCreateForm")}
      {...rest}
    >
      <SelectField
        label="Validation mode"
        placeholder="Please select an option"
        isDisabled={false}
        value={validationMode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode: value,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.validationMode ?? value;
          }
          if (errors.validationMode?.hasError) {
            runValidationTasks("validationMode", value);
          }
          setValidationMode(value);
        }}
        onBlur={() => runValidationTasks("validationMode", validationMode)}
        errorMessage={errors.validationMode?.errorMessage}
        hasError={errors.validationMode?.hasError}
        {...getOverrideProps(overrides, "validationMode")}
      >
        <option
          children="Code"
          value="CODE"
          {...getOverrideProps(overrides, "validationModeoption0")}
        ></option>
        <option
          children="Link"
          value="LINK"
          {...getOverrideProps(overrides, "validationModeoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Google analytics id"
        isRequired={false}
        isReadOnly={false}
        value={googleAnalyticsID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID: value,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.googleAnalyticsID ?? value;
          }
          if (errors.googleAnalyticsID?.hasError) {
            runValidationTasks("googleAnalyticsID", value);
          }
          setGoogleAnalyticsID(value);
        }}
        onBlur={() =>
          runValidationTasks("googleAnalyticsID", googleAnalyticsID)
        }
        errorMessage={errors.googleAnalyticsID?.errorMessage}
        hasError={errors.googleAnalyticsID?.hasError}
        {...getOverrideProps(overrides, "googleAnalyticsID")}
      ></TextField>
      <TextField
        label="Google site verification"
        isRequired={false}
        isReadOnly={false}
        value={googleSiteVerification}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification: value,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.googleSiteVerification ?? value;
          }
          if (errors.googleSiteVerification?.hasError) {
            runValidationTasks("googleSiteVerification", value);
          }
          setGoogleSiteVerification(value);
        }}
        onBlur={() =>
          runValidationTasks("googleSiteVerification", googleSiteVerification)
        }
        errorMessage={errors.googleSiteVerification?.errorMessage}
        hasError={errors.googleSiteVerification?.hasError}
        {...getOverrideProps(overrides, "googleSiteVerification")}
      ></TextField>
      <TextField
        label="Invite subject"
        isRequired={false}
        isReadOnly={false}
        value={inviteSubject}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject: value,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.inviteSubject ?? value;
          }
          if (errors.inviteSubject?.hasError) {
            runValidationTasks("inviteSubject", value);
          }
          setInviteSubject(value);
        }}
        onBlur={() => runValidationTasks("inviteSubject", inviteSubject)}
        errorMessage={errors.inviteSubject?.errorMessage}
        hasError={errors.inviteSubject?.hasError}
        {...getOverrideProps(overrides, "inviteSubject")}
      ></TextField>
      <TextField
        label="Invite message"
        isRequired={false}
        isReadOnly={false}
        value={inviteMessage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage: value,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.inviteMessage ?? value;
          }
          if (errors.inviteMessage?.hasError) {
            runValidationTasks("inviteMessage", value);
          }
          setInviteMessage(value);
        }}
        onBlur={() => runValidationTasks("inviteMessage", inviteMessage)}
        errorMessage={errors.inviteMessage?.errorMessage}
        hasError={errors.inviteMessage?.hasError}
        {...getOverrideProps(overrides, "inviteMessage")}
      ></TextField>
      <TextField
        label="Invite sms"
        isRequired={false}
        isReadOnly={false}
        value={inviteSMS}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS: value,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.inviteSMS ?? value;
          }
          if (errors.inviteSMS?.hasError) {
            runValidationTasks("inviteSMS", value);
          }
          setInviteSMS(value);
        }}
        onBlur={() => runValidationTasks("inviteSMS", inviteSMS)}
        errorMessage={errors.inviteSMS?.errorMessage}
        hasError={errors.inviteSMS?.hasError}
        {...getOverrideProps(overrides, "inviteSMS")}
      ></TextField>
      <TextField
        label="Facebook"
        isRequired={false}
        isReadOnly={false}
        value={facebook}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook: value,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.facebook ?? value;
          }
          if (errors.facebook?.hasError) {
            runValidationTasks("facebook", value);
          }
          setFacebook(value);
        }}
        onBlur={() => runValidationTasks("facebook", facebook)}
        errorMessage={errors.facebook?.errorMessage}
        hasError={errors.facebook?.hasError}
        {...getOverrideProps(overrides, "facebook")}
      ></TextField>
      <TextField
        label="Twitter"
        isRequired={false}
        isReadOnly={false}
        value={twitter}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter: value,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.twitter ?? value;
          }
          if (errors.twitter?.hasError) {
            runValidationTasks("twitter", value);
          }
          setTwitter(value);
        }}
        onBlur={() => runValidationTasks("twitter", twitter)}
        errorMessage={errors.twitter?.errorMessage}
        hasError={errors.twitter?.hasError}
        {...getOverrideProps(overrides, "twitter")}
      ></TextField>
      <TextField
        label="Instagram"
        isRequired={false}
        isReadOnly={false}
        value={instagram}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram: value,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.instagram ?? value;
          }
          if (errors.instagram?.hasError) {
            runValidationTasks("instagram", value);
          }
          setInstagram(value);
        }}
        onBlur={() => runValidationTasks("instagram", instagram)}
        errorMessage={errors.instagram?.errorMessage}
        hasError={errors.instagram?.hasError}
        {...getOverrideProps(overrides, "instagram")}
      ></TextField>
      <TextField
        label="Info footer"
        isRequired={false}
        isReadOnly={false}
        value={infoFooter}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter: value,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.infoFooter ?? value;
          }
          if (errors.infoFooter?.hasError) {
            runValidationTasks("infoFooter", value);
          }
          setInfoFooter(value);
        }}
        onBlur={() => runValidationTasks("infoFooter", infoFooter)}
        errorMessage={errors.infoFooter?.errorMessage}
        hasError={errors.infoFooter?.hasError}
        {...getOverrideProps(overrides, "infoFooter")}
      ></TextField>
      <TextField
        label="Min value order"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={minValueOrder}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder: value,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.minValueOrder ?? value;
          }
          if (errors.minValueOrder?.hasError) {
            runValidationTasks("minValueOrder", value);
          }
          setMinValueOrder(value);
        }}
        onBlur={() => runValidationTasks("minValueOrder", minValueOrder)}
        errorMessage={errors.minValueOrder?.errorMessage}
        hasError={errors.minValueOrder?.hasError}
        {...getOverrideProps(overrides, "minValueOrder")}
      ></TextField>
      <TextField
        label="Phone orders"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={phoneOrders}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders: value,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.phoneOrders ?? value;
          }
          if (errors.phoneOrders?.hasError) {
            runValidationTasks("phoneOrders", value);
          }
          setPhoneOrders(value);
        }}
        onBlur={() => runValidationTasks("phoneOrders", phoneOrders)}
        errorMessage={errors.phoneOrders?.errorMessage}
        hasError={errors.phoneOrders?.hasError}
        {...getOverrideProps(overrides, "phoneOrders")}
      ></TextField>
      <SwitchField
        label="Allow pay on delivery"
        defaultChecked={false}
        isDisabled={false}
        isChecked={allowPayOnDelivery}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery: value,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.allowPayOnDelivery ?? value;
          }
          if (errors.allowPayOnDelivery?.hasError) {
            runValidationTasks("allowPayOnDelivery", value);
          }
          setAllowPayOnDelivery(value);
        }}
        onBlur={() =>
          runValidationTasks("allowPayOnDelivery", allowPayOnDelivery)
        }
        errorMessage={errors.allowPayOnDelivery?.errorMessage}
        hasError={errors.allowPayOnDelivery?.hasError}
        {...getOverrideProps(overrides, "allowPayOnDelivery")}
      ></SwitchField>
      <SwitchField
        label="Allow local pickup"
        defaultChecked={false}
        isDisabled={false}
        isChecked={allowLocalPickup}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup: value,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.allowLocalPickup ?? value;
          }
          if (errors.allowLocalPickup?.hasError) {
            runValidationTasks("allowLocalPickup", value);
          }
          setAllowLocalPickup(value);
        }}
        onBlur={() => runValidationTasks("allowLocalPickup", allowLocalPickup)}
        errorMessage={errors.allowLocalPickup?.errorMessage}
        hasError={errors.allowLocalPickup?.hasError}
        {...getOverrideProps(overrides, "allowLocalPickup")}
      ></SwitchField>
      <TextField
        label="Delivery on sunday"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={deliveryOnSunday}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday: value,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.deliveryOnSunday ?? value;
          }
          if (errors.deliveryOnSunday?.hasError) {
            runValidationTasks("deliveryOnSunday", value);
          }
          setDeliveryOnSunday(value);
        }}
        onBlur={() => runValidationTasks("deliveryOnSunday", deliveryOnSunday)}
        errorMessage={errors.deliveryOnSunday?.errorMessage}
        hasError={errors.deliveryOnSunday?.hasError}
        {...getOverrideProps(overrides, "deliveryOnSunday")}
      ></TextField>
      <TextField
        label="Delivery on monday"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={deliveryOnMonday}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday: value,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.deliveryOnMonday ?? value;
          }
          if (errors.deliveryOnMonday?.hasError) {
            runValidationTasks("deliveryOnMonday", value);
          }
          setDeliveryOnMonday(value);
        }}
        onBlur={() => runValidationTasks("deliveryOnMonday", deliveryOnMonday)}
        errorMessage={errors.deliveryOnMonday?.errorMessage}
        hasError={errors.deliveryOnMonday?.hasError}
        {...getOverrideProps(overrides, "deliveryOnMonday")}
      ></TextField>
      <TextField
        label="Delivery on tuesday"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={deliveryOnTuesday}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday: value,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.deliveryOnTuesday ?? value;
          }
          if (errors.deliveryOnTuesday?.hasError) {
            runValidationTasks("deliveryOnTuesday", value);
          }
          setDeliveryOnTuesday(value);
        }}
        onBlur={() =>
          runValidationTasks("deliveryOnTuesday", deliveryOnTuesday)
        }
        errorMessage={errors.deliveryOnTuesday?.errorMessage}
        hasError={errors.deliveryOnTuesday?.hasError}
        {...getOverrideProps(overrides, "deliveryOnTuesday")}
      ></TextField>
      <TextField
        label="Delivery on wednesday"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={deliveryOnWednesday}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday: value,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.deliveryOnWednesday ?? value;
          }
          if (errors.deliveryOnWednesday?.hasError) {
            runValidationTasks("deliveryOnWednesday", value);
          }
          setDeliveryOnWednesday(value);
        }}
        onBlur={() =>
          runValidationTasks("deliveryOnWednesday", deliveryOnWednesday)
        }
        errorMessage={errors.deliveryOnWednesday?.errorMessage}
        hasError={errors.deliveryOnWednesday?.hasError}
        {...getOverrideProps(overrides, "deliveryOnWednesday")}
      ></TextField>
      <TextField
        label="Delivery on thursday"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={deliveryOnThursday}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday: value,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.deliveryOnThursday ?? value;
          }
          if (errors.deliveryOnThursday?.hasError) {
            runValidationTasks("deliveryOnThursday", value);
          }
          setDeliveryOnThursday(value);
        }}
        onBlur={() =>
          runValidationTasks("deliveryOnThursday", deliveryOnThursday)
        }
        errorMessage={errors.deliveryOnThursday?.errorMessage}
        hasError={errors.deliveryOnThursday?.hasError}
        {...getOverrideProps(overrides, "deliveryOnThursday")}
      ></TextField>
      <TextField
        label="Delivery on friday"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={deliveryOnFriday}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday: value,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.deliveryOnFriday ?? value;
          }
          if (errors.deliveryOnFriday?.hasError) {
            runValidationTasks("deliveryOnFriday", value);
          }
          setDeliveryOnFriday(value);
        }}
        onBlur={() => runValidationTasks("deliveryOnFriday", deliveryOnFriday)}
        errorMessage={errors.deliveryOnFriday?.errorMessage}
        hasError={errors.deliveryOnFriday?.hasError}
        {...getOverrideProps(overrides, "deliveryOnFriday")}
      ></TextField>
      <TextField
        label="Delivery on saturday"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={deliveryOnSaturday}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday: value,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.deliveryOnSaturday ?? value;
          }
          if (errors.deliveryOnSaturday?.hasError) {
            runValidationTasks("deliveryOnSaturday", value);
          }
          setDeliveryOnSaturday(value);
        }}
        onBlur={() =>
          runValidationTasks("deliveryOnSaturday", deliveryOnSaturday)
        }
        errorMessage={errors.deliveryOnSaturday?.errorMessage}
        hasError={errors.deliveryOnSaturday?.hasError}
        {...getOverrideProps(overrides, "deliveryOnSaturday")}
      ></TextField>
      <TextField
        label="Delivery off sunday"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={deliveryOffSunday}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday: value,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.deliveryOffSunday ?? value;
          }
          if (errors.deliveryOffSunday?.hasError) {
            runValidationTasks("deliveryOffSunday", value);
          }
          setDeliveryOffSunday(value);
        }}
        onBlur={() =>
          runValidationTasks("deliveryOffSunday", deliveryOffSunday)
        }
        errorMessage={errors.deliveryOffSunday?.errorMessage}
        hasError={errors.deliveryOffSunday?.hasError}
        {...getOverrideProps(overrides, "deliveryOffSunday")}
      ></TextField>
      <TextField
        label="Delivery off monday"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={deliveryOffMonday}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday: value,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.deliveryOffMonday ?? value;
          }
          if (errors.deliveryOffMonday?.hasError) {
            runValidationTasks("deliveryOffMonday", value);
          }
          setDeliveryOffMonday(value);
        }}
        onBlur={() =>
          runValidationTasks("deliveryOffMonday", deliveryOffMonday)
        }
        errorMessage={errors.deliveryOffMonday?.errorMessage}
        hasError={errors.deliveryOffMonday?.hasError}
        {...getOverrideProps(overrides, "deliveryOffMonday")}
      ></TextField>
      <TextField
        label="Delivery off tuesday"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={deliveryOffTuesday}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday: value,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.deliveryOffTuesday ?? value;
          }
          if (errors.deliveryOffTuesday?.hasError) {
            runValidationTasks("deliveryOffTuesday", value);
          }
          setDeliveryOffTuesday(value);
        }}
        onBlur={() =>
          runValidationTasks("deliveryOffTuesday", deliveryOffTuesday)
        }
        errorMessage={errors.deliveryOffTuesday?.errorMessage}
        hasError={errors.deliveryOffTuesday?.hasError}
        {...getOverrideProps(overrides, "deliveryOffTuesday")}
      ></TextField>
      <TextField
        label="Delivery off wednesday"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={deliveryOffWednesday}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday: value,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.deliveryOffWednesday ?? value;
          }
          if (errors.deliveryOffWednesday?.hasError) {
            runValidationTasks("deliveryOffWednesday", value);
          }
          setDeliveryOffWednesday(value);
        }}
        onBlur={() =>
          runValidationTasks("deliveryOffWednesday", deliveryOffWednesday)
        }
        errorMessage={errors.deliveryOffWednesday?.errorMessage}
        hasError={errors.deliveryOffWednesday?.hasError}
        {...getOverrideProps(overrides, "deliveryOffWednesday")}
      ></TextField>
      <TextField
        label="Delivery off thursday"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={deliveryOffThursday}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday: value,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.deliveryOffThursday ?? value;
          }
          if (errors.deliveryOffThursday?.hasError) {
            runValidationTasks("deliveryOffThursday", value);
          }
          setDeliveryOffThursday(value);
        }}
        onBlur={() =>
          runValidationTasks("deliveryOffThursday", deliveryOffThursday)
        }
        errorMessage={errors.deliveryOffThursday?.errorMessage}
        hasError={errors.deliveryOffThursday?.hasError}
        {...getOverrideProps(overrides, "deliveryOffThursday")}
      ></TextField>
      <TextField
        label="Delivery off friday"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={deliveryOffFriday}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday: value,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.deliveryOffFriday ?? value;
          }
          if (errors.deliveryOffFriday?.hasError) {
            runValidationTasks("deliveryOffFriday", value);
          }
          setDeliveryOffFriday(value);
        }}
        onBlur={() =>
          runValidationTasks("deliveryOffFriday", deliveryOffFriday)
        }
        errorMessage={errors.deliveryOffFriday?.errorMessage}
        hasError={errors.deliveryOffFriday?.hasError}
        {...getOverrideProps(overrides, "deliveryOffFriday")}
      ></TextField>
      <TextField
        label="Delivery off saturday"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={deliveryOffSaturday}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday: value,
              showNotesCart,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.deliveryOffSaturday ?? value;
          }
          if (errors.deliveryOffSaturday?.hasError) {
            runValidationTasks("deliveryOffSaturday", value);
          }
          setDeliveryOffSaturday(value);
        }}
        onBlur={() =>
          runValidationTasks("deliveryOffSaturday", deliveryOffSaturday)
        }
        errorMessage={errors.deliveryOffSaturday?.errorMessage}
        hasError={errors.deliveryOffSaturday?.hasError}
        {...getOverrideProps(overrides, "deliveryOffSaturday")}
      ></TextField>
      <SwitchField
        label="Show notes cart"
        defaultChecked={false}
        isDisabled={false}
        isChecked={showNotesCart}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart: value,
              notesCart,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.showNotesCart ?? value;
          }
          if (errors.showNotesCart?.hasError) {
            runValidationTasks("showNotesCart", value);
          }
          setShowNotesCart(value);
        }}
        onBlur={() => runValidationTasks("showNotesCart", showNotesCart)}
        errorMessage={errors.showNotesCart?.errorMessage}
        hasError={errors.showNotesCart?.hasError}
        {...getOverrideProps(overrides, "showNotesCart")}
      ></SwitchField>
      <TextField
        label="Notes cart"
        isRequired={false}
        isReadOnly={false}
        value={notesCart}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart: value,
              soundOnNewOrder,
            };
            const result = onChange(modelFields);
            value = result?.notesCart ?? value;
          }
          if (errors.notesCart?.hasError) {
            runValidationTasks("notesCart", value);
          }
          setNotesCart(value);
        }}
        onBlur={() => runValidationTasks("notesCart", notesCart)}
        errorMessage={errors.notesCart?.errorMessage}
        hasError={errors.notesCart?.hasError}
        {...getOverrideProps(overrides, "notesCart")}
      ></TextField>
      <SwitchField
        label="Sound on new order"
        defaultChecked={false}
        isDisabled={false}
        isChecked={soundOnNewOrder}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              validationMode,
              googleAnalyticsID,
              googleSiteVerification,
              inviteSubject,
              inviteMessage,
              inviteSMS,
              facebook,
              twitter,
              instagram,
              infoFooter,
              minValueOrder,
              phoneOrders,
              allowPayOnDelivery,
              allowLocalPickup,
              deliveryOnSunday,
              deliveryOnMonday,
              deliveryOnTuesday,
              deliveryOnWednesday,
              deliveryOnThursday,
              deliveryOnFriday,
              deliveryOnSaturday,
              deliveryOffSunday,
              deliveryOffMonday,
              deliveryOffTuesday,
              deliveryOffWednesday,
              deliveryOffThursday,
              deliveryOffFriday,
              deliveryOffSaturday,
              showNotesCart,
              notesCart,
              soundOnNewOrder: value,
            };
            const result = onChange(modelFields);
            value = result?.soundOnNewOrder ?? value;
          }
          if (errors.soundOnNewOrder?.hasError) {
            runValidationTasks("soundOnNewOrder", value);
          }
          setSoundOnNewOrder(value);
        }}
        onBlur={() => runValidationTasks("soundOnNewOrder", soundOnNewOrder)}
        errorMessage={errors.soundOnNewOrder?.errorMessage}
        hasError={errors.soundOnNewOrder?.hasError}
        {...getOverrideProps(overrides, "soundOnNewOrder")}
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
