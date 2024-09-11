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
  
  async function addTodo() {
    try{
      const todoInput = document.getElementById('todo-input').value;
      if (!todoInput) return;
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