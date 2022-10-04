import { configureStore } from '@reduxjs/toolkit';
import dropDownReducer from './Reducer/DropDownSlice';
import AuthFormReducer from './Reducer/AuthFormSlice'
import { PostApi } from './Reducer/PostApi';

export const store = configureStore({
  reducer: {
    DropDownPage: dropDownReducer,
    AuthForm : AuthFormReducer,
    [PostApi.reducerPath]: PostApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(PostApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;