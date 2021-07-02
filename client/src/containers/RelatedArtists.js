
import { useSelector } from 'react-redux';
import fetchRelatedArtists from '../API/fetchRelatedArtists';
import TopRelatedArtistList from '../components/List/TopRelatedArtistList';

const RelatedArtists = () =>{
    fetchRelatedArtists();
    const isLoading = useSelector(state=>state.relatedArtists.isLoading);
    const relatedArtists = useSelector(state=>state.relatedArtists.relatedArtistData);
    console.log(relatedArtists);
    
    return <TopRelatedArtistList relatedArtists={relatedArtists} loading = {isLoading}/>
}
export default RelatedArtists;