import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: [],
    reducers: {
        setFilter(state, action) {
            return action.payload;
        },
    },
});

export default reducer = filterSlice.reducer;
export const { setFilter } = setFilter.actions;