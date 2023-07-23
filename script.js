const TOTALROWS = 16;
const TOTALCOLUMNS = 16;

// Selects container class div
const container = document.querySelector('#container');


// Function to create a grid
function createGrid() {
    // Create grid Columns
    for (let i = 0; i < TOTALCOLUMNS; i++) {
        const createGrid = document.createElement('div');
        createGrid.classList.add('cols');


        // Create grid Rows
        for (let j = 0; j < TOTALROWS; j++) {
            const createRows = document.createElement('div');
            createRows.classList.add('rows');
            createGrid.appendChild(createRows);
        }
        container.appendChild(createGrid);
    }
}



createGrid();
