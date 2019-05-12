import * as React from 'react';
import ColorsList from '../_components/ColorList';
import ColorButton from '../_components/ColorButton';
import { IColorState } from '../_reducers/ColorReducer';
import { IAppState } from '../_helpers/store';
import { connect } from 'react-redux';
import SelectedColor from '../_components/SelectedColor';


const App: React.SFC<{}> = () => {
  return (
    <>
      <SelectedColor/>
      <ColorsList />
      <ColorButton />
    </>
  );
};

export default connect()(App);