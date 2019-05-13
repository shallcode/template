import * as React from 'react';
import { connect } from 'react-redux';
import { IColor, IColorState } from '../_reducers/ColorReducer';
import { IAppState } from '../_helpers/store';
import { Dispatch } from 'redux';
import { changeColor, ColorThunkDispatch } from '../_actions/Actions';
import { Icon, Label, Button } from 'semantic-ui-react';

import { Helper } from "dxf";
import fs from "fs";
import { join } from 'path';

// Create the containers interface
// IProps is unique to this container components prop
// interface FileImportButtonProps {
//     handleClick: () => Promise<any>;
// }

// type AllProps = FileImportButtonProps;

class FileImportButtonIcon extends React.Component {

    handleClick(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.files);
        let fileReader = new FileReader();
        fileReader.onloadend = (e) => {
            const content = fileReader.result;
            let helper = new Helper(content);
            console.log(helper.parsed);
            const svg = helper.toSVG();
            console.log(svg);
        }
        if (e.target.files) {
            fileReader.readAsText(e.target.files[0]);
        }
    }


    public render() {
        let fileInputRef = React.createRef();
        return (
            <>
                <Icon as="label" htmlFor="file" name="upload">

                </Icon>
                <input type="file" id="file" style={{ display: "hidden" }} onChange={this.handleClick} />
            </>
        );
    }
}

const mapStateToProps = (state: IAppState) => state.color;

const mapDispatchToProps = (dispatch: ColorThunkDispatch) => ({
    handleClick: () => dispatch(changeColor())
});

export default connect(
    // mapStateToProps,
    // mapDispatchToProps
)(FileImportButtonIcon);

