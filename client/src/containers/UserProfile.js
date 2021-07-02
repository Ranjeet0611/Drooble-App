import fetchUserProfile from '../API/fetchUserProfile';
import ProfileCard from '../components/ProfileCards/UserProfileCard';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const isLoading = useSelector(state=>state.userProfile.isLoading);
  const userProfileData = useSelector(
    (state) => state.userProfile.userProfileData
  );
  fetchUserProfile();
  console.log(userProfileData);
  
  return <ProfileCard userProfileData={userProfileData} loading={isLoading} />;
};
export default UserProfile;
