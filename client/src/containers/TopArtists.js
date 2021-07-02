import { useSelector } from 'react-redux';
import TopArtistList from '../components/List/TopArtistList';
import fetchTopArtists from '../API/fetchTopArtists';

const TopArtists = () => {
  fetchTopArtists();
  const isLoading = useSelector((state) => state.topArtist.isLoading);
  const topArtistsData = useSelector((state) => state.topArtist.topArtistsData);
    console.log(topArtistsData)
    
  return <TopArtistList topArtists={topArtistsData} loading={isLoading} />;
};
export default TopArtists;
