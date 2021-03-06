function createTodoElement(todo) {
    if (!todo) return null;
    const liElement = document.createElement('li');
    liElement.textContent = todo.title;
    liElement.dataset.id = todo.id;

    return liElement;
}
function renderTodoList(todoList, ulElementId) {
    if (!Array.isArray(todoList) || todoList.length === 0) return;
    //find ul element
    //loop through todoList
    //each todoList --> create li element --> append to ul
    const ulElement = document.getElementById(ulElementId);
    if (!ulElement) return;

    for (const todo of todoList) {
        const liElement = createTodoElement(todo);

        ulElement.appendChild(liElement);
    }
}
// main
(() => {
    console.log('work');

    const todoList = [
        { id: 1, title: 'Learn JS' },
        { id: 2, title: 'Learn ReactJS' },
        { id: 3, title: 'Learn NextJS' },
    ];

    renderTodoList(todoList, 'todoList');
})();
