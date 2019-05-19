import { ActionCreator, Dispatch, Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';


import { IColor, IColorState } from "../_reducers/ColorReducer";
import getRandomInt from '../_helpers/utilities';
import { IAppState } from '../_helpers/store';

export const AllColors: IColor[] = [
    <IColor>{name: "blue"},
    <IColor>{name: "red"},
    <IColor>{name: "green"},
]

export enum ColorActionTypes {
    CHANGE = 'CHANGE',
    GET = 'GET',
    GET_ALL = 'GET_ALL'
}

export interface IColorAction extends Action {
    color: IColor;
}

export interface IColorsAction extends Action {
    colors: IColor[];
}

export interface IColorChangeAction extends IColorAction {
    type: ColorActionTypes.CHANGE;
}

export interface IColorGetAllAction extends IColorsAction {
    type: ColorActionTypes.GET_ALL;
}

export type ColorActions = IColorChangeAction;
export type ColorsActions = IColorGetAllAction;

/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */

export const getAllColors: ActionCreator<ThunkAction<Promise<any>, IColorState, null, IColorGetAllAction>> = () => {
    return async (dispatch: Dispatch) => {
        // Get the colors
        let colors = AllColors; // Could be an API request, like GET
        // Fire off the dispatch to the store?
        dispatch(<IColorGetAllAction>{ type: ColorActionTypes.GET_ALL, colors: colors })
    };
};

export const changeColor: ActionCreator<ThunkAction<Promise<any>, IColorState, null, IColorChangeAction>> = () => {
    return async (dispatch: Dispatch) => {
        let index = getRandomInt(0, AllColors.length);
        let nextColor = AllColors[index]; // Could be an API request, like GET or POST
        // Fire off the dispatch to the store?
        dispatch(<IColorChangeAction>{ type: ColorActionTypes.CHANGE, color: nextColor })
    };
};

export type ColorThunkDispatch = ThunkDispatch<IColorState, null, IColorChangeAction>;
