import * as React from 'react';

import { connect } from 'react-redux';

import { IFileState } from '../_reducers/FilesReducer';
import { IAppState } from '../_helpers/store';
class SvgView extends React.Component<IFileState> {
    render() {
        const {file} = this.props;
        
        // const parser = new DOMParser();
        // const svg = parser.parseFromString(file, 'image/svg+xml');
        // console.log(svg);
        return (
            <div className="qc-svg-view" dangerouslySetInnerHTML={{__html: file}}>
            </div>
        );
    }
};

const mapStateToProps = (state: IAppState) => state.file;

export default connect(mapStateToProps)(SvgView);