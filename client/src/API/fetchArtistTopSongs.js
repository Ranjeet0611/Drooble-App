import { useEffect } from 'react';
import Cookie from 'js-cookie';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { ArtistTopSongsAction } from '../store/Artist/ArtistTopSongsSlice';
import { ApiErrorAction } from '../store/ApiError/ApiErrorSlice';
const FetchArtistTopSongs = () => {
  const { ArtistId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const token = Cookie.get('token');
    fetch(`https://drooble.herokuapp.com/auth/artist/${ArtistId}/top-tracks`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('No Artists Songs Found');
        }
        return response.json();
      })
      .then((result) => {
        console.log(result.TopTracks.tracks);
        dispatch(ArtistTopSongsAction.setLoading());
        dispatch(ArtistTopSongsAction.setArtistTopSongs(result.TopTracks.tracks));
      })
      .catch((err) => {
        dispatch(ApiErrorAction.setError());
      });
  }, [dispatch]);
};
export default FetchArtistTopSongs;
