import {createSlice} from '@reduxjs/toolkit';

const UserSavedAlbum = createSlice({
    name:'Saved Album',
    initialState:{
        isLoading:true,
        savedAlbumData:[],
    },
    reducers:{
        setLoading(state){
            state.isLoading = !state.isLoading;
        },
        setSavedAlbum(state,action){
            const savedAlbum = action.payload;
            state.savedAlbumData = savedAlbum;
        }
    }
})
export const UserSavedAlbumAction = UserSavedAlbum.actions;
export default UserSavedAlbum;