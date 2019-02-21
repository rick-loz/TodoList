let submitBtn = document.getElementById("submitButton");
let clearBtn = document.getElementById("clearButton");
let markAllBtn = document.getElementById("markAllButton");
let deleteBtn = document.getElementById("deleteButton");

var todoCount = 0;

submitBtn.addEventListener("click", (event) => {
	event.preventDefault();

	let newTodo = document.getElementById("newTodo").value;
	let panelContent = document.getElementById("listOfTodos");

	let alfanumRegex = new RegExp("[A-Za-z0-9]+");

	if(alfanumRegex.exec(newTodo) !== null) {
		var div = document.createElement("div");

		var checkbox = document.createElement("input");
		checkbox.type = 'checkbox';
		checkbox.setAttribute('class', 'todo_task');
		checkbox.id = todoCount;
		checkbox.value = newTodo;

		todoCount++;

		var label = document.createElement("label")
		label.setAttribute('for', todoCount);
		label.innerHTML = newTodo;

		div.appendChild(checkbox); 
		div.appendChild(label);

		panelContent.appendChild(div);

		document.getElementById("newTodo").value = "";
	}
});

clearBtn.addEventListener("click", (event) => {
	let checkboxes = document.getElementsByClassName('todo_task');

	for(var i = 0; i < checkboxes.length; i++) {
		console.log("hola");
		checkboxes[i].checked = false;
	}
});

markAllBtn.addEventListener("click", (event) => {
	let checkboxes = document.getElementsByClassName('todo_task');

	for(var i = 0; i < checkboxes.length; i++) {
		checkboxes[i].checked = true;
	}
});

deleteBtn.addEventListener("click", (event) => {
	document.getElementById("listOfTodos").innerHTML = "";
});