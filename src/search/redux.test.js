import {searchReducer, searchReducerInitialState} from "./reducers";
import {players} from "./mocks/playersMock.mock";
import {
  addPlayersAction,
  removeAgeAction,
  removePositionAction, setAgeAction,
  setPositionAction,
  setSearchNameAction
} from "./actions";

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
      const stateWithPosition = searchReducer(searchReducerInitialState, setPositionAction('ATTACKING_MIDFIELD'));
      expect(stateWithPosition)
        .toHaveProperty('position', 'ATTACKING_MIDFIELD')
      expect(searchReducer(stateWithPosition, removePositionAction()))
        .not.toHaveProperty('position')
    })
  })

  describe('age test', () => {
    it('should not have initial age set', () => {
      expect(searchReducerInitialState)
        .not.toHaveProperty('age')
    })

    it('should set & remove the age', () => {
      const stateWithAge = searchReducer(searchReducerInitialState, setAgeAction(28));
      expect(stateWithAge)
        .toHaveProperty('age', 28)
      expect(searchReducer(stateWithAge, removeAgeAction()))
        .not.toHaveProperty('age')
    })
  })

  describe('search name test', () => {
    it('should have \'\' as initial search', () => {
      expect(searchReducerInitialState)
        .toHaveProperty('searchName', '')
    })

    it('should set new name searches', () => {
      expect(searchReducer(searchReducerInitialState, setSearchNameAction('query')))
        .toHaveProperty('searchName', 'query')
    })
  })
})