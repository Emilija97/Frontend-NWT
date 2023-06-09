export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  keycloakId: string;
  cardIds: string[];
  organizationId: string;
  roles: Int16Array[];
  projectIds: string[];
  teamIds: string[];
}
