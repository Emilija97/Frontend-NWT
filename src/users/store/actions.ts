import { Action } from "redux";
import { NormalizedObjects } from "../../store/normalized-objects";
import { User } from "./user-state";

export enum UserActionTypes {
  LOAD_USERS_INIT = "Users__LoadUsersInit",
  LOAD_USERS_SUCCESS = "Users__LoadUsersSuccess",
  GET_USER = "Users__GetUser",
  GET_USER_SUCCESS = "Users__GetUserSuccess",
}

export interface LoadUsersInit extends Action {
  type: UserActionTypes.LOAD_USERS_INIT;
}

export function loadUsersInit(): UsersActions {
  return { type: UserActionTypes.LOAD_USERS_INIT };
}

export interface LoadUsersSuccess extends Action {
  type: UserActionTypes.LOAD_USERS_SUCCESS;
  users: NormalizedObjects<User>;
}

export function loadUsersSuccess(users: NormalizedObjects<User>): UsersActions {
  return { type: UserActionTypes.LOAD_USERS_SUCCESS, users };
}

export interface GetUser extends Action {
  type: UserActionTypes.GET_USER;
  keycloakId: string;
}

export function getUser(keycloakId: string): UsersActions {
  return { type: UserActionTypes.GET_USER, keycloakId };
}

export interface GetUserSuccess extends Action {
  type: UserActionTypes.GET_USER_SUCCESS;
  user: User;
}

export function getUserSuccess(user: User): UsersActions {
  return { type: UserActionTypes.GET_USER_SUCCESS, user };
}

export type UsersActions =
  | LoadUsersInit
  | LoadUsersSuccess
  | GetUser
  | GetUserSuccess;
