import { createSlice } from "@reduxjs/toolkit";
import Favourites from "../screens/TabScreens/Favourites";

const favouritesSlice = createSlice({
    name:'favourites',
    initialState:{
        id:[],
    },

    reducers:{
        addFavourite:(state,action)=>{
            state.id.push(action.payload.id)
        },
        removeFavourite:(state,action)=>{
            state.id.splice(state.id.indexOf(action.payload.id), 1)
        }   
    }
});
export const addFavourite = favouritesSlice.actions.addFavourite;
export const removeFavourite = favouritesSlice.actions.removeFavourite;
export default favouritesSlice;