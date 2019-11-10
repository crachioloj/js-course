import { setFilters } from './filters';
import { createTodo, loadTodos } from './todos';
import { renderTodos } from './views';

// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports

// Render initial todos
renderTodos();

// Set up search text handler
document.querySelector('#filter-text').addEventListener('input', e => {
    setFilters({
        searchText: e.target.value,
    });
    renderTodos();
});

// Set up checkbox handler
document.querySelector('#hide-completed').addEventListener('change', e => {
    setFilters({
        hideCompleted: e.target.checked,
    });
    renderTodos();
});

// Set up form submission handler

document.querySelector('#todo-form').addEventListener('submit', e => {
    e.preventDefault();
    const inputValue = e.target.elements.todoInput.value.trim();
    if (inputValue.length <= 0) {
        return;
    }

    if (inputValue.length > 0)
    {
        createTodo(inputValue);    
        renderTodos();
        e.target.elements.todoInput.value = '';
    }
});

// Bonus: Add a watcher for local storage
window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTodos();
        renderTodos();
    }
});