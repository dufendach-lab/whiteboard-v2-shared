import {WbResource} from "./wb-resource";
import {Coding} from "fhir/r4";
import {WbFlag} from "./wb-flag";
import { WbPatient } from "./wb-patient";

export interface WbProcedure extends WbResource {
  wbResourceType: "WbProcedure",
  coding: Coding[],
  flags: WbFlag[],
  status: "unknown" | "in-progress" | "preparation" | "not-done" | "on-hold" | "stopped" | "completed" | "entered-in-error",
  patient: WbPatient | null
}

