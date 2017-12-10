console.log('Todos');



var gTodos = createTodos();
displayMenu();
printTodos();


function displayMenu() {

    console.log('MENU');
    console.log('----------');
    console.log('1. Add Todo');
    console.log('2. Remove Todo');
    console.log('3. Update Todo');
    console.log('0. Exit');
    
    var choice = +prompt('Please enter your choice (0 to exit):');
    while (choice !== 0) {

        switch (choice) {
            case 1:
                addTodo();
                break;
            case 2:
                removeTodo();
                break;
            case 3:
                updateTodo();
                break;
            default: 
                console.error('Unknown Option');
        }
        printTodos();

        choice = +prompt('Please enter your choice (0 to exit):');
    }
}

function addTodo() {
    var txtTodo = prompt('Enter new Todo');
    var newTodo = createTodo(txtTodo);
    gTodos.push(newTodo);
}

function removeTodo() {
    var idx = +prompt('Enter Todo Num to Remove');
    gTodos.splice(idx, 1);
}

function updateTodo() {
    var idx = +prompt('Enter Todo Num to Update');
    var todo = gTodos[idx];
    // toggle todo:
    todo.isCompleted = !todo.isCompleted;
}

function createTodo(text) {
    return {
        txt: text,
        isCompleted: false
    };
}


function createTodos() {
    var todos = [];
    var todo1 = createTodo('Feed the Fish');
    var todo2 = createTodo('Walk the Dog');
    todos.push(todo1);
    todos.push(todo2);
    return todos;
}

function printTodos() {
    console.log('Here are your todos:');
    for (var i = 0; i < gTodos.length; i++) {
        var todo = gTodos[i];
        printTodo(todo);
    }
}

function printTodo(todo) {
    var symbolCompleted = (todo.isCompleted)? 'v' : 'x'
    console.log(symbolCompleted + '. ' + todo.txt);
}





