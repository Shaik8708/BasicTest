let email = localStorage.getItem("email");
let user;
fetch("http://localhost:1212/users?email=" + email)
  .then((response) => response.json())
  .then((json) => (user = json));

setTimeout(() => {
    localStorage.setItem("user",  JSON.stringify(user[0]));
  document.getElementById("userName").innerHTML = user[0].name
  document.querySelector(".overlay").style.display = 'none';
  document.body.style.cursor='default';
}, 500);

function signOut() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("email");
  window.location.href = "login-page.html";
}

function updateUser(){
    window.location.href = "update-user-page.html";
}
