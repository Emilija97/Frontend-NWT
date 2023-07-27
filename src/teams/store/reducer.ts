import { NormalizedObjects } from "../../store/normalized-objects";
import { TeamActionTypes, TeamsActions } from "./actions";
import { Team } from "./team-state";

interface TeamsState extends NormalizedObjects<Team> {}

const initialState: TeamsState = {
  allIds: [],
  byId: {},
};

function reducer(state = initialState, action: TeamsActions) {
  switch (action.type) {
    case TeamActionTypes.LOAD_TEAMS_SUCCESS: {
      state = initialState;
      console.log(action.teams);
      return {
        ...state,
        allIds: Array.from(
          new Set([...state.allIds, ...action.teams.allIds])
        ) as string[],
        byId: {
          ...state.byId,
          ...action.teams.byId,
        },
      };
    }
    case TeamActionTypes.GET_TEAM_SUCCESS: {
      console.log("u reducer-u team");
      console.log(action.team);
      console.log(state);
      const newState = {
        ...state,
        allIds: [...state.allIds, action.team.id],
        byId: {
          ...state.byId,
          [action.team.id]: action.team,
        },
      };
      console.log(newState);
      return newState;
    }
    default: {
      return state;
    }
  }
}

export { reducer as TeamReducer };
