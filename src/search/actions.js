import * as actionTypes from "./actionTypes";

export const addPlayersAction = (players) => ({
  type: actionTypes.ADD_PLAYERS,
  payload: players
})