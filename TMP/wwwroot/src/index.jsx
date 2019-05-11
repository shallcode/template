import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './_helpers';
import { colorActions } from "./_actions";

import { connect } from 'react-redux';

function ColorChangeButton() {
    return (
        <button>Click Me</button>
    )
}

function App() {
    return (
        <ColorChangeButton />
    )
}

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);