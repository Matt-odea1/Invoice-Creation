import {
  CSV_CREATE_ENDPOINT,
  JS_CREATE_ENDPOINT,
} from "../../../../interface/interface";
import { JSONInvoiceInput } from "../json/JSONInput";
import { getJSONAtom } from "../json/JSONInputState";
import { getCSVAtom } from "./csv/CSVInputState";
import { CSVUpload } from "./csv/CSVUpload";
import {
  JSON_INPUT_FEATURE_FLAG,
  CSV_INPUT_FEATURE_FLAG,
} from "./featureFlags.tsx/featureFlags";
import { TabInfo } from "./invoiceCreationTypes";

export enum TabIndex {
  JSON = 0,
  CSV = 1,
}

/**
 * Information for rendering and processing an input format
 */
export const TAB_INFO: Record<TabIndex, TabInfo> = {
  [TabIndex.JSON]: {
    label: "JSON",
    Component: JSONInvoiceInput,
    JSONGetter: getJSONAtom,
    featureFlag: JSON_INPUT_FEATURE_FLAG,
    endpoint: JS_CREATE_ENDPOINT,
  },
  [TabIndex.CSV]: {
    label: "CSV",
    Component: CSVUpload,
    JSONGetter: getCSVAtom,
    featureFlag: CSV_INPUT_FEATURE_FLAG,
    endpoint: CSV_CREATE_ENDPOINT,
  },
};
