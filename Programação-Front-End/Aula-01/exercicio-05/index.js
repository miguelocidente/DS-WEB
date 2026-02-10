
let capital = Number(window.prompt("Digite o capital inicial investido:"));
let taxa = Number(window.prompt("Digite a taxa de juros mensal (%):"));
let tempo = Number(window.prompt("Digite o tempo do investimento (em meses):"));

let i = taxa / 100;

let montante = capital * Math.pow((1 + i), tempo);

alert("O montante do investimento é: R$ " + montante.toFixed(2));
