import { atom } from "jotai";
import { DEFAULT_INVOICE_FORMAT } from "./JSONInputConstants";
import { atomStateControls } from "../../utils/atomUtils";
import { UBLInvoice } from "../../../../interface/interfaceTypes";

/**
 * Atom for JSON input
 */
const jsonAtom = atom<UBLInvoice>(DEFAULT_INVOICE_FORMAT);

/**
 * JSON input state controls
 */
export const { useJSONAtom, getJSONAtom } = atomStateControls(jsonAtom, "JSON");
