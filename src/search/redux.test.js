import {searchReducer, searchReducerInitialState} from "./reducers";
import {players} from "./mocks/playersMock";
import * as actionTypes from "./actionTypes";
import {addPlayersAction, removePositionAction, setPositionAction} from "./actions";
import {positions} from "./positions";

describe('searchReducer tests', () => {

  it('should return the initial state', () => {
    expect(searchReducer(undefined, {})).toEqual(searchReducerInitialState)
  })

  describe('players test', () => {
    it('should add players', () => {
      expect(searchReducer(searchReducerInitialState, addPlayersAction(players)))
        .toEqual({...searchReducerInitialState, players})
    })
  })

  describe('position test', () => {
    it('should not have initial position set', () => {
      expect(searchReducerInitialState)
        .not.toHaveProperty('position')
    })

    it('should set & remove the position', () => {
      const stateWithPosition = searchReducer(searchReducerInitialState, setPositionAction(positions.ATTACKING_MIDFIELD));
      expect(stateWithPosition)
        .toHaveProperty('position', 'ATTACKING_MIDFIELD')
      expect(searchReducer(stateWithPosition, removePositionAction()))
        .not.toHaveProperty('position')
    })
  })
})