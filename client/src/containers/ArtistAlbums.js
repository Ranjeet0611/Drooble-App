import fetchArtistAlbums from '../API/fetchArtistAlbums';
import { useSelector } from 'react-redux';

import ArtistAlbumList from '../components/List/ArtistAlbumList';

const ArtistAlbums = () => {
  fetchArtistAlbums();
  const isLoading = useSelector((state) => state.artistAlbum.isLoading);
  const artistAlbum = useSelector((state) => state.artistAlbum.artistAlbumData);

  return <ArtistAlbumList artistAlbum={artistAlbum} loading={isLoading} />;
};
export default ArtistAlbums;
