import {WORKSPACE} from './types';

export const setWorkspaceData = workspace => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: WORKSPACE.SET_WORKSPACE,
        payload: workspace,
      });

      resolve();
    });
  };
};
