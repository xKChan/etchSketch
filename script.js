const TOTALROWS = 16;
const TOTALCOLUMNS = 16;


const container = document.querySelector('#container');
const reset = document.querySelector('button');


// Function to create a grid
function createGrid(TOTALCOLUMNS, TOTALROWS) {
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

createGrid(TOTALCOLUMNS, TOTALROWS);


// Draw lines, when hovering over div
const draw = document.querySelectorAll('.rows');
draw.forEach(row => {
    row.addEventListener('mouseover', () => {
        row.classList.add('hovered');
    });
});

reset.addEventListener('click', () => {
    draw.forEach(row => {
        row.classList.remove('hovered');
    })

});

