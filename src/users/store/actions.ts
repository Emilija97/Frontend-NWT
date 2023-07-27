import { Action } from "redux";
import { NormalizedObjects } from "../../store/normalized-objects";
import { User } from "./user-state";

export enum UserActionTypes {
  LOAD_USERS_INIT = "Users__LoadUsersInit",
  LOAD_USERS_SUCCESS = "Users__LoadUsersSuccess",
  GET_USER = "Users__GetUser",
  GET_USER_SUCCESS = "Users__GetUserSuccess",
  FIND_USER = "Users__FindUser",
  FIND_USER_SUCCESS = "Users__FindUserSuccess",
  LOGOUT_USER = "Users__Logout",
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

export interface FindUser extends Action {
  type: UserActionTypes.FIND_USER;
  userId: string;
}

export function findUser(userId: string): UsersActions {
  return { type: UserActionTypes.FIND_USER, userId };
}

export interface FindUserSuccess extends Action {
  type: UserActionTypes.FIND_USER_SUCCESS;
  user: User;
}

export function findUserSuccess(user: User): UsersActions {
  return { type: UserActionTypes.FIND_USER_SUCCESS, user };
}

export interface Logout extends Action {
  type: UserActionTypes.LOGOUT_USER;
}

export function logout(): UsersActions {
  return { type: UserActionTypes.LOGOUT_USER };
}
export type UsersActions =
  | LoadUsersInit
  | LoadUsersSuccess
  | GetUser
  | GetUserSuccess
  | FindUser
  | FindUserSuccess
  | Logout;
