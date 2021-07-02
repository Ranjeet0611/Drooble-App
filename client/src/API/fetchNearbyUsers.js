import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Cookie from 'js-cookie';
import { ApiErrorAction } from '../store/ApiError/ApiErrorSlice';
import { NearByUsersAction } from '../store/NearbyUsers/NearbyUsersSlice';
const FetchNearbyUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = Cookie.get('token');
    const setUserLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (result) => {
          fetch('https://drooble.herokuapp.com/auth/me/location', {
            method: 'POST',
            body: JSON.stringify({
              latitude: result.coords.latitude,
              longitude: result.coords.longitude,
            }),
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + token,
            },
          })
            .then((response) => {
              //console.log(response);
              if (!response.ok) {
                throw new Error('Not Authenticated');
              }
              return response.json();
            })
            .then((data) => {
              console.log(data.user);
              dispatch(NearByUsersAction.setLoading());
              dispatch(NearByUsersAction.setUserPosts(data.user));
            })
            .catch((err) => {
              dispatch(ApiErrorAction.setError())
            });
        },
        (error) => {
          dispatch(NearByUsersAction.setLocationError());
        }
      );
    };
    setUserLocation();
  }, [dispatch]);
};
export default FetchNearbyUsers;
