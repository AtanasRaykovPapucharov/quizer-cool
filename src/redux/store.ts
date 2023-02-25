/**
 * Redux store
 * 
 */

import { configureStore } from '@reduxjs/toolkit'

import reducer from './reducer'

const store: any = configureStore({ reducer })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {reducer: appReducer}
export type AppDispatch = typeof store.dispatch

export default store