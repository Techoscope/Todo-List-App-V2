// const ulList = document.querySelector('ul');
const ulList = document.getElementById('todo_list');

const inputValue = document.getElementById('todo_input').value;

const listItem = document.createElement('li');
listItem.innerHTML = inputValue;
ulList.appendChild(listItem)

