import {Coding} from "fhir/r4";

export const OrganizationalTeamCode: Coding = {
  system: 'http://terminology.hl7.org/CodeSystem/organization-type',
  code: 'team',
  display: 'Organizational team'
}

export interface ServiceTeam {
  id: string,
  identifier: string,
  name: string,
  color: string,
  practitioners: {
    id: string,
    identifier: string,
    label: string,
  }[]
}

export interface UnitData {
  name: string,
  identifier: string,
  locations: {
    id: string,
    identifier: string,
    name: string
  }[],
  lists: {
    identifier: string,
    id: string
  }[],
  serviceTeams: ServiceTeam[],
  id?: string
}
