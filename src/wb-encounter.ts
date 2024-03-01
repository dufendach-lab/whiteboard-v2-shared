import {CodeableConcept, EncounterDiagnosis, EncounterHospitalization, Period} from "fhir/r4";
import {WbResource} from "./wb-resource";
import { WbLocation } from "./wb-location";

export interface WbEncounter extends WbResource {
  wbResourceType: "WbEncounter"
  status: 'planned'|'arrived'|'triaged'|'in-progress'|'onleave'|'finished'|'cancelled'|'entered-in-error'|'unknown';
  period?: Period;
  diagnosis?: {
    condition: string,
    rank?: number,
    use?: CodeableConcept
  };
  hospitalization: EncounterHospitalization;
  // isPendingDischarge?: boolean;
  subjectReference: string;
  // activeLocation: string; // ID of the currently active location
  // pendingLocations: string[]; // Ids of pending/future locations
  locations: WbLocation[];
  // locations: {
  //   locationReference: string,
  //   status: 'planned' | 'active' | 'reserved' | 'completed',
  //   period: Period
  // }[]

  // Compiled data
  careTeam?: string;
}

/** it might be beneficial to keep track of the "currentLocation" and "pendingLocations" as two specific
 *  fields on the WbEncounter object so that it's easier to query them. Obviously, they would need to stay
 *  in sync with the locations array, but it might speed things up a bit.
 **/
