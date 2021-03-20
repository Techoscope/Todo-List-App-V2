async function addItem() {
  const item = {
    title:  document.getElementById('todo_input').value
  }

  const data = {
    method: 'POST',
    body: JSON.stringify(item),
    headers: {
      'Content-type': 'application/json'
    }
  }

  const response = await fetch('http://127.0.0.1:8080/api/todoitems', data);
  const jsonResponse = await response.json();
  listItem([jsonResponse]);

}

async function getItems() {
  const response = await fetch('http://127.0.0.1:8080/api/todoitems');
  const jsonResponse = await response.json();
  listItem(jsonResponse)
}

function listItem(todoItems) {
  const ulList = document.getElementById('todo_list');

  todoItems.forEach((item) => {
    // ulList.innerHTML += `<li onclick="removeItem(this)"> ${item.title} </li>`
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <input type="checkbox" class="mark-as-completed" ${item.completed && 'checked'}>  
      <input type="text" class="todo-item-input" value="${item.title}">
      <span class="remove-item">Delete</span>
    `;
    listItem.id = item.id;
    listItem.querySelector('.remove-item').addEventListener('click', removeItem);
    listItem.querySelector('.mark-as-completed').addEventListener('click', completeItem);
    listItem.querySelector('.todo-item-input').style.textDecoration = item.completed && 'line-through';
    ulList.appendChild(listItem);
  });
}

async function removeItem(e) {
  const data = {
    method: 'DELETE',
  }

  const response = await fetch('http://127.0.0.1:8080/api/todoitems/' + e.target.id, data);
  const jsonResponse = await response.json();
  e.target.parentElement.remove();
}

async function completeItem(e) {
  const item = {
    completed:  e.target.checked
  }

  const data = {
    method: 'PUT',
    body: JSON.stringify(item),
    headers: {
      'Content-type': 'application/json'
    }
  }

  const response = await fetch('http://127.0.0.1:8080/api/todoitems/'+ e.target.parentElement.id, data);
  e.target.parentElement.querySelector('.todo-item-input').style.textDecoration = e.target.checked ? 'line-through' : 'none';
}

getItems();
