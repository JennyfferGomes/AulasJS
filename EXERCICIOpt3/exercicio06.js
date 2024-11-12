let numeroSorteado = 5;
let numeroDigitado;
do {
    numeroDigitado = parseInt(prompt(`Digite um número`));
    if (numeroDigitado === numeroSorteado){
        parseInt(alert(`Parabéns, você encontrou o número sorteado!`));
    }
} while (numeroDigitado !== numeroSorteado);
