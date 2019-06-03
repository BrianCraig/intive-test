import React from "react";
import {Form} from "react-bootstrap";
import {connect} from "react-redux";
import {removeAgeAction, setAgeAction} from "../actions";

const PlayerAgeFieldComponent = ({age, setAge = () => {}, removeAge = () => {}}) =>{
  const updateValue = (value) => {
    value!=='' ?
      setAge(Math.floor(Number(value))) : removeAge(value)
  }
  return (
    <React.Fragment>
      <Form.Control
        min={0}
        step={1}
        type={"number"}
        placeholder="Age"
        value={age || ''}
        onChange={(element) => updateValue(element.currentTarget.value)} />
    </React.Fragment>
  )
}


export const PlayerAgeField = connect(
  state => ({age: state.age}),
  dispatch => ({
    setAge: (value) => dispatch(setAgeAction(value)),
    removeAge: () => dispatch(removeAgeAction())
  })
)(PlayerAgeFieldComponent);