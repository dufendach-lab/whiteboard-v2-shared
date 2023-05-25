import {WbResource} from "./wb-resource";
import {Coding} from "fhir/r4";

export interface WbFlag extends WbResource{
  wbResourceType: "WbFlag",
  coding: Coding[],
  status: "entered-in-error" | "active" | "inactive"
}
