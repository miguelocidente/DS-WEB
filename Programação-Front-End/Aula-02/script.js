//funções em JavaScript


function somarNumeros(num1, num2) {
    return num1 + num2;
}

let resultado = somarNumeros(5, 10);
console.log(resultado);
 
resultado =  somarNumeros(50, 100);
console.log(resultado);

// Trabalhando com data e hora

let dataAtual = new Date();
console.log(dataAtual.toISOString());

let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth() + 1;
let dia = dataAtual.getDate();
let hora = dataAtual.getHours();
let minuto = dataAtual.getMinutes();
let segundo = dataAtual.getSeconds();

console.log(`${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`);

//================================outro exemplo de date========================

let hoje = new Date();
let diasParaAdicionar = 10;

//criar nova data apartir do dia atual
let novaData = new Date(hoje);
novaData.setDate(novaData.getDate() + diasParaAdicionar);

console.log(novaData.toLocaleDateString());


//=============diferença de dias ===================

let diferencaDias = diferencaDias (100 * 60 * 60 * 24);
console.log(`diferencaDias: ${DiferencaDias} dias`);

//====================substituir palavars em um texto==========================

let texto = "O HTML é muito bom, o HTML é essencial.";
let novoTexto = texto.replace("HTML", "javaScript");


var valor = document.getElementById ("Olá mundo!").innerHTML;
console.log(valor);

//========usando o set atributte=================

document.getElementById("foto").setAttribute("src","c:\\Users\\49091481838\\Pictures\\Screenshots\\Captura de tela 2026-01-30 155309.png")

console.log(document.getElementById("foto").getAttribute("src"));


//alterando propriedades do CSS  
document.getElementById("conteudo").style.backgroundColor ="lightblue";
document.getElementById("foto").style.width = "500px";


//===========criando uma função para um botão=================

function mudarTamanho() {
    document.getElementById("foto").style.width = "1000px";
}