// 提示：改使用 async await 寫法
import { apiPostSignUp }from './apis.js'
import { isEmptyField,showMessage }from './all.js'
const userData = {
    email: 'admin@gmail.com',
    password: '123456'
};

async function signUp(userData, nickname) {
    isEmptyField(userData.email, userData.password);
    try {
      await apiPostSignUp(userData, nickname);
      showMessage('success', '註冊成功');
    } catch (error) {
      showMessage('warning', error.response.data.message);
    }
  
  }
//   signUp(userData, 'admin');
  