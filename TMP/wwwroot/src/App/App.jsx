import React from 'react';
import { ChangeColorButton } from '../_components';
import { connect } from 'react-redux';

export default class App extends Component {
    render() {
        console.log("Test");
        return (
            <div>
                <ChangeColorButton />
            </div>
        );
    }
}