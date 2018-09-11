import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Project} from '../models/project';
import {ProjectsListActionTypes, ProjectsListActionsUnion} from '../actions/projectsList.actions';

export interface State extends EntityState<Project> {
  selectedProjectId: string | null;
}

export const adapter: EntityAdapter<Project> = createEntityAdapter<Project>({
  selectId: (project: Project) => project.id,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  selectedProjectId: null,
});

export function reducer(
  state = initialState,
  action: ProjectsListActionsUnion
): State {
  switch (action.type) {
    case ProjectsListActionTypes.Select: {
      return {
        ...state,
        selectedProjectId: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.selectedProjectId;
