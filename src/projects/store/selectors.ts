import { RootState } from "../../store/store";
import { Project } from "./project-state";

export const selectProjects = (state: RootState): Project[] => {
  return state.projects.allIds.map((project) => state.projects.byId[project]);
};

export const selectProject = (state: RootState, projectId: string): Project => {
  console.log("u selectoru");
  return state.projects.byId[projectId];
};

export const selectProjectByName = (state: RootState, projectName: string): Project | null => {
  const projectId = state.projects.allIds.find(
    (id) => state.projects.byId[id].name === projectName
  );
  const foundProject = projectId ? state.projects.byId[projectId] : null;
  return foundProject;
};