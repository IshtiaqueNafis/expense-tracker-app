import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {projectAuth} from "../../firebase/config";


export const SignUpUserAsync = createAsyncThunk(
    'user/Signup',
    async ({email, password, displayName}, thunkApi) => {
        try {
            const res = await projectAuth.createUserWithEmailAndPassword(email, password);
            if (!res) {
                return thunkApi.rejectWithValue('email is taken')
            }
            await res.user.updateProfile(displayName);
        } catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
)


export const AuthSlice = createSlice({
    name: "Auth",
    initialState: {user: null, loading: false, error: null},
    reducers: {},
    extraReducers: {
        [SignUpUserAsync.pending]: (state) => {
            state.loading = true;
            state.error = false;
        },
        [SignUpUserAsync.fulfilled]: (state) => {
            state.loading = false;
            state.error = false;
        },
        [SignUpUserAsync.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})


export const authReducer = AuthSlice.reducer;