import * as actionTypes from "./actionTypes";

export const searchReducerInitialState = {
  searchName: '',
  players: []
};

export const searchReducer = (state = searchReducerInitialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PLAYERS:
      return {...state, players: action.payload}
    case actionTypes.SET_POSITION:
      return {...state, position: action.payload}
    case actionTypes.REMOVE_POSITION:
      const {position, ...stateWithoutPosition} = state;
      return stateWithoutPosition
    case actionTypes.SET_AGE:
      return {...state, age: action.payload}
    case actionTypes.REMOVE_AGE:
      const {age, ...stateWithoutAge} = state;
      return stateWithoutAge
    case actionTypes.SET_SEARCH_NAME:
      return {...state, searchName: action.payload}
    default:
      return state
  }
}