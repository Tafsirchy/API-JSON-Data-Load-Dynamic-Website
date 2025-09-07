// const data = () => {
    
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => console.log(json))
//     console.log("hello world")
//     console.log(true)
// }
// data()


const data = async() => {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // const json = await res.json();
    // console.log(json)

    // we will not use this now after await the fetch will be resolved and we will get the response
    // ----------------------------------------
        // .then(response => response.json())
        // .then(json => console.log(json))
    //-----------------------------------------

    console.log("hello world");
    const json = await res.json();
    console.log(json)
    console.log(true)
}
data()

