# Recupera los orbes

Misión M1 · El Despertar del DOM — Web Development I.

## Cómo probarlo

Abre index.html en el navegador (o con Live Server). 
Inicial la partida con el botón A o el botón START, y dirige la cadena de orbes con la cruceta de botones de dirección, las flechas del teclado, o las teclas AWSD en su defecto.

El objetivo es conseguir recuperar la mayor cantidad de orbes sin chocar con los bordes de la pantalla o la propia cadena, similar al juego Snake.


## Uso de IA
Usé Gemini CLI (VS Code) como una manera rápida de corregir errores de CSS y el flujo del programa en JavaScript, como herramienta de debugeo.

Ejemplo de promp real: 
@snake.js @index.html @style.css Se produce el error: Uncaught TypeError: Cannot read properties of undefined (reading 'add') 
at placeEnergy (snake.js:83:26)
at draw (snake.js:49:5)
at startGame (snake.js:150:5)
at snake.js:186:1. 
Encuentras algún otro error grave en el flujo del programa (todavía no está acabado,  solo encuentra errores que impidan el flujo en lo que ya hay hecho). 

Desarrollé la web a mano, utilizando el asistente únicamente para debugear código ya realizado en caso necesario.

## Autopsia
1. Genero las celdas de manera dinámica en el script en vez del HTML, almacenándolas en una variable, gracias a la que puedo acceder a las celdas más tarde para modificar sus atributos CSS a través del la función cellAt(), con la que calculo el índice de la celda en la lista partiendo de sus coordenadas x e y.
Esta solución simplificaba tener que acceder al DOM cada vez que necesitase acceder a una celda, y el método cellAt() simplifica la manera de calcular el índice de la celda en la lista.

2. Para simular el avance de la cadena, planteé calcular la nueva posición de cada orbe, pero acabé simplemente añadiendo uno nuevo como head, y eliminando el último si no se había comido un orbe en ese movimiento, manteniendo la longitud de la cadena.

## Authors
[Nicolás Puebla](https://github.com/Syroko8) 