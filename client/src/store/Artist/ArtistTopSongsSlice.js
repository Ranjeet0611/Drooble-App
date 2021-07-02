import  {createSlice} from '@reduxjs/toolkit';

const ArtistTopSongs = createSlice({
    name: 'Artist Top Songs',
    initialState: {
        isLoading:true,
        artistTopSongsData: []
    },
    reducers:{
        setLoading(state){
            state.isLoading = !state.isLoading;
        },
        setArtistTopSongs(state,action){
            const artistTopSongs = action.payload;
            console.log(artistTopSongs);
            state.artistTopSongsData = artistTopSongs;
        }
    }
});
export const ArtistTopSongsAction = ArtistTopSongs.actions;
export default ArtistTopSongs;