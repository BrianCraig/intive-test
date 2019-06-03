import React from "react";
import {Form} from "react-bootstrap";
import {connect} from "react-redux";
import {setSearchNameAction} from "../actions";

const PlayerNameFieldComponent = ({name, setName}) =>
  <Form.Control placeholder="Player Name" value={name} onChange={(element) => setName(element.currentTarget.value)} />

export const PlayerNameField = connect(
    state => ({name: state.searchName}),
    dispatch => ({
      setName: (value) => dispatch(setSearchNameAction(value))
    })
  )(PlayerNameFieldComponent);