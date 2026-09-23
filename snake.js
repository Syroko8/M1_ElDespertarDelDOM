// Variables globales.
const boardSize = 15;
const chain = []
const cells = [];
let energy = {x:0, y:0};
let direction = 'right';
let score = 0;
let best = 0;
let running = false;
let speed = 150;
let interval = null;

// Elementos del DOM.
const board = document.getElementById('board');
const scoreCounter = document.getElementById('score');

const directions = {
    'up':   {x: 0, y: -1},
    'down': {x: 0, y: 1},
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
        cell.style.opacity = 1;
    });

    // Colocamos la enegía en el tablero.
    placeEnergy();

    // Pintar cadena de energía.
    drawChain();
}

/**
 * Genera la posición aleatoria de la nueva bola, que no coincida con la cadena existente.
 */
const generateEnergy = () => {
    let newX, newY;
    do {
        newX = Math.floor(Math.random() * boardSize);
        newY = Math.floor(Math.random() * boardSize);
    } while (isOnChain(newX, newY));
    energy.x = newX;
    energy.y = newY;
}

/**
 * Comprueba que las coordenadas recibidas no estén sobre la cadena.
 */
const isOnChain = (x, y) => {
    return chain.some(cell => cell.x === x && cell.y === y);
}

/**
 * Añade la casilla con el nuevo orbe al tablero.
 */
const placeEnergy = () => {
    const energyCell = cellAt(energy.x, energy.y);
    energyCell.classList.add('energy');
} 

/**
 * Devuelve el elemento del array de celdas según la posición en coordenadas.
 */
const cellAt = (x, y) => {
    return cells[y * boardSize + x];
}

/**
 * Colóca la cadena de orbes en sus celdas.
 */
const drawChain = () => {
    const head = cellAt(chain[0].x, chain[0].y);
    head.classList.add('head');

    let i = 0;
    chain.forEach(bodyOrb => {
        const bodyCell = cellAt(bodyOrb.x, bodyOrb.y);
        /* Disminuimos la opacidad según retrocedamos, con una mínuma de 0.3.
        aumentando 0.1 cada vez.*/
        bodyCell.classList.add('chain');
        bodyCell.style.opacity = Math.max(0.3, 1 - i * 0.1);
        i++;
    });
}

/**
 * Efectúa un ciclo del juego, un movimiento de la cadena.
 */
const step = () => {
    // Nueva posición de la cabeza.
    const head = {
        x: chain[0].x + directions[direction].x,
        y: chain[0].y + directions[direction].y
    }

    // Comprobamos que la cadena no esté tocando un borde, ni a sí misma.
    const hittingWall = head.x < 0 || head.x >= boardSize ||
     head.y < 0 || head.y >= boardSize;
    if (hittingWall || isOnChain(head.x, head.y)) {
        // Game over.
        return;
    }

    // Añadimos la cabeza al inicio de la lista.
    chain.unshift(head);

    // Si no ha comido, quitamos el último elemento.
    if (head.x != energy.x || head.y != energy.y) {
        chain.pop();
    } else {
        // Si ha comido aumentamos el contador y no retiramos el último elemento.
        score++;
        scoreCounter.textContent = `SCORE ${score}`;
        // Generamos un nuevo orbe.
        generateEnergy();
    }
    draw();
}

const endGame = () => {
    
    // clearInterval(interval);
}

const startGame = () => {
    // Generamos celdas.
    generateCells();
    // Generamos un primer orbe.
    generateEnergy();
    // Generamos cadena de inicial.
    chain.push({x: 7, y: 7});
    chain.push({x: 6, y: 7});
    // Iniciamos juego.
    running = !running;
    interval = setInterval(step, speed);
}

const resetGame = () => {

}

/**
 * Función que cambia la dirección en la que se mueve la cadena, evitando 
 * que haga un giro de 180º.
 */
const changeDirection = (newDirection) => {
    // Si no estamos jugando, no haremos nada.
    if (!running) return; 

    // Comprobamos que no se esté intentando dar la vuelta.
    const newDirectionCoord = directions[newDirection];
    const actualDirection = directions[direction];
    if (actualDirection.x === -newDirectionCoord.x && actualDirection.y === -newDirectionCoord.y) return;

    direction = newDirection;
}

/**
 * Event listener que captura teclas para afectar el movimiento de la cadena.
 */
document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    // Comprobamos que la tecla esté relacionada con un cambio de sentido.
    if (keys[key] != undefined) {
        /* Evitamos que la web haga scroll al usar las teclas (No debería ocurrir ya que la 
        web no tiene scroll).*/
        event.preventDefault();
        changeDirection(keys[key]); 
    } 
})

/**Inicio del programa*/
startGame();