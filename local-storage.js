// localStorage.setItem('myCat', 'Minosh'); // Setting value
// const myCat =  localStorage.getItem('myCat'); //Getting value
// localStorage.removeItem('todoItems'); // Remove single item at a time
// localStorage.clear(); // Removes every items
// alert(myCat)

let todoItems = [];

function addItem() {
  const inputBox = document.getElementById('todo_input');
  todoItems.push(inputBox.value);
  localStorage.setItem('todoItems', todoItems);
  getItem();
}

function getItem() {
  todoItems = localStorage.getItem('todoItems') ? localStorage.getItem('todoItems').split(',') : [];
  document.getElementById('todo_list').innerHTML = '';
  todoItems.forEach((item) => {
    document.getElementById('todo_list').innerHTML += `<li onclick="removeItem(this)">${item}</li>`;
  })
}

function removeItem(item) {
  const filteredArray = todoItems.filter(element => element !== item.innerHTML)
  localStorage.setItem('todoItems', filteredArray);
  getItem();
}

getItem();

// Filter out the item to remove
// Assign filtered array to a variable
// Store new filtered array variable in localStorage


// function addItem() {
//   const inputBox = document.getElementById('todo_input');
//   localStorage.setItem('todoItem', inputBox.value);
  // console.log(localStorage.getItem('todoItem'))
// }

// const myCat = 'Minosh'; // Setting value
// alert(myCat); // Getiing value