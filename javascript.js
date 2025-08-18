let mainGrid = document.getElementById("container");

// implement prompt to determine gridLength
let gridLength = 16;
let squareSize

function squareSizeFunc() {
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;
    if (viewportWidth <= viewportHeight) {
        squareSize = (viewportWidth - 200) / gridLength
    } else {
        squareSize = (viewportHeight - 200) / gridLength
    };
    return squareSize
}

function drawGrid() {
    squareSize = squareSizeFunc()

    for (i = 0; i < gridLength; i++) {
        let row = document.createElement("div");
        for (j = 0; j < gridLength; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.border = "1px solid grey";
            square.style.width = squareSize + "px";
            square.style.height = squareSize + "px";
            row.appendChild(square);
        }
        mainGrid.appendChild(row);
}};

drawGrid();

// dynamically resizes grid based on window size
// need to implement keep grid background color
    // function redrawGrid() {
    //     mainGrid.replaceChildren();
    //     drawGrid()
    // };
    // window.addEventListener("resize", redrawGrid);

// square.addEventListener("mouseover", () => {
//     let 
// })
