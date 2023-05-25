import {WbResource} from "./wb-resource";
import {HumanName, PractitionerQualification} from "fhir/r4";

export interface WbPractitioner extends WbResource {
  WbResourceType : "WbPractitioner",
  // from Resource: id, meta, implicitRules, and language
  // from DomainResource: text, contained, extension, and modifierExtension
  // "active" : <boolean>, // Whether this practitioner's record is in active use
  name : HumanName, // The name(s) associated with the practitioner
  // "telecom" : [{ ContactPoint }], // A contact detail for the practitioner (that apply to all roles)
  // "address" : [{ Address }], // Address(es) of the practitioner that are not role specific (typically home address)
  // "gender" : "<code>", // male | female | other | unknown
  // "birthDate" : "<date>", // The date  on which the practitioner was born
  // "photo" : [{ Attachment }], // Image of the person
  qualification?: PractitionerQualification[],
  // "communication" : [{ CodeableConcept }] // A language the practitioner can use in patient communication
}
