import {configureStore} from '@reduxjs/toolkit'
import {authReducer} from "./reducers/AuthSliceReducer";
import {logger} from "redux-logger/src";


export const store = configureStore({
    reducer: {auth: authReducer},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
})