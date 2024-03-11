import { atom } from "jotai";
import { atomStateControls } from "../../../utils/atomUtils";
import { DEFAULT_CSV_FORMAT } from "./CSVInputConstants";

const csvAtom = atom<string>(DEFAULT_CSV_FORMAT);

export const { useCSVAtom, getCSVAtom } = atomStateControls(csvAtom, "CSV");
