import {configureStore} from '@reduxjs/toolkit'
import {authReducer} from "./reducers/AuthSliceReducer";
import {logger} from "redux-logger/src";
import {expenseReducer} from "./reducers/ExpenseSliceReducer";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        expense: expenseReducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false}).concat(logger),
})

