const secreto = Math.floor(Math.random() * 100) + 1;
console.log("(psst... el secreto es", secreto, ")");


const form = document.getElementById("result");
const input = document.getElementById("textInput");
const resultText = document.getElementById();





/**
 
const form = document.getElementById("guessForm");
const element = document.getElementById("textInput");
const output = document.getElementById("result");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkInput();
});

const checkInput = () => {
    const intento = Number(element.value);

    if (intento === secreto) {
        output.textContent = "Correcto. Has encontrado el numero secreto.";
        output.style.color = "#247a45";
        element.disabled = true;
        form.querySelector("button").disabled = true;
    } else if (intento < secreto) {
        output.textContent = "El numero secreto es mayor. Sigue intentandolo.";
        output.style.color = "#136f63";
    } else {
        output.textContent = "El numero secreto es menor. Sigue intentandolo.";
        output.style.color = "#136f63";
    }

    element.select();
};

* 
 */