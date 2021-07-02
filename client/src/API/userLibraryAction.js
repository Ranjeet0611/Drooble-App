import SuccessMessageDialog from '../components/MessageDialog/SuccessMessageDialog';
import ErrorMessageDialog from '../components/MessageDialog/ErrorMessageDialog';
import Cookie from 'js-cookie';

const userLibraryAction = (Id, method, action) => {
  const token = Cookie.get('token');
  fetch(`https://drooble.herokuapp.com/auth/me/${action}/${Id}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  })
    .then((response) => {
      if (!response.ok) {
        return new Error('Something Went Wrong');
      }
      return response.json();
    })
    .then((result) => {
      var message = 'Added to Library';
      var loadingMessage = 'Adding To Library';
      if (method === 'DELETE') {
        message = 'Removed from Library';
        loadingMessage = 'Removing from Library';
      }
      console.log(result);
      if (result.isDone) {
        SuccessMessageDialog(loadingMessage, message);
      } else {
        ErrorMessageDialog(loadingMessage, 'Something Went Wrong try again');
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};
export default userLibraryAction;
