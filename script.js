const content_div = document.querySelector("#content");
const clear_btn = document.querySelector("#clearbtn");
const slider_input = document.querySelector("#slider");
const slideValue_p = document.querySelector("#slideValue");
const color_input = document.querySelector("#color");

let color = "black";

setNumberOfGrids();

clear_btn.addEventListener("click", clear);


function clear(){
    setNumberOfGrids();
    const grids_div = document.querySelectorAll(".grids");

    grids_div.forEach((div) => {
        div.classList.add("clear");
    })
};



slider_input.addEventListener("click", function() {
    clear();
    slideValue_p.textContent = slider_input.value;
    setNumberOfGrids();
});

color_input.addEventListener("change", function() {
    color = color_input.value;
    clear();
    setNumberOfGrids();
})





function setNumberOfGrids() {
    var removeElements = document.getElementsByClassName("grids");
    while(removeElements.length > 0){
        content_div.removeChild(removeElements[0]);
    }


    let gridCount = slider_input.value;

    for (let i = 0; i < gridCount * gridCount; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add('grids');
        content_div.appendChild(newDiv);
        content_div.setAttribute("style", `grid-template-columns: repeat(${gridCount}, 1fr);
        grid-template-row: repeat(${gridCount}, 1fr);`)
    }
    
    const grids_div = document.querySelectorAll(".grids");

//     var isMousedown = false;
//     grids_div.forEach((div) => 
//         div.addEventListener("mousedown", function() {
//             isMousedown = true;
//         }
//     ))
//     grids_div.forEach((div) => 
//         div.addEventListener("mouseup", function() {
//             isMousedown = false;
//         }
//     ))
//     grids_div.forEach((div) => 
//     div.addEventListener("mousemove", function() {
//         if (isMousedown) {
//             console.log("filled");
//             div.classList.remove("clear");
//             div.setAttribute("style", `background: ${color}`)
//         }
//     }
// ))

    grids_div.forEach((div) => 
    div.addEventListener("mousemove", function() {
            console.log("filled");
            div.classList.remove("clear");
            div.setAttribute("style", `background: ${color}`)
    }
))
    
}







