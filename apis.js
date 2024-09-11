const API_BASE_URL = 'https://todolist-api.hexschool.io'

const apiPostSignUp = (userData, nickname)=>axios.post(`${API_BASE_URL}/users/sign_up`, { ...userData, nickname });
const apiPostSignIn = (userData)=>axios.post(`${API_BASE_URL}/users/sign_in`, { email: userData.email, password: userData.password })
const apiGetTodoList = (token) => axios.get(`${API_BASE_URL}/todos/`,{headers: {'authorization': token}})
const apiPostTodo = (todoInput, token) => axios.post(`${API_BASE_URL}/todos/`,{content: todoInput},{headers: {'authorization': token}})

export{
    apiPostSignUp,
    apiPostSignIn,
    apiGetTodoList,
    apiPostTodo
}