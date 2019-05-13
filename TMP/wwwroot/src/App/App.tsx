import * as React from 'react';

import { connect } from 'react-redux';
import SelectedColor from '../_components/SelectedColor';
import ColorButton from '../_components/ColorButton';
import ColorList from '../_components/ColorList';
import SvgView from '../_components/SvgView';



const App: React.SFC<{}> = () => {
  return (
    <>
    <SvgView/>
    </>
  );
};

export default connect()(App);