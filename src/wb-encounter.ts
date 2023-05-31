import {EncounterDiagnosis, EncounterHospitalization} from "fhir/r4";
import {WbResource} from "./wb-resource";

export interface WbEncounter extends WbResource {
  wbResourceType: "WbEncounter"
  status: 'planned'|'arrived'|'triaged'|'in-progress'|'onleave'|'finished'|'cancelled'|'entered-in-error'|'unknown';
  diagnosis?: EncounterDiagnosis;
  hospitalization: EncounterHospitalization;
  // isPendingDischarge?: boolean;
  subjectReference: string;
  currentLocation?: string;
  futureLocation?: string;

  // Compiled data
  careTeam?: string;
}
