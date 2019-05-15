import * as React from 'react';

import { connect } from 'react-redux';
import AppShell from './AppShell';



const App: React.SFC<{}> = () => {
  return (
    <AppShell/>
  );
};

export default connect()(App);