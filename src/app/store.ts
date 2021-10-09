import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import AuthReducer from '../features/auth/store'
import TaskReducer from '../features/task/store'

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    task: TaskReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
