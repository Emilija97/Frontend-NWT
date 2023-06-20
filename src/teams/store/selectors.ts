import { RootState } from "../../store/store";
import { Team } from "./team-state";

export const selectTeams = (state: RootState): Team[] => {
  return state.teams.allIds.map((team) => state.teams.byId[team]);
};

export const selectTeam = (state: RootState, teamId: string): Team => {
  console.log("u selectoru");
  return state.teams.byId[teamId];
};
