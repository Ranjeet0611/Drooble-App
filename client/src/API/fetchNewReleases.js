import { useEffect } from 'react';
import Cookie from 'js-cookie';
import { useDispatch } from 'react-redux';
import {newSongsAction} from '../store/NewSongSlice';
import { ApiErrorAction } from '../store/ApiError/ApiErrorSlice';
const FetchNewReleases = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        const token = Cookie.get('token');
        fetch('https://drooble.herokuapp.com/auth/new-releases',{
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
            dispatch(newSongsAction.setLoading());
            dispatch(newSongsAction.setNewSongs(result.Songs.result));
            
        })
        .catch(err =>{
            dispatch(ApiErrorAction.setError());
        })
    },[dispatch])
}
export default FetchNewReleases;