// form events, media events

const usernameElement = document.getElementById("username");

console.log(usernameElement.value);

const form = document.getElementById("login");

form.addEventListener("input", event => {
    // console.log(event.target.name, event.target.value);
})

// form.addEventListener("submit", event => {
//     event.preventDefault();
//     // const username = document.getElementById("username").value;
//     // const password = document.getElementById("password").value; // using id
//     const username = document.frm.username.value;
//     const password = document.frm.password.value; // using name
//     console.log(username, password)
// })

// media events

// play, pause, ended

const video = document.getElementById("video");

console.log(video);

video.addEventListener("play", () => {
    console.log("play");
})

video.addEventListener("pause", () => {
    console.log("pause");
})

video.addEventListener("ended", () => {
    console.log("ended");
})

// ---------------------------

const handleChange = () => {
    console.log("Change")
}

const handleSubmit = () => {
    console.log("Submit")
    return false;
}

// DOM -> document Object Model
// BOM -> browser Object Model

const currentTitle = document.title;

console.log(currentTitle);

window.addEventListener("blur", () => {
    document.title = "Come back 🥲"
})

window.addEventListener("focus", () => {
    document.title = currentTitle;
})

window.addEventListener("scroll", e => {
    console.log(window.scrollY);
})

window.addEventListener("resize", () => {
    console.log(window.innerHeight, window.innerWidth);
})