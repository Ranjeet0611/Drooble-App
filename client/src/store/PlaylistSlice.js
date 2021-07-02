import {createSlice} from '@reduxjs/toolkit'
const userPlaylistSlice = createSlice({
    name:'User playlist',
    initialState:{
        userPlaylists:[]
    },
    reducers:{
        setUserPlaylist(state,action){
            const userPlaylist = action.payload;
            state.userPlaylists.push(userPlaylist);
        },
        clearUserPlaylists(state){
            state.userPlaylists = [];
        }
    }
})
export const userPlaylistAction = userPlaylistSlice.actions;
export default userPlaylistSlice;