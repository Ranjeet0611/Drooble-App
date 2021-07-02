import fetchNearbyUsers from '../API/fetchNearbyUsers';
import { useSelector } from 'react-redux';
import NearByUsersList from '../components/List/NearByUsersList';

const NearByUsers = () => {
  fetchNearbyUsers();
  const isLoading = useSelector((state) => state.nearByUsers.isLoading);
  const nearbyUsers = useSelector(
    (state) => state.nearByUsers.nearByUsersData
  );
  console.log(nearbyUsers);
  
  return (
    <NearByUsersList nearbyUsers={nearbyUsers} loading={isLoading} />
  );
};
export default NearByUsers;
