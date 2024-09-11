import { apiPostSignIn }from './apis.js'
import { isEmptyField, showMessage } from './all.js'
const userData = {
    email: 'admin@gmail.com',
    password: '123456'
};

async function signIn(userData) {
    isEmptyField(userData.email, userData.password);
    try{
      const signInResponse = await apiPostSignIn(userData);
      localStorage.setItem('token', signInResponse.data.token)
      showMessage('success', '登入成功');
    }catch(error){
      showMessage('error', error.response.data.message);
    }
  }
  signIn(userData);