import {EncounterDiagnosis, EncounterHospitalization, EncounterLocation, Reference} from "fhir/r4";
import {WbResource} from "./wb-resource";

export interface WbEncounter extends WbResource {
  wbResourceType: "WbEncounter"
  id: string;
  status: ('planned'|'arrived'|'triaged'|'in-progress'|'onleave'|'finished'|'cancelled'|'entered-in-error'|'unknown');
  diagnosis?: EncounterDiagnosis;
  hospitalization: EncounterHospitalization;
  subjectReference: Reference;
  currentLocation: EncounterLocation | null;
  futureLocation: EncounterLocation | null;
  isPendingDischarge: boolean;
}
