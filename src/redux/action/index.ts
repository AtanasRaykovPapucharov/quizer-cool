/**
 * Redux action
 * 
 */

import { ActionType } from './type'

export const action = (type: ActionType, payload?: any) => {
  return { type, payload }
}
