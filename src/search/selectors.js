import { createSelector } from 'reselect'
import {playerAge} from "./helpers";
import {positions} from "./positions";

const playersSelector = state => state.players
const ageSelector = state => state.age
const searchNameSelector = state => state.searchName
const positionSelector = state => state.position



export const filteredPlayersSelector = createSelector(
  playersSelector,
  searchNameSelector,
  ageSelector,
  positionSelector,
  (players, name, age, position)=> players
    .filter((player) => player.name.toLowerCase().includes(name.trim().toLowerCase()))
    .filter((player) => (age === undefined) || playerAge(player)===age)
    .filter((player) => (position === undefined) || positions[position] === player.position)

)
