const btn = document.getElementById("btn");

const follower = document.querySelector(".follower");
const customContextMenu = document.getElementById("custom-context-menu");

btn.addEventListener("click", () => {
    console.log("Clicked");
})

document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    const x = event.clientX;
    const y = event.clientY;
    customContextMenu.style.top = y + "px";
    customContextMenu.style.left = x + "px";
    customContextMenu.style.display = "block";
});

customContextMenu.addEventListener("click", () => {
    customContextMenu.style.display = "none";
})

document.addEventListener("mousemove", (event) => {
    
    // follower.style.display = "none"
})