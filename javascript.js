// window dims
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
let gridLength
let cellSize

// sidebar buttons
let bttnDrawGrid = document.getElementById("create-grid");
let bttnClassic = document.getElementById("classic");
let bttnRGB = document.getElementById("rgb");
let bttnGradient = document.getElementById("gradient");
let bttnReset = document.getElementById("reset");

// default settings
let gridContainer = document.getElementById("container");
let currentMode = "black"
const defaultGridLength = 10;
bttnClassic.style.background = "gainsboro";
const opacityIncrease = 0.1

// change cell draw color
bttnClassic.addEventListener("click", () => {
    currentMode = "black";
    bttnClassic.style.background = "gainsboro";
    bttnRGB.style.background = "white";
    bttnGradient.style.background = "white";
    console.log(currentMode);});
bttnRGB.addEventListener("click", () => {
    currentMode = "rgb";
    bttnClassic.style.background = "white";
    bttnRGB.style.background = "gainsboro";
    bttnGradient.style.background = "white";
    console.log(currentMode);}); 
bttnGradient.addEventListener("click", () => {
    // implement gradient function
    currentMode = "gradient";
    bttnClassic.style.background = "white";
    bttnRGB.style.background = "white";
    bttnGradient.style.background = "gainsboro";
    console.log(currentMode);}); 

function setGridLength() {
    let gridLength = defaultGridLength
    do {
        let input = prompt("How many squares do you want per side? (max 100)")
        gridLength = parseFloat(input)
    } while (gridLength < 1 || gridLength > 100 || isNaN(gridLength));
    return gridLength
};

function setCellSize() {
    if (viewportWidth <= viewportHeight) {
        return parseFloat((viewportWidth - 200) / gridLength)
    } else {
        return parseFloat((viewportHeight - 200) / gridLength)
    };
};

function drawContainer() {
    let gridContainerLength
    if (viewportWidth <= viewportHeight) {
        gridContainerLength = parseInt(viewportWidth - 200)
    } else {
        gridContainerLength = parseInt(viewportHeight - 200)
    }
    gridContainer.style.minWidth = gridContainerLength + "px";
    gridContainer.style.minHeight = gridContainerLength + "px";
    gridContainer.style.border = "1px solid black";
};

function drawGrid(gridLength, cellSize) {
    gridContainer.replaceChildren()
    for (i = 0; i < gridLength; i++) {
        let column = document.createElement("div");
        for (j = 0; j < gridLength; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            // cell.style.border = "0.5px solid grey";
            cell.style.width = cellSize + "px";
            cell.style.height = cellSize + "px";
            column.appendChild(cell);

            // figure out how to break off into separate function
            cell.addEventListener("mouseover", () => {
                if (currentMode === "black") {
                    cell.style.backgroundColor = "black";
                } else if (currentMode === "rgb") {
                    cell.style.backgroundColor = generateRandomColor();
                // } else if (currentMode === "gradient") {
                    // cell.style.backgroundColor = increaseCellOpacity(cell);
                }

            // reset
            bttnReset.addEventListener("click", () => {
                cell.style.backgroundColor = "white";
            }
            );
            });
        };
        gridContainer.appendChild(column);
    };
};

// extra credit
function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`
};

function increaseCellOpacity(cell) {
    let currentOpacity = parseFloat(window.getComputedStyle(cell).opacity);
    let newOpacity = Math.min(currentOpacity + opacityIncrease, 1.0);
    
    cell.setAttribute("style", `background-color: rgb(255, 255, 255, ${newOpacity}`)
};


drawContainer(); // functional
bttnDrawGrid.addEventListener("click", () => { // functional
    gridLength = setGridLength();
    cellSize = setCellSize();
    drawGrid(gridLength, cellSize);
}); 

// dynamically resizes grid based on window size
// need to implement keep grid background color
    // function redrawGrid() {
    //     gridContainer.replaceChildren();
    //     drawGrid()
    // };
    // window.addEventListener("resize", redrawGrid);

// square.addEventListener("mouseover", () => {
//     let 
// })
