const toDo = {
  TODO_ITEM: " <input type='checkbox' onclick='return confirmSelect(this);' id='c",
  TODO_CHECKBOX: 0,
  TODO_TEXT: "'>",
  TODO_DELETE: "<button class='btndelete' onclick='return confirmDelete(this);' title='Delete!'></br></br>", 
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let count = 0
//const toDoList = [] //If we are reading data from a database, better to save them to this list and loop to print it.

function newTodo() {
  const toDoText = prompt('Add a task:', '')
  if(toDoText != null) {
	count = count + 1
	let itemToDo = {
		TODO_ITEM: toDo.TODO_ITEM + count.toString(),
		TODO_CHECKBOX: toDo.TODO_CHECKBOX,
		TODO_TEXT: toDo.TODO_TEXT + toDoText.toString(),
		TODO_DELETE: toDo.TODO_DELETE,
	}
	//toDoList.push(itemToDo)
	const li = document.createElement('li')
	li.id = "c" + count.toString()
	li.innerHTML = itemToDo.TODO_ITEM + itemToDo.TODO_TEXT + " " + itemToDo.TODO_DELETE
	list.appendChild(li)
	itemCountSpan.innerHTML = count
	uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) + 1
  }
}

function confirmSelect(chkb){
	if(chkb.checked == true){
		if(confirm('Did you finish this task?')){
			uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) - 1
		}
	}else{
		if(confirm('Are you sure you want to activate this task?')){
			uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) + 1
		}
	}
}

function confirmDelete(chkb){
	if(confirm('Are you sure you want to delete this task?')){
		count--
		itemCountSpan.innerHTML = count
		if(chkb.parentNode.childNodes[1].checked === false){
			console.log(chkb)
			uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) - 1
		}
		chkb.parentNode.parentNode.removeChild(chkb.parentNode)
	}
}