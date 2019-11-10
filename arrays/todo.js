const todoList = ["Study", "Code", "Eat", "Walk Luna", "Lift stuff"];

console.log(todoList);
console.log('');

const newTodoList = todoList.map(item => {
    let todoItem = {
        text: item,
        completed: false
    };
    return todoItem;
});

newTodoList[0].completed = true;
newTodoList[2].completed = true;
newTodoList[3].completed = true;

console.log(newTodoList);
console.log('');

const getThingsToDo = function(todos) {
    return todos.filter(function(todo, index) {
        return !todo.completed;
    })
}

const sortToDos = function(todos) {
    todos.sort(function(a, b) {
        if (!a.completed && b.completed) {
            return -1;
        }

        if (a.completed && !b.completed) {
            return 1;
        }

        return 0;
    });
}
sortToDos(newTodoList);

console.log(newTodoList);

/*

console.log(getThingsToDo(newTodoList));

let removeItemByText = function(itemList, text) {
    let index = itemList.findIndex(function(item) {
        return item.text.toLowerCase() === text.toLowerCase();
    })

    if (index <= -1)
    {
        return itemList;
    }

    return itemList.slice(0, index).concat(
        itemList.slice(index+ 1, itemList.length)
    );
}

console.log(removeItemByText(newTodoList, 'Eat'));

*/