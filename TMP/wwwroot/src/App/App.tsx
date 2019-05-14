import * as React from 'react';

import { connect } from 'react-redux';
import { Toolbar, Button } from 'react-md';
import AppReactMd from './AppReactMd';



const App: React.SFC<{}> = () => {
  return (
    <AppReactMd/>
  );
};

export default connect()(App);