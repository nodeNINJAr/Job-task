import { configureStore } from '@reduxjs/toolkit'
import modalReducer from "./features/modal/modalSlice"
import { authApi } from './features/auth/auth.api'
import { setupListeners } from '@reduxjs/toolkit/query'



export const store = configureStore({
  reducer: {
    modal:modalReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})

setupListeners(store.dispatch)


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch