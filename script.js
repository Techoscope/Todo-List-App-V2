// const ulList = document.querySelector('ul');
const ulList = document.getElementById('todo_list');

function addItem() {
  const inputValue = document.getElementById('todo_input').value;

  const listItem = document.createElement('li');
  listItem.innerHTML = inputValue;
  listItem.onclick = function () {
    ulList.removeChild(listItem);
  }
  ulList.appendChild(listItem)
}
