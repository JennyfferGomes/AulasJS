// ENTRADA - DADOS | SAÍDA - DADOS
// NÃO TEM ENTRADA - DADOS | SAÍDA DADOS
// NÃO TEM ENTRADA  - DADOS | NÃO TEM SAÍDA - DADOS
// TEM ENTRADA | NÃO TEM SAÍDA

// MÉDIA ALUNO;
// nota1 e nota2;


function calcularMedia() {
    let media1 = Number(prompt(`digite sua média 1`));
    let media2 = Number(prompt(`digite sua média 2`));
    let media = (media1 + media2) / 2
    alert(`Sua média é: ${media}`)
}

calcularMedia();