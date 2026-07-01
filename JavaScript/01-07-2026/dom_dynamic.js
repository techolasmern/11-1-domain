const handleToggle = () => {
    // const body = document.body;
    // const para = document.getElementById("content")
    // body.style.backgroundColor = body.style.backgroundColor == "black" ? "white" : "black";
    // para.style.color = (!para.style.color || para.style.color == "black") ? "white" : "black";
    // console.log(body.style.backgroundColor);
    // console.log(para.style.color)

    const counter = document.querySelector("#count");
    const count = Number(counter.innerText);
    console.log(count);
    counter.innerText = count + 1;

    const paragraph = document.createElement("p");
    paragraph.innerText = count;
    document.body.appendChild(paragraph);
}