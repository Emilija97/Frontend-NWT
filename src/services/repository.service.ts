import { useKeycloak } from "@react-keycloak/web";
import { from, Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
// import { fetchApi } from "./fetch.service";
import keycloak from "../keycloak";

interface Entity {
  id: string;
}

// const { keycloak, initialized } = useKeycloak();

export function fetchApi<T>(
  method: string,
  url: string,
  data?: T
): Observable<Response> {
  // const { keycloak, initialized } = useKeycloak();
  let bearer = "Bearer " + keycloak.getToken();
  console.log(bearer);
  console.log(keycloak.getToken());

  return from(
    fetch(url, {
      credentials: "include",
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
        Accept: `${process.env.REACT_APP_VERSION}`,
      },
      method: method,
      body: JSON.stringify(data),
    })
  );
}

export function addOne<T extends Entity>(url: string, data: T): Observable<T> {
  console.log(keycloak.getToken());
  return fetchApi("POST", url, data).pipe(
    switchMap((response) => {
      console.log(response);
      return from(response.json() as Promise<T>);
    })
  );
}

export function getOne<T>(url: string): Observable<T> {
  return fetchApi<T>("GET", url).pipe(
    switchMap((response) => from(response.json() as Promise<T>))
  );
}

export function getAll<T>(url: string): Observable<T[]> {
  console.log("u get all");
  return fetchApi("GET", url).pipe(
    switchMap((response) => from(response.json() as Promise<T[]>))
  );
}

export function deleteOne(url: string): Observable<Response> {
  return fetchApi("DELETE", url);
}

export function deleteMany(url: string, ids: string[]): Observable<Response>[] {
  return ids.map((id) => fetchApi("DELETE", `${url}/${id}`));
}

export function updateOne<T>(url: string, data: T): Observable<Response> {
  return fetchApi("PUT", url, data);
}
