// localStorage.setItem('myCat', 'Minosh'); // Setting value
// const myCat =  localStorage.getItem('myCat'); //Getting value
// localStorage.removeItem('todoItems'); // Remove single item at a time
// localStorage.clear(); // Removes every items
// alert(myCat)

const todoItems = [];

function addItem() {
  const inputBox = document.getElementById('todo_input');
  todoItems.push(inputBox.value);
  localStorage.setItem('todoItems', todoItems);
  getItem();
}

function getItem() {
  const itemsToList = localStorage.getItem('todoItems').split(',');
  document.getElementById('todo_list').innerHTML = '';
  itemsToList.forEach((item) => {
    document.getElementById('todo_list').innerHTML += `<li onclick="removeItem(this)">${item}</li>`;
  })
}

function removeItem(item) {
  item.remove();
}

getItem();


// function addItem() {
//   const inputBox = document.getElementById('todo_input');
//   localStorage.setItem('todoItem', inputBox.value);
  // console.log(localStorage.getItem('todoItem'))
// }

// const myCat = 'Minosh'; // Setting value
// alert(myCat); // Getiing value