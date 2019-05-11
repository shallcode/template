import { colorConstants } from '../_constants';
 

const initialState = {
  color: colorConstants.BLUE
}

// Reducer: (previousState, action) => newState

export function color(state = initialState, action) {
  return state;
}



// Return objects from reducers needs type checking...
// export function changeColor(state = {}, action) {
//   switch (action.type) {
//     case colorConstants.BLUE:
//       return {
//         color: action.color
//       };
//     case colorConstants.RED:
//       return {
//         color: action.color
//       };
//     case colorConstants.GREEN:
//       return {
//         color: action.color
//       };
//     default:
//       return state
//   }
// }