import { configureStore } from "@reduxjs/toolkit";
import { nameChanger } from "../reducers/name";
import { lampReducer } from "../reducers/lamp";
import { counterReducer } from "../reducers/counter";

export default configureStore({
    reducer: {
        'name': nameChanger,
        'lamp': lampReducer,
        'counter': counterReducer
    }    
})