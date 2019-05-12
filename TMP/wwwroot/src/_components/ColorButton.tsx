import * as React from 'react';
import { connect } from 'react-redux';
import { IColor, IColorState } from '../_reducers/ColorReducer';
import { IAppState } from '../_helpers/store';
import { Dispatch } from 'redux';
import { changeColor, ColorThunkDispatch } from '../_actions/Actions';

// Create the containers interface
// IProps is unique to this container components prop
interface ColorButtonProps {
    handleClick: () => Promise<any>;
}

type AllProps = ColorButtonProps & IColorState;

class ColorButton extends React.Component<AllProps> {
    
    constructor(props: AllProps) {
        super(props);
    }

    public render() {
        const { handleClick, color } = this.props;
        return (
            <button onClick={handleClick}>{color.name}</button>
        );
    }
}

const mapStateToProps = (state: IAppState) => state.color;

const mapDispatchToProps = (dispatch: ColorThunkDispatch) => ({
    handleClick: () => dispatch(changeColor())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ColorButton);

