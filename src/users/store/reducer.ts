import { NormalizedObjects } from "../../store/normalized-objects";
import { UserActionTypes, UsersActions } from "./actions";
import { User } from "./user-state";

interface UsersState extends NormalizedObjects<User> {}

const initialState: UsersState = {
  allIds: [],
  byId: {},
};

function reducer(state = initialState, action: UsersActions) {
  switch (action.type) {
    case UserActionTypes.LOAD_USERS_SUCCESS: {
      state = initialState;
      return {
        ...state,
        allIds: Array.from(
          new Set([...state.allIds, ...action.users.allIds])
        ) as string[],
        byId: {
          ...state.byId,
          ...action.users.byId,
        },
      };
    }
    case UserActionTypes.GET_USER_SUCCESS: {
      console.log("u reducer-u");
      console.log(action.user);
      console.log(state);
      const newState = {
        ...state,
        allIds: [...state.allIds, action.user.id],
        byId: {
          ...state.byId,
          [action.user.id]: action.user,
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

export { reducer as UserReducer };
