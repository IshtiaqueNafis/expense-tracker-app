import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {projectFireStore, timeStamp} from "../../firebase/config";


export const createExpenseAsync = createAsyncThunk(
    "Expense/createExpenseAsync",
    async ({name, amount}, thunkApi) => {
        try {
            const {uid} = thunkApi.getState().auth.user;
            const doc = {name, amount, uid, createdAt: timeStamp.fromDate(new Date())};
            await projectFireStore.collection('expense').add(doc);

        } catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);
export const getExpenseDataAsync = createAsyncThunk(
    'expense/getExpenseDataAsync',
    async ({expenses}, thunkApi) => {
        try {
            return expenses;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);
export const deleteExpenseAsync = createAsyncThunk(
    'expense/deleteExpenseAsync',
    async ({id}, thunkApi) => {
        try {
            await projectFireStore.collection('expense').doc(id).delete();
        } catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
)


export const expenseSlice = createSlice({
    name: 'Expense',
    initialState: {
        loading: false,
        error: null,
        expenseData: [],
    },

    extraReducers: {
        //region ***createExpenseAsync
        [createExpenseAsync.pending]: (state) => {
            state.loading = true;
            state.error = false;
        },
        [createExpenseAsync.fulfilled]: (state) => {
            state.loading = false;
            state.error = false;
        },
        [createExpenseAsync.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        //endregion

        //region  ****getExpenseDataAsync***
        [getExpenseDataAsync.pending]: (state) => {
            state.loading = true;
            state.error = false;
        },
        [getExpenseDataAsync.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.expenseData = [...payload];
            state.error = false;
        },
        [getExpenseDataAsync.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        //endregion
        [deleteExpenseAsync.pending]:(state)=>{
            state.loading = true;
            state.error = false;
        },
        [deleteExpenseAsync.fulfilled]:(state)=>{
            state.loading = false;
            state.error = false;
        },
        [deleteExpenseAsync.rejected]:(state,{payload})=>{
            state.loading = false;
            state.error = payload;
        }
    }

})

export const expenseReducer = expenseSlice.reducer;