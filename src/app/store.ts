import { configureStore } from '@reduxjs/toolkit';
import dropDownReducer from './Reducer/DropDownSlice';
import AuthFormReducer from './Reducer/AuthFormSlice'

export const store = configureStore({
  reducer: {
    DropDownPage: dropDownReducer,
    AuthForm : AuthFormReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;