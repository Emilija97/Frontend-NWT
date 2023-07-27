import { Observable } from "rxjs";
import { Project } from "../projects/store/project-state";
import { getAll, getOne } from "./repository.service";

export const PROJECTS_URL = process.env.REACT_APP_API + "/projects";

export function apiLoadProjects(): Observable<Project[]> {
  console.log("api");
  return getAll(`${PROJECTS_URL}`);
}

export function apiGetProject(projectId: string): Observable<Project> {
  return getOne<Project>(`${PROJECTS_URL}/${projectId}`);
}
