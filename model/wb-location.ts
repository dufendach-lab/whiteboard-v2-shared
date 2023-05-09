import {WbResource} from "./wb-resource";

export interface WbLocation extends WbResource {
    wbResourceType: "WbLocation",
    id: string,
    name: string,
    identifier: string,
    status: ('active'|'suspended'|'inactive') | undefined,
    operationalStatus: string | undefined,
    //C=Closed,H=Housekeeping,O=Occupied,U=Unoccupied,K=Contaminated,I=Isolated
    partof: string | undefined,
    type: string[] | undefined,
    physical: string[] | undefined,

}
