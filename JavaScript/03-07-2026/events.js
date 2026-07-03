const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    console.log("Clicked");
})

document.addEventListener("keydown", (event) => {
    console.log(event);
});

const follower = document.querySelector(".follower");

document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    follower.style.left = x + "px";
    follower.style.top = y + "px";
})