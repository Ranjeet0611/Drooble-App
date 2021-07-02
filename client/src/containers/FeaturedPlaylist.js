import fetchFeaturedPlaylist from '../API/fetchFeaturedPlaylist';
import { useSelector } from 'react-redux';
import FeaturedPlaylistList from '../components/List/FeaturedPlaylistList';

const FeaturedPlaylist = () => {
  fetchFeaturedPlaylist();
  const isLoading = useSelector((state) => state.featuredPlaylist.isLoading);
  const featuredPlaylist = useSelector(
    (state) => state.featuredPlaylist.featuredPlaylistData
  );
  
  console.log(featuredPlaylist);
  return (
    <FeaturedPlaylistList featuredPlaylist={featuredPlaylist} loading={isLoading} />
  );
};
export default FeaturedPlaylist;
