import * as React from 'react';
import { connect } from 'react-redux';
import { IColor, IColorsState } from '../_reducers/ColorReducer';
import { IAppState } from '../_helpers/store';

type AllProps = IColorsState; // Could add private state to this component

class ColorsList extends React.Component<AllProps> {

  public render() {
    const { colors } = this.props;
    return (
      <div className="name-container">
        {colors &&
          colors.map(color => {
            return (
              <span key={color.name} className="name">
                {color.name}
              </span>
            );
          })}
      </div>
    );
  }
}

// Grab the characters from the store and make them available on props
const mapStateToProps = (state: IAppState) => state.colors;

export default connect(mapStateToProps)(ColorsList);