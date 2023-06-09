import {WbResource} from "./wb-resource";

export interface WbOrganization extends WbResource {
  wbResourceType : "WbOrganization",
  identifier : string, // C? Identifies this organization  across multiple systems
  // "active" : <boolean>, // Whether the organization's record is still in active use
  // "type" : [{ CodeableConcept }], // Kind of organization
  name: string, // C? Name used for the organization
  // "alias" : ["<string>"], // A list of alternate names that the organization is known as, or was known as in the past
  // "telecom" : [{ ContactPoint }], // C? A contact detail for the organization
  // "address" : [{ Address }], // C? An address for the organization
  // "partOf" : { Reference(Organization) }, // The organization of which this organization forms a part
  // "contact" : [{ // Contact for the organization for a certain purpose
  //   "purpose" : { CodeableConcept }, // The type of contact
  //   "name" : { HumanName }, // A name associated with the contact
  //   "telecom" : [{ ContactPoint }], // Contact details (telephone, email, etc.)  for a contact
  //   "address" : { Address } // Visiting or postal addresses for the contact
  // }],
  // "endpoint" : [{ Reference(Endpoint) }] // Technical endpoints providing access to services operated for the organization
}
