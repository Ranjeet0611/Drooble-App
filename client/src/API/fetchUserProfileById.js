import Cookie from 'js-cookie';
import { useEffect } from 'react';
import {useParams} from 'react-router'
import { useDispatch } from 'react-redux';
import { ApiErrorAction } from '../store/ApiError/ApiErrorSlice';
import { userProfileAction } from '../store/UserProfile/UserProfileSlice';
const FetchUserProfileById = () => {
  const {userId} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const token = Cookie.get('token');
    fetch(`https://drooble.herokuapp.com/auth/users/${userId}`, {
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
        console.log(result);
        dispatch(userProfileAction.setUserProfile(result.Profile));
        dispatch(userProfileAction.setLoading());
        dispatch(userProfileAction.setTopTracks(result.Profile.topTracks));
      })
      .catch((err) => {
        dispatch(ApiErrorAction.setError());
      });
  },[dispatch]);
};
export default FetchUserProfileById;
