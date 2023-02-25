/**
 * Redux reducer
 * 
 */

import { ActionType } from '../action/type'
import { INITIAL_STATE } from '../initialState'

const reducer = (state = INITIAL_STATE, action: { type: ActionType, payload: any}) => {
  const newState = { ...state }

  switch (action.type) {
    case ActionType.SET_ROUTE:
      newState.route = action.payload
      return newState

    case ActionType.IS_MENU_CLOSED:
      newState.isMenuClosed = action.payload || !newState.isMenuClosed
      return newState

    case ActionType.SET_SUBJECT:
      newState.subject = action.payload || 'all'
      return newState

    case ActionType.SET_GRADE:
      newState.grade = action.payload || 7
      return newState

    case ActionType.SET_TIME:
      newState.time = action.payload || 60
      return newState

    case ActionType.START_TEST:
      newState.isTestStarted = true
      return newState
      
    case ActionType.FINISH_TEST:
      newState.isTestStarted = false
      return newState

    default: return state
  }
}

export default reducer
