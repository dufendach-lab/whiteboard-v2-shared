import {WbResource} from "./wb-resource";
import {Coding, Element} from "fhir/r4";

export interface WbFlag extends WbResource {
  wbResourceType: "WbFlag",
  identifier: string,
  status: "entered-in-error" | "active" | "inactive"

  coding: Coding
  //
  // code?: string | undefined;
  // _code?: Element | undefined;
  // /**
  //  * A representation of the meaning of the code in the system, following the rules of the system.
  //  */
  // display?: string | undefined;
  // _display?: Element | undefined;
  // /**
  //  * The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.
  //  */
  // system?: string | undefined;
  // _system?: Element | undefined;


  // system, code, and display come from the FHIR resource "Coding"
  // system: string
  // code: string
  // display?: string
}
