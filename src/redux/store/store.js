import { configureStore } from "@reduxjs/toolkit";
import { reducer as contactsReducer } from "../slices/contactsSlice";
import { reducer as filterReducer } from "../slices/filterSlice";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
});

