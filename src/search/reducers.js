import * as actionTypes from "./actionTypes";

export const searchReducerInitialState = {};

export const searchReducer = (state = searchReducerInitialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PLAYERS:
      return {...state, players: action.payload}
    case actionTypes.SET_POSITION:
      return {...state, position: action.payload}
    case actionTypes.REMOVE_POSITION:
      const {position, ...stateWithoutPosition} = state;
      return stateWithoutPosition
    default:
      return state
  }
}