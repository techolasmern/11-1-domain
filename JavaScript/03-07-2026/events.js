const btn = document.getElementById("btn");

const follower = document.querySelector(".follower");
const customContextMenu = document.getElementById("custom-context-menu");

btn.addEventListener("click", () => {
    console.log("Clicked");
})

document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    customContextMenu.style.display = "none";
    const x = event.clientX;
    const y = event.clientY;
    customContextMenu.style.top = y + "px";
    customContextMenu.style.left = x + "px";
    setTimeout(() => {
        customContextMenu.style.display = "block";
    }, 0);
});

customContextMenu.addEventListener("click", () => {
    customContextMenu.style.display = "none";
})

document.addEventListener("mousemove", (event) => {
    
    // follower.style.display = "none"
})