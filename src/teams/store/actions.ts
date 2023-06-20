import { Action } from "redux";
import { NormalizedObjects } from "../../store/normalized-objects";
import { Team } from "./team-state";

export enum TeamActionTypes {
  LOAD_TEAMS_INIT = "Teams__LoadTeamsInit",
  LOAD_TEAMS_SUCCESS = "Teams__LoadTeamsSuccess",
  GET_TEAM = "Teams__GetTeam",
  GET_TEAM_SUCCESS = "Teams__GetTeamSuccess",
}

export interface LoadTeamsInit extends Action {
  type: TeamActionTypes.LOAD_TEAMS_INIT;
}

export function loadTeamsInit(): TeamsActions {
  return { type: TeamActionTypes.LOAD_TEAMS_INIT };
}

export interface LoadTeamsSuccess extends Action {
  type: TeamActionTypes.LOAD_TEAMS_SUCCESS;
  teams: NormalizedObjects<Team>;
}

export function loadTeamsSuccess(teams: NormalizedObjects<Team>): TeamsActions {
  return { type: TeamActionTypes.LOAD_TEAMS_SUCCESS, teams };
}

export interface GetTeam extends Action {
  type: TeamActionTypes.GET_TEAM;
  teamId: string;
}

export function getTeam(teamId: string): TeamsActions {
  return { type: TeamActionTypes.GET_TEAM, teamId };
}

export interface GetTeamSuccess extends Action {
  type: TeamActionTypes.GET_TEAM_SUCCESS;
  team: Team;
}

export function getTeamSuccess(team: Team): TeamsActions {
  return { type: TeamActionTypes.GET_TEAM_SUCCESS, team };
}

export type TeamsActions =
  | LoadTeamsInit
  | LoadTeamsSuccess
  | GetTeam
  | GetTeamSuccess;
