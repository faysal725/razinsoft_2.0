import crud from "@/lib/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ToastContainer, toast } from 'react-toastify';


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
            state.token_no = null
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
                state.user = action.payload.data.user;
                state.token = action.payload.data.access_token.token;
                state.token_no = action.payload.data.token_no;
                state.loading = false;
                state.authenticated = true;
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
                state.user = action.payload.data.user;
                state.token = action.payload.data.access_token.token;
                state.token_no = action.payload.data.token_no;
                state.loading = false;
                state.authenticated = true;
            })
            // sign in errors
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload || "Sign in failed";
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
