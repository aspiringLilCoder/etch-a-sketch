const content_div = document.querySelector("#content");

let gridCount = 16;


for (let i = 0; i < gridCount; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add('grids');
    content_div.appendChild(newDiv);
}

