import {Extension, HumanName} from "fhir/r4";
import {WbResource} from "./wb-resource";
import { WbCareTeam } from "./wb-care-team";

export interface WbPatient extends WbResource {
  wbResourceType: "WbPatient",
  name: HumanName,
  gender?: ('male' | 'female' | 'other' | 'unknown'),
  birthDate?: string,
  extension?: Extension[],
  careTeam?: WbCareTeam, //TODO: Should the patient hold a reference to the care team, or the other way around?
}
