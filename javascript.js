let mainGrid = document.getElementById("container");
let currentMode = "classic"
let gridLength = setGridLength()

function setGridLength() {
    let gridLength = parseInt(prompt("How many squares do you want per side? (max 100)"))
    if (gridLength >= 1 && gridLength <= 100) {
        return gridLength
    } else {
        alert("Invalid number of squares")
    } 
};

function setCellSize() {
    let viewportWidth = window.innerWidth; // functional
    let viewportHeight = window.innerHeight; // functional
    console.log(gridLength)
    if (viewportWidth <= viewportHeight) {
        return parseInt((viewportWidth - 200) / gridLength)
    } else {
        return parseInt((viewportHeight - 200) / gridLength)
    };
};

function setMode(mode) {
    switch(mode) {
        case "classic":
            playGrid();
            break;
        case "rgb":
            playRGB();
            break;
        case "gradient":
            playGradient();
            break;
    }
};

// function drawGrid() {
//     cellSize = setCellSize()

//     for (let i = 1; i < gridLength**2 + 1; i++) {
//         const cell = document.createElement("div");
//         cell.style.border = "1px solid black";
//         cell.style.width = cellSize + "px";
//         cell.style.height = cellSize + "px";
//         mainGrid.appendChild(cell);
//     }
// };

// old drawGrid() and highlightCells() functions
function drawGrid(gridLength, cellSize) {
    for (i = 0; i < gridLength; i++) {
        let column = document.createElement("div");
        for (j = 0; j < gridLength; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.border = "1px solid grey";
            cell.style.width = cellSize + "px";
            cell.style.height = cellSize + "px";
            column.appendChild(cell);
        }
        mainGrid.appendChild(column);
}};

// function highlightCell() {
//     let divCell = document.querySelector("div.cell");
//     divCell.classList.add("cellHighlight");
    
//     let cellHighlight = document.querySelector("cellHighlight");
//     cellHighlight.addEventListener("mouseover", () => {
//         cellHighlight.style.backgroundColor = "black";
//     })
// };

function main() {
    let cellSize = setCellSize();
    drawGrid(gridLength, cellSize); // functional
    // highlightCell();
    
}

main()

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
