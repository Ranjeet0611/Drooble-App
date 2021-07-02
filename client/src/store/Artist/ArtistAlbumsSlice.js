import {createSlice} from '@reduxjs/toolkit';

const ArtistAlbums = createSlice({
    name:'Artist Album',
    initialState:{
        isLoading:true,
        artistAlbumData: []
    },
    reducers:{
        setLoading(state){
            state.isLoading = !state.isLoading;
        },
        setArtistAlbum(state,action){
            const artistAlbum = action.payload;
            state.artistAlbumData = artistAlbum;
        }
    }
})
export const ArtistAlbumAction = ArtistAlbums.actions;
export default ArtistAlbums;