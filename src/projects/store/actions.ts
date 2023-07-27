import { Action } from "redux";
import { NormalizedObjects } from "../../store/normalized-objects";
import { Project } from "./project-state";

export enum ProjectActionTypes {
  LOAD_PROJECTS_INIT = "Projects__LoadProjectsInit",
  LOAD_PROJECTS_SUCCESS = "Projects__LoadProjectsSuccess",
  GET_PROJECT = "Projects__GetProject",
  GET_PROJECT_SUCCESS = "Projects__GetProjectSuccess",
}

export interface LoadProjectsInit extends Action {
  type: ProjectActionTypes.LOAD_PROJECTS_INIT;
}

export function loadProjectsInit(): ProjectsActions {
  return { type: ProjectActionTypes.LOAD_PROJECTS_INIT };
}

export interface LoadProjectsSuccess extends Action {
  type: ProjectActionTypes.LOAD_PROJECTS_SUCCESS;
  projects: NormalizedObjects<Project>;
}

export function loadProjectsSuccess(
  projects: NormalizedObjects<Project>
): ProjectsActions {
  return { type: ProjectActionTypes.LOAD_PROJECTS_SUCCESS, projects };
}

export interface GetProject extends Action {
  type: ProjectActionTypes.GET_PROJECT;
  projectId: string;
}

export function getProject(projectId: string): ProjectsActions {
  return { type: ProjectActionTypes.GET_PROJECT, projectId };
}

export interface GetProjectSuccess extends Action {
  type: ProjectActionTypes.GET_PROJECT_SUCCESS;
  project: Project;
}

export function getProjectSuccess(project: Project): ProjectsActions {
  return { type: ProjectActionTypes.GET_PROJECT_SUCCESS, project };
}

export type ProjectsActions =
  | LoadProjectsInit
  | LoadProjectsSuccess
  | GetProject
  | GetProjectSuccess;
