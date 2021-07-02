import {createSlice} from '@reduxjs/toolkit';

const FeaturedPlaylist = createSlice({
    name:'Featured Playlist',
    initialState:{
        isLoading:true,
        featuredPlaylistData:[]
    },
    reducers:{
        setLoading(state){
            state.isLoading = !state.isLoading
        },
        setFeaturedPlaylist(state,action){
            const featuredPlaylist = action.payload;
            state.featuredPlaylistData = featuredPlaylist;
        }
    }
});
export const FeaturedPlaylistAction = FeaturedPlaylist.actions;
export default FeaturedPlaylist;