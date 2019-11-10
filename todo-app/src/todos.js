import uuidv4 from 'uuid/v4';

// Setup the empty todos array
let todos = [];

// loadTodos
// Arguments: none
// Return value: none
const loadTodos = () => {    
    const todosJson = localStorage.getItem('todos');
    try {
        todos = todosJson ? JSON.parse(todosJson) : []
    } catch (e) {
        
        todos = [];
    }
};

// saveTodos
// Arguments: none
// Return value: none
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

// getTodos
// Arguments: none
// Return value: todos array
const getTodos = () => todos;

// createTodo
// Arguments: todo text
// Return value: none
const createTodo = (text) => {
    const todo = {
        id: uuidv4(),
        text: text,
        completed: false,
    };

    todos.push(todo);
    saveTodos();
};

// removeTodo
// Arguments: id of todo to remove
// Return value: none
const removeTodo = (id) => {
    const todoIndex = todos.findIndex(todo => {
        return todo.id === id;
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
        saveTodos();
    }
}

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
const toggleTodo = (id) => {
    const todoIndex = todos.findIndex(todo => {
        return todo.id === id;
    })

    if (todoIndex > -1) {
        const todo = todos[todoIndex]
        todo.completed = !todo.completed;
        saveTodos();
    }
}

loadTodos();

// Make sure to call loadTodos and setup the exports
export { createTodo, getTodos, loadTodos, removeTodo, saveTodos, toggleTodo };