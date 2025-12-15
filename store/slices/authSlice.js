import crud from "@/lib/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ToastContainer, toast } from 'react-toastify';
import { setAuthCookies, removeAuthCookies } from "@/lib/utils/cookieSync";


export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await crud.post("/login", credentials);
            toast.success("Logged in successfully!");
            return res.data; // returned value goes to fulfilled case
        } catch (err) {
            toast.error(err.response?.data?.message || "Login failed");
            return rejectWithValue(err.response.data);
        }
    }
);


export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await crud.post("/register", credentials);
            toast.success("Sign in successfully!");
            return res.data; // returned value goes to fulfilled case
        } catch (err) {
            toast.error(err.response?.data?.message || "Sign in failed");
            return rejectWithValue(err.response.data);
        }
    }
);


const authSlice = createSlice({
    name: "auth",
    initialState: {
        authenticated: false,
        user: null,
        token: null,
        token_no: null,
        loading: false,
        errors: null,
    },
    reducers: {


        logout(state) {
            state.authenticated = false;
            state.user = null;
            state.token = null;
            state.token_no = null;


            // The check `typeof window !== 'undefined'` ensures this code runs 
            // only in the browser, preventing errors during server-side rendering.
            if (typeof window !== 'undefined') {
                removeAuthCookies();
            }
        },
        clearErrors(state) {
            state.errors = null;
        },
    },

    extraReducers: (builder) => {
        builder
            // login pending
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.errors = null;
            })
            // login success
            .addCase(loginUser.fulfilled, (state, action) => {
                const { user, access_token, token_no } = action.payload.data;

                // 1. Update Redux State
                state.user = user;
                state.token = access_token.token;
                state.token_no = token_no;
                state.loading = false;
                state.authenticated = true;

                // 🔥 LOGIN SIDE EFFECT: Set the cookies for Middleware access
                if (typeof window !== 'undefined') {
                    setAuthCookies(access_token.token, token_no);
                }
            })
            // login errors
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload || "Login failed";
            })


            // sign in pending
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.errors = null;
            })
            // sign in success
            .addCase(registerUser.fulfilled, (state, action) => {
                const { user, access_token, token_no } = action.payload.data;

                // 1. Update Redux State
                state.user = user;
                state.token = access_token.token;
                state.token_no = token_no;
                state.loading = false;
                state.authenticated = true;

                // 🔥 REGISTER SIDE EFFECT: Set the cookies for Middleware access
                if (typeof window !== 'undefined') {
                    setAuthCookies(access_token.token, token_no);
                }
            })
            // sign in errors
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload || "Sign in failed";
            });
    },
});

export const { logout, clearErrors } = authSlice.actions;
export default authSlice.reducer;
