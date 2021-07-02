import { createSlice } from '@reduxjs/toolkit';

const ArtistProfile = createSlice({
  name: 'Artist Profile',
  initialState: {
    isLoading: true,
    artistProfileData: {},
  },
  reducers: {
    setLoading(state) {
      state.isLoading = !state.isLoading;
    },
    setArtistProfile(state, action) {
      const artistProfile = action.payload;
      state.artistProfileData = { ...artistProfile };
    },
  },
});
export const ArtistProfileAction = ArtistProfile.actions;
export default ArtistProfile;
