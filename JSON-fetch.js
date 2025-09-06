// fetch('https://jsonplaceholder.typicode.com/todos/1') // fetch promised but do not return now
//     .then(response => response.json())
//     .then(json => console.log(json))



const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1') // promise of response
    .then(response => response.json()) // promise of json data
    .then(json => console.log(json))
}