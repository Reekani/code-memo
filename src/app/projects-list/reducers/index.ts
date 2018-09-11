import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromProjectsList from './projectsList.reducer';

export interface ProjectsListState {
  projects: fromProjectsList.State;
}

export interface State extends fromRoot.State {
  projectsList: ProjectsListState;
}

export const reducers: ActionReducerMap<ProjectsListState> = {
  projects: fromProjectsList.reducer,
};

export const getProjectsListState = createFeatureSelector<ProjectsListState>('projects');

export const getProjectsListEntitiesState = createSelector(
  getProjectsListState,
  state => state.projects
);

export const getSelectedProjectId = createSelector(
  getProjectsListEntitiesState,
  fromProjectsList.getSelectedId
);
