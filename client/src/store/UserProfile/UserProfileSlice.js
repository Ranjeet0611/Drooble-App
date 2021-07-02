import { createSlice } from '@reduxjs/toolkit';
const userProfile = createSlice({
  name: 'User Profile',
  initialState: {
    isLoading: true,
    userProfileData: {},
    isError: false,
    topTracks:[]
  },
  reducers: {
    setLoading(state) {
      state.isLoading = !state.isLoading;
    },
    setUserProfile(state, action) {
      const userData = action.payload;
      state.userProfileData = { ...userData };
    },
    setSuccess(state) {
      state.isSuccess = !state.isSuccess;
    },
    setError(state) {
      state.isError= !state.isError;
    },
    setTopTracks(state,action){
      const topTracks = action.payload;
      state.topTracks = topTracks;
    }
  },
});
export const userProfileAction = userProfile.actions;
export default userProfile;
