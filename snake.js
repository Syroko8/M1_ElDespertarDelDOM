// Variables globales.
const boardSize = 15;
const chain = []
const cells = [];
const energy = {x:0, y:0};

// Elementos del DOM.
const board = document.getElementById('board');


const directions = {
    'up':   {x: 0, y: 1},
    'down': {x: 0, y: -1},
    'left': {x: -1, y: 0},
    'right': {x: 1, y: 0}
}

const keys = {
    'arrowup': 'up',        'w': 'up',
    'arrowleft': 'left',    'a': 'left',
    'arrowright':'right',   'd':'right',
    'arrowdown':'down',     's':'down'
}

const generateCells = () => {

    for (let i = 0; i < boardSize*boardSize; i++) {
        const newCell = document.createElement('div');
        newCell.className = 'cell';
        board.appendChild(newCell);
        cells.push(newCell);
    }    
}

const draw = () => {
    // Limpiamos celdas.
    cells.forEach(cell => {
        cell.className = 'cell';
    });

    const newEnergy = generateEnergy();

    // Cambiar estilo de la celda con nueva energía.


    // Pintar cadena de energía.
}

/**
 * Genera la posición aleatoria de la nueva bola, que no coincida con la cadena existente.
 */
const generateEnergy = () => {
    let newX, newY;
    do {
        newX = Math.random() * 15;
        newY = Math.random() * 15;
    } while (isNotOnChain());
    energy.x = newX;
    energy.y = newY;
}

/**
 * Comprueba que la nueva energía generada no está sobre la cadena.
 */
const isNotOnChain = (x, y) => {
    chain.forEach(cell => {
        x === cell.x && y === cell.y ? false : true;
    });
    return true;
}

/**
 * Devuelve el elemento del array de celdas según la posición en coordenadas.
 */
const cellAt = (x, y) => {
    return cells[y * size + x];
}


/**Inicio del programa*/
generateCells();