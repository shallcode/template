import { ActionCreator, Dispatch, Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';


import { IFileState } from "../_reducers/FilesReducer";
import { IAppState } from '../_helpers/store';
import { Helper } from 'dxf';

export enum FileActionTypes {
    IMPORT = 'IMPORT',
    CHANGE = 'CHANGE'
}

export interface IFileAction extends Action {
    file: string;
}

export interface IFileChangeAction extends IFileAction {
    type: FileActionTypes.CHANGE;
}

export interface IFileImportAction extends IFileAction {
    type: FileActionTypes.IMPORT;
}

export type FileActions = IFileChangeAction | IFileImportAction;

/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */

export const importFile: ActionCreator<ThunkAction<Promise<any>, IFileState, null, IFileImportAction>> = () => {
    return async (dispatch: Dispatch) => {
        // Get the colors
        
        // Fire off the dispatch to the store?
        dispatch(<IFileImportAction>{ type: FileActionTypes.IMPORT, file: "" })
    };
};

export const changeFile: ActionCreator<ThunkAction<Promise<any>, IFileState, null, IFileChangeAction>> = (e: React.ChangeEvent<HTMLInputElement>) => {
    return async (dispatch: Dispatch) => {
        console.log(e.target.files);
        let fileReader = new FileReader();
        fileReader.onloadend = (e) => {
            
            const content = fileReader.result;
            let helper = new Helper(content);
            const svg = helper.toSVG();

            
            dispatch(<IFileChangeAction>{ type: FileActionTypes.CHANGE, file: svg })
            // let model = makerjs.importer.fromSVGPathData(svg);
        }
        if (e.target.files) {
            fileReader.readAsText(e.target.files[0]);
        }
        // Fire off the dispatch to the store?
        
    };
};

export type FileThunkDispatch = ThunkDispatch<IFileState, null, IFileImportAction>;
