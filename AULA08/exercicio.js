function calculodeImc (){
alert (`olá!`)
let altura = parseFloat(prompt(`Digite sua altura em metros:`));
let peso = parseFloat(prompt(`Digite seu peso em quilogramas:`));

let imc = peso / (altura * altura)

if (imc < 16.9) {
    alert (`Seu IMC está muito abaixo do peso, sendo ele ${imc.toFixed(2)}`);
}

else if (imc >= 17 && imc <= 18.4){
   alert (`Você está abaixo do peso, sendo ele ${imc.toFixed(2)}`);
}

else if (imc >= 18.5 && imc <= 24.9){
    alert (`Peso normal, sendo ele ${imc.toFixed(2)} `)
}

else if (imc >= 25 && imc <= 29.9){
    alert (`Você está acima do peso, sendo ele ${imc.toFixed(2)}`)
}
else if (imc >= 30 && imc <= 34.9){
    alert (`Obesidade de grau I, sendo ele ${imc.toFixed(2)}`)
}

else if (imc >= 35 && imc <= 40){
    alert(`Obesidade de grau II, sendo ele ${imc.toFixed(2)}`)
}

else if (imc > 40){
    alert(`Obesidade de grau III, sendo ele ${imc.toFixed(2)}`)
}

} 

calculodeImc() 