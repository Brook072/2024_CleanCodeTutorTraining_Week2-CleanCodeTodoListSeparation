let todoList = [];
let token = localStorage.getItem('token');

import { apiGetTodoList, apiPostTodo }from './apis.js'
import { showMessage }from './all.js'

async function getTodoList(){
    try{
      const getDataResponse = await apiGetTodoList(token);
      todoList = getDataResponse.data.data;
      renderTodos();
    }catch(error){
      showMessage('error', error.response.data.message);
    }
  }
  
  const button = document.getElementById('todo-btn');
  button.addEventListener('click', () => addTodo());
  
   // 提示：改使用 async await 寫法
  async function addTodo() {
    try{
      const todoInput = document.getElementById('todo-input').value;
      if (!todoInput) return;
      // 提示：加入 try catch
      // 提示：使用 SweetAlert2 有效呈現錯誤資訊
      // 提示：將重複程式碼提取出來`
      const postTodoData = await apiPostTodo(todoInput, token);
      getTodoList();
    }catch(error){
      showMessage('error', error.response.data.message);
    }
  }
  
  function renderTodos() {
    const todoListContainer = document.getElementById('todo-list');
    let html = '';
    todoList.forEach((todo) => {
      html += `<li><b>${todo.content}</b></li>`;
    });
    todoListContainer.innerHTML = html;
  }

  getTodoList();
  
  // 提示：將重複程式碼提取出來