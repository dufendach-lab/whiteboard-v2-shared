import {Extension, HumanName} from "fhir/r4";
import {WbResource} from "./wb-resource";
import {WbFlag} from "./wb-flag";
import {WbProcedure} from "./wb-procedure";

export interface WbPatient extends WbResource {
  wbResourceType: "WbPatient",
  name: HumanName,
  gender?: ('male' | 'female' | 'other' | 'unknown'),
  birthDate?: string,
  extension?: Extension[]
}
