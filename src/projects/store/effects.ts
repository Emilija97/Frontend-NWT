import { StateObservable, ofType } from "redux-observable";
import {
  GetProject,
  LoadProjectsInit,
  ProjectActionTypes,
  getProjectSuccess,
  loadProjectsSuccess,
} from "./actions";
import { ProjectManagementEpic, RootState } from "../../store/store";
import { Observable, map, switchMap } from "rxjs";
import { Action } from "redux";
import normalize from "../../store/normalizer";
import { apiGetProject, apiLoadProjects } from "../../services/project.service";

const loadProjectsEpic = (
  action$: Observable<LoadProjectsInit>,
  state$: StateObservable<RootState>
): Observable<Action> => {
  return action$.pipe(
    ofType(ProjectActionTypes.LOAD_PROJECTS_INIT),
    switchMap((action) =>
      apiLoadProjects().pipe(
        map((projects) => loadProjectsSuccess(normalize(projects)))
      )
    )
  );
};

const getProjectEpic = (
  action$: Observable<GetProject>,
  state: StateObservable<RootState>
): Observable<Action> => {
  return action$.pipe(
    ofType(ProjectActionTypes.GET_PROJECT),
    switchMap((action) =>
      apiGetProject(action.projectId).pipe(
        map((Project) => getProjectSuccess(Project))
      )
    )
  );
};

export const projectsEpics: ProjectManagementEpic[] = [
  loadProjectsEpic,
  getProjectEpic,
];
