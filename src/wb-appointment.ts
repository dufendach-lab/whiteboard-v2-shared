import {WbResource} from "./wb-resource";

export interface WbAppointment extends WbResource {
  wbResourceType: "WbAppointment",
  status: 'proposed' | 'pending' | 'booked' | 'arrived' | 'fulfilled' | 'cancelled' | 'noshow' | 'entered-in-error' | 'checked-in' | 'waitlist'
  // "cancelationReason" : { CodeableConcept }, // The coded reason for the appointment being cancelled
  // "serviceCategory" : [{ CodeableConcept }], // A broad categorization of the service that is to be performed during this appointment
  // "serviceType" : [{ CodeableConcept }], // The specific service that is to be performed during this appointment
  // "specialty" : [{ CodeableConcept }], // The specialty of a practitioner that would be required to perform the service requested in this appointment
  // "appointmentType" : { CodeableConcept }, // The style of appointment or patient that has been booked in the slot (not service type)
  // "reasonCode" : [{ CodeableConcept }], // Coded reason this appointment is scheduled
  // "reasonReference" : [{ Reference(Condition|Procedure|Observation|
  //   ImmunizationRecommendation) }], // Reason the appointment is to take place (resource)
  // "priority" : "<unsignedInt>", // Used to make informed decisions if needing to re-prioritize
  description : string, // Shown on a subject line in a meeting request, or appointment list
  // "supportingInformation" : [{ Reference(Any) }], // Additional information to support the appointment
  start? : Date, // When appointment is to take place // Ref: https://hl7.org/fhir/r4/datatypes.html#instant
  // "end" : "<instant>", // When appointment is to conclude
  // "minutesDuration" : "<positiveInt>", // Can be less than start/end (e.g. estimate)
  // "slot" : [{ Reference(Slot) }], // The slots that this appointment is filling
  // "created" : "<dateTime>", // The date that this appointment was initially created
  // "comment" : "<string>", // Additional comments
  // "patientInstruction" : "<string>", // Detailed information and instructions for the patient
  // "basedOn" : [{ Reference(ServiceRequest) }], // The service request this appointment is allocated to assess
  subject: string // Note: has no direct FHIR R4 parameter (although exists in R5) //  Obtained from the participant -> actor, where the actor is a Patient
  // "participant" : [{ // R!  Participants involved in appointment
  //   "type" : [{ CodeableConcept }], // Role of participant in the appointment
  //   "actor" : { Reference(Patient|Practitioner|PractitionerRole|RelatedPerson|
  //     Device|HealthcareService|Location) }, // Person, Location/HealthcareService or Device
  //   "required" : "<code>", // required | optional | information-only
  //   "status" : "<code>", // R!  accepted | declined | tentative | needs-action
  //   "period" : { Period } // Participation period of the actor
  // }],
  // "requestedPeriod" : [{ Period }] // Potential date/time interval(s) requested to allocate the appointment within
}
