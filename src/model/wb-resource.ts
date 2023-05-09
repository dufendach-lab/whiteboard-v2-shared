export interface WbResource {
  wbResourceType: 'WbPatient' | 'WbEncounter' | 'WbLocation' | 'WbList' | 'WbProcedure' | 'WbFlag',
  id: string
}
