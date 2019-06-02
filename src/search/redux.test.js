import {searchReducer, searchReducerInitialState} from "./reducers";
import {players} from "./mocks/playersMock";
import * as actionTypes from "./actionTypes";
import {addPlayersAction} from "./actions";

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
})