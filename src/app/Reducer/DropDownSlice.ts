import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DropDownState = {
    activeMenu: number
}

const initialState: DropDownState = {
    activeMenu : 0
}

const DropDownSlice = createSlice({
    name: 'drop-down',
    initialState,
    reducers: {
        activateMenu(state, action: PayloadAction<number>) {
            state.activeMenu = action.payload;
        }
    }
})

export default DropDownSlice.reducer;
export const {activateMenu} = DropDownSlice.actions;