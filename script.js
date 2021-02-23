const list = ['Tidy your room','Have a breakfast','Hangout with folks'];

// const ulList = document.querySelector('ul');
const ulList = document.getElementById('todo_list');

list.forEach(item => {
  // ulList.innerHTML += `<li>${item}</li>`;
  const listItem = document.createElement('li');
  listItem.innerHTML = item;
  ulList.appendChild(listItem);
})

console.log(ulList);