 /// async await
// const loadTodo = async() => {
//     const url = "https://jsonplaceholder.typicode.com/todos";

//     const response = await fetch(url)
//     const data = await response.json();
//     displayTodo(data)
//         // .then(response => response.json())
//         // .then(response => displayTodo(response))
// }







const loadTodo = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";

    fetch(url)
        .then(response => response.json())
        .then(response => displayTodo(response))
}

// {
//     "userId": 10,
//     "id": 191,
//     "title": "temporibus atque distinctio omnis eius impedit tempore molestias pariatur",
//     "completed": true
// }

displayTodo = (todos) => {
    // 1. get the container
    const todoContainer = document.getElementById("todo-container");
    // 2. empty the container
    todoContainer.innerHTML = "";
    // 3. loop through the array
    todos.forEach(todo => {
        // 4. create a div for each todo
        const todoCard = document.createElement("div")
        // 5. set the content
        todoCard.innerHTML = `
        <div class="toto-card">
            <p>${todo.completed == true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i> </p>`} 
            
            <h4>${todo.title}</h4>
        </div>`
        // 6. append the div to the container
        todoContainer.appendChild(todoCard)
    })
}

loadTodo()