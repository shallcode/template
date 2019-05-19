import { Reducer } from "redux";
import { ColorActions, AllColors, ColorActionTypes, ColorsActions } from "../_actions/Actions";

export interface IColor {
  name: string;
}

export interface IColorState {
  readonly color: IColor;
}

export interface IColorsState {
  readonly colors: IColor[];
}

const initialColorState: IColorState = {
  color: AllColors[0],
}

const initialColorsState: IColorsState = {
  colors: AllColors
}

// Reducer: (previousState, action) => newState

export const colorReducer: Reducer<IColorState, ColorActions> = (
  state = initialColorState,
  action
) => {
  switch (action.type) {
    case ColorActionTypes.CHANGE: {
      return {
        ...state,
        color: action.color,
      };
    }
    default:
      return state;
  }
};

export const colorsReducer: Reducer<IColorsState, ColorsActions> = (
  state = initialColorsState,
  action
) => {
  switch (action.type) {
    case ColorActionTypes.GET_ALL: {
      return {
        ...state,
        color: action.colors,
      };
    }
    default:
      return state;
  }
};
