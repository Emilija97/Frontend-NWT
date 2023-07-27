import { NormalizedObjects } from "../../store/normalized-objects";
import { ProjectActionTypes, ProjectsActions } from "./actions";
import { Project } from "./project-state";

interface ProjectsState extends NormalizedObjects<Project> {}

const initialState: ProjectsState = {
  allIds: [],
  byId: {},
};

function reducer(state = initialState, action: ProjectsActions) {
  switch (action.type) {
    case ProjectActionTypes.LOAD_PROJECTS_SUCCESS: {
      state = initialState;
      console.log(action.projects);
      return {
        ...state,
        allIds: Array.from(
          new Set([...state.allIds, ...action.projects.allIds])
        ) as string[],
        byId: {
          ...state.byId,
          ...action.projects.byId,
        },
      };
    }
    case ProjectActionTypes.GET_PROJECT_SUCCESS: {
      console.log("u reducer-u");
      console.log(action.project);
      console.log(state);
      const newState = {
        ...state,
        allIds: [...state.allIds, action.project.id],
        byId: {
          ...state.byId,
          [action.project.id]: action.project,
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

export { reducer as ProjectReducer };
