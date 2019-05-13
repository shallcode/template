import "@babel/polyfill";
import * as React from 'react';
import * as ReactDOM from 'react-dom';


/* Make the store available to all container 
components in the application without passing it explicitly */
import { Provider } from 'react-redux';

// Store type from Redux
import { Store } from 'redux';

// Import the store function and state
import configureStore, { IAppState } from './_helpers/store';
import { getAllColors } from './_actions/Actions';


import App from './App/App';
import './index.scss';

// Root component props
interface RootProps {
  store: Store<IAppState>;
}

/* 
Create a root component that receives the store via props
and wraps the App component with Provider, giving props to containers
*/
const Root: React.SFC<RootProps> = props => {
  return (
      <Provider store={props.store}>
        <App />
      </Provider>
  );
};

// Generate the store
const store = configureStore();
store.dispatch(getAllColors());

// Render the App
ReactDOM.render(<Root store={store} />, document.getElementById(
  'root'
) as HTMLElement);