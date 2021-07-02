import fetchDroobleUsers from '../API/fetchDoobleUsers';
import { useSelector } from 'react-redux';
import DroobleUsersList from '../components/List/DroobleUsersList';

const DroobleUsers = () => {
  fetchDroobleUsers();
  const isLoading = useSelector((state) => state.droobleUsers.isLoading);
  const droobleUsers = useSelector(
    (state) => state.droobleUsers.droobleUsersData
  );
  
  return (
    <DroobleUsersList droobleUsers={droobleUsers} loading={isLoading} />
  );
};
export default DroobleUsers;
