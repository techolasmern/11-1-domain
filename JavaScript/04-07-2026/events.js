// form events, media events

const usernameElement = document.getElementById("username");

console.log(usernameElement.value);


const form = document.getElementById("login");

form.addEventListener("input", event => {
    // console.log(event.target.name, event.target.value);
})

form.addEventListener("submit", event => {
    event.preventDefault();
    // const username = document.getElementById("username").value;
    // const password = document.getElementById("password").value;
    const username = document.frm.username.value;
    const password = document.frm.password.value;
    console.log(username, password)
})