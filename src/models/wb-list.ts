import {WbResource} from "./wb-resource";

export interface WbList extends WbResource {
  "resourceType" : "WbList",
//   // from Resource: id, meta, implicitRules, and language
//   // from DomainResource: text, contained, extension, and modifierExtension
  "identifier" : string, // Business identifier
  "status" : 'current' | 'retired' | 'entered-in-error'
//   "mode" : "<code>", // R!  working | snapshot | changes
//   "title" : "<string>", // Descriptive name for the list
//   "code" : { CodeableConcept }, // What the purpose of this list is
  subject : string, // If all resources have the same subject
  encounter : string, // Context in which list created
//   "date" : "<dateTime>", // When the list was prepared
//   "source" : { Reference(Practitioner|PractitionerRole|Patient|Device) }, // Who and/or what defined the list contents (aka Author)
//   "orderedBy" : { CodeableConcept }, // What order the list has
//   "note" : [{ Annotation }], // Comments about the list
  "entry" : [{ // C? Entries in the list
  // "flag" : { CodeableConcept }, // Status/Workflow information about this item
  // "deleted" : <boolean>, // C? If this item is actually marked as deleted
  "date" : string, // When item added to list
  "item" : string // R!  Actual entry
}],
//   "emptyReason" : { CodeableConcept } // C? Why list is empty
}
