import {searchReducer, searchReducerInitialState} from "./reducers";
import {players} from "./mocks/playersMock";
import * as actionTypes from "./actionTypes";
describe('redux tests', () => {

  it('should return the initial state', () => {
    expect(searchReducer(undefined, {})).toEqual(searchReducerInitialState)
  })

  describe('players must be added to store', () => {
    it('should add all players to ', () => {
      expect(searchReducer(searchReducerInitialState, {
        type: actionTypes.ADD_PLAYERS,
        payload: players
      })).toEqual({...searchReducerInitialState, players })
    })
  })
})