export type WbResourceType = 'WbPatient' | 'WbEncounter' | 'WbLocation' | 'WbList' | 'WbProcedure' | 'WbFlag'

export interface WbResource {
  wbResourceType: WbResourceType,
  id: string,
  identifier?: string
}
