import { WbResource } from "./wb-resource";

export type ChargeId = 
  'nicu_lead_charge'
  | 'G4West' 
  | 'G4East' 
  | 'G1West' 
  | 'G1East'
  | 'cicu_lead_charge'
  | 'G6West'
  | 'G6East'
  | 'accu_lead_charge'
  | 'procedures_lead_charge'
// TODO: Add more as needed

export interface WbChargeAssignment extends WbResource {
  wbResourceType: "WbChargeAssignment",
  chargeId: ChargeId,
  charge: string,
  phone: string,
  order: number
}