import {createSlice} from '@reduxjs/toolkit'

const UserTrack = createSlice({
    name:'Save Track',
    initialState:{
        isLoading:true,
        isSaved:false,
    },
    reducers:{
        setLoading(state){
            state.isLoading = !state.isLoading;
        },
        setSaved(state){
            state.isSaved = !state.isSaved;
        }

    }
});
export const UserTrackAction = UserTrack.actions;
export default UserTrack;