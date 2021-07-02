import { useDispatch, useSelector } from 'react-redux';
import { topArtistsAction } from '../store/TopArtistSlice';
import Cookie from 'js-cookie';
import {useEffect} from 'react';
import { ApiErrorAction } from '../store/ApiError/ApiErrorSlice';
const FetchTopArtists = () => {
  const dispatch = useDispatch();
  const topArtistsData = useSelector((state) => state.topArtist.topArtistsData);
  console.log(topArtistsData);
  useEffect(() => {
    const token = Cookie.get('token');
    fetch('https://drooble.herokuapp.com/auth/top-artists', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('No Top Artist Found');
        }
        return response.json();
      })
      .then((result) => {
        dispatch(topArtistsAction.setLoading());  
        dispatch(topArtistsAction.setTopArtists(result.TopArtists));
      })
      .catch((err) => {
        dispatch(ApiErrorAction.setError());
      });
  }, [dispatch]);
};
export default FetchTopArtists;
