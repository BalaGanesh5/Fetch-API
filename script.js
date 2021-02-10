document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getUsers").addEventListener("click", getUser);
document.getElementById("getPost").addEventListener("click", getPosts);
document.getElementById("addPost").addEventListener("submit", addPosts);
function getText() {
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("output").innerHTML = data;
    })
    .catch((error) => console.log(error));
}

function getUser() {
  fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
      let output = `<h1 class="display-3 mb-4">Users</h1>`;
      data.forEach(function (user) {
        output += `
        <li class="list-group-item">ID : ${user.id}</li>
        <li class="list-group-item">Name : ${user.username}</li>
        <li class="list-group-item">Email: ${user.email}</li>
        <br>
      `;
      });
      document.getElementById("usersop").innerHTML = output;
    })
    .catch((error) => console.log(error));
}

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let output = `<h1>Get Post</h1>`;
      data.forEach(function (user) {
        output += `
        <div class="card card-body mb-3">
          <h3>${user.title}</h3>
          <p>${user.body}</p>
        </div>
      `;
      });
      document.getElementById("usersop").innerHTML = output;
    })
    .catch((error) => console.log(error));
}

function addPosts(e) {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */* ",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}