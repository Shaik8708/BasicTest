function signOut(){
    localStorage.removeItem('loggedIn');
    window.location.href = "login-page.html"
}