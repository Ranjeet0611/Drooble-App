import TopTracksCarousel from '../components/Carousel/TopTracksCarousel';
import { useSelector } from 'react-redux';

const UserTopTracks = () => {
  const isLoading = useSelector(state=>state.userProfile.isLoading);
  const topTracks = useSelector(
    (state) => state.userProfile.topTracks
  );
  console.log(topTracks);
  
  return <TopTracksCarousel topTracks={topTracks} loading={isLoading} />
};
export default UserTopTracks;
