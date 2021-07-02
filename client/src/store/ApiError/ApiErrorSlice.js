import {createSlice} from '@reduxjs/toolkit'

const ApiError = createSlice({
    name:'Api Error',
    initialState:{
        isError:false
    }, 
    reducers:{
        setError(state){
            state.isError = true;
        }
    }
});
export const ApiErrorAction = ApiError.actions;
export default ApiError;