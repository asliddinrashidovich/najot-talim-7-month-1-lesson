import { createSlice } from "@reduxjs/toolkit";

export const lampSlice = createSlice({
    name: 'lamp',
    initialState: {lamp: false},
    reducers: {
        TURN_ON: (slice) => {
            slice.lamp = true
        },
        TURN_OFF: (slice) => {
            slice.lamp = false
        },
        TOGGLE: (slice) => {
            slice.lamp = slice.lamp ? false : true
        }
    }
})

export const {TURN_ON, TURN_OFF, TOGGLE} = lampSlice.actions
export const lampReducer = lampSlice.reducer