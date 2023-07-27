import { Observable } from "rxjs";
import { User } from "../users/store/user-state";
import { getAll, getOne } from "./repository.service";

export const USERS_URL = process.env.REACT_APP_API + "/users";

export function apiLoadUsers(): Observable<User[]> {
  return getAll(`${USERS_URL}`);
}

export function apiGetUser(keycloakId: string): Observable<User> {
  return getOne<User>(`${USERS_URL}/${keycloakId}`);
}

export function apiFindUser(userId: string): Observable<User> {
  return getOne<User>(`${USERS_URL}/user/${userId}`);
}
