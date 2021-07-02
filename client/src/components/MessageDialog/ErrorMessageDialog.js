import { message } from 'antd';
const ErrorMessageDialog = (loadingMessage,messageText) => {
    message
    .loading(loadingMessage, 2.5)
    .then(() => message.error(messageText, 2.5))
    
};
export default ErrorMessageDialog;