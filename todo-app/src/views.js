import { getTodos, removeTodo, saveTodos, toggleTodo } from './todos'
import { getFilters } from './filters';

// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
    const todos = getTodos();
    const { hideCompleted, searchText } = getFilters();
    const filteredTodos = todos.filter(todo => {
        if (hideCompleted && todo.completed) {
            return false;
        }

        const textMatch = todo.text.toLowerCase().includes(searchText.toLowerCase());
        return textMatch;
    })

    const todosEl = document.querySelector('#todos');
    todosEl.innerHTML = '';
    
    const incompleteTodos = todos.filter(function (item) {
        return !item.completed;
    })
    const leftToDoCountHeader = generateSummaryDom(incompleteTodos);
    todosEl.appendChild(leftToDoCountHeader);

    if (filteredTodos.length > 0) {
        filteredTodos.forEach(todo => {
            const newTodoElement = generateTodoDom(todo);        
            todosEl.appendChild(newTodoElement);
        })
    } else {
        const emptyMessageEl = document.createElement('p');
        emptyMessageEl.textContent = 'There are no to-dos to show';
        emptyMessageEl.classList.add('empty-message');
        todosEl.appendChild(emptyMessageEl);
    }
}

// generateTodoDOM
// Arguments: todo
// Return value: the todo element
const generateTodoDom = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');

    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todo.completed;
    containerEl.appendChild(checkbox);
    checkbox.addEventListener('change', e => {
        toggleTodo(todo.id);
        renderTodos();
    });

    if (todo.text.length > 0) {
        todoText.textContent = todo.text;
    } else {
        todoText.textContent = 'Unnamed todo';
    }

    containerEl.appendChild(todoText);

    // Set up container
    todoEl.classList.add('list-item');
    containerEl.classList.add('list-ite__container');
    todoEl.appendChild(containerEl);

    removeButton.textContent = 'Remove';
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id);
        renderTodos()
    })
    return todoEl;
}

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
const generateSummaryDom = (incompleteTodos) => {
    const leftToDoCountHeader = document.createElement('h2');
    leftToDoCountHeader.classList.add('list-title')
    const todoText = incompleteTodos.length === 1 ?
        `You have ${incompleteTodos.length} todo left!` :
        `You have ${incompleteTodos.length} todos left!`;

    leftToDoCountHeader.textContent = todoText;
    return leftToDoCountHeader;
}

// Make sure to set up the exports
export { renderTodos };