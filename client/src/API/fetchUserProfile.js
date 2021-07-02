import Cookie from 'js-cookie';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ApiErrorAction } from '../store/ApiError/ApiErrorSlice';
import { userProfileAction } from '../store/UserProfile/UserProfileSlice';
const FetchUserProfile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = Cookie.get('token');
    fetch('https://drooble.herokuapp.com/auth/me/profile', {
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
        dispatch(userProfileAction.setUserProfile(result.Profile));
        dispatch(userProfileAction.setLoading());
      })
      .catch((err) => {
        dispatch(ApiErrorAction.setError());
      });
  },[dispatch]);
};
export default FetchUserProfile;
