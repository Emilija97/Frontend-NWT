export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  keycloakId: string;
  cardIds: string[];
  organizationId: string;
  organizationName: string;
  roles: number[];
  projectIds: string[];
  teamIds: string[];
}

export enum Roles {
  SYSTEM_ADMIN = 0,
  DEVELOPER = 1,
  REPORTER = 2,
  OBSERVER = 3,
  PROJECT_ADMIN = 4,
}

export const rolesMap: Map<Roles, string> = new Map([
  [Roles.SYSTEM_ADMIN, "System Admin"],
  [Roles.DEVELOPER, "Developer"],
  [Roles.REPORTER, "Reporter"],
  [Roles.OBSERVER, "Observer"],
  [Roles.PROJECT_ADMIN, "Project Admin"],
]);

export const rolesMapByNumber: Map<number, string> = new Map([
  [0, "System Admin"],
  [1, "Developer"],
  [2, "Reporter"],
  [3, "Observer"],
  [4, "Project Admin"],
]);

export const rolesArray: Array<Roles> = new Array(
  Roles.SYSTEM_ADMIN,
  Roles.DEVELOPER,
  Roles.REPORTER,
  Roles.OBSERVER,
  Roles.PROJECT_ADMIN
);
