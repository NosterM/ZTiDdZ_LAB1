
var attempt = 3
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user1" && password === "1234") {
        alert("Login successfully");
        location.reload();
    } else {
        if ( attempt === 0){
            alert("No more attempts to login");
            return 0;
        }
        attempt--
        alert(`Wrong login or password, you have ${attempt} more attempts`);
        loginErrorMsg.style.opacity = 1;
    }
})









