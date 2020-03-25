# Project 0

To whom it may concern...
I'm Wael Najjar, I'm a .net developer and taking this course because I have never done
any Mobile apps professionally, and I want to learn it.
This is my project0 assignment submition to the course. I'm sorry I couldn't 
record a video and upload it, due to very slow internet we have here in Lebanon. 
I tried to comment on every line of code in the description below to show what i did.
I'm really sorry for that I hope it's acceptable from your side.

## Description
In my code I did the following. 

In the script.js I created this contstant object: 
const toDo = {
  TODO_ITEM: " <input type='checkbox' onclick='return confirmSelect(this);' id='c",
  TODO_CHECKBOX: 0,
  TODO_TEXT: "'>",
  TODO_DELETE: "<button class='btndelete' onclick='return confirmDelete(this);' title='Delete!'></br></br>", 
}

I did it this way to have the li inner html code unified for all li items. I made it in a way so I can 
add later the different li content in each todo item in the list. 
For the checkbox event onclick I added a function to check if the checkbox is checked or unchecked 
in order to fix counts. I added "this" to be sent as a parameter in order to be able to check and manipulate the code.
Foror the delete button event onclick I added a function to delete the item from the list. I added "this" to be sent as a 
parameter in order to be able to check and manipulate the code.
These two functions will be discussed below.

I added a count to count the items in the list (on line 11)
let count = 0

I commented line 12: const toDoList = [] 
so in the future if app reads and rights data to a database, we can use the array of todo items to read and save 
data from and to the database. No need now so I kept it commented.

in the function newTodo() I used the following code: 

const toDoText = prompt('Add a task:', '') //promt the user to enter the text for the todo item to be added to the list
  if(toDoText != null) {					//If it's not null
	count = count + 1						//increment the count
	let itemToDo = {						//create an object that holds the values for the todo item using constant object toDo 
		TODO_ITEM: toDo.TODO_ITEM + count.toString(),	//and the count to the html from toDo.TODO_ITEM where the checkbox id will be "c1", "c2", "c3",... respectively
		TODO_CHECKBOX: toDo.TODO_CHECKBOX,			//to indicate checkbox uncheckedCountSpan	
		TODO_TEXT: toDo.TODO_TEXT + toDoText.toString(),	//close the input tag and add the inner html text for it.
		TODO_DELETE: toDo.TODO_DELETE,		//contains the html code for the delete button for every item.
	}
	//toDoList.push(itemToDo)		//would be needed if we need to save the data to the database.
	const li = document.createElement('li')	//create the li tag in html
	li.id = "c" + count.toString()			//it's id=c1,c2, c3,.... respectively
	li.innerHTML = itemToDo.TODO_ITEM + itemToDo.TODO_TEXT + " " + itemToDo.TODO_DELETE		//concatinate all texts to get inner html of the li
	list.appendChild(li)	//apend li to list (ul)
	itemCountSpan.innerHTML = count		//set the value of the itemCountSpan equals to the count to show item count
	uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) + 1			//add the counter for unchecked list itmes.
  }
 
Checking or unchecking checkbox function:
 function confirmSelect(chkb){		//triggered when the checkbox is manipulated by the user. chkb will be holding the checkbox
	if(chkb.checked == true){		//If the checkbox is checked then
		if(confirm('Did you finish this task?')){			//send a confirmation message to check if the user did it on purpose or by mistake
			uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) - 1		//if confirmed decrement the count of unchecked tasks in the todo list
		}
	}else{		//if the checkbox is not checked
		if(confirm('Are you sure you want to activate this task?')){		//confirm user clic
			uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) + 1		//increment unchecked counter
		}
	}
 }
 
 Deleting the task from the todo list:
 
 function confirmDelete(chkb){		//triggered when the delete button is clicked. chkb will be holding the checkbox object
	if(confirm('Are you sure you want to delete this task?')){		//confirm deletion of the task user chooses to delete.
		count--								//decrement the count because one item is deleted
		itemCountSpan.innerHTML = count		//fix the value of the list count
		if(chkb.parentNode.childNodes[1].checked === false){		//chkb here is the delet button, so chkb.parentNode.childNodes[1] is the checkbox
																	//so here we check if it's not checked, so we can fix the unchecked items count.
			uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) - 1		//decrement unchecked count after deleting an unchecked item
		}
		chkb.parentNode.parentNode.removeChild(chkb.parentNode)			//remove li tag from the list to delete from the view.
		//here we can delete the item from the array if the push wasn't commented and then update the list in the database.
	}
 }
 
 
 I aslo added a class to the css file for the delete button to be nice looking: 
 .btndelete{				//css class name
  background-image:url('delete.png');		//image url of the button image
  background-color:transparent;			//transparent background color
  border:0;								//border 0 to hide all borders from the button	
  height: 20px;							//setting image height
  width: 20px;							//setting image width
  vertical-align:bottom;				//vertical alignment bottom
  cursor: pointer;						//show the pointer cursor when I hover over delete button.
}
 
Best Regards, 
Wael Najjar

