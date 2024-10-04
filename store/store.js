import { configureStore } from "@reduxjs/toolkit";
import favouritesSlice from './favourites'
const store = configureStore({
    reducer:{
        fav:favouritesSlice.reducer,
    }
});

export default store;
