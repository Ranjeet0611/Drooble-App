import {createSlice} from '@reduxjs/toolkit';

const DroobleUsers = createSlice({
    name:"Drooble Users",
    initialState:{
        isLoading:true,
        droobleUsersData:[]
    },
    reducers:{
        setLoading(state){
            state.isLoading = !state.isLoading;
        },
        setDroobleUser(state,action){
            const droobleUsers = action.payload;
            state.droobleUsersData = droobleUsers;
        }
    }
})
export const DroobleUsersAction = DroobleUsers.actions;
export default DroobleUsers;