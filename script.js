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
    // ulList.innerHTML += `<li onclick="removeItem(this)"> ${item.title} </li>`
    const listItem = document.createElement('li');
    listItem.innerHTML = item.title;
    listItem.id = item.id;
    // listItem.onclick = removeItem(listItem);
    listItem.addEventListener('click', removeItem);
    ulList.appendChild(listItem);
  });
}

function removeItem(e) {
  const xhr = new XMLHttpRequest();
  const url = 'http://127.0.0.1:8080/api/todoitems/' + e.target.id;
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE){
      e.target.remove()
    }
  }
  xhr.open('DELETE', url);
  xhr.send();
}

getItems();
