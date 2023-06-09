import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Observable, from } from "rxjs";

//
export const fetchApi = <T>(
  url: string,
  method: string,
  data?: any
): Observable<Response> => {
  const fetchWithAuthorization = async () => {
    const { keycloak } = useKeycloak();
    const bearer = "Bearer " + keycloak.token;

    const response = await fetch(url, {
      headers: {
        Authorization: bearer,
        "Content-Type": `${process.env.REACT_APP_VERSION}`,
      },
      method: method,
      body: JSON.stringify(data),
    });

    return response;
  };

  return from(fetchWithAuthorization());
};
