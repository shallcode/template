import { ActionCreator, Dispatch, Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';


import { IDrawerState } from "../_reducers/DrawerReducer";

export enum DrawerActionTypes {
    DRAWER_OPEN = 'DRAWER_OPEN',
    DRAWER_CLOSE = 'DRAWER_CLOSE',
    DRAWER_TOGGLE = 'DRAWER_TOGGLE'
}

export interface IDrawerDrawerOpenAction extends Action {
    type: DrawerActionTypes.DRAWER_OPEN;
}

export interface IDrawerDrawerCloseAction extends Action {
    type: DrawerActionTypes.DRAWER_CLOSE;
}

export interface IDrawerDrawerToggleAction extends Action {
    type: DrawerActionTypes.DRAWER_TOGGLE;
}

export type DrawerActions = IDrawerDrawerOpenAction | IDrawerDrawerCloseAction | IDrawerDrawerToggleAction;

/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */

export const openDrawer: ActionCreator<ThunkAction<Promise<any>, IDrawerState, null, IDrawerDrawerOpenAction>> = () => {
    return async (dispatch: Dispatch) => {
        dispatch(<Action>{ type: DrawerActionTypes.DRAWER_OPEN, drawerVisible: true })
    };
};

export const closeDrawer: ActionCreator<ThunkAction<Promise<any>, IDrawerState, null, IDrawerDrawerCloseAction>> = () => {
    return async (dispatch: Dispatch) => {
        dispatch(<Action>{ type: DrawerActionTypes.DRAWER_CLOSE, drawerVisible: false })
    };
};

export const toggleDrawer: ActionCreator<ThunkAction<Promise<any>, IDrawerState, null, Action>> = () => {
    return async (dispatch: Dispatch) => {
        dispatch(<Action>{ type: DrawerActionTypes.DRAWER_TOGGLE })
    };
};
export type DrawerThunkDispatch = ThunkDispatch<IDrawerState, null, Action>;
