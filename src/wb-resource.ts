import {Identifier} from "fhir/r4";

export type WbResourceType = 'WbPatient' | 'WbEncounter' | 'WbLocation' | 'WbList' | 'WbProcedure' | 'WbFlag' | 'WbOrganization'

export interface WbResource {
  wbResourceType: WbResourceType,
  id: string,

  /**
   * Version should increment with each change of the resource
   */
  version: string,
  identifier?: Identifier | string
}
