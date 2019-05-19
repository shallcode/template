import { Reducer } from "redux";
import {  } from "../_actions/Actions";
import { FileActions, FileActionTypes } from "../_actions/FileActions";


export interface IFileState {
  readonly file: string;
}

const initialFileState: IFileState = {
    file: ""
}

// Reducer: (previousState, action) => newState

export const fileListReducer: Reducer<IFileState, FileActions> = (
  state = initialFileState,
  action
) => {
  switch (action.type) {
    case FileActionTypes.CHANGE: {
      return {
        ...state,
        file: action.file,
      };
    }
    default:
      return state;
  }
};