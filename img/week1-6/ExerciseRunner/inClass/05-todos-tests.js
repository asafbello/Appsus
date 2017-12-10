testCreateTodo();


// TODO: complete 2 more unit testings
function testCreateTodo() {
    console.log('------- Tests for createTodo ------ ');
    var val = 'abc';
    var todo = createTodo(val);

    console.assert(todo.txt === 'abc',
        'Todo text not set correctly', todo);
    console.assert(todo.isCompleted === false,
        'Todo isCompleted not set correctly', todo);
}

function testCreateTodos() {
    console.log('------- Tests for createTodos ------ ');

    var todos = createTodos();

    console.assert(todos.length === 2,
        'Expected 2 todos', todos);
    console.assert(typeof todos[0].txt === 'string',
        'Expected todos in the arrasy', todos);
}

function testAddTodo() {
    console.log('------- Tests for addTodo ------ ');

    var val = 'NEW TODO';

    // Mocking
    var keepPrompt = prompt;
    prompt = function () { return val }
    addTodo();
    prompt = keepPrompt;

    console.assert(gTodos.length === 3,
        'Expected a new Todo in the todos', gTodos);

    console.assert(gTodos[2].txt === val,
        'Expected the new Todo in the todos to be', val, gTodos);
}


function testPrintTodo() {
    console.log('------- Tests for printTodo ------ ');
    var todo = { txt: 'Test', isCompleted: false }

    function mockConsoleLog(strTodo) {

        console.assert(strTodo[0] === 'v' && todo.isCompleted ||
            strTodo[0] === 'x' && !todo.isCompleted ||
            'xv'.includes(strTodo[0]),
            'Expected valid output for printTodo', strTodo);
    }

    // Mocking
    var keepConsoleLog = console.log;
    console.log = mockConsoleLog;
    printTodo(todo);
    todo = { txt: 'Test', isCompleted: true };
    printTodo(todo);
    console.log = keepConsoleLog;

}

function testRemoveTodo() {

    var arrLenght = gTodos.length;
    var keepPrompt = prompt;

    if (arrLenght <= 0) {
        var val = 'NEW TODO';
        prompt = function () { return val }
        addTodo();
        arrLenght = gTodos.length;
    }
    //Remove
    var val = arrLenght - 1;
    var todo = gTodos[val];
    prompt = function () { return +val }
    removeTodo();

    console.assert(!gTodos.includes(todo),
        'Expected to remove the last todo from the gTodos : ', todo);

    prompt = keepPrompt;

}

function testupdateTodo() {
     var keepPrompt = prompt;
     prompt = function () { return 1 }
     var beforeUpadte = gTodos[1]
     updateTodo()
    console.assert(todo.isCompleted !== beforeUpadte.isCompleted ,
         'Expected isCompleted to be:' ,!beforeUpadte.isCompleted, gTodos) 
    console.assert()
     
    prompt = keepPrompt;
}


