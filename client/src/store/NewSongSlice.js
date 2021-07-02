import {createSlice} from '@reduxjs/toolkit'

const NewSongSlice = createSlice({
    name:'New Songs',
    initialState:{
        isLoading:true,
        newSongsList:[]
    },
    reducers:{
        setLoading(state){
            state.isLoading = !state.isLoading
        },
        setNewSongs(state,action){
            const newSongs = action.payload;
            state.newSongsList = newSongs;
        }
    }
});
export const newSongsAction = NewSongSlice.actions;
export default NewSongSlice;
