// Função que será chamada pelo clique do botão
function alterarDiv() {
    
    // 1. Encontrar a div pelo seu ID e guardá-la em uma variável
    const divConteudo = document.getElementById("conteudo");

    // 2. Alterar o texto da div usando a propriedade .innerHTML
    //    (innerHTML permite adicionar texto e até mesmo tags HTML dentro do elemento)
    divConteudo.innerHTML = "div transformada por java script";

    // 3. Alterar a cor de fundo da div usando a propriedade style.backgroundColor
    //    (Note que a propriedade CSS "background-color" se escreve "backgroundColor" em JavaScript)
    divConteudo.style.backgroundColor = "lightblue"; // Você pode usar nomes de cores ou códigos como "#87CEEB"

    // 4. Imprimir o conteúdo atual da div no console do navegador
    //    Isso confirma que a alteração foi feita no elemento.
    console.log("Conteúdo atual da div:", divConteudo.innerHTML);
}