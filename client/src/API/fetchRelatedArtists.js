import { useEffect } from 'react';
import Cookie from 'js-cookie';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { ApiErrorAction } from '../store/ApiError/ApiErrorSlice';
import {RelatedArtistsAction} from '../store/Artist/TopRelatedArtistSlice';
const FetchRelatedArtists = () => {
  const { ArtistId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const token = Cookie.get('token');
    fetch(`https://drooble.herokuapp.com/auth/artist/${ArtistId}/related-artists`, {
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
          console.log(result.RelatedArtists.artists);
        dispatch(RelatedArtistsAction.setLoading());
        dispatch(RelatedArtistsAction.setRelatedArtists(result.RelatedArtists.artists));
      })
      .catch((err) => {
        dispatch(ApiErrorAction.setError())
      });
  }, [dispatch]);
};
export default FetchRelatedArtists;
