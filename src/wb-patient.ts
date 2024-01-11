import {Extension, HumanName} from "fhir/r4";
import {WbResource} from "./wb-resource";
import { WbCareTeam } from "./wb-care-team";
import { WbFellowTeam } from "./wb-fellow-team";
import { WbNPTeam } from "./wb-np-team";

// TODO: Find out if any of this data setup needs HI versions/attributes
export type InsuranceApprovalStatus = 'unknown' | 'denied' | 'initiated' | 'unnecessary' | 'approved';

export interface WbPatient extends WbResource {
  wbResourceType: "WbPatient",
  name: HumanName,
  maternalName?: string | null
  gender?: ('male' | 'female' | 'other' | 'unknown'),
  birthDate?: string,
  extension?: Extension[],
  careTeam?: WbCareTeam, //TODO: Should the patient hold a reference to the care team, or the other way around?
  mrn: string | null,
  isNameAlert: boolean,
  isUpcomingDischarge: boolean,
  bedsideRN: string | null,
  transferOfInterest: boolean,
  adultPatient: boolean,
  clinicalData: {
    diagnosis: string | null,
    isDialysis: boolean,
    isCriticalAirway: boolean,
    isIsolette: boolean,
    isWatcher: boolean,
    watcherReason: string | null,
    infection: string | null,
    isolation: string | null,
    hasTrach: boolean,
    respiratorySupport: string | null,
    resuscitationStatus: string | null,
    crossCheck: boolean,
    crossCheckReason: string | null,
    isVAD: boolean,
    isCLABSI: boolean,
    isUERisk: boolean,
    isOther: boolean,
    otherReason: string | null,
  },
  deliveryData?: {
    isPhoneTree: boolean,
    isInHouse: boolean,
    exit: 'ECMO' | 'airway' | null,
    deliveryDate: Date | null,
    deliveryMode: 'CS' | 'IOL' | 'standby' | null,
    deliveryTime: string | null,
    dueDate: string | null,
    deliveryLocation: string | null,
    admissionUnit: 'NICU' | 'CICU' | null,
    plan: string | null,
    deliveryDiagnosis: string | null,
  },
  procedureData?: {
    procedureDate: Date | null,
    procedureTime: string | null,
    procedureName: string | null,
    procedureRoom: string | null,
    rebookCount: string | null,
    procedureSpace: 'CV OR' | 'MRI' | 'ECHO' | 'CARU' | 'Cath Lab' | 'In Patient Room' | '',
    surgeon: string | null,
    anesthesiologist: string | null,
    weight: string | null,
    crossCheckAtProcedure: boolean,
    postProcedureDestination: string | null,
    pump: boolean,
    ecmoStandby: boolean,
    comboProcedure: boolean,
  },
  admissionData: {
    initialContactDate: Date | null,
    sourceLocationName: string | null,
    transferAcuity: 'urgent' | 'emergent' | null,
    insuranceApprovalStatus: InsuranceApprovalStatus | null,
    expectedAdmissionDate: Date | null,
    admissionNotes: string | null,
    admissionDiagnosis: string | null,
  }
}
