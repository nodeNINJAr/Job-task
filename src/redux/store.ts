import { configureStore } from '@reduxjs/toolkit'
import modalReducer from "./features/modal/modalSlice"
import { setupListeners } from '@reduxjs/toolkit/query'
import { baseApi } from './baseApi'




export const store = configureStore({
  reducer: {
    modal: modalReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseApi.middleware)
});

setupListeners(store.dispatch)


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch