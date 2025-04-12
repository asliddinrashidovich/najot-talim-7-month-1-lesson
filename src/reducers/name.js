import { createSlice } from "@reduxjs/toolkit";


export const nameSlice = createSlice({
    name: 'name',
    initialState: {nameOf: ''},
    reducers: {
        SET_NAME: (state, action) => {
            state.nameOf = action.payload
        }
    }
})

export const {SET_NAME} = nameSlice.actions;
export const nameChanger = nameSlice.reducer