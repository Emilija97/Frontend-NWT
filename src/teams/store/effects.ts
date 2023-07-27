import { StateObservable, ofType } from "redux-observable";
import {
  GetTeam,
  LoadTeamsInit,
  TeamActionTypes,
  getTeamSuccess,
  loadTeamsSuccess,
} from "./actions";
import { ProjectManagementEpic, RootState } from "../../store/store";
import { Observable, map, switchMap } from "rxjs";
import { Action } from "redux";
import { apiGetTeam, apiLoadTeams } from "../../services/team.service";
import normalize from "../../store/normalizer";

const loadTeamsEpic = (
  action$: Observable<LoadTeamsInit>,
  state$: StateObservable<RootState>
): Observable<Action> => {
  return action$.pipe(
    ofType(TeamActionTypes.LOAD_TEAMS_INIT),
    switchMap((action) =>
      apiLoadTeams().pipe(map((teams) => loadTeamsSuccess(normalize(teams))))
    )
  );
};

const getTeamEpic = (
  action$: Observable<GetTeam>,
  state: StateObservable<RootState>
): Observable<Action> => {
  return action$.pipe(
    ofType(TeamActionTypes.GET_TEAM),
    switchMap((action) =>
      apiGetTeam(action.teamId).pipe(map((team) => getTeamSuccess(team)))
    )
  );
};

export const teamsEpics: ProjectManagementEpic[] = [loadTeamsEpic, getTeamEpic];
