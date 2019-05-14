import { Reducer } from "redux";
import {  } from "../_actions/Actions";
import { DrawerActionTypes, DrawerActions } from "../_actions/DrawerActions";


export interface IDrawerState {
  readonly drawerVisible: boolean;
}

const initialDrawerState: IDrawerState = {
    drawerVisible: true
}

// Reducer: (previousState, action) => newState

export const drawerReducer: Reducer<IDrawerState, DrawerActions> = (
  state = initialDrawerState,
  action
) => {
  switch (action.type) {
    case DrawerActionTypes.DRAWER_OPEN: {
      return {
        ...state,
        drawerVisible: true,
      };
    }
    case DrawerActionTypes.DRAWER_CLOSE: {
      return {
        ...state,
        drawerVisible:false
      }
    }
    case DrawerActionTypes.DRAWER_TOGGLE:{
      return {
        ...state,
        drawerVisible: !state.drawerVisible
      }
    }
    default:
      return state;
  }
};