import * as React from 'react';
import { connect } from 'react-redux';
import { IColor, IColorState } from '../_reducers/ColorReducer';
import { IAppState } from '../_helpers/store';
import { Dispatch } from 'redux';
import { changeColor, ColorThunkDispatch } from '../_actions/Actions';

// Create the containers interface
// IProps is unique to this container components prop

type AllProps = IColorState;

class SelectedColor extends React.Component<AllProps> {
    
    constructor(props: AllProps) {
        super(props);
    }

    public render() {
        const { color } = this.props;
        return (
            <h1>{color.name}</h1>
        );
    }
}

const mapStateToProps = (state: IAppState) => state.color;

export default connect(
    mapStateToProps
)(SelectedColor);