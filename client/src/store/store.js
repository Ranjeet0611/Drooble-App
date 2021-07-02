import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './LoginSlice';
import NearbyUsers from './NearbyUsers/NearbyUsersSlice';
import userPlaylistSlice from './PlaylistSlice';
import newSongSlice from './NewSongSlice';
import userProfile from './UserProfile/UserProfileSlice';
import topArtist from './TopArtistSlice'
import ArtistProfile from './Artist/ArtistProfileSlice';
import ArtistTopSongs from './Artist/ArtistTopSongsSlice';
import RelatedArtists from './Artist/TopRelatedArtistSlice';
import ArtistAlbums from './Artist/ArtistAlbumsSlice';
import DroobleUsers from './DroobleUsers/DroobleUsersSlice';
import UserTrack from './Tracks/UserTrackSlice';
import UserSavedAlbum from './Album/UserSavedAlbumSlice';
import FeaturedPlaylist from './FeaturedPlaylist/FeaturedPlaylist';
import ApiError from './ApiError/ApiErrorSlice';
const store = configureStore({
  reducer: {
    login:loginSlice.reducer,
    nearByUsers:NearbyUsers.reducer,
    userPlaylist:userPlaylistSlice.reducer,
    newSongs:newSongSlice.reducer,
    userProfile:userProfile.reducer,
    topArtist:topArtist.reducer,
    artistProfile:ArtistProfile.reducer,
    artistTopSongs:ArtistTopSongs.reducer,
    relatedArtists:RelatedArtists.reducer,
    artistAlbum:ArtistAlbums.reducer,
    droobleUsers:DroobleUsers.reducer,
    userTrack:UserTrack.reducer,
    userSavedAlbum:UserSavedAlbum.reducer,
    featuredPlaylist:FeaturedPlaylist.reducer,
    apiError:ApiError.reducer,
  }
});
export default store;
