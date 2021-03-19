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
    // console.log(item.title)
    ulList.innerHTML += `<li> ${item.title} </li>`
  });

}

getItems();
