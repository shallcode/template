import { colorConstants } from '../_constants';
 

// Could have different things happen depending on color change type
// Return objects from reducers needs type checking...
export function changeColor(state = {}, action) {
  switch (action.type) {
    case colorConstants.BLUE:
      return {
        color: action.color
      };
    case colorConstants.RED:
      return {
        color: action.color
      };
    case colorConstants.GREEN:
      return {
        color: action.color
      };
    default:
      return state
  }
}