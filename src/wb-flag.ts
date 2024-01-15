import {WbResource} from "./wb-resource";
import {Coding} from "fhir/r4";

export interface WbFlag extends WbResource {
  wbResourceType: "WbFlag",
  status: "entered-in-error" | "active" | "inactive"

  // system, code, and display come from the FHIR resource "Coding"
  system: string
  code: string
  display?: string
}
