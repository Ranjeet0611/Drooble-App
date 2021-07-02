import {createSlice} from '@reduxjs/toolkit'

const NearbyUsers = createSlice({
    name:'User Posts',
    initialState:{
        isLoading:true,
        nearByUsersData:[],
        isError:false,
        isLocationError:false
    },
    reducers:{
        setLoading(state){
            state.isLoading = !state.isLoading;
        },
        setUserPosts(state,action){
            const userData = action.payload;
            state.nearByUsersData = userData;
            
        },
        setIsError(state){
            state.isError = !state.isError;
        },
        setLocationError(state){
            state.isLocationError = !state.isLocationError;
        }
    }
})
export const NearByUsersAction = NearbyUsers.actions;
export default NearbyUsers;