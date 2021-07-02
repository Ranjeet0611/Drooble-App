import { useEffect } from 'react';
import Cookie from 'js-cookie';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { ArtistProfileAction } from '../store/Artist/ArtistProfileSlice';
import { ApiErrorAction } from '../store/ApiError/ApiErrorSlice';
const FetchArtistProfile = () => {
  const { ArtistId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const token = Cookie.get('token');
    fetch(`https://drooble.herokuapp.com/auth/artist/${ArtistId}`, {
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
        dispatch(ArtistProfileAction.setArtistProfile(result.artistProfile));
        dispatch(ArtistProfileAction.setLoading());
      })
      .catch((err) => {
        dispatch(ApiErrorAction.setError());
      });
  }, [dispatch]);
};
export default FetchArtistProfile;
