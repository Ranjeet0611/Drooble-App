import { useEffect } from 'react';
import Cookie from 'js-cookie';
import { useDispatch } from 'react-redux';
import { ApiErrorAction } from '../store/ApiError/ApiErrorSlice';
import {FeaturedPlaylistAction} from '../store/FeaturedPlaylist/FeaturedPlaylist';
const FetchFeaturedPlaylist = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        const token = Cookie.get('token');
        fetch('https://drooble.herokuapp.com/auth/featured-playlists',{
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
              }
        })
        .then(response=>{
            if(!response.ok){
                throw new Error('No new Songs Found');
            }
            return response.json();
        })
        .then(result=>{
            dispatch(FeaturedPlaylistAction.setLoading());
            dispatch(FeaturedPlaylistAction.setFeaturedPlaylist(result.FeaturedPlaylists));
            
        })
        .catch(err =>{
            dispatch(ApiErrorAction.setError());
        })
    },[dispatch])
}
export default FetchFeaturedPlaylist;