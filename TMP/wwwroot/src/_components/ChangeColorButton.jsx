import React from 'react'
import { connect } from 'react-redux'
import { colorActions } from '../_actions'

let ChangeColorButton = ({ dispatch }) => {
  return (
    <div>
      <button onClick={
          e => {
              dispatch(colorActions.blue());
          }
      }>
      </button>
    </div>
  )
}

ChangeColorButton = connect()(ChangeColorButton)

export default ChangeColorButton;