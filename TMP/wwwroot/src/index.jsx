import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// import App  from "./App/App";
import { store } from './_helpers';

import { colorActions } from "./_actions";

// const unsubscribe = store.subscribe(() => console.log(store.getState()));

// store.dispatch(colorActions.blue());
// store.dispatch(colorActions.red());
// store.dispatch(colorActions.green());

// unsubscribe();

// Guessing jsx requires functions, 

function ColorChangeButton() {
    return (
        <button>Click Me</button>
    )
}

function App() {
    return (
        <ColorChangeButton/>
    )
}

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);