import {Extension} from "fhir/r4";

export type WbResourceType = (
  'WbPatient' |
  'WbEncounter' |
  'WbLocation' |
  'WbList' |
  'WbProcedure' |
  'WbFlag' |
  'WbOrganization' |
  'WbCareTeam' |
  'WbPractitioner' |
  'WbAppointment' |
  'WbCondition' |
  'WbObservation' |
  'WbBundle')

export interface WbResource {
  wbResourceType: WbResourceType,
  id: string,

  /**
   * Version should increment with each change of the resource
   */
  version: number
  identifier?: string
  extension?: Extension[]
  data?: {[key in string]: any}
}
