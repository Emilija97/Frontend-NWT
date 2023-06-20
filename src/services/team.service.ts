import { Observable } from "rxjs";
import { Team } from "../teams/store/team-state";
import { getAll, getOne } from "./repository.service";

export const TEAMS_URL = process.env.REACT_APP_API + "/teams";

export function apiLoadTeams(): Observable<Team[]> {
  console.log("api");
  return getAll(`${TEAMS_URL}`);
}

export function apiGetTeam(teamId: string): Observable<Team> {
  return getOne<Team>(`${TEAMS_URL}/${teamId}`);
}
