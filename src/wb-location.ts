import {WbResource} from "./wb-resource";
import {CodeableConcept} from "fhir/r4";

export interface WbLocation extends WbResource {
    wbResourceType: "WbLocation",
    name: string,
    identifier: string,
    status: ('active'|'planned'|'reserved'|'completed'),
    operationalStatus?: 'closed' | 'housekeeping' | 'occupied' | 'unoccupied' | 'contaminated' | 'isolated',
    partOf?: string, // ID of another location this is physically a part of
    type?: string[],
    physical?: string[],
    characteristic?: CodeableConcept[]
}
