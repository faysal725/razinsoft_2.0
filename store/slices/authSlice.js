import crud from "@/lib/axios";
import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";


export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await crud.post("/login", credentials);
            return res.data; // returned value goes to fulfilled case
        } catch (err) {
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
    },

    extraReducers: (builder) => {
        builder
            // pending
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.errors = null;
            })
            // success
            .addCase(loginUser.fulfilled, (state, action) => {
                // console.log(action.payload.data.user, 'this is the repsonse')
                // console.log(action.payload.data.access_token.token, 'this is the repsonse')
                state.user = action.payload.data.user;
                state.token = action.payload.data.access_token.token;
                state.token_no = action.payload.data.token_no;
                state.loading = false;
                state.authenticated = true;
            })
            // errors
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload || "Login failed";
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
