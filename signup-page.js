let signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (ele) => {
  ele.preventDefault();
  let userName = document.getElementById("userName").value;
  let name = document.getElementById("name").value;
  let pass = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  let allData;

  fetch("http://localhost:1212/users")
    .then((response) => response.json())
    .then((json) => (allData = json));

  setTimeout(() => {
    let user = allData.find(user => user.email === email)

    if (!user) {
      fetch("http://localhost:1212/users", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          userName: userName,
          email: email,
          password: pass,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }else{
        console.error("email already exists");
    }
  }, 200);
});
