import {WORKSPACE} from '../actions/types';
import {initialState} from '../initialState';

export const workspaceReducer = (state = initialState.workspace, action) => {
  switch (action.type) {
    case WORKSPACE.SET_WORKSPACE:
      return action.payload;
    default:
      return state;
  }
};
