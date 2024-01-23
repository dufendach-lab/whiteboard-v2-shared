import {EncounterDiagnosis, EncounterHospitalization, Period} from "fhir/r4";
import {WbResource} from "./wb-resource";
import { WbLocation } from "./wb-location";

export interface WbEncounter extends WbResource {
  wbResourceType: "WbEncounter"
  status: 'planned'|'arrived'|'triaged'|'in-progress'|'onleave'|'finished'|'cancelled'|'entered-in-error'|'unknown';
  period?: Period;
  diagnosis?: EncounterDiagnosis;
  hospitalization: EncounterHospitalization;
  // isPendingDischarge?: boolean;
  subjectReference: string;
  locations: WbLocation[];

  // Compiled data
  careTeam?: string;
}
