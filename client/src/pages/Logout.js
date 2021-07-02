import Cookie from 'js-cookie';
import { Redirect } from 'react-router-dom';
const Logout = () => {   
  const removeToken = Cookie.remove('token');
  const removeAuthenticated = Cookie.remove('isAuthenticated');
  return <Redirect to="/login" />;
};
export default Logout;
