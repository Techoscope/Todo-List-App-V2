// When a user enter the name of the item and click add button, the item will be added to the list.

function addItem (){
  // alert(document.getElementById('todo_input').value);
  if (document.getElementById('todo_input').value) {
    const item = document.createElement('li');
    item.innerHTML = document.getElementById('todo_input').value;
    document.getElementById('todo_list').appendChild(item);
    document.getElementById("todo_input").value = "";
  } else {
    alert('Enter an item')
  }
 }

// When a user click on the item in the list, the item will be removed/deleted.

function removeItem(item) {
  document.getElementById('todo_list').removeChild(item);
}