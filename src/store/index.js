import { configureStore } from "@reduxjs/toolkit";
import { nameChanger } from "../reducers/name";
import { lampReducer } from "../reducers/lamp";

export default configureStore({
    reducer: {
        'name': nameChanger,
        'lamp': lampReducer
    }    
})