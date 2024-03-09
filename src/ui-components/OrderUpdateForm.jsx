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
import { getOrder } from "../graphql/queries";
import { updateOrder } from "../graphql/mutations";
export default function OrderUpdateForm(props) {
  const {
    id: idProp,
    order: orderModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    status: "",
    createdAt: "",
    couponID: "",
    couponName: "",
    couponDiscount: "",
    deliveryPrice: "",
    total: "",
    rating: "",
    ratingNotes: "",
    orderPagarmeID: "",
    addressReference: "",
    addressStreet: "",
    addressNumber: "",
    addressComplement: "",
    addressZipcode: "",
    addressNeighborhood: "",
    addressCity: "",
    addressState: "",
    addressCountry: "",
    notes: "",
    adherenceID: "",
    adherenceName: "",
    adherenceOrientation: "",
    clientCampaignID: "",
    clientCampaignName: "",
    companyName: "",
    companyPhone: "",
    companyOpeningHours: "",
    clientCampaignUnitID: "",
    clientCampaignUnitName: "",
    qrCodePix: "",
    qrCodePixUrl: "",
    payMethod: "",
    installments: "",
    homeCareOrRetail: "",
  };
  const [status, setStatus] = React.useState(initialValues.status);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [couponID, setCouponID] = React.useState(initialValues.couponID);
  const [couponName, setCouponName] = React.useState(initialValues.couponName);
  const [couponDiscount, setCouponDiscount] = React.useState(
    initialValues.couponDiscount
  );
  const [deliveryPrice, setDeliveryPrice] = React.useState(
    initialValues.deliveryPrice
  );
  const [total, setTotal] = React.useState(initialValues.total);
  const [rating, setRating] = React.useState(initialValues.rating);
  const [ratingNotes, setRatingNotes] = React.useState(
    initialValues.ratingNotes
  );
  const [orderPagarmeID, setOrderPagarmeID] = React.useState(
    initialValues.orderPagarmeID
  );
  const [addressReference, setAddressReference] = React.useState(
    initialValues.addressReference
  );
  const [addressStreet, setAddressStreet] = React.useState(
    initialValues.addressStreet
  );
  const [addressNumber, setAddressNumber] = React.useState(
    initialValues.addressNumber
  );
  const [addressComplement, setAddressComplement] = React.useState(
    initialValues.addressComplement
  );
  const [addressZipcode, setAddressZipcode] = React.useState(
    initialValues.addressZipcode
  );
  const [addressNeighborhood, setAddressNeighborhood] = React.useState(
    initialValues.addressNeighborhood
  );
  const [addressCity, setAddressCity] = React.useState(
    initialValues.addressCity
  );
  const [addressState, setAddressState] = React.useState(
    initialValues.addressState
  );
  const [addressCountry, setAddressCountry] = React.useState(
    initialValues.addressCountry
  );
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [adherenceID, setAdherenceID] = React.useState(
    initialValues.adherenceID
  );
  const [adherenceName, setAdherenceName] = React.useState(
    initialValues.adherenceName
  );
  const [adherenceOrientation, setAdherenceOrientation] = React.useState(
    initialValues.adherenceOrientation
  );
  const [clientCampaignID, setClientCampaignID] = React.useState(
    initialValues.clientCampaignID
  );
  const [clientCampaignName, setClientCampaignName] = React.useState(
    initialValues.clientCampaignName
  );
  const [companyName, setCompanyName] = React.useState(
    initialValues.companyName
  );
  const [companyPhone, setCompanyPhone] = React.useState(
    initialValues.companyPhone
  );
  const [companyOpeningHours, setCompanyOpeningHours] = React.useState(
    initialValues.companyOpeningHours
  );
  const [clientCampaignUnitID, setClientCampaignUnitID] = React.useState(
    initialValues.clientCampaignUnitID
  );
  const [clientCampaignUnitName, setClientCampaignUnitName] = React.useState(
    initialValues.clientCampaignUnitName
  );
  const [qrCodePix, setQrCodePix] = React.useState(initialValues.qrCodePix);
  const [qrCodePixUrl, setQrCodePixUrl] = React.useState(
    initialValues.qrCodePixUrl
  );
  const [payMethod, setPayMethod] = React.useState(initialValues.payMethod);
  const [installments, setInstallments] = React.useState(
    initialValues.installments
  );
  const [homeCareOrRetail, setHomeCareOrRetail] = React.useState(
    initialValues.homeCareOrRetail
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = orderRecord
      ? { ...initialValues, ...orderRecord }
      : initialValues;
    setStatus(cleanValues.status);
    setCreatedAt(cleanValues.createdAt);
    setCouponID(cleanValues.couponID);
    setCouponName(cleanValues.couponName);
    setCouponDiscount(cleanValues.couponDiscount);
    setDeliveryPrice(cleanValues.deliveryPrice);
    setTotal(cleanValues.total);
    setRating(cleanValues.rating);
    setRatingNotes(cleanValues.ratingNotes);
    setOrderPagarmeID(cleanValues.orderPagarmeID);
    setAddressReference(cleanValues.addressReference);
    setAddressStreet(cleanValues.addressStreet);
    setAddressNumber(cleanValues.addressNumber);
    setAddressComplement(cleanValues.addressComplement);
    setAddressZipcode(cleanValues.addressZipcode);
    setAddressNeighborhood(cleanValues.addressNeighborhood);
    setAddressCity(cleanValues.addressCity);
    setAddressState(cleanValues.addressState);
    setAddressCountry(cleanValues.addressCountry);
    setNotes(cleanValues.notes);
    setAdherenceID(cleanValues.adherenceID);
    setAdherenceName(cleanValues.adherenceName);
    setAdherenceOrientation(cleanValues.adherenceOrientation);
    setClientCampaignID(cleanValues.clientCampaignID);
    setClientCampaignName(cleanValues.clientCampaignName);
    setCompanyName(cleanValues.companyName);
    setCompanyPhone(cleanValues.companyPhone);
    setCompanyOpeningHours(cleanValues.companyOpeningHours);
    setClientCampaignUnitID(cleanValues.clientCampaignUnitID);
    setClientCampaignUnitName(cleanValues.clientCampaignUnitName);
    setQrCodePix(cleanValues.qrCodePix);
    setQrCodePixUrl(cleanValues.qrCodePixUrl);
    setPayMethod(cleanValues.payMethod);
    setInstallments(cleanValues.installments);
    setHomeCareOrRetail(cleanValues.homeCareOrRetail);
    setErrors({});
  };
  const [orderRecord, setOrderRecord] = React.useState(orderModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getOrder.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getOrder
        : orderModelProp;
      setOrderRecord(record);
    };
    queryData();
  }, [idProp, orderModelProp]);
  React.useEffect(resetStateValues, [orderRecord]);
  const validations = {
    status: [{ type: "Required" }],
    createdAt: [],
    couponID: [],
    couponName: [],
    couponDiscount: [],
    deliveryPrice: [],
    total: [],
    rating: [],
    ratingNotes: [],
    orderPagarmeID: [],
    addressReference: [],
    addressStreet: [],
    addressNumber: [],
    addressComplement: [],
    addressZipcode: [],
    addressNeighborhood: [],
    addressCity: [],
    addressState: [],
    addressCountry: [],
    notes: [],
    adherenceID: [],
    adherenceName: [],
    adherenceOrientation: [],
    clientCampaignID: [],
    clientCampaignName: [],
    companyName: [],
    companyPhone: [{ type: "Phone" }],
    companyOpeningHours: [],
    clientCampaignUnitID: [],
    clientCampaignUnitName: [],
    qrCodePix: [],
    qrCodePixUrl: [],
    payMethod: [],
    installments: [],
    homeCareOrRetail: [],
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
          status,
          createdAt: createdAt ?? null,
          couponID: couponID ?? null,
          couponName: couponName ?? null,
          couponDiscount: couponDiscount ?? null,
          deliveryPrice: deliveryPrice ?? null,
          total: total ?? null,
          rating: rating ?? null,
          ratingNotes: ratingNotes ?? null,
          orderPagarmeID: orderPagarmeID ?? null,
          addressReference: addressReference ?? null,
          addressStreet: addressStreet ?? null,
          addressNumber: addressNumber ?? null,
          addressComplement: addressComplement ?? null,
          addressZipcode: addressZipcode ?? null,
          addressNeighborhood: addressNeighborhood ?? null,
          addressCity: addressCity ?? null,
          addressState: addressState ?? null,
          addressCountry: addressCountry ?? null,
          notes: notes ?? null,
          adherenceID: adherenceID ?? null,
          adherenceName: adherenceName ?? null,
          adherenceOrientation: adherenceOrientation ?? null,
          clientCampaignID: clientCampaignID ?? null,
          clientCampaignName: clientCampaignName ?? null,
          companyName: companyName ?? null,
          companyPhone: companyPhone ?? null,
          companyOpeningHours: companyOpeningHours ?? null,
          clientCampaignUnitID: clientCampaignUnitID ?? null,
          clientCampaignUnitName: clientCampaignUnitName ?? null,
          qrCodePix: qrCodePix ?? null,
          qrCodePixUrl: qrCodePixUrl ?? null,
          payMethod: payMethod ?? null,
          installments: installments ?? null,
          homeCareOrRetail: homeCareOrRetail ?? null,
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
            query: updateOrder.replaceAll("__typename", ""),
            variables: {
              input: {
                id: orderRecord.id,
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
      {...getOverrideProps(overrides, "OrderUpdateForm")}
      {...rest}
    >
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status: value,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
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
          children="Canceled"
          value="CANCELED"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Rejected"
          value="REJECTED"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
        <option
          children="Approved"
          value="APPROVED"
          {...getOverrideProps(overrides, "statusoption3")}
        ></option>
        <option
          children="In preparation"
          value="IN_PREPARATION"
          {...getOverrideProps(overrides, "statusoption4")}
        ></option>
        <option
          children="In transit"
          value="IN_TRANSIT"
          {...getOverrideProps(overrides, "statusoption5")}
        ></option>
        <option
          children="Delivered"
          value="DELIVERED"
          {...getOverrideProps(overrides, "statusoption6")}
        ></option>
      </SelectField>
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
              status,
              createdAt: value,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
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
      <TextField
        label="Coupon id"
        isRequired={false}
        isReadOnly={false}
        value={couponID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID: value,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.couponID ?? value;
          }
          if (errors.couponID?.hasError) {
            runValidationTasks("couponID", value);
          }
          setCouponID(value);
        }}
        onBlur={() => runValidationTasks("couponID", couponID)}
        errorMessage={errors.couponID?.errorMessage}
        hasError={errors.couponID?.hasError}
        {...getOverrideProps(overrides, "couponID")}
      ></TextField>
      <TextField
        label="Coupon name"
        isRequired={false}
        isReadOnly={false}
        value={couponName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName: value,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.couponName ?? value;
          }
          if (errors.couponName?.hasError) {
            runValidationTasks("couponName", value);
          }
          setCouponName(value);
        }}
        onBlur={() => runValidationTasks("couponName", couponName)}
        errorMessage={errors.couponName?.errorMessage}
        hasError={errors.couponName?.hasError}
        {...getOverrideProps(overrides, "couponName")}
      ></TextField>
      <TextField
        label="Coupon discount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={couponDiscount}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount: value,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.couponDiscount ?? value;
          }
          if (errors.couponDiscount?.hasError) {
            runValidationTasks("couponDiscount", value);
          }
          setCouponDiscount(value);
        }}
        onBlur={() => runValidationTasks("couponDiscount", couponDiscount)}
        errorMessage={errors.couponDiscount?.errorMessage}
        hasError={errors.couponDiscount?.hasError}
        {...getOverrideProps(overrides, "couponDiscount")}
      ></TextField>
      <TextField
        label="Delivery price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={deliveryPrice}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice: value,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.deliveryPrice ?? value;
          }
          if (errors.deliveryPrice?.hasError) {
            runValidationTasks("deliveryPrice", value);
          }
          setDeliveryPrice(value);
        }}
        onBlur={() => runValidationTasks("deliveryPrice", deliveryPrice)}
        errorMessage={errors.deliveryPrice?.errorMessage}
        hasError={errors.deliveryPrice?.hasError}
        {...getOverrideProps(overrides, "deliveryPrice")}
      ></TextField>
      <TextField
        label="Total"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={total}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total: value,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.total ?? value;
          }
          if (errors.total?.hasError) {
            runValidationTasks("total", value);
          }
          setTotal(value);
        }}
        onBlur={() => runValidationTasks("total", total)}
        errorMessage={errors.total?.errorMessage}
        hasError={errors.total?.hasError}
        {...getOverrideProps(overrides, "total")}
      ></TextField>
      <TextField
        label="Rating"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={rating}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating: value,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.rating ?? value;
          }
          if (errors.rating?.hasError) {
            runValidationTasks("rating", value);
          }
          setRating(value);
        }}
        onBlur={() => runValidationTasks("rating", rating)}
        errorMessage={errors.rating?.errorMessage}
        hasError={errors.rating?.hasError}
        {...getOverrideProps(overrides, "rating")}
      ></TextField>
      <TextField
        label="Rating notes"
        isRequired={false}
        isReadOnly={false}
        value={ratingNotes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes: value,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.ratingNotes ?? value;
          }
          if (errors.ratingNotes?.hasError) {
            runValidationTasks("ratingNotes", value);
          }
          setRatingNotes(value);
        }}
        onBlur={() => runValidationTasks("ratingNotes", ratingNotes)}
        errorMessage={errors.ratingNotes?.errorMessage}
        hasError={errors.ratingNotes?.hasError}
        {...getOverrideProps(overrides, "ratingNotes")}
      ></TextField>
      <TextField
        label="Order pagarme id"
        isRequired={false}
        isReadOnly={false}
        value={orderPagarmeID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID: value,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.orderPagarmeID ?? value;
          }
          if (errors.orderPagarmeID?.hasError) {
            runValidationTasks("orderPagarmeID", value);
          }
          setOrderPagarmeID(value);
        }}
        onBlur={() => runValidationTasks("orderPagarmeID", orderPagarmeID)}
        errorMessage={errors.orderPagarmeID?.errorMessage}
        hasError={errors.orderPagarmeID?.hasError}
        {...getOverrideProps(overrides, "orderPagarmeID")}
      ></TextField>
      <TextField
        label="Address reference"
        isRequired={false}
        isReadOnly={false}
        value={addressReference}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference: value,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.addressReference ?? value;
          }
          if (errors.addressReference?.hasError) {
            runValidationTasks("addressReference", value);
          }
          setAddressReference(value);
        }}
        onBlur={() => runValidationTasks("addressReference", addressReference)}
        errorMessage={errors.addressReference?.errorMessage}
        hasError={errors.addressReference?.hasError}
        {...getOverrideProps(overrides, "addressReference")}
      ></TextField>
      <TextField
        label="Address street"
        isRequired={false}
        isReadOnly={false}
        value={addressStreet}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet: value,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.addressStreet ?? value;
          }
          if (errors.addressStreet?.hasError) {
            runValidationTasks("addressStreet", value);
          }
          setAddressStreet(value);
        }}
        onBlur={() => runValidationTasks("addressStreet", addressStreet)}
        errorMessage={errors.addressStreet?.errorMessage}
        hasError={errors.addressStreet?.hasError}
        {...getOverrideProps(overrides, "addressStreet")}
      ></TextField>
      <TextField
        label="Address number"
        isRequired={false}
        isReadOnly={false}
        value={addressNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber: value,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.addressNumber ?? value;
          }
          if (errors.addressNumber?.hasError) {
            runValidationTasks("addressNumber", value);
          }
          setAddressNumber(value);
        }}
        onBlur={() => runValidationTasks("addressNumber", addressNumber)}
        errorMessage={errors.addressNumber?.errorMessage}
        hasError={errors.addressNumber?.hasError}
        {...getOverrideProps(overrides, "addressNumber")}
      ></TextField>
      <TextField
        label="Address complement"
        isRequired={false}
        isReadOnly={false}
        value={addressComplement}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement: value,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.addressComplement ?? value;
          }
          if (errors.addressComplement?.hasError) {
            runValidationTasks("addressComplement", value);
          }
          setAddressComplement(value);
        }}
        onBlur={() =>
          runValidationTasks("addressComplement", addressComplement)
        }
        errorMessage={errors.addressComplement?.errorMessage}
        hasError={errors.addressComplement?.hasError}
        {...getOverrideProps(overrides, "addressComplement")}
      ></TextField>
      <TextField
        label="Address zipcode"
        isRequired={false}
        isReadOnly={false}
        value={addressZipcode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode: value,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.addressZipcode ?? value;
          }
          if (errors.addressZipcode?.hasError) {
            runValidationTasks("addressZipcode", value);
          }
          setAddressZipcode(value);
        }}
        onBlur={() => runValidationTasks("addressZipcode", addressZipcode)}
        errorMessage={errors.addressZipcode?.errorMessage}
        hasError={errors.addressZipcode?.hasError}
        {...getOverrideProps(overrides, "addressZipcode")}
      ></TextField>
      <TextField
        label="Address neighborhood"
        isRequired={false}
        isReadOnly={false}
        value={addressNeighborhood}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood: value,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.addressNeighborhood ?? value;
          }
          if (errors.addressNeighborhood?.hasError) {
            runValidationTasks("addressNeighborhood", value);
          }
          setAddressNeighborhood(value);
        }}
        onBlur={() =>
          runValidationTasks("addressNeighborhood", addressNeighborhood)
        }
        errorMessage={errors.addressNeighborhood?.errorMessage}
        hasError={errors.addressNeighborhood?.hasError}
        {...getOverrideProps(overrides, "addressNeighborhood")}
      ></TextField>
      <TextField
        label="Address city"
        isRequired={false}
        isReadOnly={false}
        value={addressCity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity: value,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.addressCity ?? value;
          }
          if (errors.addressCity?.hasError) {
            runValidationTasks("addressCity", value);
          }
          setAddressCity(value);
        }}
        onBlur={() => runValidationTasks("addressCity", addressCity)}
        errorMessage={errors.addressCity?.errorMessage}
        hasError={errors.addressCity?.hasError}
        {...getOverrideProps(overrides, "addressCity")}
      ></TextField>
      <TextField
        label="Address state"
        isRequired={false}
        isReadOnly={false}
        value={addressState}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState: value,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.addressState ?? value;
          }
          if (errors.addressState?.hasError) {
            runValidationTasks("addressState", value);
          }
          setAddressState(value);
        }}
        onBlur={() => runValidationTasks("addressState", addressState)}
        errorMessage={errors.addressState?.errorMessage}
        hasError={errors.addressState?.hasError}
        {...getOverrideProps(overrides, "addressState")}
      ></TextField>
      <TextField
        label="Address country"
        isRequired={false}
        isReadOnly={false}
        value={addressCountry}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry: value,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.addressCountry ?? value;
          }
          if (errors.addressCountry?.hasError) {
            runValidationTasks("addressCountry", value);
          }
          setAddressCountry(value);
        }}
        onBlur={() => runValidationTasks("addressCountry", addressCountry)}
        errorMessage={errors.addressCountry?.errorMessage}
        hasError={errors.addressCountry?.hasError}
        {...getOverrideProps(overrides, "addressCountry")}
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
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes: value,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
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
        label="Adherence id"
        isRequired={false}
        isReadOnly={false}
        value={adherenceID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID: value,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.adherenceID ?? value;
          }
          if (errors.adherenceID?.hasError) {
            runValidationTasks("adherenceID", value);
          }
          setAdherenceID(value);
        }}
        onBlur={() => runValidationTasks("adherenceID", adherenceID)}
        errorMessage={errors.adherenceID?.errorMessage}
        hasError={errors.adherenceID?.hasError}
        {...getOverrideProps(overrides, "adherenceID")}
      ></TextField>
      <TextField
        label="Adherence name"
        isRequired={false}
        isReadOnly={false}
        value={adherenceName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName: value,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.adherenceName ?? value;
          }
          if (errors.adherenceName?.hasError) {
            runValidationTasks("adherenceName", value);
          }
          setAdherenceName(value);
        }}
        onBlur={() => runValidationTasks("adherenceName", adherenceName)}
        errorMessage={errors.adherenceName?.errorMessage}
        hasError={errors.adherenceName?.hasError}
        {...getOverrideProps(overrides, "adherenceName")}
      ></TextField>
      <TextField
        label="Adherence orientation"
        isRequired={false}
        isReadOnly={false}
        value={adherenceOrientation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation: value,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.adherenceOrientation ?? value;
          }
          if (errors.adherenceOrientation?.hasError) {
            runValidationTasks("adherenceOrientation", value);
          }
          setAdherenceOrientation(value);
        }}
        onBlur={() =>
          runValidationTasks("adherenceOrientation", adherenceOrientation)
        }
        errorMessage={errors.adherenceOrientation?.errorMessage}
        hasError={errors.adherenceOrientation?.hasError}
        {...getOverrideProps(overrides, "adherenceOrientation")}
      ></TextField>
      <TextField
        label="Client campaign id"
        isRequired={false}
        isReadOnly={false}
        value={clientCampaignID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID: value,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.clientCampaignID ?? value;
          }
          if (errors.clientCampaignID?.hasError) {
            runValidationTasks("clientCampaignID", value);
          }
          setClientCampaignID(value);
        }}
        onBlur={() => runValidationTasks("clientCampaignID", clientCampaignID)}
        errorMessage={errors.clientCampaignID?.errorMessage}
        hasError={errors.clientCampaignID?.hasError}
        {...getOverrideProps(overrides, "clientCampaignID")}
      ></TextField>
      <TextField
        label="Client campaign name"
        isRequired={false}
        isReadOnly={false}
        value={clientCampaignName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName: value,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.clientCampaignName ?? value;
          }
          if (errors.clientCampaignName?.hasError) {
            runValidationTasks("clientCampaignName", value);
          }
          setClientCampaignName(value);
        }}
        onBlur={() =>
          runValidationTasks("clientCampaignName", clientCampaignName)
        }
        errorMessage={errors.clientCampaignName?.errorMessage}
        hasError={errors.clientCampaignName?.hasError}
        {...getOverrideProps(overrides, "clientCampaignName")}
      ></TextField>
      <TextField
        label="Company name"
        isRequired={false}
        isReadOnly={false}
        value={companyName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName: value,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.companyName ?? value;
          }
          if (errors.companyName?.hasError) {
            runValidationTasks("companyName", value);
          }
          setCompanyName(value);
        }}
        onBlur={() => runValidationTasks("companyName", companyName)}
        errorMessage={errors.companyName?.errorMessage}
        hasError={errors.companyName?.hasError}
        {...getOverrideProps(overrides, "companyName")}
      ></TextField>
      <TextField
        label="Company phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={companyPhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone: value,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.companyPhone ?? value;
          }
          if (errors.companyPhone?.hasError) {
            runValidationTasks("companyPhone", value);
          }
          setCompanyPhone(value);
        }}
        onBlur={() => runValidationTasks("companyPhone", companyPhone)}
        errorMessage={errors.companyPhone?.errorMessage}
        hasError={errors.companyPhone?.hasError}
        {...getOverrideProps(overrides, "companyPhone")}
      ></TextField>
      <TextField
        label="Company opening hours"
        isRequired={false}
        isReadOnly={false}
        value={companyOpeningHours}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours: value,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.companyOpeningHours ?? value;
          }
          if (errors.companyOpeningHours?.hasError) {
            runValidationTasks("companyOpeningHours", value);
          }
          setCompanyOpeningHours(value);
        }}
        onBlur={() =>
          runValidationTasks("companyOpeningHours", companyOpeningHours)
        }
        errorMessage={errors.companyOpeningHours?.errorMessage}
        hasError={errors.companyOpeningHours?.hasError}
        {...getOverrideProps(overrides, "companyOpeningHours")}
      ></TextField>
      <TextField
        label="Client campaign unit id"
        isRequired={false}
        isReadOnly={false}
        value={clientCampaignUnitID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID: value,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.clientCampaignUnitID ?? value;
          }
          if (errors.clientCampaignUnitID?.hasError) {
            runValidationTasks("clientCampaignUnitID", value);
          }
          setClientCampaignUnitID(value);
        }}
        onBlur={() =>
          runValidationTasks("clientCampaignUnitID", clientCampaignUnitID)
        }
        errorMessage={errors.clientCampaignUnitID?.errorMessage}
        hasError={errors.clientCampaignUnitID?.hasError}
        {...getOverrideProps(overrides, "clientCampaignUnitID")}
      ></TextField>
      <TextField
        label="Client campaign unit name"
        isRequired={false}
        isReadOnly={false}
        value={clientCampaignUnitName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName: value,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.clientCampaignUnitName ?? value;
          }
          if (errors.clientCampaignUnitName?.hasError) {
            runValidationTasks("clientCampaignUnitName", value);
          }
          setClientCampaignUnitName(value);
        }}
        onBlur={() =>
          runValidationTasks("clientCampaignUnitName", clientCampaignUnitName)
        }
        errorMessage={errors.clientCampaignUnitName?.errorMessage}
        hasError={errors.clientCampaignUnitName?.hasError}
        {...getOverrideProps(overrides, "clientCampaignUnitName")}
      ></TextField>
      <TextField
        label="Qr code pix"
        isRequired={false}
        isReadOnly={false}
        value={qrCodePix}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix: value,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.qrCodePix ?? value;
          }
          if (errors.qrCodePix?.hasError) {
            runValidationTasks("qrCodePix", value);
          }
          setQrCodePix(value);
        }}
        onBlur={() => runValidationTasks("qrCodePix", qrCodePix)}
        errorMessage={errors.qrCodePix?.errorMessage}
        hasError={errors.qrCodePix?.hasError}
        {...getOverrideProps(overrides, "qrCodePix")}
      ></TextField>
      <TextField
        label="Qr code pix url"
        isRequired={false}
        isReadOnly={false}
        value={qrCodePixUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl: value,
              payMethod,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.qrCodePixUrl ?? value;
          }
          if (errors.qrCodePixUrl?.hasError) {
            runValidationTasks("qrCodePixUrl", value);
          }
          setQrCodePixUrl(value);
        }}
        onBlur={() => runValidationTasks("qrCodePixUrl", qrCodePixUrl)}
        errorMessage={errors.qrCodePixUrl?.errorMessage}
        hasError={errors.qrCodePixUrl?.hasError}
        {...getOverrideProps(overrides, "qrCodePixUrl")}
      ></TextField>
      <SelectField
        label="Pay method"
        placeholder="Please select an option"
        isDisabled={false}
        value={payMethod}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod: value,
              installments,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.payMethod ?? value;
          }
          if (errors.payMethod?.hasError) {
            runValidationTasks("payMethod", value);
          }
          setPayMethod(value);
        }}
        onBlur={() => runValidationTasks("payMethod", payMethod)}
        errorMessage={errors.payMethod?.errorMessage}
        hasError={errors.payMethod?.hasError}
        {...getOverrideProps(overrides, "payMethod")}
      >
        <option
          children="Credit"
          value="CREDIT"
          {...getOverrideProps(overrides, "payMethodoption0")}
        ></option>
        <option
          children="Debit"
          value="DEBIT"
          {...getOverrideProps(overrides, "payMethodoption1")}
        ></option>
        <option
          children="Pix"
          value="PIX"
          {...getOverrideProps(overrides, "payMethodoption2")}
        ></option>
        <option
          children="Gateway"
          value="GATEWAY"
          {...getOverrideProps(overrides, "payMethodoption3")}
        ></option>
        <option
          children="Cash"
          value="CASH"
          {...getOverrideProps(overrides, "payMethodoption4")}
        ></option>
        <option
          children="Ondelivery"
          value="ONDELIVERY"
          {...getOverrideProps(overrides, "payMethodoption5")}
        ></option>
        <option
          children="Vacinasnet"
          value="VACINASNET"
          {...getOverrideProps(overrides, "payMethodoption6")}
        ></option>
      </SelectField>
      <TextField
        label="Installments"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={installments}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments: value,
              homeCareOrRetail,
            };
            const result = onChange(modelFields);
            value = result?.installments ?? value;
          }
          if (errors.installments?.hasError) {
            runValidationTasks("installments", value);
          }
          setInstallments(value);
        }}
        onBlur={() => runValidationTasks("installments", installments)}
        errorMessage={errors.installments?.errorMessage}
        hasError={errors.installments?.hasError}
        {...getOverrideProps(overrides, "installments")}
      ></TextField>
      <TextField
        label="Home care or retail"
        isRequired={false}
        isReadOnly={false}
        value={homeCareOrRetail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              createdAt,
              couponID,
              couponName,
              couponDiscount,
              deliveryPrice,
              total,
              rating,
              ratingNotes,
              orderPagarmeID,
              addressReference,
              addressStreet,
              addressNumber,
              addressComplement,
              addressZipcode,
              addressNeighborhood,
              addressCity,
              addressState,
              addressCountry,
              notes,
              adherenceID,
              adherenceName,
              adherenceOrientation,
              clientCampaignID,
              clientCampaignName,
              companyName,
              companyPhone,
              companyOpeningHours,
              clientCampaignUnitID,
              clientCampaignUnitName,
              qrCodePix,
              qrCodePixUrl,
              payMethod,
              installments,
              homeCareOrRetail: value,
            };
            const result = onChange(modelFields);
            value = result?.homeCareOrRetail ?? value;
          }
          if (errors.homeCareOrRetail?.hasError) {
            runValidationTasks("homeCareOrRetail", value);
          }
          setHomeCareOrRetail(value);
        }}
        onBlur={() => runValidationTasks("homeCareOrRetail", homeCareOrRetail)}
        errorMessage={errors.homeCareOrRetail?.errorMessage}
        hasError={errors.homeCareOrRetail?.hasError}
        {...getOverrideProps(overrides, "homeCareOrRetail")}
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
          isDisabled={!(idProp || orderModelProp)}
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
              !(idProp || orderModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
