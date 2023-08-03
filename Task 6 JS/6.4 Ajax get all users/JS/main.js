let heading = document.getElementById("heading"),
  body = document.getElementById("body"),
  btn = document.getElementById("btn");

async function getUsers() {
   let usersdata = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );
  return usersdata;
}

function displayAllUsers(Users) {
  let cartona1 = "";

  for (let i = 0; i < Object.keys(Users[0]).length; i++) {
    cartona1 += `<th>${Object.keys(Users[0])[i]}</th>`;
  }
  heading.innerHTML = cartona1

  let cartona2 = "";
  for (let i = 0; i < Users.length; i++) {
    cartona2 += `<tr>
    <td>${Users[i].id}</td>
    <td class = "px-5">${Users[i].name}</td>
    <td>${Users[i].username}</td>
    <td>${Users[i].email}</td>
    <td>${Users[i].address.city}</td>
    <td>${Users[i].phone}</td>
    <td>${Users[i].website}</td>
    <td>${Users[i].company.name}</td>
    </tr>`;
  }
  body.innerHTML = cartona2
}

btn.addEventListener("click", async function () {
  const Users = await getUsers(); 
  displayAllUsers(Users); 
});