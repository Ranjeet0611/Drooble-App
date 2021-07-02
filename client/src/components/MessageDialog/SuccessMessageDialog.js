import { message } from 'antd';
const SuccessMessageDialog = (loadingMessage,messageText) => {
    message
    .loading(loadingMessage, 2.5)
    .then(() => message.success(messageText, 2.5))
    
};
export default SuccessMessageDialog;