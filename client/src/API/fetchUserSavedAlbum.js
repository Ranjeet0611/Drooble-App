import Cookie from 'js-cookie';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ApiErrorAction } from '../store/ApiError/ApiErrorSlice';
import { UserSavedAlbumAction } from '../store/Album/UserSavedAlbumSlice';
import {useParams} from 'react-router'
const FetchUserSavedAlbum = () => {
  const {userId} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const token = Cookie.get('token');
    fetch(`https://drooble.herokuapp.com/auth/me/albums/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          return new Error('User Not Found');
        }
        return response.json();
      })
      .then((result) => {
          console.log(result.SavedAlbum);
        dispatch(UserSavedAlbumAction.setLoading());
        dispatch(UserSavedAlbumAction.setSavedAlbum(result.SavedAlbum.savedAlbum));
      })
      .catch((err) => {
        dispatch(ApiErrorAction.setError());
      });
  },[dispatch]);
};
export default FetchUserSavedAlbum;
