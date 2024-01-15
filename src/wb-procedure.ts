import {WbResource} from "./wb-resource";
import {Coding} from "fhir/r4";
import {WbFlag} from "./wb-flag";

export interface WbProcedure extends WbResource {
  wbResourceType: "WbProcedure",
  coding: Coding[],
  flags: WbFlag[],
  status: "unknown" | "in-progress" | "preparation" | "not-done" | "on-hold" | "stopped" | "completed" | "entered-in-error"
}

