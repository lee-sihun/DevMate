import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import groupCreateReducer from './slices/groupCreateSlice';
import { api } from './hooks';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    counter: counterReducer,
    groupCreater: groupCreateReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState,comments: CommentsState,users: UsersState,}
export type AppDispatch = typeof store.dispatch;
