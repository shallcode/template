import { ActionCreator, Dispatch, Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';


import { IDrawerState, IDrawerNavItem } from "../_reducers/DrawerReducer";

export enum DrawerActionTypes {
    DRAWER_OPEN = 'DRAWER_OPEN',
    DRAWER_CLOSE = 'DRAWER_CLOSE',
    DRAWER_TOGGLE = 'DRAWER_TOGGLE',
    DRAWER_LOAD_NAVITEMS = 'DRAWER_LOAD_NAVITEMS'
}
// Drawer Action Interfaces

export interface IDrawerOpenAction extends Action {
    type: DrawerActionTypes.DRAWER_OPEN;
}

export interface IDrawerCloseAction extends Action {
    type: DrawerActionTypes.DRAWER_CLOSE;
}

export interface IDrawerToggleAction extends Action {
    type: DrawerActionTypes.DRAWER_TOGGLE;
}

// Drawer Nav Item Action Interfaces

export interface IDrawerLoadNavItemsAction extends Action {
    type: DrawerActionTypes.DRAWER_LOAD_NAVITEMS;
    navItems: IDrawerNavItem[];
}

// Drawer Actions
export type DrawerActions = IDrawerOpenAction | IDrawerCloseAction | IDrawerToggleAction | IDrawerLoadNavItemsAction;

/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */

export const openDrawer: ActionCreator<ThunkAction<Promise<any>, IDrawerState, null, IDrawerOpenAction>> = () => {
    return async (dispatch: Dispatch) => {
        dispatch(<Action>{ type: DrawerActionTypes.DRAWER_OPEN, drawerVisible: true })
    };
};

export const closeDrawer: ActionCreator<ThunkAction<Promise<any>, IDrawerState, null, IDrawerCloseAction>> = () => {
    return async (dispatch: Dispatch) => {
        dispatch(<Action>{ type: DrawerActionTypes.DRAWER_CLOSE, drawerVisible: false })
    };
};

export const toggleDrawer: ActionCreator<ThunkAction<Promise<any>, IDrawerState, null, IDrawerToggleAction>> = () => {
    return async (dispatch: Dispatch) => {
        dispatch(<Action>{ type: DrawerActionTypes.DRAWER_TOGGLE })
    };
};

export const loadDrawerNavItems: ActionCreator<ThunkAction<Promise<any>, IDrawerState, null, IDrawerLoadNavItemsAction>> = () => {
    return async (dispatch: Dispatch) => {
        // Where we ACTUALLY get the nav items from the API or something. 
        let navItems: IDrawerNavItem[] = [
            <IDrawerNavItem>{
                icon: 'home',
                label:'Home',
                to:'home'
            }
        ] 
        dispatch(<Action>{ type: DrawerActionTypes.DRAWER_LOAD_NAVITEMS, navItems: navItems })
    };
}

export type DrawerThunkDispatch = ThunkDispatch<IDrawerState, null, Action>;
