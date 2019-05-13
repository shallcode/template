// import { Reducer } from "redux";
// import {  } from "../_actions/Actions";

// export interface IFileList {
//   fileList: FileList | null
// }

// export interface IFileState {
//   readonly fileList: IFileList;
// }

// const initialFileState: IFileState = {
//     fileList: null
// }

// // Reducer: (previousState, action) => newState

// export const fileListReducer: Reducer<IFileState, FileActions> = (
//   state = initialFileState,
//   action
// ) => {
//   switch (action.type) {
//     case FileActionTypes.CHANGE: {
//       return {
//         ...state,
//         fileList: action.fileList,
//       };
//     }
//     default:
//       return state;
//   }
// };