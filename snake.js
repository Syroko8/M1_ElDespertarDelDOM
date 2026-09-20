const boardSize = 15;
const snakeSpeed = 140;

const board = document.getElementById('board');

const cells = [];

const init = () => {
    

};

const generateCells = () => {

    for (let i = 0; i < boardSize*boardSize; i++) {
        const newCell = document.createElement('div');
        newCell.className = 'cell';
        board.appendChild(newCell);
        cells.push(newCell);
    }    
}

/**Inicio del programa*/
generateCells();