export type WbResourceType = 'WbPatient' | 'WbEncounter' | 'WbLocation' | 'WbList' | 'WbProcedure' | 'WbFlag'
  | 'WbOrganization' | 'WbCareTeam' | 'WbPractitioner' | 'WbAppointment'

export interface WbResource {
  wbResourceType: WbResourceType,
  id: string,

  /**
   * Version should increment with each change of the resource
   */
  version: string,
  identifier?: string
}
