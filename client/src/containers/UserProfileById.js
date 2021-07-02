import fetchUserProfileById from '../API/fetchUserProfileById';
import ProfileCard from '../components/ProfileCards/UserProfileCard';
import { useSelector } from 'react-redux';

const UserProfileById = () => {
  const isLoading = useSelector(state=>state.userProfile.isLoading);
  const userProfileData = useSelector(
    (state) => state.userProfile.userProfileData
  );
  fetchUserProfileById();
  console.log(userProfileData);
  return <ProfileCard userProfileData={userProfileData} loading={isLoading} />;
};
export default UserProfileById;
