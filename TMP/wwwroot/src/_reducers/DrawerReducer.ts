import { Reducer } from "redux";
import {  } from "../_actions/Actions";
import { DrawerActionTypes, DrawerActions } from "../_actions/DrawerActions";
import { NavLink } from "react-router-dom";

export interface IDrawerNavItem {
  label: string;
  to: string;
  icon: string;
}

export interface IDrawerState {
  readonly drawerVisible: boolean;
  readonly navItems: IDrawerNavItem[];
}

const initialDrawerState: IDrawerState = {
    drawerVisible: true,
    navItems: [
      <IDrawerNavItem>{
        icon:'home',
        label:'home',
        to:'/'
      }
    ]
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
    case DrawerActionTypes.DRAWER_LOAD_NAVITEMS: {
      return {
        ...state, 
        navItems: action.navItems
      }
    }
    default:
      return state;
  }
};