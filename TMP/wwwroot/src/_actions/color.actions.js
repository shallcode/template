// Using color constants to create actions with constant payloads

import { colorConstants } from '../_constants';

export const colorActions = {
    blue,
    red,
    green
};

function blue() {
    return { type: colorConstants.BLUE, color: 'blue' };
}

function red() {
    return { type: colorConstants.RED, color: 'red' };
}

function green() {
    return { type: colorConstants.GREEN, color: 'green'  };
}