import {Identifier} from "fhir/r4";

export type WbResourceType = 'WbPatient' | 'WbEncounter' | 'WbLocation' | 'WbList' | 'WbProcedure' | 'WbFlag'

export interface WbResource {
  wbResourceType: WbResourceType,
  id: string,
  identifier?: Identifier | string
}
