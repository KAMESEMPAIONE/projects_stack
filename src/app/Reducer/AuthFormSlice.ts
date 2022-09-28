import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthFormState = {
    username: string,
    email: string,
    password: string,
    repeatPass: string
    notification: boolean,
    termsConsent: boolean,
    isRegistered: boolean
}

type inputPayload = {
    name: string,
    value: string,
}

type buttonPayload = {
    name: string,
    checked: boolean
}

const initialState: AuthFormState = {
    username: '',
    email: '',
    password: '',
    repeatPass: '',
    notification: false,
    termsConsent: false,
    // @ts-expect-error
    isRegistered: JSON.parse(localStorage.getItem('isRegistered')) || false
}

const AuthFormSlice = createSlice({
    name: 'AuthForm',
    initialState,
    
    reducers: {
        handleInputChange (state, action: PayloadAction<inputPayload>) {
            switch (action.payload.name) {
                case 'username':
                    state.username = action.payload.value;
                    break;
                case 'email':
                    state.email = action.payload.value;
                    break;
                case 'password':
                    state.password = action.payload.value;
                    break;
                case 'repeatPass':
                    state.repeatPass = action.payload.value;
                    break;
            }
        },

        handleButtonChange (state, action: PayloadAction<buttonPayload>) {
            switch (action.payload.name) {
                case 'notification' : 
                    state.notification = action.payload.checked;
                    break;
                case 'termsConsent' :
                    state.termsConsent = action.payload.checked;
                    break;
            }
        },

        setRegistered (state, action: PayloadAction<boolean>) {
            state.isRegistered = action.payload;
        }
        
    }     
})

export default AuthFormSlice.reducer;
export const {handleInputChange, handleButtonChange, setRegistered} = AuthFormSlice.actions;
