import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../_helpers/store';
import { FileThunkDispatch, changeFile } from '../_actions/Actions';
import { Icon, Label, Button } from 'semantic-ui-react';

import SVG from "react-inlinesvg";
import { IFileState } from '../_reducers/FilesReducer';

// Create the containers interface
// IProps is unique to this container components prop
interface FileImportButtonProps {
    handleClick: (e: React.ChangeEvent<HTMLInputElement>) => Promise<string>;
}

type AllProps = FileImportButtonProps & IFileState;

class FileImportButtonIcon extends React.Component<AllProps> {

    constructor(props: AllProps) {
        super(props);
    }

    public render() {
        const { handleClick, file } = this.props;
        return (
            <>
                <Icon as="label" htmlFor="file" name="upload">

                </Icon>
                <input type="file" id="file" style={{ display: "hidden" }} onChange={handleClick} />
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
)(FileImportButtonIcon);

