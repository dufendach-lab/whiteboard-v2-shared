import {WbResource} from "./wb-resource";
import {Coding} from "fhir/r4";

export interface WbProcedure extends WbResource {
  wbResourceType: "WbProcedure",
  coding: Coding[],
  status: "unknown" | "in-progress" | "preparation" | "not-done" | "on-hold" | "stopped" | "completed" | "entered-in-error"
}

