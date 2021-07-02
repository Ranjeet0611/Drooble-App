import fetchArtistTopSongs from '../API/fetchArtistTopSongs';
import { useSelector } from 'react-redux';
import ArtistTopSongsCard from '../components/Carousel/ArtistTopSongsCard';
const ArtistTopSongs = () => {
  fetchArtistTopSongs();
  const isLoading = useSelector((state) => state.artistTopSongs.isLoading);
  const artistTopSongs = useSelector(
    (state) => state.artistTopSongs.artistTopSongsData
  );
  
  return (
    <ArtistTopSongsCard newReleases={artistTopSongs} loading={isLoading} />
  );
};
export default ArtistTopSongs;
