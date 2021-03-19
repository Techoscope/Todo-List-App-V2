function addItem() {
  const item = {
    title:  document.getElementById('todo_input').value
  }
  
  const xhr = new XMLHttpRequest();
  const url = 'http://127.0.0.1:8080/api/todoitems';
  const data = JSON.stringify(item);
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE){
      // return xhr.response;
      listItem([xhr.response])
    }
  }
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(data);
}


function getItem() {
  const xhr = new XMLHttpRequest();
  const url = 'http://127.0.0.1:8080/api/todoitems';
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE){
      // return xhr.response;
      listItem(xhr.response);
    }
  }
  xhr.open('GET', url);
  xhr.send();
}

function listItem(todoItems) {
  const ulList = document.getElementById('todo_list');

  todoItems.forEach((item) => {
    // console.log(item.title)
    ulList.innerHTML += `<li> ${item.title} </li>`
  });

}

getItem();