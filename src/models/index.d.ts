import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum UserStatus {
  DEFAULT = "DEFAULT",
  PREREGISTER = "PREREGISTER",
  SUSPENDED = "SUSPENDED",
  ACTIVE = "ACTIVE"
}

export enum GenderOptions {
  M = "M",
  F = "F",
  UNKNOWN = "UNKNOWN"
}

export enum DocTypes {
  CPF = "CPF",
  CNPJ = "CNPJ",
  PASSPORT = "PASSPORT"
}

export enum PaymentMethods {
  CREDIT = "CREDIT",
  DEBIT = "DEBIT",
  PIX = "PIX",
  GATEWAY = "GATEWAY",
  CASH = "CASH",
  ONDELIVERY = "ONDELIVERY"
}

export enum LogSource {
  APP = "APP"
}

export enum ConfigValidationModes {
  CODE = "CODE",
  LINK = "LINK"
}

export enum InviteStatus {
  SENT = "SENT",
  CANCELED = "CANCELED",
  ACCEPTED = "ACCEPTED"
}

export enum MidiaTypes {
  AUDIO = "AUDIO",
  VIDEO = "VIDEO",
  IMAGE = "IMAGE",
  PDF = "PDF",
  DOC = "DOC",
  XLS = "XLS",
  FILE = "FILE",
  ZIP = "ZIP"
}

export enum RelationTypes {
  CONTACT = "CONTACT",
  DOCUMENT = "DOCUMENT"
}

export enum RelationModes {
  PRIVATE = "PRIVATE",
  GROUP = "GROUP"
}

export enum RelationStatus {
  STANDBY = "STANDBY",
  ABORTED = "ABORTED",
  STARTED = "STARTED",
  FINALIZED = "FINALIZED",
  INPROGRESS = "INPROGRESS",
  INANALYZE = "INANALYZE",
  ACTIVE = "ACTIVE",
  ARCHIVED = "ARCHIVED"
}

export enum MessagesTypes {
  ALERT = "ALERT",
  TEXT = "TEXT",
  AUDIO = "AUDIO",
  VIDEO = "VIDEO",
  IMAGE = "IMAGE",
  LOCATION = "LOCATION"
}

export enum PageType {
  CONTENT = "CONTENT",
  COMMERCE = "COMMERCE"
}

export enum PageStatus {
  ON = "ON",
  OFF = "OFF"
}

export enum PageChangeFreq {
  NEVER = "NEVER",
  YEARLY = "YEARLY",
  MONTHLY = "MONTHLY",
  WEEKLY = "WEEKLY",
  DAILY = "DAILY",
  HOURLY = "HOURLY",
  ALWAYS = "ALWAYS"
}

export enum PagePriority {
  P0 = "P0",
  P1 = "P1",
  P2 = "P2",
  P3 = "P3",
  P4 = "P4",
  P5 = "P5",
  P6 = "P6",
  P7 = "P7",
  P8 = "P8",
  P9 = "P9",
  P10 = "P10"
}

export enum PageOptionTitle {
  L = "L",
  R = "R",
  C = "C",
  N = "N"
}

export enum PageSideColumn {
  L = "L",
  R = "R",
  N = "N"
}

export enum PageOptionSideColumn {
  CART_CONTENT_TAGS = "CART_CONTENT_TAGS",
  CART_CONTENT = "CART_CONTENT",
  CONTENT_CART = "CONTENT_CART",
  MENU_CONTENT_TAGS = "MENU_CONTENT_TAGS",
  MENU_CONTENT = "MENU_CONTENT",
  TAGS_CONTENT = "TAGS_CONTENT",
  CONTENT_MENU_TAGS = "CONTENT_MENU_TAGS",
  CONTENT_MENU = "CONTENT_MENU",
  CONTENT_TAGS = "CONTENT_TAGS",
  CONTENT_BACK = "CONTENT_BACK",
  BACK_CONTENT = "BACK_CONTENT"
}

export enum OrderStatus {
  STANDBY = "STANDBY",
  CANCELED = "CANCELED",
  REJECTED = "REJECTED",
  APPROVED = "APPROVED",
  IN_PREPARATION = "IN_PREPARATION",
  IN_TRANSIT = "IN_TRANSIT",
  DELIVERED = "DELIVERED"
}

export enum DeliveryStatus {
  FORESEEN = "FORESEEN",
  NEEDS_ACTION = "NEEDS_ACTION",
  CONFIRMED = "CONFIRMED",
  BLOCKED = "BLOCKED",
  DELIVERED = "DELIVERED"
}

export enum CompanyStatus {
  ON = "ON",
  OFF = "OFF"
}

export enum AuthorizationListStatus {
  STANDBY = "STANDBY",
  STARTED = "STARTED",
  FINISHED = "FINISHED"
}

type UserMetaData = {
  readOnlyFields: 'updatedAt';
}

type ProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TempAuxMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GroupUserMetaData = {
  readOnlyFields: 'updatedAt';
}

type AddressMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PayMethodMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LogMetaData = {
  readOnlyFields: 'updatedAt';
}

type ConfigMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type InviteMetaData = {
  readOnlyFields: 'updatedAt';
}

type CouponMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CouponProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CouponUsedMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FolderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MidiaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RelationMetaData = {
  readOnlyFields: 'createdAt';
}

type RelationLinkMetaData = {
  readOnlyFields: 'createdAt';
}

type MessageMetaData = {
  readOnlyFields: 'updatedAt';
}

type MenuMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PageMetaData = {
  readOnlyFields: 'updatedAt';
}

type BlockMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductMetaData = {
  readOnlyFields: 'updatedAt';
}

type KitItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OptionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CartMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CartOptionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'updatedAt';
}

type OrderItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderItemOptionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DeliveryOrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DeliveryMethodOrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CampaignMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CampaignUsedMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CampaignProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CampaignCompanyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VaccinationCardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VaccinationCardItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CompanyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AuthorizationListMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AuthorizationListClosureMetaData = {
  readOnlyFields: 'updatedAt';
}

type AuthorizationListMemberMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AuthorizationListMemberVaccinationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CounterMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerUser = {
  readonly id: string;
  readonly name: string;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly status?: UserStatus | keyof typeof UserStatus | null;
  readonly active?: boolean | null;
  readonly avatar?: string | null;
  readonly search?: string | null;
  readonly createdAt?: string | null;
  readonly profile?: Profile | null;
  readonly groups?: (GroupUser | null)[] | null;
  readonly logs?: (Log | null)[] | null;
  readonly addresses?: (Address | null)[] | null;
  readonly payMethods?: (PayMethod | null)[] | null;
  readonly relationsLink?: (RelationLink | null)[] | null;
  readonly carts?: (Cart | null)[] | null;
  readonly ordersByCreatedAt?: (Order | null)[] | null;
  readonly ordersByStatusCreatedAt?: (Order | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly name: string;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly status?: UserStatus | keyof typeof UserStatus | null;
  readonly active?: boolean | null;
  readonly avatar?: string | null;
  readonly search?: string | null;
  readonly createdAt?: string | null;
  readonly profile: AsyncItem<Profile | undefined>;
  readonly groups: AsyncCollection<GroupUser>;
  readonly logs: AsyncCollection<Log>;
  readonly addresses: AsyncCollection<Address>;
  readonly payMethods: AsyncCollection<PayMethod>;
  readonly relationsLink: AsyncCollection<RelationLink>;
  readonly carts: AsyncCollection<Cart>;
  readonly ordersByCreatedAt: AsyncCollection<Order>;
  readonly ordersByStatusCreatedAt: AsyncCollection<Order>;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

type EagerProfile = {
  readonly id: string;
  readonly userID: string;
  readonly user?: User | null;
  readonly doc?: string | null;
  readonly docType?: DocTypes | keyof typeof DocTypes | null;
  readonly docProfessionType?: string | null;
  readonly docProfession?: string | null;
  readonly profession?: string | null;
  readonly specialties?: string | null;
  readonly subSpecialties?: string | null;
  readonly bio?: string | null;
  readonly gender?: GenderOptions | keyof typeof GenderOptions | null;
  readonly birth?: string | null;
  readonly notes?: string | null;
  readonly urlUserName?: string | null;
  readonly urlEnable?: boolean | null;
  readonly allowViewEmail?: boolean | null;
  readonly allowViewPhone?: boolean | null;
  readonly allowCookiesPreference?: boolean | null;
  readonly allowCookiesStatistic?: boolean | null;
  readonly pix?: string | null;
  readonly zipCodeCoverage?: (string | null)[] | null;
  readonly schedulesSunday?: (string | null)[] | null;
  readonly schedulesMonday?: (string | null)[] | null;
  readonly schedulesTuesday?: (string | null)[] | null;
  readonly schedulesWednesday?: (string | null)[] | null;
  readonly schedulesThursday?: (string | null)[] | null;
  readonly schedulesFriday?: (string | null)[] | null;
  readonly schedulesSaturday?: (string | null)[] | null;
  readonly regionsConfig?: string | null;
  readonly regionSunday?: string | null;
  readonly regionMonday?: string | null;
  readonly regionTuesday?: string | null;
  readonly regionWednesday?: string | null;
  readonly regionThursday?: string | null;
  readonly regionFriday?: string | null;
  readonly regionSaturday?: string | null;
  readonly customerPagarmeID?: string | null;
  readonly companyID?: string | null;
  readonly company?: Company | null;
  readonly companyHomeCare?: boolean | null;
  readonly companyCampaign?: boolean | null;
  readonly companyAdmin?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProfile = {
  readonly id: string;
  readonly userID: string;
  readonly user: AsyncItem<User | undefined>;
  readonly doc?: string | null;
  readonly docType?: DocTypes | keyof typeof DocTypes | null;
  readonly docProfessionType?: string | null;
  readonly docProfession?: string | null;
  readonly profession?: string | null;
  readonly specialties?: string | null;
  readonly subSpecialties?: string | null;
  readonly bio?: string | null;
  readonly gender?: GenderOptions | keyof typeof GenderOptions | null;
  readonly birth?: string | null;
  readonly notes?: string | null;
  readonly urlUserName?: string | null;
  readonly urlEnable?: boolean | null;
  readonly allowViewEmail?: boolean | null;
  readonly allowViewPhone?: boolean | null;
  readonly allowCookiesPreference?: boolean | null;
  readonly allowCookiesStatistic?: boolean | null;
  readonly pix?: string | null;
  readonly zipCodeCoverage?: (string | null)[] | null;
  readonly schedulesSunday?: (string | null)[] | null;
  readonly schedulesMonday?: (string | null)[] | null;
  readonly schedulesTuesday?: (string | null)[] | null;
  readonly schedulesWednesday?: (string | null)[] | null;
  readonly schedulesThursday?: (string | null)[] | null;
  readonly schedulesFriday?: (string | null)[] | null;
  readonly schedulesSaturday?: (string | null)[] | null;
  readonly regionsConfig?: string | null;
  readonly regionSunday?: string | null;
  readonly regionMonday?: string | null;
  readonly regionTuesday?: string | null;
  readonly regionWednesday?: string | null;
  readonly regionThursday?: string | null;
  readonly regionFriday?: string | null;
  readonly regionSaturday?: string | null;
  readonly customerPagarmeID?: string | null;
  readonly companyID?: string | null;
  readonly company: AsyncItem<Company | undefined>;
  readonly companyHomeCare?: boolean | null;
  readonly companyCampaign?: boolean | null;
  readonly companyAdmin?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Profile = LazyLoading extends LazyLoadingDisabled ? EagerProfile : LazyProfile

export declare const Profile: (new (init: ModelInit<Profile, ProfileMetaData>) => Profile) & {
  copyOf(source: Profile, mutator: (draft: MutableModel<Profile, ProfileMetaData>) => MutableModel<Profile, ProfileMetaData> | void): Profile;
}

type EagerTempAux = {
  readonly id: string;
  readonly name?: string | null;
  readonly doc?: string | null;
  readonly birth?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTempAux = {
  readonly id: string;
  readonly name?: string | null;
  readonly doc?: string | null;
  readonly birth?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TempAux = LazyLoading extends LazyLoadingDisabled ? EagerTempAux : LazyTempAux

export declare const TempAux: (new (init: ModelInit<TempAux, TempAuxMetaData>) => TempAux) & {
  copyOf(source: TempAux, mutator: (draft: MutableModel<TempAux, TempAuxMetaData>) => MutableModel<TempAux, TempAuxMetaData> | void): TempAux;
}

type EagerGroupUser = {
  readonly id: string;
  readonly group: string;
  readonly userID: string;
  readonly user?: User | null;
  readonly profileID: string;
  readonly profile?: Profile | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGroupUser = {
  readonly id: string;
  readonly group: string;
  readonly userID: string;
  readonly user: AsyncItem<User | undefined>;
  readonly profileID: string;
  readonly profile: AsyncItem<Profile | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GroupUser = LazyLoading extends LazyLoadingDisabled ? EagerGroupUser : LazyGroupUser

export declare const GroupUser: (new (init: ModelInit<GroupUser, GroupUserMetaData>) => GroupUser) & {
  copyOf(source: GroupUser, mutator: (draft: MutableModel<GroupUser, GroupUserMetaData>) => MutableModel<GroupUser, GroupUserMetaData> | void): GroupUser;
}

type EagerAddress = {
  readonly id: string;
  readonly userID: string;
  readonly name?: string | null;
  readonly reference?: string | null;
  readonly street?: string | null;
  readonly number?: string | null;
  readonly complement?: string | null;
  readonly zipcode?: string | null;
  readonly neighborhood?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly addressPagarmeID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAddress = {
  readonly id: string;
  readonly userID: string;
  readonly name?: string | null;
  readonly reference?: string | null;
  readonly street?: string | null;
  readonly number?: string | null;
  readonly complement?: string | null;
  readonly zipcode?: string | null;
  readonly neighborhood?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly addressPagarmeID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Address = LazyLoading extends LazyLoadingDisabled ? EagerAddress : LazyAddress

export declare const Address: (new (init: ModelInit<Address, AddressMetaData>) => Address) & {
  copyOf(source: Address, mutator: (draft: MutableModel<Address, AddressMetaData>) => MutableModel<Address, AddressMetaData> | void): Address;
}

type EagerPayMethod = {
  readonly id: string;
  readonly userID: string;
  readonly method: PaymentMethods | keyof typeof PaymentMethods;
  readonly number?: string | null;
  readonly holderName?: string | null;
  readonly holderDocument?: string | null;
  readonly expMonth?: number | null;
  readonly expYear?: number | null;
  readonly cvv?: string | null;
  readonly brand?: string | null;
  readonly label?: string | null;
  readonly cardPagarmeID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPayMethod = {
  readonly id: string;
  readonly userID: string;
  readonly method: PaymentMethods | keyof typeof PaymentMethods;
  readonly number?: string | null;
  readonly holderName?: string | null;
  readonly holderDocument?: string | null;
  readonly expMonth?: number | null;
  readonly expYear?: number | null;
  readonly cvv?: string | null;
  readonly brand?: string | null;
  readonly label?: string | null;
  readonly cardPagarmeID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PayMethod = LazyLoading extends LazyLoadingDisabled ? EagerPayMethod : LazyPayMethod

export declare const PayMethod: (new (init: ModelInit<PayMethod, PayMethodMetaData>) => PayMethod) & {
  copyOf(source: PayMethod, mutator: (draft: MutableModel<PayMethod, PayMethodMetaData>) => MutableModel<PayMethod, PayMethodMetaData> | void): PayMethod;
}

type EagerLog = {
  readonly id: string;
  readonly tag: string;
  readonly source: LogSource | keyof typeof LogSource;
  readonly notes?: string | null;
  readonly message?: string | null;
  readonly page?: string | null;
  readonly manufacturer?: string | null;
  readonly model?: string | null;
  readonly osName?: string | null;
  readonly osVersion?: string | null;
  readonly platform?: string | null;
  readonly uuid?: string | null;
  readonly ip?: string | null;
  readonly city?: string | null;
  readonly region?: string | null;
  readonly country?: string | null;
  readonly provider?: string | null;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly createdAt?: string | null;
  readonly user?: User | null;
  readonly updatedAt?: string | null;
}

type LazyLog = {
  readonly id: string;
  readonly tag: string;
  readonly source: LogSource | keyof typeof LogSource;
  readonly notes?: string | null;
  readonly message?: string | null;
  readonly page?: string | null;
  readonly manufacturer?: string | null;
  readonly model?: string | null;
  readonly osName?: string | null;
  readonly osVersion?: string | null;
  readonly platform?: string | null;
  readonly uuid?: string | null;
  readonly ip?: string | null;
  readonly city?: string | null;
  readonly region?: string | null;
  readonly country?: string | null;
  readonly provider?: string | null;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly createdAt?: string | null;
  readonly user: AsyncItem<User | undefined>;
  readonly updatedAt?: string | null;
}

export declare type Log = LazyLoading extends LazyLoadingDisabled ? EagerLog : LazyLog

export declare const Log: (new (init: ModelInit<Log, LogMetaData>) => Log) & {
  copyOf(source: Log, mutator: (draft: MutableModel<Log, LogMetaData>) => MutableModel<Log, LogMetaData> | void): Log;
}

type EagerConfig = {
  readonly id: string;
  readonly validationMode: ConfigValidationModes | keyof typeof ConfigValidationModes;
  readonly googleAnalyticsID?: string | null;
  readonly googleSiteVerification?: string | null;
  readonly inviteSubject?: string | null;
  readonly inviteMessage?: string | null;
  readonly inviteSMS?: string | null;
  readonly facebook?: string | null;
  readonly twitter?: string | null;
  readonly instagram?: string | null;
  readonly infoFooter?: string | null;
  readonly minValueOrder?: number | null;
  readonly phoneOrders?: string | null;
  readonly allowPayOnDelivery?: boolean | null;
  readonly allowLocalPickup?: boolean | null;
  readonly deliveryOnSunday?: string | null;
  readonly deliveryOnMonday?: string | null;
  readonly deliveryOnTuesday?: string | null;
  readonly deliveryOnWednesday?: string | null;
  readonly deliveryOnThursday?: string | null;
  readonly deliveryOnFriday?: string | null;
  readonly deliveryOnSaturday?: string | null;
  readonly deliveryOffSunday?: string | null;
  readonly deliveryOffMonday?: string | null;
  readonly deliveryOffTuesday?: string | null;
  readonly deliveryOffWednesday?: string | null;
  readonly deliveryOffThursday?: string | null;
  readonly deliveryOffFriday?: string | null;
  readonly deliveryOffSaturday?: string | null;
  readonly showNotesCart?: boolean | null;
  readonly notesCart?: string | null;
  readonly soundOnNewOrder?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConfig = {
  readonly id: string;
  readonly validationMode: ConfigValidationModes | keyof typeof ConfigValidationModes;
  readonly googleAnalyticsID?: string | null;
  readonly googleSiteVerification?: string | null;
  readonly inviteSubject?: string | null;
  readonly inviteMessage?: string | null;
  readonly inviteSMS?: string | null;
  readonly facebook?: string | null;
  readonly twitter?: string | null;
  readonly instagram?: string | null;
  readonly infoFooter?: string | null;
  readonly minValueOrder?: number | null;
  readonly phoneOrders?: string | null;
  readonly allowPayOnDelivery?: boolean | null;
  readonly allowLocalPickup?: boolean | null;
  readonly deliveryOnSunday?: string | null;
  readonly deliveryOnMonday?: string | null;
  readonly deliveryOnTuesday?: string | null;
  readonly deliveryOnWednesday?: string | null;
  readonly deliveryOnThursday?: string | null;
  readonly deliveryOnFriday?: string | null;
  readonly deliveryOnSaturday?: string | null;
  readonly deliveryOffSunday?: string | null;
  readonly deliveryOffMonday?: string | null;
  readonly deliveryOffTuesday?: string | null;
  readonly deliveryOffWednesday?: string | null;
  readonly deliveryOffThursday?: string | null;
  readonly deliveryOffFriday?: string | null;
  readonly deliveryOffSaturday?: string | null;
  readonly showNotesCart?: boolean | null;
  readonly notesCart?: string | null;
  readonly soundOnNewOrder?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Config = LazyLoading extends LazyLoadingDisabled ? EagerConfig : LazyConfig

export declare const Config: (new (init: ModelInit<Config, ConfigMetaData>) => Config) & {
  copyOf(source: Config, mutator: (draft: MutableModel<Config, ConfigMetaData>) => MutableModel<Config, ConfigMetaData> | void): Config;
}

type EagerInvite = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly groups?: (string | null)[] | null;
  readonly status: InviteStatus | keyof typeof InviteStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInvite = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly groups?: (string | null)[] | null;
  readonly status: InviteStatus | keyof typeof InviteStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Invite = LazyLoading extends LazyLoadingDisabled ? EagerInvite : LazyInvite

export declare const Invite: (new (init: ModelInit<Invite, InviteMetaData>) => Invite) & {
  copyOf(source: Invite, mutator: (draft: MutableModel<Invite, InviteMetaData>) => MutableModel<Invite, InviteMetaData> | void): Invite;
}

type EagerCoupon = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly code: string;
  readonly start?: string | null;
  readonly expiration?: string | null;
  readonly discountPercentage?: number | null;
  readonly discountValue?: number | null;
  readonly qtyLimit?: number | null;
  readonly qtyUsed?: number | null;
  readonly qtyProduct?: number | null;
  readonly qtyProductUsed?: number | null;
  readonly search?: string | null;
  readonly products?: (CouponProduct | null)[] | null;
  readonly couponUsed?: (CouponUsed | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCoupon = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly code: string;
  readonly start?: string | null;
  readonly expiration?: string | null;
  readonly discountPercentage?: number | null;
  readonly discountValue?: number | null;
  readonly qtyLimit?: number | null;
  readonly qtyUsed?: number | null;
  readonly qtyProduct?: number | null;
  readonly qtyProductUsed?: number | null;
  readonly search?: string | null;
  readonly products: AsyncCollection<CouponProduct>;
  readonly couponUsed: AsyncCollection<CouponUsed>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Coupon = LazyLoading extends LazyLoadingDisabled ? EagerCoupon : LazyCoupon

export declare const Coupon: (new (init: ModelInit<Coupon, CouponMetaData>) => Coupon) & {
  copyOf(source: Coupon, mutator: (draft: MutableModel<Coupon, CouponMetaData>) => MutableModel<Coupon, CouponMetaData> | void): Coupon;
}

type EagerCouponProduct = {
  readonly id: string;
  readonly couponID: string;
  readonly productID: string;
  readonly price?: number | null;
  readonly limit?: number | null;
  readonly product?: Product | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCouponProduct = {
  readonly id: string;
  readonly couponID: string;
  readonly productID: string;
  readonly price?: number | null;
  readonly limit?: number | null;
  readonly product: AsyncItem<Product | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CouponProduct = LazyLoading extends LazyLoadingDisabled ? EagerCouponProduct : LazyCouponProduct

export declare const CouponProduct: (new (init: ModelInit<CouponProduct, CouponProductMetaData>) => CouponProduct) & {
  copyOf(source: CouponProduct, mutator: (draft: MutableModel<CouponProduct, CouponProductMetaData>) => MutableModel<CouponProduct, CouponProductMetaData> | void): CouponProduct;
}

type EagerCouponUsed = {
  readonly id: string;
  readonly coupon?: Coupon | null;
  readonly userID: string;
  readonly user?: User | null;
  readonly qty?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCouponUsed = {
  readonly id: string;
  readonly coupon: AsyncItem<Coupon | undefined>;
  readonly userID: string;
  readonly user: AsyncItem<User | undefined>;
  readonly qty?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CouponUsed = LazyLoading extends LazyLoadingDisabled ? EagerCouponUsed : LazyCouponUsed

export declare const CouponUsed: (new (init: ModelInit<CouponUsed, CouponUsedMetaData>) => CouponUsed) & {
  copyOf(source: CouponUsed, mutator: (draft: MutableModel<CouponUsed, CouponUsedMetaData>) => MutableModel<CouponUsed, CouponUsedMetaData> | void): CouponUsed;
}

type EagerFolder = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFolder = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Folder = LazyLoading extends LazyLoadingDisabled ? EagerFolder : LazyFolder

export declare const Folder: (new (init: ModelInit<Folder, FolderMetaData>) => Folder) & {
  copyOf(source: Folder, mutator: (draft: MutableModel<Folder, FolderMetaData>) => MutableModel<Folder, FolderMetaData> | void): Folder;
}

type EagerMidia = {
  readonly id: string;
  readonly key: string;
  readonly type?: MidiaTypes | keyof typeof MidiaTypes | null;
  readonly title?: string | null;
  readonly subTitle?: string | null;
  readonly description?: string | null;
  readonly identifyText?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMidia = {
  readonly id: string;
  readonly key: string;
  readonly type?: MidiaTypes | keyof typeof MidiaTypes | null;
  readonly title?: string | null;
  readonly subTitle?: string | null;
  readonly description?: string | null;
  readonly identifyText?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Midia = LazyLoading extends LazyLoadingDisabled ? EagerMidia : LazyMidia

export declare const Midia: (new (init: ModelInit<Midia, MidiaMetaData>) => Midia) & {
  copyOf(source: Midia, mutator: (draft: MutableModel<Midia, MidiaMetaData>) => MutableModel<Midia, MidiaMetaData> | void): Midia;
}

type EagerRelation = {
  readonly id: string;
  readonly type: RelationTypes | keyof typeof RelationTypes;
  readonly mode: RelationModes | keyof typeof RelationModes;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly avatar?: string | null;
  readonly reference?: string | null;
  readonly members: string[];
  readonly admins: string[];
  readonly updatedAt?: string | null;
  readonly status: RelationStatus | keyof typeof RelationStatus;
  readonly search?: string | null;
  readonly relationsLink?: (RelationLink | null)[] | null;
  readonly messages?: (Message | null)[] | null;
  readonly createdAt?: string | null;
}

type LazyRelation = {
  readonly id: string;
  readonly type: RelationTypes | keyof typeof RelationTypes;
  readonly mode: RelationModes | keyof typeof RelationModes;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly avatar?: string | null;
  readonly reference?: string | null;
  readonly members: string[];
  readonly admins: string[];
  readonly updatedAt?: string | null;
  readonly status: RelationStatus | keyof typeof RelationStatus;
  readonly search?: string | null;
  readonly relationsLink: AsyncCollection<RelationLink>;
  readonly messages: AsyncCollection<Message>;
  readonly createdAt?: string | null;
}

export declare type Relation = LazyLoading extends LazyLoadingDisabled ? EagerRelation : LazyRelation

export declare const Relation: (new (init: ModelInit<Relation, RelationMetaData>) => Relation) & {
  copyOf(source: Relation, mutator: (draft: MutableModel<Relation, RelationMetaData>) => MutableModel<Relation, RelationMetaData> | void): Relation;
}

type EagerRelationLink = {
  readonly id: string;
  readonly user?: User | null;
  readonly relation?: Relation | null;
  readonly type: string;
  readonly notify: number;
  readonly updatedAt?: string | null;
  readonly search?: string | null;
  readonly percentage?: number | null;
  readonly createdAt?: string | null;
}

type LazyRelationLink = {
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly relation: AsyncItem<Relation | undefined>;
  readonly type: string;
  readonly notify: number;
  readonly updatedAt?: string | null;
  readonly search?: string | null;
  readonly percentage?: number | null;
  readonly createdAt?: string | null;
}

export declare type RelationLink = LazyLoading extends LazyLoadingDisabled ? EagerRelationLink : LazyRelationLink

export declare const RelationLink: (new (init: ModelInit<RelationLink, RelationLinkMetaData>) => RelationLink) & {
  copyOf(source: RelationLink, mutator: (draft: MutableModel<RelationLink, RelationLinkMetaData>) => MutableModel<RelationLink, RelationLinkMetaData> | void): RelationLink;
}

type EagerMessage = {
  readonly id: string;
  readonly relation?: Relation | null;
  readonly userID: string;
  readonly user?: User | null;
  readonly type: MessagesTypes | keyof typeof MessagesTypes;
  readonly content?: string | null;
  readonly search?: string | null;
  readonly identityId?: string | null;
  readonly createdAt?: string | null;
  readonly status?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly id: string;
  readonly relation: AsyncItem<Relation | undefined>;
  readonly userID: string;
  readonly user: AsyncItem<User | undefined>;
  readonly type: MessagesTypes | keyof typeof MessagesTypes;
  readonly content?: string | null;
  readonly search?: string | null;
  readonly identityId?: string | null;
  readonly createdAt?: string | null;
  readonly status?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message, MessageMetaData>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message, MessageMetaData>) => MutableModel<Message, MessageMetaData> | void): Message;
}

type EagerMenu = {
  readonly id: string;
  readonly alias: string;
  readonly order: number;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly orderDesc?: boolean | null;
  readonly thumbnail?: string | null;
  readonly thumbnailSrc?: string | null;
  readonly thumbnailCropper?: string | null;
  readonly showDescriptionPage?: string | null;
  readonly showThumbnailPage?: string | null;
  readonly hide?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMenu = {
  readonly id: string;
  readonly alias: string;
  readonly order: number;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly orderDesc?: boolean | null;
  readonly thumbnail?: string | null;
  readonly thumbnailSrc?: string | null;
  readonly thumbnailCropper?: string | null;
  readonly showDescriptionPage?: string | null;
  readonly showThumbnailPage?: string | null;
  readonly hide?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Menu = LazyLoading extends LazyLoadingDisabled ? EagerMenu : LazyMenu

export declare const Menu: (new (init: ModelInit<Menu, MenuMetaData>) => Menu) & {
  copyOf(source: Menu, mutator: (draft: MutableModel<Menu, MenuMetaData>) => MutableModel<Menu, MenuMetaData> | void): Menu;
}

type EagerPage = {
  readonly id: string;
  readonly alias: string;
  readonly status: PageStatus | keyof typeof PageStatus;
  readonly type: PageType | keyof typeof PageType;
  readonly menu: string;
  readonly menuProps?: Menu | null;
  readonly order: number;
  readonly title: string;
  readonly titlePadX?: string | null;
  readonly titlePadY?: string | null;
  readonly description?: string | null;
  readonly content?: string | null;
  readonly contentPadX?: string | null;
  readonly contentPadY?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly thumbnail?: string | null;
  readonly thumbnailSrc?: string | null;
  readonly thumbnailCropper?: string | null;
  readonly changeFreq?: PageChangeFreq | keyof typeof PageChangeFreq | null;
  readonly priority?: PagePriority | keyof typeof PagePriority | null;
  readonly optionTitle?: PageOptionTitle | keyof typeof PageOptionTitle | null;
  readonly sideColumn?: PageSideColumn | keyof typeof PageSideColumn | null;
  readonly sideColumnPadX?: string | null;
  readonly sideColumnPadY?: string | null;
  readonly sideColumnContent?: string | null;
  readonly optionSideColumn?: PageOptionSideColumn | keyof typeof PageOptionSideColumn | null;
  readonly hideFooter?: boolean | null;
  readonly hideInMenu?: boolean | null;
  readonly createdAt?: string | null;
  readonly search?: string | null;
  readonly blocks?: (Block | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyPage = {
  readonly id: string;
  readonly alias: string;
  readonly status: PageStatus | keyof typeof PageStatus;
  readonly type: PageType | keyof typeof PageType;
  readonly menu: string;
  readonly menuProps: AsyncItem<Menu | undefined>;
  readonly order: number;
  readonly title: string;
  readonly titlePadX?: string | null;
  readonly titlePadY?: string | null;
  readonly description?: string | null;
  readonly content?: string | null;
  readonly contentPadX?: string | null;
  readonly contentPadY?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly thumbnail?: string | null;
  readonly thumbnailSrc?: string | null;
  readonly thumbnailCropper?: string | null;
  readonly changeFreq?: PageChangeFreq | keyof typeof PageChangeFreq | null;
  readonly priority?: PagePriority | keyof typeof PagePriority | null;
  readonly optionTitle?: PageOptionTitle | keyof typeof PageOptionTitle | null;
  readonly sideColumn?: PageSideColumn | keyof typeof PageSideColumn | null;
  readonly sideColumnPadX?: string | null;
  readonly sideColumnPadY?: string | null;
  readonly sideColumnContent?: string | null;
  readonly optionSideColumn?: PageOptionSideColumn | keyof typeof PageOptionSideColumn | null;
  readonly hideFooter?: boolean | null;
  readonly hideInMenu?: boolean | null;
  readonly createdAt?: string | null;
  readonly search?: string | null;
  readonly blocks: AsyncCollection<Block>;
  readonly updatedAt?: string | null;
}

export declare type Page = LazyLoading extends LazyLoadingDisabled ? EagerPage : LazyPage

export declare const Page: (new (init: ModelInit<Page, PageMetaData>) => Page) & {
  copyOf(source: Page, mutator: (draft: MutableModel<Page, PageMetaData>) => MutableModel<Page, PageMetaData> | void): Page;
}

type EagerBlock = {
  readonly id: string;
  readonly order: number;
  readonly component: string;
  readonly content: string;
  readonly config?: string | null;
  readonly page?: Page | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBlock = {
  readonly id: string;
  readonly order: number;
  readonly component: string;
  readonly content: string;
  readonly config?: string | null;
  readonly page: AsyncItem<Page | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Block = LazyLoading extends LazyLoadingDisabled ? EagerBlock : LazyBlock

export declare const Block: (new (init: ModelInit<Block, BlockMetaData>) => Block) & {
  copyOf(source: Block, mutator: (draft: MutableModel<Block, BlockMetaData>) => MutableModel<Block, BlockMetaData> | void): Block;
}

type EagerCategory = {
  readonly id: string;
  readonly alias: string;
  readonly order: number;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly thumbnail?: string | null;
  readonly thumbnailSrc?: string | null;
  readonly thumbnailCropper?: string | null;
  readonly hide?: boolean | null;
  readonly isSub?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategory = {
  readonly id: string;
  readonly alias: string;
  readonly order: number;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly thumbnail?: string | null;
  readonly thumbnailSrc?: string | null;
  readonly thumbnailCropper?: string | null;
  readonly hide?: boolean | null;
  readonly isSub?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category, CategoryMetaData>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}

type EagerProduct = {
  readonly id: string;
  readonly alias: string;
  readonly status: PageStatus | keyof typeof PageStatus;
  readonly category: string;
  readonly categoryProps?: Category | null;
  readonly subCategory: string;
  readonly subCategoryProps?: Category | null;
  readonly code?: string | null;
  readonly name: string;
  readonly type?: string | null;
  readonly description?: string | null;
  readonly manufacturer?: string | null;
  readonly contentTitle?: string | null;
  readonly contentTitle2?: string | null;
  readonly contentTitle3?: string | null;
  readonly content?: string | null;
  readonly content2?: string | null;
  readonly content3?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly changeFreq?: PageChangeFreq | keyof typeof PageChangeFreq | null;
  readonly priority?: PagePriority | keyof typeof PagePriority | null;
  readonly price_of?: number | null;
  readonly price: number;
  readonly qty?: number | null;
  readonly stockControl?: boolean | null;
  readonly applicationTime?: number | null;
  readonly applicationTimeChild?: number | null;
  readonly photo1?: string | null;
  readonly photo2?: string | null;
  readonly photo3?: string | null;
  readonly photo4?: string | null;
  readonly photo5?: string | null;
  readonly thumbnail?: string | null;
  readonly thumbnailSrc?: string | null;
  readonly thumbnailCropper?: string | null;
  readonly titlePadX?: string | null;
  readonly titlePadY?: string | null;
  readonly contentPadX?: string | null;
  readonly contentPadY?: string | null;
  readonly optionTitle?: PageOptionTitle | keyof typeof PageOptionTitle | null;
  readonly sideColumn?: PageSideColumn | keyof typeof PageSideColumn | null;
  readonly sideColumnPadX?: string | null;
  readonly sideColumnPadY?: string | null;
  readonly sideColumnContent?: string | null;
  readonly optionSideColumn?: PageOptionSideColumn | keyof typeof PageOptionSideColumn | null;
  readonly hideFooter?: boolean | null;
  readonly hideInMenu?: boolean | null;
  readonly createdAt?: string | null;
  readonly search?: string | null;
  readonly hideInSearch?: boolean | null;
  readonly options?: (Option | null)[] | null;
  readonly kitItems?: (KitItem | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly id: string;
  readonly alias: string;
  readonly status: PageStatus | keyof typeof PageStatus;
  readonly category: string;
  readonly categoryProps: AsyncItem<Category | undefined>;
  readonly subCategory: string;
  readonly subCategoryProps: AsyncItem<Category | undefined>;
  readonly code?: string | null;
  readonly name: string;
  readonly type?: string | null;
  readonly description?: string | null;
  readonly manufacturer?: string | null;
  readonly contentTitle?: string | null;
  readonly contentTitle2?: string | null;
  readonly contentTitle3?: string | null;
  readonly content?: string | null;
  readonly content2?: string | null;
  readonly content3?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly changeFreq?: PageChangeFreq | keyof typeof PageChangeFreq | null;
  readonly priority?: PagePriority | keyof typeof PagePriority | null;
  readonly price_of?: number | null;
  readonly price: number;
  readonly qty?: number | null;
  readonly stockControl?: boolean | null;
  readonly applicationTime?: number | null;
  readonly applicationTimeChild?: number | null;
  readonly photo1?: string | null;
  readonly photo2?: string | null;
  readonly photo3?: string | null;
  readonly photo4?: string | null;
  readonly photo5?: string | null;
  readonly thumbnail?: string | null;
  readonly thumbnailSrc?: string | null;
  readonly thumbnailCropper?: string | null;
  readonly titlePadX?: string | null;
  readonly titlePadY?: string | null;
  readonly contentPadX?: string | null;
  readonly contentPadY?: string | null;
  readonly optionTitle?: PageOptionTitle | keyof typeof PageOptionTitle | null;
  readonly sideColumn?: PageSideColumn | keyof typeof PageSideColumn | null;
  readonly sideColumnPadX?: string | null;
  readonly sideColumnPadY?: string | null;
  readonly sideColumnContent?: string | null;
  readonly optionSideColumn?: PageOptionSideColumn | keyof typeof PageOptionSideColumn | null;
  readonly hideFooter?: boolean | null;
  readonly hideInMenu?: boolean | null;
  readonly createdAt?: string | null;
  readonly search?: string | null;
  readonly hideInSearch?: boolean | null;
  readonly options: AsyncCollection<Option>;
  readonly kitItems: AsyncCollection<KitItem>;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product, ProductMetaData>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

type EagerKitItem = {
  readonly id: string;
  readonly productID: string;
  readonly kitItemProductID: string;
  readonly product?: Product | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyKitItem = {
  readonly id: string;
  readonly productID: string;
  readonly kitItemProductID: string;
  readonly product: AsyncItem<Product | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type KitItem = LazyLoading extends LazyLoadingDisabled ? EagerKitItem : LazyKitItem

export declare const KitItem: (new (init: ModelInit<KitItem, KitItemMetaData>) => KitItem) & {
  copyOf(source: KitItem, mutator: (draft: MutableModel<KitItem, KitItemMetaData>) => MutableModel<KitItem, KitItemMetaData> | void): KitItem;
}

type EagerOption = {
  readonly id: string;
  readonly productID: string;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOption = {
  readonly id: string;
  readonly productID: string;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Option = LazyLoading extends LazyLoadingDisabled ? EagerOption : LazyOption

export declare const Option: (new (init: ModelInit<Option, OptionMetaData>) => Option) & {
  copyOf(source: Option, mutator: (draft: MutableModel<Option, OptionMetaData>) => MutableModel<Option, OptionMetaData> | void): Option;
}

type EagerCart = {
  readonly id: string;
  readonly userID: string;
  readonly productID: string;
  readonly product?: Product | null;
  readonly options?: (CartOption | null)[] | null;
  readonly qty?: number | null;
  readonly changeName?: string | null;
  readonly changeDescription?: string | null;
  readonly changeQtyBlend?: number | null;
  readonly changePriceAdjustment?: string | null;
  readonly blendID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCart = {
  readonly id: string;
  readonly userID: string;
  readonly productID: string;
  readonly product: AsyncItem<Product | undefined>;
  readonly options: AsyncCollection<CartOption>;
  readonly qty?: number | null;
  readonly changeName?: string | null;
  readonly changeDescription?: string | null;
  readonly changeQtyBlend?: number | null;
  readonly changePriceAdjustment?: string | null;
  readonly blendID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Cart = LazyLoading extends LazyLoadingDisabled ? EagerCart : LazyCart

export declare const Cart: (new (init: ModelInit<Cart, CartMetaData>) => Cart) & {
  copyOf(source: Cart, mutator: (draft: MutableModel<Cart, CartMetaData>) => MutableModel<Cart, CartMetaData> | void): Cart;
}

type EagerCartOption = {
  readonly id: string;
  readonly cartID: string;
  readonly optionID: string;
  readonly option?: Option | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCartOption = {
  readonly id: string;
  readonly cartID: string;
  readonly optionID: string;
  readonly option: AsyncItem<Option | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CartOption = LazyLoading extends LazyLoadingDisabled ? EagerCartOption : LazyCartOption

export declare const CartOption: (new (init: ModelInit<CartOption, CartOptionMetaData>) => CartOption) & {
  copyOf(source: CartOption, mutator: (draft: MutableModel<CartOption, CartOptionMetaData>) => MutableModel<CartOption, CartOptionMetaData> | void): CartOption;
}

type EagerOrder = {
  readonly id: string;
  readonly userID: string;
  readonly user?: User | null;
  readonly profile?: Profile | null;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly createdAt?: string | null;
  readonly items?: (OrderItem | null)[] | null;
  readonly couponID?: string | null;
  readonly couponName?: string | null;
  readonly couponDiscount?: number | null;
  readonly deliveryPrice?: number | null;
  readonly total?: number | null;
  readonly rating?: number | null;
  readonly ratingNotes?: string | null;
  readonly orderPagarmeID?: string | null;
  readonly addressReference?: string | null;
  readonly addressStreet?: string | null;
  readonly addressNumber?: string | null;
  readonly addressComplement?: string | null;
  readonly addressZipcode?: string | null;
  readonly addressNeighborhood?: string | null;
  readonly addressCity?: string | null;
  readonly addressState?: string | null;
  readonly addressCountry?: string | null;
  readonly notes?: string | null;
  readonly campaignID?: string | null;
  readonly campaignName?: string | null;
  readonly campaignOrientation?: string | null;
  readonly companyID?: string | null;
  readonly company?: Company | null;
  readonly companyName?: string | null;
  readonly companyPhone?: string | null;
  readonly companyOpeningHours?: string | null;
  readonly qrCodePix?: string | null;
  readonly qrCodePixUrl?: string | null;
  readonly payMethod?: PaymentMethods | keyof typeof PaymentMethods | null;
  readonly installments?: number | null;
  readonly homeCareOrRetail?: string | null;
  readonly vaccinationCardItems?: (VaccinationCardItem | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyOrder = {
  readonly id: string;
  readonly userID: string;
  readonly user: AsyncItem<User | undefined>;
  readonly profile: AsyncItem<Profile | undefined>;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly createdAt?: string | null;
  readonly items: AsyncCollection<OrderItem>;
  readonly couponID?: string | null;
  readonly couponName?: string | null;
  readonly couponDiscount?: number | null;
  readonly deliveryPrice?: number | null;
  readonly total?: number | null;
  readonly rating?: number | null;
  readonly ratingNotes?: string | null;
  readonly orderPagarmeID?: string | null;
  readonly addressReference?: string | null;
  readonly addressStreet?: string | null;
  readonly addressNumber?: string | null;
  readonly addressComplement?: string | null;
  readonly addressZipcode?: string | null;
  readonly addressNeighborhood?: string | null;
  readonly addressCity?: string | null;
  readonly addressState?: string | null;
  readonly addressCountry?: string | null;
  readonly notes?: string | null;
  readonly campaignID?: string | null;
  readonly campaignName?: string | null;
  readonly campaignOrientation?: string | null;
  readonly companyID?: string | null;
  readonly company: AsyncItem<Company | undefined>;
  readonly companyName?: string | null;
  readonly companyPhone?: string | null;
  readonly companyOpeningHours?: string | null;
  readonly qrCodePix?: string | null;
  readonly qrCodePixUrl?: string | null;
  readonly payMethod?: PaymentMethods | keyof typeof PaymentMethods | null;
  readonly installments?: number | null;
  readonly homeCareOrRetail?: string | null;
  readonly vaccinationCardItems: AsyncCollection<VaccinationCardItem>;
  readonly updatedAt?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order, OrderMetaData>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

type EagerOrderItem = {
  readonly id: string;
  readonly orderID: string;
  readonly productID: string;
  readonly product?: Product | null;
  readonly optionsItem?: (OrderItemOption | null)[] | null;
  readonly qty: number;
  readonly code?: string | null;
  readonly name: string;
  readonly description?: string | null;
  readonly price: number;
  readonly photo1?: string | null;
  readonly changeName?: string | null;
  readonly changeDescription?: string | null;
  readonly changeQtyBlend?: number | null;
  readonly changePriceAdjustment?: string | null;
  readonly blendID?: string | null;
  readonly changeNameAdmin?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrderItem = {
  readonly id: string;
  readonly orderID: string;
  readonly productID: string;
  readonly product: AsyncItem<Product | undefined>;
  readonly optionsItem: AsyncCollection<OrderItemOption>;
  readonly qty: number;
  readonly code?: string | null;
  readonly name: string;
  readonly description?: string | null;
  readonly price: number;
  readonly photo1?: string | null;
  readonly changeName?: string | null;
  readonly changeDescription?: string | null;
  readonly changeQtyBlend?: number | null;
  readonly changePriceAdjustment?: string | null;
  readonly blendID?: string | null;
  readonly changeNameAdmin?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OrderItem = LazyLoading extends LazyLoadingDisabled ? EagerOrderItem : LazyOrderItem

export declare const OrderItem: (new (init: ModelInit<OrderItem, OrderItemMetaData>) => OrderItem) & {
  copyOf(source: OrderItem, mutator: (draft: MutableModel<OrderItem, OrderItemMetaData>) => MutableModel<OrderItem, OrderItemMetaData> | void): OrderItem;
}

type EagerOrderItemOption = {
  readonly id: string;
  readonly orderItemID: string;
  readonly optionID: string;
  readonly option?: Option | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrderItemOption = {
  readonly id: string;
  readonly orderItemID: string;
  readonly optionID: string;
  readonly option: AsyncItem<Option | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OrderItemOption = LazyLoading extends LazyLoadingDisabled ? EagerOrderItemOption : LazyOrderItemOption

export declare const OrderItemOption: (new (init: ModelInit<OrderItemOption, OrderItemOptionMetaData>) => OrderItemOption) & {
  copyOf(source: OrderItemOption, mutator: (draft: MutableModel<OrderItemOption, OrderItemOptionMetaData>) => MutableModel<OrderItemOption, OrderItemOptionMetaData> | void): OrderItemOption;
}

type EagerDeliveryOrder = {
  readonly id: string;
  readonly orderID: string;
  readonly order?: Order | null;
  readonly date: string;
  readonly deliveryUserID?: string | null;
  readonly deliveryUser?: User | null;
  readonly deliveryCompanyID?: string | null;
  readonly deliveryCompany?: Company | null;
  readonly status: DeliveryStatus | keyof typeof DeliveryStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDeliveryOrder = {
  readonly id: string;
  readonly orderID: string;
  readonly order: AsyncItem<Order | undefined>;
  readonly date: string;
  readonly deliveryUserID?: string | null;
  readonly deliveryUser: AsyncItem<User | undefined>;
  readonly deliveryCompanyID?: string | null;
  readonly deliveryCompany: AsyncItem<Company | undefined>;
  readonly status: DeliveryStatus | keyof typeof DeliveryStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DeliveryOrder = LazyLoading extends LazyLoadingDisabled ? EagerDeliveryOrder : LazyDeliveryOrder

export declare const DeliveryOrder: (new (init: ModelInit<DeliveryOrder, DeliveryOrderMetaData>) => DeliveryOrder) & {
  copyOf(source: DeliveryOrder, mutator: (draft: MutableModel<DeliveryOrder, DeliveryOrderMetaData>) => MutableModel<DeliveryOrder, DeliveryOrderMetaData> | void): DeliveryOrder;
}

type EagerDeliveryMethodOrder = {
  readonly id: string;
  readonly name?: string | null;
  readonly zipCode?: (string | null)[] | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDeliveryMethodOrder = {
  readonly id: string;
  readonly name?: string | null;
  readonly zipCode?: (string | null)[] | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DeliveryMethodOrder = LazyLoading extends LazyLoadingDisabled ? EagerDeliveryMethodOrder : LazyDeliveryMethodOrder

export declare const DeliveryMethodOrder: (new (init: ModelInit<DeliveryMethodOrder, DeliveryMethodOrderMetaData>) => DeliveryMethodOrder) & {
  copyOf(source: DeliveryMethodOrder, mutator: (draft: MutableModel<DeliveryMethodOrder, DeliveryMethodOrderMetaData>) => MutableModel<DeliveryMethodOrder, DeliveryMethodOrderMetaData> | void): DeliveryMethodOrder;
}

type EagerCampaign = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly code: string;
  readonly start?: string | null;
  readonly expiration?: string | null;
  readonly discountPercentage?: number | null;
  readonly discountValue?: number | null;
  readonly qtyLimit?: number | null;
  readonly qtyUsed?: number | null;
  readonly qtyProduct?: number | null;
  readonly qtyProductUsed?: number | null;
  readonly orientation?: string | null;
  readonly orderMessage?: string | null;
  readonly zipCodeCoverage?: (string | null)[] | null;
  readonly search?: string | null;
  readonly products?: (CampaignProduct | null)[] | null;
  readonly campaignUsed?: (CampaignUsed | null)[] | null;
  readonly companies?: (CampaignCompany | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCampaign = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly code: string;
  readonly start?: string | null;
  readonly expiration?: string | null;
  readonly discountPercentage?: number | null;
  readonly discountValue?: number | null;
  readonly qtyLimit?: number | null;
  readonly qtyUsed?: number | null;
  readonly qtyProduct?: number | null;
  readonly qtyProductUsed?: number | null;
  readonly orientation?: string | null;
  readonly orderMessage?: string | null;
  readonly zipCodeCoverage?: (string | null)[] | null;
  readonly search?: string | null;
  readonly products: AsyncCollection<CampaignProduct>;
  readonly campaignUsed: AsyncCollection<CampaignUsed>;
  readonly companies: AsyncCollection<CampaignCompany>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Campaign = LazyLoading extends LazyLoadingDisabled ? EagerCampaign : LazyCampaign

export declare const Campaign: (new (init: ModelInit<Campaign, CampaignMetaData>) => Campaign) & {
  copyOf(source: Campaign, mutator: (draft: MutableModel<Campaign, CampaignMetaData>) => MutableModel<Campaign, CampaignMetaData> | void): Campaign;
}

type EagerCampaignUsed = {
  readonly id: string;
  readonly campaign?: Campaign | null;
  readonly userID: string;
  readonly user?: User | null;
  readonly qty?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCampaignUsed = {
  readonly id: string;
  readonly campaign: AsyncItem<Campaign | undefined>;
  readonly userID: string;
  readonly user: AsyncItem<User | undefined>;
  readonly qty?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CampaignUsed = LazyLoading extends LazyLoadingDisabled ? EagerCampaignUsed : LazyCampaignUsed

export declare const CampaignUsed: (new (init: ModelInit<CampaignUsed, CampaignUsedMetaData>) => CampaignUsed) & {
  copyOf(source: CampaignUsed, mutator: (draft: MutableModel<CampaignUsed, CampaignUsedMetaData>) => MutableModel<CampaignUsed, CampaignUsedMetaData> | void): CampaignUsed;
}

type EagerCampaignProduct = {
  readonly id: string;
  readonly campaignID: string;
  readonly productID: string;
  readonly price?: number | null;
  readonly limit?: number | null;
  readonly product?: Product | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCampaignProduct = {
  readonly id: string;
  readonly campaignID: string;
  readonly productID: string;
  readonly price?: number | null;
  readonly limit?: number | null;
  readonly product: AsyncItem<Product | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CampaignProduct = LazyLoading extends LazyLoadingDisabled ? EagerCampaignProduct : LazyCampaignProduct

export declare const CampaignProduct: (new (init: ModelInit<CampaignProduct, CampaignProductMetaData>) => CampaignProduct) & {
  copyOf(source: CampaignProduct, mutator: (draft: MutableModel<CampaignProduct, CampaignProductMetaData>) => MutableModel<CampaignProduct, CampaignProductMetaData> | void): CampaignProduct;
}

type EagerCampaignCompany = {
  readonly id: string;
  readonly campaignID: string;
  readonly companyID: string;
  readonly company?: Company | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCampaignCompany = {
  readonly id: string;
  readonly campaignID: string;
  readonly companyID: string;
  readonly company: AsyncItem<Company | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CampaignCompany = LazyLoading extends LazyLoadingDisabled ? EagerCampaignCompany : LazyCampaignCompany

export declare const CampaignCompany: (new (init: ModelInit<CampaignCompany, CampaignCompanyMetaData>) => CampaignCompany) & {
  copyOf(source: CampaignCompany, mutator: (draft: MutableModel<CampaignCompany, CampaignCompanyMetaData>) => MutableModel<CampaignCompany, CampaignCompanyMetaData> | void): CampaignCompany;
}

type EagerVaccinationCard = {
  readonly id: string;
  readonly userID: string;
  readonly person: string;
  readonly doc?: string | null;
  readonly birth?: string | null;
  readonly relationship?: string | null;
  readonly notes?: string | null;
  readonly avatar?: string | null;
  readonly isOwner?: boolean | null;
  readonly vaccinationCardItem?: (VaccinationCardItem | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVaccinationCard = {
  readonly id: string;
  readonly userID: string;
  readonly person: string;
  readonly doc?: string | null;
  readonly birth?: string | null;
  readonly relationship?: string | null;
  readonly notes?: string | null;
  readonly avatar?: string | null;
  readonly isOwner?: boolean | null;
  readonly vaccinationCardItem: AsyncCollection<VaccinationCardItem>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VaccinationCard = LazyLoading extends LazyLoadingDisabled ? EagerVaccinationCard : LazyVaccinationCard

export declare const VaccinationCard: (new (init: ModelInit<VaccinationCard, VaccinationCardMetaData>) => VaccinationCard) & {
  copyOf(source: VaccinationCard, mutator: (draft: MutableModel<VaccinationCard, VaccinationCardMetaData>) => MutableModel<VaccinationCard, VaccinationCardMetaData> | void): VaccinationCard;
}

type EagerVaccinationCardItem = {
  readonly id: string;
  readonly vaccinationCardID: string;
  readonly vaccinationCard?: VaccinationCard | null;
  readonly orderID: string;
  readonly order?: Order | null;
  readonly orderItemID: string;
  readonly orderItem?: OrderItem | null;
  readonly campaignID?: string | null;
  readonly campaign?: Campaign | null;
  readonly companyID?: string | null;
  readonly company?: Company | null;
  readonly lote?: string | null;
  readonly profissionalID?: string | null;
  readonly profissional?: User | null;
  readonly profissionalName?: string | null;
  readonly coren?: string | null;
  readonly dueDate?: string | null;
  readonly via?: string | null;
  readonly applicationDate?: string | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVaccinationCardItem = {
  readonly id: string;
  readonly vaccinationCardID: string;
  readonly vaccinationCard: AsyncItem<VaccinationCard | undefined>;
  readonly orderID: string;
  readonly order: AsyncItem<Order | undefined>;
  readonly orderItemID: string;
  readonly orderItem: AsyncItem<OrderItem | undefined>;
  readonly campaignID?: string | null;
  readonly campaign: AsyncItem<Campaign | undefined>;
  readonly companyID?: string | null;
  readonly company: AsyncItem<Company | undefined>;
  readonly lote?: string | null;
  readonly profissionalID?: string | null;
  readonly profissional: AsyncItem<User | undefined>;
  readonly profissionalName?: string | null;
  readonly coren?: string | null;
  readonly dueDate?: string | null;
  readonly via?: string | null;
  readonly applicationDate?: string | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VaccinationCardItem = LazyLoading extends LazyLoadingDisabled ? EagerVaccinationCardItem : LazyVaccinationCardItem

export declare const VaccinationCardItem: (new (init: ModelInit<VaccinationCardItem, VaccinationCardItemMetaData>) => VaccinationCardItem) & {
  copyOf(source: VaccinationCardItem, mutator: (draft: MutableModel<VaccinationCardItem, VaccinationCardItemMetaData>) => MutableModel<VaccinationCardItem, VaccinationCardItemMetaData> | void): VaccinationCardItem;
}

type EagerCompany = {
  readonly id: string;
  readonly cnpj: string;
  readonly name: string;
  readonly openingHours?: string | null;
  readonly phones?: string | null;
  readonly street?: string | null;
  readonly number?: string | null;
  readonly complement?: string | null;
  readonly zipcode?: string | null;
  readonly neighborhood?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly search?: string | null;
  readonly enableRetail?: string | null;
  readonly schedulesSunday?: (string | null)[] | null;
  readonly schedulesMonday?: (string | null)[] | null;
  readonly schedulesTuesday?: (string | null)[] | null;
  readonly schedulesWednesday?: (string | null)[] | null;
  readonly schedulesThursday?: (string | null)[] | null;
  readonly schedulesFriday?: (string | null)[] | null;
  readonly schedulesSaturday?: (string | null)[] | null;
  readonly status?: CompanyStatus | keyof typeof CompanyStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCompany = {
  readonly id: string;
  readonly cnpj: string;
  readonly name: string;
  readonly openingHours?: string | null;
  readonly phones?: string | null;
  readonly street?: string | null;
  readonly number?: string | null;
  readonly complement?: string | null;
  readonly zipcode?: string | null;
  readonly neighborhood?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly search?: string | null;
  readonly enableRetail?: string | null;
  readonly schedulesSunday?: (string | null)[] | null;
  readonly schedulesMonday?: (string | null)[] | null;
  readonly schedulesTuesday?: (string | null)[] | null;
  readonly schedulesWednesday?: (string | null)[] | null;
  readonly schedulesThursday?: (string | null)[] | null;
  readonly schedulesFriday?: (string | null)[] | null;
  readonly schedulesSaturday?: (string | null)[] | null;
  readonly status?: CompanyStatus | keyof typeof CompanyStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Company = LazyLoading extends LazyLoadingDisabled ? EagerCompany : LazyCompany

export declare const Company: (new (init: ModelInit<Company, CompanyMetaData>) => Company) & {
  copyOf(source: Company, mutator: (draft: MutableModel<Company, CompanyMetaData>) => MutableModel<Company, CompanyMetaData> | void): Company;
}

type EagerAuthorizationList = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly start?: string | null;
  readonly expiration?: string | null;
  readonly orientation?: string | null;
  readonly search?: string | null;
  readonly qtyApplication?: number | null;
  readonly qtyReturned?: number | null;
  readonly contactNameFinished?: string | null;
  readonly contactPhoneFinished?: string | null;
  readonly contactEmailFinished?: string | null;
  readonly notesFinished?: string | null;
  readonly professionalFinished?: string | null;
  readonly withList?: boolean | null;
  readonly OS?: string | null;
  readonly status?: AuthorizationListStatus | keyof typeof AuthorizationListStatus | null;
  readonly members?: (AuthorizationListMember | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAuthorizationList = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly start?: string | null;
  readonly expiration?: string | null;
  readonly orientation?: string | null;
  readonly search?: string | null;
  readonly qtyApplication?: number | null;
  readonly qtyReturned?: number | null;
  readonly contactNameFinished?: string | null;
  readonly contactPhoneFinished?: string | null;
  readonly contactEmailFinished?: string | null;
  readonly notesFinished?: string | null;
  readonly professionalFinished?: string | null;
  readonly withList?: boolean | null;
  readonly OS?: string | null;
  readonly status?: AuthorizationListStatus | keyof typeof AuthorizationListStatus | null;
  readonly members: AsyncCollection<AuthorizationListMember>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AuthorizationList = LazyLoading extends LazyLoadingDisabled ? EagerAuthorizationList : LazyAuthorizationList

export declare const AuthorizationList: (new (init: ModelInit<AuthorizationList, AuthorizationListMetaData>) => AuthorizationList) & {
  copyOf(source: AuthorizationList, mutator: (draft: MutableModel<AuthorizationList, AuthorizationListMetaData>) => MutableModel<AuthorizationList, AuthorizationListMetaData> | void): AuthorizationList;
}

type EagerAuthorizationListClosure = {
  readonly id: string;
  readonly authorizationListID: string;
  readonly contactName?: string | null;
  readonly contactPhone?: string | null;
  readonly contactEmail?: string | null;
  readonly notes?: string | null;
  readonly qtyApplication?: number | null;
  readonly qtyReturned?: number | null;
  readonly professionalID?: string | null;
  readonly OS?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAuthorizationListClosure = {
  readonly id: string;
  readonly authorizationListID: string;
  readonly contactName?: string | null;
  readonly contactPhone?: string | null;
  readonly contactEmail?: string | null;
  readonly notes?: string | null;
  readonly qtyApplication?: number | null;
  readonly qtyReturned?: number | null;
  readonly professionalID?: string | null;
  readonly OS?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AuthorizationListClosure = LazyLoading extends LazyLoadingDisabled ? EagerAuthorizationListClosure : LazyAuthorizationListClosure

export declare const AuthorizationListClosure: (new (init: ModelInit<AuthorizationListClosure, AuthorizationListClosureMetaData>) => AuthorizationListClosure) & {
  copyOf(source: AuthorizationListClosure, mutator: (draft: MutableModel<AuthorizationListClosure, AuthorizationListClosureMetaData>) => MutableModel<AuthorizationListClosure, AuthorizationListClosureMetaData> | void): AuthorizationListClosure;
}

type EagerAuthorizationListMember = {
  readonly id: string;
  readonly authorizationListID: string;
  readonly name: string;
  readonly key?: string | null;
  readonly cpf?: string | null;
  readonly birth?: string | null;
  readonly search?: string | null;
  readonly others?: string | null;
  readonly vaccinations?: (AuthorizationListMemberVaccination | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAuthorizationListMember = {
  readonly id: string;
  readonly authorizationListID: string;
  readonly name: string;
  readonly key?: string | null;
  readonly cpf?: string | null;
  readonly birth?: string | null;
  readonly search?: string | null;
  readonly others?: string | null;
  readonly vaccinations: AsyncCollection<AuthorizationListMemberVaccination>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AuthorizationListMember = LazyLoading extends LazyLoadingDisabled ? EagerAuthorizationListMember : LazyAuthorizationListMember

export declare const AuthorizationListMember: (new (init: ModelInit<AuthorizationListMember, AuthorizationListMemberMetaData>) => AuthorizationListMember) & {
  copyOf(source: AuthorizationListMember, mutator: (draft: MutableModel<AuthorizationListMember, AuthorizationListMemberMetaData>) => MutableModel<AuthorizationListMember, AuthorizationListMemberMetaData> | void): AuthorizationListMember;
}

type EagerAuthorizationListMemberVaccination = {
  readonly id: string;
  readonly authorizationListID: string;
  readonly authorizationList?: AuthorizationList | null;
  readonly authorizationListMemberID: string;
  readonly authorizationListMember?: AuthorizationListMember | null;
  readonly profissionalID?: string | null;
  readonly profissional?: User | null;
  readonly coren?: string | null;
  readonly lote?: string | null;
  readonly dueDate?: string | null;
  readonly via?: string | null;
  readonly OS?: string | null;
  readonly applicationDate?: string | null;
  readonly applicationTime?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAuthorizationListMemberVaccination = {
  readonly id: string;
  readonly authorizationListID: string;
  readonly authorizationList: AsyncItem<AuthorizationList | undefined>;
  readonly authorizationListMemberID: string;
  readonly authorizationListMember: AsyncItem<AuthorizationListMember | undefined>;
  readonly profissionalID?: string | null;
  readonly profissional: AsyncItem<User | undefined>;
  readonly coren?: string | null;
  readonly lote?: string | null;
  readonly dueDate?: string | null;
  readonly via?: string | null;
  readonly OS?: string | null;
  readonly applicationDate?: string | null;
  readonly applicationTime?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AuthorizationListMemberVaccination = LazyLoading extends LazyLoadingDisabled ? EagerAuthorizationListMemberVaccination : LazyAuthorizationListMemberVaccination

export declare const AuthorizationListMemberVaccination: (new (init: ModelInit<AuthorizationListMemberVaccination, AuthorizationListMemberVaccinationMetaData>) => AuthorizationListMemberVaccination) & {
  copyOf(source: AuthorizationListMemberVaccination, mutator: (draft: MutableModel<AuthorizationListMemberVaccination, AuthorizationListMemberVaccinationMetaData>) => MutableModel<AuthorizationListMemberVaccination, AuthorizationListMemberVaccinationMetaData> | void): AuthorizationListMemberVaccination;
}

type EagerCounter = {
  readonly id: string;
  readonly qty: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCounter = {
  readonly id: string;
  readonly qty: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Counter = LazyLoading extends LazyLoadingDisabled ? EagerCounter : LazyCounter

export declare const Counter: (new (init: ModelInit<Counter, CounterMetaData>) => Counter) & {
  copyOf(source: Counter, mutator: (draft: MutableModel<Counter, CounterMetaData>) => MutableModel<Counter, CounterMetaData> | void): Counter;
}