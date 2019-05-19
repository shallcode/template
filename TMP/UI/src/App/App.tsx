import * as React from 'react';

import { connect } from 'react-redux';
import AppShell from './AppShell';
import AuthService from "../_helpers/AuthService";
import { Switch } from 'react-md';
import { Route } from 'react-router';
interface AppProps {

}

class App extends React.Component<AppProps> {

  authService: AuthService = new AuthService();

  constructor(props: AppProps) {
    super(props);
  }

  renderHome() {
    let resultComponent = <AppShell authService={this.authService}/>;

    if (!this.authService.isAuthenticated()) {
      this.authService.login();
      resultComponent = <div><p>Redirecting to the authentication service...</p></div>
    }

    return resultComponent;
  }

  startSession(history: any) {
    this.authService.handleAuthentication(history);
    return <div><p>Starting session...</p></div>;
  }

  render() {
    return (
      <AppShell authService={this.authService}>
      </AppShell>
    );
  }

};

export default connect()(App);