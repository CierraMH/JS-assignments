let myPosts = "http://jsonplaceholder.typicode.com"
// .then((response) => response.json())
// .then((json) => console.log(json));

function getAllPost(){
    fetch(`${myPosts}/posts`)
    .then((response) => response.json())
    .then((json) => showResults("showResults", JSON.stringify(json)));
};

function getPostWithId(){
    fetch(`${myPosts}/posts/10`)
    .then((response) => response.json())
    .then((json) => showResults("showResults", JSON.stringify(json)));
};

function createNewPost(){
    fetch("http://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        body:JSON.stringify({
            title: "NewPost",
            body: "Random Stuff",
            userId: 15,
        }),
        headers: {"Content-type": "application/json; charset=UTF-8",
    },
    })
    .then((response) => response.json())
    .then((json) => showResults("showResults", JSON.stringify(json.id)));
};

function replacePost(){
    fetch("http://jsonplaceholder.typicode.com/posts/12",{
        method: "PUT",
        body:JSON.stringify({
            id: 12,
            title: "Replaced Post",
            body: "Random Stuff times two",
            userId: 12,
        }),
        headers: {"Content-type": "application/json; charset=UTF-8",
    },
    })
    .then((response) => response.json())
    .then((json) => showResults("showResults", JSON.stringify(json)));
}

function updatePost(){
    fetch("http://jsonplaceholder.typicode.com/posts/12",{
        method: "PATCH",
        body:JSON.stringify({
            title: "UpdatedPostTitle",
        }),
        headers: {"Content-type": "application/json; charset=UTF-8",
    }, 
    })
    .then((response) => response.json())
    .then((json) => showResults("showResults", JSON.stringify(json)));
}

function deletePost(){
    fetch("http://jsonplaceholder.typicode.com/posts/12", {
        method: "DELETE",
    })
    .then((response) => {
        if (response.ok){
            showResults("showResults", "Successfully deleted");
        } else {
            showResults("showResults", "Error deleting wanted post")
        }
    });
}

function showResults(elementId, result){
    const resultElement = document.getElementById(elementId);
    resultElement.innerHTML = result;
    resultElement.style.display = "block";
}
