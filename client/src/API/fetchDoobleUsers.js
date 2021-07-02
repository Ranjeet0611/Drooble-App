import Cookie from 'js-cookie';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {useParams} from 'react-router'
import { ApiErrorAction } from '../store/ApiError/ApiErrorSlice';
import { DroobleUsersAction } from '../store/DroobleUsers/DroobleUsersSlice';
const FetchDroobleUsers = () => {
  const dispatch = useDispatch();
  const {userId} = useParams();
  useEffect(() => {
    const token = Cookie.get('token');
    fetch(`https://drooble.herokuapp.com/auth/users/${userId}/drooble-users`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          return new Error('Users Not Found');
        }
        return response.json();
      })
      .then((result) => {
        dispatch(DroobleUsersAction.setDroobleUser(result.Users));
        dispatch(DroobleUsersAction.setLoading());
      })
      .catch((err) => {
        dispatch(ApiErrorAction.setError())
      });
  },[dispatch]);
};
export default FetchDroobleUsers;
