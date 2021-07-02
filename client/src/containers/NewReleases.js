
import { useSelector } from 'react-redux';
import fetchNewReleases from '../API/fetchNewReleases';
import NewReleasesCard from '../components/Carousel/NewReleasesCard';

const NewReleases = () =>{
    fetchNewReleases();
    const isLoading = useSelector(state=>state.newSongs.isLoading);
    const newReleases = useSelector(state=>state.newSongs.newSongsList);
    
    return <NewReleasesCard newReleases={newReleases} loading = {isLoading}/>
}
export default NewReleases;