export type WbResourceType = 
  'WbPatient'
  | 'WbEncounter'
  | 'WbLocation'
  | 'WbList'
  | 'WbProcedure'
  | 'WbFlag'
  | 'WbOrganization'
  | 'WbCareTeam'
  | 'WbPractitioner'
  | 'WbAppointment'
  | 'WbCondition'
  | 'WbObservation'
  | 'WbBundle'
  | 'WbChargeAssignment'

export interface WbResource {
  wbResourceType: WbResourceType,
  id: string,

  /**
   * Version should increment with each change of the resource
   */
  version: number,
  identifier?: string
}
