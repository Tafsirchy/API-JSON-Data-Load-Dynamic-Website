const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"

    fetch(url)// to see the json
    .then(response => response.json())
    .then(json => {
        console.log(json);
        displayPost(json);
    })
}

const displayPost = (posts) => {
    // console.log(posts);
    posts.forEach((posts) => {
        console.log(posts);
    })
}