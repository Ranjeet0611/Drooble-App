import {createSlice} from '@reduxjs/toolkit'
const initialState={
    isAuthenticated:false,
}
const loginSlice = createSlice({
    name:'Login',
    initialState:initialState,
    reducers:{
        authenticated:(state)=>{
            state.isAuthenticated = !state.isAuthenticated;
        }
    },
});
export const loginActions = loginSlice.actions;
export default loginSlice;