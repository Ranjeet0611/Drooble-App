import { createSlice } from '@reduxjs/toolkit';

const TopRelatedArtist = createSlice({
  name: 'Related Artists',
  initialState: {
    isLoading: true,
    relatedArtistData: [],
  },
  reducers: {
    setLoading(state) {
      state.isLoading = !state.isLoading;
    },
    setRelatedArtists(state, action) {
      const relatedArtist = action.payload;
      state.relatedArtistData = relatedArtist;
    },
  },
});
export const RelatedArtistsAction = TopRelatedArtist.actions;
export default TopRelatedArtist;
