console.log('Todos');

var gTodos;
var gArchive = [];
var gAllTodo = [];
init();

function init() {
    gTodos = getTodos();
    renderTodos(gTodos)
}



function renderTodos(todos) {
    var elTodos = document.querySelector('.todos');
    var strHtmls = '';

    // Even better with Map
    todos.forEach(function (todo, idx) {
        var strHtml = `
                <li>
                  <input type="checkbox" id="c${idx}" onchange="toggleTodo(${idx})" />
                  <label for="c${idx}"><span></span>${todo.txt}</label>
                  <button class="delButton" onclick="deletetodo(${idx})">delete</button>
                </li>
        `
        strHtmls += strHtml
    });
    elTodos.innerHTML = strHtmls;
}



function getTodos() {
    var todos = [];

    todos.push(getTodo('Style with Flexbox'));
    todos.push(getTodo('Master your HTML'));
    todos.push(getTodo('Practice Array Extras'));

    return todos;
}

function getTodo(txt) {
    return {
        txt: txt,
        isDone: false,
        archive: false
    }
}


function toggleTodo(idx) {
    gTodos[idx].isDone = !gTodos[idx].isDone;
}
function addTodo() {
    var todo = document.getElementById("addTodo").value;
    gTodos.push(getTodo(todo));
    renderTodos(gTodos);

}
function deletetodo(idx) {
    // var del = gTodos.slice(idx, 1);
    var del = gTodos.splice(idx, 1);
    gArchive = gArchive.concat(del);
    renderTodos(gTodos);
}

function showDone() {

    var doneTodos = gTodos.filter(function (todo) {
        return todo.isDone === true;
    })
    doneTodos.forEach(function(element) {
        element.isDone
    });
    renderTodos(doneTodos);
    console.log(doneTodos);

}

function showActive() {

    var activeTodos = gTodos.filter(function (todo) {
        return todo.isDone === false;
    })
    
    renderTodos(activeTodos);
}

function showAll() {

    gAllTodo = gTodos.concat(gArchive);
    console.log(gAllTodo)
    renderTodos(gAllTodo);
}

