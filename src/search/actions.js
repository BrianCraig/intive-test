import * as actionTypes from "./actionTypes";

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