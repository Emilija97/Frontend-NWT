import { RootState } from "../../store/store";
import { User } from "./user-state";

export const selectUsers = (state: RootState): User[] => {
  return state.users.allIds.map((user) => state.users.byId[user]);
};

// export const selectUser = (state: RootState, keycloakId: string) => {
//   console.log("u selectoru");
//   return state.users.byId[keycloakId];
// };

export const selectUser = (
  state: RootState,
  keycloakId: string
): User | null => {
  console.log("u selectoru");
  const userId = state.users.allIds.find(
    (id) => state.users.byId[id].keycloakId === keycloakId
  );
  const foundUser = userId ? state.users.byId[userId] : null;
  return foundUser;
};

// state.users.allIds.map((user) => {
//   const toReturn = state.users.byId[user];
//   console.log(toReturn);
//   console.log(keycloakId);
//   console.log(toReturn.keycloakId === keycloakId);
//   if (toReturn.keycloakId === keycloakId) {
//     console.log("return");
//     return toReturn;
//   }
// });
