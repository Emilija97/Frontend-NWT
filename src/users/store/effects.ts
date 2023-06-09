import { StateObservable, ofType } from "redux-observable";
import {
  GetUser,
  LoadUsersInit,
  UserActionTypes,
  getUserSuccess,
  loadUsersSuccess,
} from "./actions";
import { ProjectManagementEpic, RootState } from "../../store/store";
import { Observable, map, switchMap } from "rxjs";
import { Action } from "redux";
import { apiGetUser, apiLoadUsers } from "../../services/user.service";
import normalize from "../../store/normalizer";

const loadUsersEpic = (
  action$: Observable<LoadUsersInit>,
  state$: StateObservable<RootState>
): Observable<Action> => {
  return action$.pipe(
    ofType(UserActionTypes.LOAD_USERS_INIT),
    switchMap((action) =>
      apiLoadUsers().pipe(map((users) => loadUsersSuccess(normalize(users))))
    )
  );
};

const getUserEpic = (
  action$: Observable<GetUser>,
  state: StateObservable<RootState>
): Observable<Action> => {
  return action$.pipe(
    ofType(UserActionTypes.GET_USER),
    switchMap((action) =>
      apiGetUser(action.keycloakId).pipe(map((user) => getUserSuccess(user)))
    )
  );
};

export const usersEpics: ProjectManagementEpic[] = [loadUsersEpic, getUserEpic];
