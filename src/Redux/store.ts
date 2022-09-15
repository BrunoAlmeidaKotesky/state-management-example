import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice';
import navigationSlice from './slices/navigationSlice';


const rootReducer = combineReducers({ userSlice, navigationSlice });

export const store = configureStore({
  reducer: rootReducer
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
