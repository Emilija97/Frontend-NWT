// import { configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import {
  Action,
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Epic, combineEpics, createEpicMiddleware } from "redux-observable";
import { usersEpics } from "../users/store/effects";
import { UserReducer } from "../users/store/reducer";
import { TeamReducer } from "../teams/store/reducer";
import { teamsEpics } from "../teams/store/effects";

export type ProjectManagementEpic = Epic<any, Action, RootState, any>;

const rootReducer = combineReducers({
  users: UserReducer,
  teams: TeamReducer,
});

const rootEpic = combineEpics(...usersEpics, ...teamsEpics);

export type RootState = ReturnType<typeof rootReducer>;

function configureStore() {
  const epicMiddleware = createEpicMiddleware<Action, Action, RootState, any>({
    dependencies: {
      history: createBrowserHistory(),
    },
  });

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);
  return store;
}

// const testStore = configureStore({
//     reducer: rootReducer

// })

export const store = configureStore();
