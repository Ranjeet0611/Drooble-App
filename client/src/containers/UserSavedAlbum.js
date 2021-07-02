import fetchUserSavedAlbum from '../API/fetchUserSavedAlbum';
import { useSelector } from 'react-redux';
import SavedAlbumList from '../components/List/SavedAlbumList';

const UserSavedAlbum = () => {
  fetchUserSavedAlbum();
  const isLoading = useSelector((state) => state.userSavedAlbum.isLoading);
  const savedAlbum = useSelector((state) => state.userSavedAlbum.savedAlbumData);
  console.log(savedAlbum);
  
  return <SavedAlbumList artistAlbum={savedAlbum} loading={isLoading} />;
};
export default UserSavedAlbum;
