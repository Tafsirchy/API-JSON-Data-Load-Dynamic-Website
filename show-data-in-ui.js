const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"

    fetch(url)// to see the json
    .then(response => response.json())
    .then(json => {
        // console.log(json);
        displayPost(json);
    })
}

//array of object received from the api
const displayPost = (posts) => {
    // 1. get the container
    const postContainer = document.getElementById("post-container");
    console.log(postContainer);

    posts.forEach((post) => {
        console.log(post.title);
        // 2. create html element
        const li = document.createElement("li");
        // 3. set the content
        li.innerText = post.title;
        console.log(li);
        // 4. append the child
        postContainer.appendChild(li);


    })
}