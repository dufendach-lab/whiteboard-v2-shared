import {Coding, HumanName, Identifier} from "fhir/r4";
import {WbResource} from "./wb-resource";

export interface WbPatient extends WbResource {
  wbResourceType: "WbPatient",
  name: HumanName,
  gender?: ('male' | 'female' | 'other' | 'unknown'),
  birthDate?: string,
  activeFlags: WbFlag[],
  activeProcedures: WbProcedure[],
}

export interface WbProcedure extends WbResource {
  wbResourceType: "WbProcedure",
  identifier?: Identifier[],
  coding: Coding[],
  status: ("unknown" | "in-progress" | "inactive" | "active" | "preparation" | "not-done" | "on-hold" | "stopped" | "completed" | "entered-in-error") | undefined
}

export interface WbFlag extends WbResource{
  wbResourceType: "WbFlag",
  identifier?: Identifier[],
  coding: Coding[],
  status: ("entered-in-error" | "active" | "inactive") | undefined
}
