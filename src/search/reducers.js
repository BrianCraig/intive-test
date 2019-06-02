import * as actionTypes from "./actionTypes";

export const searchReducerInitialState = {};

export const searchReducer = (state = searchReducerInitialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PLAYERS:
      return {...state, players: action.payload}
    default:
      return state
  }
}