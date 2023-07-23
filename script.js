const gridSize = 16;


const container = document.querySelector('#container');
const reset = document.querySelector('#reset');
const newGrid = document.querySelector('#newGrid');


// Functions

// Function to create a grid
function createGrid(gridSize) {
    // Create grid Columns
    for (let i = 0; i < gridSize; i++) {
        const createGrid = document.createElement('div');
        createGrid.classList.add('cols');


        // Create grid Rows
        for (let j = 0; j < gridSize; j++) {
            const createRows = document.createElement('div');
            createRows.classList.add('rows');
            createGrid.appendChild(createRows);
        }
        container.appendChild(createGrid);
    }
}

function draw() {
    const draw = document.querySelectorAll('.rows');

    draw.forEach(row => {
    row.addEventListener('mouseover', () => {
        row.classList.add('hovered');
    });
});
}

function resetGrid() {
    let resetGridLines = document.querySelectorAll('.rows');

    resetGridLines.forEach(gridItem => {
        gridItem.classList.remove('hovered');
    });
}

function newGridSize() {
    let x = 0;
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    do {
        x = prompt('New Grid Size:  (Min. 10 // Max 50');
    } while (x > 50 || x < 10);

    createGrid(x);
    draw();
}



createGrid(gridSize);
draw();


// Event Listeners for buttons
reset.addEventListener('click', resetGrid);
newGrid.addEventListener('click', newGridSize);































// function reset() {
//     reset.addEventListener('click', () => {
//         draw.forEach(row => {
//             row.classList.remove('hovered');
//         })
//     });
// }

// newGrid.addEventListener('click', () => {
//     while (container.firstChild) {
//         container.removeChild(container.lastChild);
//     }

//     // Create new grid
//     let newSize = prompt('Grid Size: ');
//     createGrid(newSize);
// });
