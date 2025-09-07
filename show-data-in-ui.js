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
// const displayPost = (posts) => {
//     // 1. get the container
//     const postContainer = document.getElementById("post-container");
//     console.log(postContainer);
//     postContainer.innerHTML = "";

//     posts.forEach((post) => {
//         console.log(post.title);
//         // 2. create html element
//         const li = document.createElement("li");
//         // 3. set the content
//         li.innerText = post.title;
//         console.log(li);
//         // 4. append the child
//         postContainer.appendChild(li);


//     })
// }



// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }
const displayPost = (posts) => {
    // 1. get the container 
    const postContainer = document.getElementById("post-container");
    // 2. empty the container
    postContainer.innerHTML = "";

    posts.forEach(post => {
        // 3. create html element
        const postCard = document.createElement("div");
        // 4. set the content
        postCard.innerHTML = `<div class="post-card">
        <h2>${post.title}</h2>
        <p>
          ${post.body}
        </p>
      </div>`

      // 3 append the element to the container
      postContainer.appendChild(postCard);
    });
}

loadPost();