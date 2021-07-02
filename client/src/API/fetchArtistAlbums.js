import { useEffect } from 'react';
import Cookie from 'js-cookie';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import {ArtistAlbumAction} from '../store/Artist/ArtistAlbumsSlice';
import { ApiErrorAction } from '../store/ApiError/ApiErrorSlice';
const FetchArtistAlbums = () => {
  const { ArtistId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const token = Cookie.get('token');
    fetch(`https://drooble.herokuapp.com/auth/artist/${ArtistId}/albums`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          return new Error('Not Able to fetch Artist Profile');
        }
        return response.json();
      })
      .then((result) => {
          console.log(result.ArtistAlbum.items);
        dispatch(ArtistAlbumAction.setArtistAlbum(result.ArtistAlbum.items));
        dispatch(ArtistAlbumAction.setLoading());
      })
      .catch((err) => {
        dispatch(ApiErrorAction.setError());
      });
  }, [dispatch]);
};
export default FetchArtistAlbums;
