import {WbResource} from "./wb-resource";
import {Coding} from "fhir/r4";

export interface WbLocation extends WbResource {
    wbResourceType: "WbLocation",
    name: string,
    identifier: string,
    status: ('active'|'suspended'|'inactive'|'reserved'|'arriving'|'admission'|'discharge'|'unknown'),
    operationalStatus?: 'closed' | 'housekeeping' | 'occupied' | 'unoccupied' | 'contaminated' | 'isolated',
    partOf?: string, // ID of another location this is physically a part of
    type?: string[],
    physical?: string[],

}
