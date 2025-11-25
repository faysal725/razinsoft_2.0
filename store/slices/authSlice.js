import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        authenticated: false,
        user: null,
        token: null,
        token_no: null,
        value: 0,
        loading: false,
        error: null,
    },
    reducers: {
        
        
        logout(state) {
            state.user = false;
            state.token = null;
            state.authenticated = null;
            state.token_no = null
        },
    },
});

export const { increment, decrement } = authSlice.actions;
export default authSlice.reducer;
