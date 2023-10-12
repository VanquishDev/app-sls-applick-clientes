// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const UserStatus = {
  "DEFAULT": "DEFAULT",
  "PREREGISTER": "PREREGISTER",
  "SUSPENDED": "SUSPENDED",
  "ACTIVE": "ACTIVE"
};

const GenderOptions = {
  "M": "M",
  "F": "F",
  "UNKNOWN": "UNKNOWN"
};

const DocTypes = {
  "CPF": "CPF",
  "CNPJ": "CNPJ",
  "PASSPORT": "PASSPORT"
};

const PaymentMethods = {
  "CREDIT": "CREDIT",
  "DEBIT": "DEBIT",
  "PIX": "PIX",
  "GATEWAY": "GATEWAY",
  "CASH": "CASH",
  "ONDELIVERY": "ONDELIVERY"
};

const LogSource = {
  "APP": "APP"
};

const ConfigValidationModes = {
  "CODE": "CODE",
  "LINK": "LINK"
};

const InviteStatus = {
  "SENT": "SENT",
  "CANCELED": "CANCELED",
  "ACCEPTED": "ACCEPTED"
};

const MidiaTypes = {
  "AUDIO": "AUDIO",
  "VIDEO": "VIDEO",
  "IMAGE": "IMAGE",
  "PDF": "PDF",
  "DOC": "DOC",
  "XLS": "XLS",
  "FILE": "FILE",
  "ZIP": "ZIP"
};

const RelationTypes = {
  "CONTACT": "CONTACT",
  "DOCUMENT": "DOCUMENT"
};

const RelationModes = {
  "PRIVATE": "PRIVATE",
  "GROUP": "GROUP"
};

const RelationStatus = {
  "STANDBY": "STANDBY",
  "ABORTED": "ABORTED",
  "STARTED": "STARTED",
  "FINALIZED": "FINALIZED",
  "INPROGRESS": "INPROGRESS",
  "INANALYZE": "INANALYZE",
  "ACTIVE": "ACTIVE",
  "ARCHIVED": "ARCHIVED"
};

const MessagesTypes = {
  "ALERT": "ALERT",
  "TEXT": "TEXT",
  "AUDIO": "AUDIO",
  "VIDEO": "VIDEO",
  "IMAGE": "IMAGE",
  "LOCATION": "LOCATION"
};

const PageType = {
  "CONTENT": "CONTENT",
  "COMMERCE": "COMMERCE"
};

const PageStatus = {
  "ON": "ON",
  "OFF": "OFF"
};

const PageChangeFreq = {
  "NEVER": "NEVER",
  "YEARLY": "YEARLY",
  "MONTHLY": "MONTHLY",
  "WEEKLY": "WEEKLY",
  "DAILY": "DAILY",
  "HOURLY": "HOURLY",
  "ALWAYS": "ALWAYS"
};

const PagePriority = {
  "P0": "P0",
  "P1": "P1",
  "P2": "P2",
  "P3": "P3",
  "P4": "P4",
  "P5": "P5",
  "P6": "P6",
  "P7": "P7",
  "P8": "P8",
  "P9": "P9",
  "P10": "P10"
};

const PageOptionTitle = {
  "L": "L",
  "R": "R",
  "C": "C",
  "N": "N"
};

const PageSideColumn = {
  "L": "L",
  "R": "R",
  "N": "N"
};

const PageOptionSideColumn = {
  "CART_CONTENT_TAGS": "CART_CONTENT_TAGS",
  "CART_CONTENT": "CART_CONTENT",
  "CONTENT_CART": "CONTENT_CART",
  "MENU_CONTENT_TAGS": "MENU_CONTENT_TAGS",
  "MENU_CONTENT": "MENU_CONTENT",
  "TAGS_CONTENT": "TAGS_CONTENT",
  "CONTENT_MENU_TAGS": "CONTENT_MENU_TAGS",
  "CONTENT_MENU": "CONTENT_MENU",
  "CONTENT_TAGS": "CONTENT_TAGS",
  "CONTENT_BACK": "CONTENT_BACK",
  "BACK_CONTENT": "BACK_CONTENT"
};

const OrderStatus = {
  "STANDBY": "STANDBY",
  "CANCELED": "CANCELED",
  "REJECTED": "REJECTED",
  "APPROVED": "APPROVED",
  "IN_PREPARATION": "IN_PREPARATION",
  "IN_TRANSIT": "IN_TRANSIT",
  "DELIVERED": "DELIVERED"
};

const DeliveryStatus = {
  "FORESEEN": "FORESEEN",
  "NEEDS_ACTION": "NEEDS_ACTION",
  "CONFIRMED": "CONFIRMED",
  "BLOCKED": "BLOCKED",
  "DELIVERED": "DELIVERED"
};

const CompanyStatus = {
  "ON": "ON",
  "OFF": "OFF"
};

const AuthorizationListStatus = {
  "STANDBY": "STANDBY",
  "STARTED": "STARTED",
  "FINISHED": "FINISHED"
};

const { User, Profile, TempAux, GroupUser, Address, PayMethod, Log, Config, Invite, Coupon, CouponProduct, CouponUsed, Folder, Midia, Relation, RelationLink, Message, Menu, Page, Block, Category, Product, KitItem, Option, Cart, CartOption, Order, OrderItem, OrderItemOption, DeliveryOrder, DeliveryMethodOrder, Campaign, CampaignUsed, CampaignProduct, CampaignCompany, VaccinationCard, VaccinationCardItem, Company, AuthorizationList, AuthorizationListClosure, AuthorizationListMember, AuthorizationListMemberVaccination, Counter } = initSchema(schema);

export {
  User,
  Profile,
  TempAux,
  GroupUser,
  Address,
  PayMethod,
  Log,
  Config,
  Invite,
  Coupon,
  CouponProduct,
  CouponUsed,
  Folder,
  Midia,
  Relation,
  RelationLink,
  Message,
  Menu,
  Page,
  Block,
  Category,
  Product,
  KitItem,
  Option,
  Cart,
  CartOption,
  Order,
  OrderItem,
  OrderItemOption,
  DeliveryOrder,
  DeliveryMethodOrder,
  Campaign,
  CampaignUsed,
  CampaignProduct,
  CampaignCompany,
  VaccinationCard,
  VaccinationCardItem,
  Company,
  AuthorizationList,
  AuthorizationListClosure,
  AuthorizationListMember,
  AuthorizationListMemberVaccination,
  Counter,
  UserStatus,
  GenderOptions,
  DocTypes,
  PaymentMethods,
  LogSource,
  ConfigValidationModes,
  InviteStatus,
  MidiaTypes,
  RelationTypes,
  RelationModes,
  RelationStatus,
  MessagesTypes,
  PageType,
  PageStatus,
  PageChangeFreq,
  PagePriority,
  PageOptionTitle,
  PageSideColumn,
  PageOptionSideColumn,
  OrderStatus,
  DeliveryStatus,
  CompanyStatus,
  AuthorizationListStatus
};