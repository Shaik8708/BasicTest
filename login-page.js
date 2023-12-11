let loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit", (ele) => {
    ele.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let allData;

    fetch("http://localhost:1212/users")
    .then((response) => response.json())
    .then((json) => (allData = json));

    if(email && password){

        
        setTimeout(() => {
            let user = allData.find(user => user.email === email)
            
            if(user){
                if(user.password == password){
                    window.location.href = "home.html"
                    localStorage.setItem('loggedIn',true);
                    localStorage.setItem('email',email);
                }else{
                    alert("incorrect password")
                }
            }else {
                alert("Email is not registered.")
            }
            
        }, 500);
    }else {
        alert("Fill the empty fields")
    }
})
