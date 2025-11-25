import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";


export const loginUser = createAsyncThunk(
    "auth/loginUser",
    // async (credentials, { rejectWithValue }) => {
    //     try {
    //         const res = await axios.post("/api/login", credentials);
    //         return res.data; // returned value goes to fulfilled case
    //     } catch (err) {
    //         return rejectWithValue(err.response.data);
    //     }
    // }
);


const authSlice = createSlice({
    name: "auth",
    initialState: {
        authenticated: false,
        user: null,
        token: null,
        token_no: null,
        value: 0,
        loading: false,
        errors: null,
    },
    reducers: {


        logout(state) {
            state.user = false;
            state.token = null;
            state.authenticated = null;
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
                console.log(action.payload, 'this is the repsonse')
                // state.loading = false;
                // state.authenticated = true;
                // state.user = action.payload.user;
                // state.token = action.payload.token;
                // state.token_no = action.payload.token_no;
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
