let signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (ele) => {
  ele.preventDefault();
  let name = document.getElementById("name").value;
  let pass = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  let allData;

  fetch("http://localhost:1212/users")
    .then((response) => response.json())
    .then((json) => (allData = json));

    if(name && pass && email){

        setTimeout(() => {
          let user = allData.find(user => user.email === email)
      
          if (!user) {
            fetch("http://localhost:1212/users", {
              method: "POST",
              body: JSON.stringify({
                name: name,
                email: email,
                password: pass,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then((response) => response.json())
              window.location.href = "home.html"
              localStorage.setItem('loggedIn',true);
              localStorage.setItem('email',enail);
          }else{
              alert("email already exists")
          }
        }, 500);
    }else{
        alert("fill all the empty fields")
    }

});
