import {createSlice} from '@reduxjs/toolkit';
const topArtist = createSlice({
    name:'Top Artist',
    initialState:{
        isLoading: true,
        topArtistsData:[],
    },
    reducers:{
        setLoading(state){
            state.isLoading = !state.isLoading
        },
        setTopArtists(state,action){
            const topArtistsData = action.payload;
            state.topArtistsData = topArtistsData;
        },
        
    }
});
export const topArtistsAction = topArtist.actions;
export default topArtist;
