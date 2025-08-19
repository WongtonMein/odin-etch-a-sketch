let mainGrid = document.getElementById("container");
let currentMode = "classic"
const defaultGridLength = 10;
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
let gridLength
let cellSize

let bttnDrawGrid = document.getElementById("create-grid");
let bttnClassic = document.getElementById("classic");
let bttnRGB = document.getElementById("rgb");
let bttnGradient = document.getElementById("gradient");
let bttnReset = document.getElementById("reset");

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

function setGridLength() {
    let gridLength = defaultGridLength
    do {
        let input = prompt("How many squares do you want per side? (max 100)")
        gridLength = parseInt(input)
    } while (gridLength < 1 || gridLength > 100 || isNaN(gridLength));
    return gridLength
};

function setCellSize() {
    if (viewportWidth <= viewportHeight) {
        return parseInt((viewportWidth - 200) / gridLength)
    } else {
        return parseInt((viewportHeight - 200) / gridLength)
    };
};

function drawContainer() {
    let mainGridLength
    if (viewportWidth <= viewportHeight) {
        mainGridLength = parseInt(viewportWidth - 200)
    } else {
        mainGridLength = parseInt(viewportHeight - 200)
    }
    mainGrid.style.width = mainGridLength + "px";
    mainGrid.style.height = mainGridLength + "px";
    mainGrid.style.border = "1px solid black";
}

function drawGrid(gridLength, cellSize) {
    mainGrid.replaceChildren()
    for (i = 0; i < gridLength; i++) {
        let column = document.createElement("div");
        for (j = 0; j < gridLength; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            // cell.style.border = "0.5px solid grey";
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


// add function to set and draw container first
drawContainer()
bttnDrawGrid.addEventListener("click", () => {
    gridLength = setGridLength();
    cellSize = setCellSize();
    drawGrid(gridLength, cellSize);
}); // functional
// highlightCell();
    


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
