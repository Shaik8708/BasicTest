let loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit", (ele) => {
    ele.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let allData;

    fetch("http://localhost:1212/users")
    .then((response) => response.json())
    .then((json) => (allData = json));

    setTimeout(() => {
        let user = allData.find(user => user.email === email)

        if(user){
            if(user.password == password){
                window.location.href = "home.html"
            }else{
                console.error("incorrect password");
            }
        }else {
            console.error("email is not registered");
        }
        
    }, 500);
})
