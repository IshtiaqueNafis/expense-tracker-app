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

export const SignInUserAsync = createAsyncThunk(
    'user/login',
    async ({email, password}, thunkApi) => {
        try {
            const res = await projectAuth.signInWithEmailAndPassword(email, password)
            if (!res) {
                return thunkApi.rejectWithValue('esomething went wrong')
            }
            return res.user;

        } catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
)

export const SignOutUserAsync = createAsyncThunk(
    'user/signOut',
    async (_, thunkApi) => {
        try {
            await projectAuth.signOut();

        } catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
)


export const AuthSlice = createSlice({
    name: "Auth",
    initialState: {user: null, loading: false, error: null, authIsReady: false},
    reducers: {
        checkAuthIsReady: (state, {payload}) => {
            state.authIsReady = true;
            state.user = {email: payload.email, uid: payload.uid};

        }

    },
    extraReducers: {

        //region *** SignUpUserAsync() ====>signs up user  ***
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
        },
        //endregion

        //region ***SignInUserAsync() ====> signs in user***
        [SignInUserAsync.pending]: (state) => {
            state.loading = true;
            state.error = false;
        },
        [SignInUserAsync.fulfilled]: (state, {payload}) => {
            state.loading = false;
            console.log({payload});
            state.user = {email: payload.email, uid: payload.uid};
            state.error = false;
        },
        [SignInUserAsync.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        //endregion

        //region ***SignOutUserAsync*** ===>Signs out User
        [SignOutUserAsync.pending]: (state) => {
            state.loading = true;
            state.error = false;
        },
        [SignOutUserAsync.fulfilled]: (state) => {
            state.loading = false;
            state.user = null
            state.error = false;
        },
        [SignOutUserAsync.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        }
        //endregion


    }

})
export const {checkAuthIsReady} = AuthSlice.actions;

export const authReducer = AuthSlice.reducer;