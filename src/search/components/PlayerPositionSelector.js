import React from "react";
import {positionLabelFromKey, positionsMap} from "../positions";
import Select from "react-select";
import {connect} from "react-redux";
import {removePositionAction, setPositionAction} from "../actions";

const PlayerPositionSelectorComponent = ({position, setPosition, removePosition}) =>
  <Select
    value={position && positionLabelFromKey(position)}
    options={positionsMap}
    onChange={(option) => option ? setPosition(option.value) : removePosition()}
    isClearable={true}
    placeholder={"Position"}
  />

export const PlayerPositionSelector = connect(
  state => ({position: state.position}),
  dispatch => ({
    setPosition: (value) => dispatch(setPositionAction(value)),
    removePosition: () => dispatch(removePositionAction())
  })
)(PlayerPositionSelectorComponent);