import {WbResource} from "./wb-resource";

export interface WbLocation extends WbResource {
    wbResourceType: "WbLocation",
    name: string,
    identifier: string,
    status: ('active'|'suspended'|'inactive') | undefined,
    operationalStatus: string | undefined,
    //C=Closed,H=Housekeeping,O=Occupied,U=Unoccupied,K=Contaminated,I=Isolated
    partOf: string | undefined, // ID of another location this is physically a part of
    type: string[] | undefined,
    physical: string[] | undefined,

}
