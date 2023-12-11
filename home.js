let email = localStorage.getItem("email");
let user;
fetch("http://localhost:1212/users?email=" + email)
  .then((response) => response.json())
  .then((json) => (user = json));

setTimeout(() => {
  console.log(user);
}, 500);

function signOut() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("email");
  window.location.href = "login-page.html";
}
