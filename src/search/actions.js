import * as actionTypes from "./actionTypes";

export const fetchPlayersAction = () => dispatch =>
  fetch("https://football-players-b31f2.firebaseio.com/players.json?print=pretty")
    .then(response => response.json())
    .then(response => dispatch(addPlayersAction(response)))

export const addPlayersAction = (players) => ({
  type: actionTypes.ADD_PLAYERS,
  payload: players
})

export const setPositionAction = (position) => ({
  type: actionTypes.SET_POSITION,
  payload: position
})

export const removePositionAction = () => ({
  type: actionTypes.REMOVE_POSITION
})

export const setAgeAction = (position) => ({
  type: actionTypes.SET_AGE,
  payload: position
})

export const removeAgeAction = () => ({
  type: actionTypes.REMOVE_AGE
})

export const setSearchNameAction = (searchName) => ({
  type: actionTypes.SET_SEARCH_NAME,
  payload: searchName
})