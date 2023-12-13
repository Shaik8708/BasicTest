let user = JSON.parse(localStorage.getItem("user"));
let id = user.id
document.getElementById("name").value = user.name;
document.getElementById("userName").value = user.userName || "";
document.getElementById("email").value = user.email;
document.getElementById("password").value = user.password;
document.getElementById("age").value = user.age;
document.getElementById("city").value = user.city;
function back() {
  window.location.href = "home.html";
}
function showPassword() {
  let pw_ele = document.getElementById("password");
  if (pw_ele.type === "password") {
    pw_ele.type = "text";
  } else {
    pw_ele.type = "password";
  }
}

let updateForm = document.getElementById("updateForm")

updateForm.addEventListener("submit", (ele) => {
    ele.preventDefault()
    fetch("http://localhost:1212/users/"+id, {
      method: "PUT",
      body: JSON.stringify({
        name: document.getElementById("name").value,
        userName: document.getElementById("userName").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        age: document.getElementById("age").value,
        city: document.getElementById("city").value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json())
    .then((json) => {
        console.log(json)
        localStorage.setItem("user", JSON.stringify(json))
        alert("Profile updated succesfully.")
    });
})
