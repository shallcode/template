import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../_helpers/store';
import { FileThunkDispatch, changeFile } from '../_actions/Actions';

import SVG from "react-inlinesvg";
import { IFileState } from '../_reducers/FilesReducer';
import { Button, FontIcon } from 'react-md';




// Create the containers interface
// IProps is unique to this container components prop
interface FileImportButtonProps {
    handleClick: (e: React.ChangeEvent<HTMLInputElement>) => Promise<string>;
}

type AllProps = FileImportButtonProps & IFileState;

class FileImportButton extends React.Component<AllProps> {

    inputOpenFileRef : React.RefObject<HTMLInputElement>;

    constructor(props: AllProps) {
        super(props);
        this.inputOpenFileRef = React.createRef();
    }

    showOpenFileDlg = () => {
        console.log(this.inputOpenFileRef);
        if(this.inputOpenFileRef.current) this.inputOpenFileRef.current.click();
    }
    public render() {
        const { handleClick, file } = this.props;
        
        return (
            <>
                <Button icon primary onClick={this.showOpenFileDlg}>cloud_upload
                </Button>
                <input type="file" 
                id="file" 
                ref={this.inputOpenFileRef} 
                onChange={handleClick}
                style={{ display: "none" }} />
            </>
        );
    }
}

const mapStateToProps = (state: IAppState) => state.file;

const mapDispatchToProps = (dispatch: FileThunkDispatch) => ({
    handleClick: (e: React.ChangeEvent<HTMLInputElement>) => dispatch(changeFile(e))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FileImportButton);

