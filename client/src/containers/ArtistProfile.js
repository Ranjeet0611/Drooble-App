import fetchArtistProfile from '../API/fetchArtistProfile';
import { useSelector } from 'react-redux';

import ArtistProfileCard from '../components/ProfileCards/ArtistProfileCard';

const ArtistProfile = () => {
  fetchArtistProfile();
  const isLoading = useSelector(state => state.artistProfile.isLoading);
  const artistProfile = useSelector(
    (state) => state.artistProfile.artistProfileData
  );
  
  return (
    <ArtistProfileCard userProfileData={artistProfile} loading={isLoading} />
  );
};
export default ArtistProfile;
