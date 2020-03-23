// Make your global todos array here.
// Put a few todos in there to start with!
// This is mostly to give us some data to test our functions with.
let todos = ["Wake up", "Brush teeth", "Eat", "Code", "Sleep"];

// Next: a function that prints a todo.
// For now, just have this function console log the value passed in!
// (We'll expand this helper later.)
function printTodo(value) {
	element = document.createElement('li');
	element.innerText = value;
	document.querySelector(".todo-list").appendChild(element);
}

function clearTodo() {
	const li = document.querySelector(".todo-list");
	while(li.firstChild) {
		li.removeChild(li.lastChild);
	}
}

// Now write a function that prints everything on our todo list, INDIVIDUALLY.
// Make SURE to use the above printTodo function!
function printTodos() {
	for(entry of todos) {
		printTodo(entry);
	}
}

function refreshTodos() {
	clearTodo();
	printTodos();
}

// Now please write a function that adds an item to our todo list.
// Could add it anywhere! We'll talk about where it should be added eventually.
function addTodo(entry) {
	todos.push(entry);
}

// Now write a function that removes an item at a given index from our todo list.
function removeTodo(index) {
	todos.splice(index, 1);
}

// Lastly: write a function that clears all items from our array.
function clearTodos() {
	todos = [];
}

// Test it by calling it and then calling your print-everything function.
// Nothing should print because the array should be empty now!
refreshTodos();

document.querySelector(".add-todo").addEventListener("click", addToList);
function addToList() {
	let entry = document.querySelector(".todo-input").value;
	document.querySelector(".todo-input").value = "";
	addTodo(entry);
	refreshTodos();
}


document.querySelector(".remove-todo").addEventListener("click", removeFromList);
function removeFromList() {
	let entry = document.querySelector(".index-input").value;
	document.querySelector(".index-input").value = "";
	
	removeTodo(entry);
	refreshTodos();
}