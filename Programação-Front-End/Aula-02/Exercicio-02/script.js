// URLs das imagens que vamos usar.
// Usar variáveis para os links torna o código mais limpo e fácil de manter.
const urlImagem1 = "Captura de tela 2026-02-10 115422.png"; // Uma imagem de um gato
const urlImagem2 = "Captura de tela 2026-02-10 134213.png"; // Uma imagem de um cachorro

// Função para trocar a imagem para a "imagem1" (gato )
function trocarParaImagem1() {
    // Encontra o elemento da imagem pelo seu ID
    const imagem = document.getElementById("foto");
    
    // Usa setAttribute para alterar o valor do atributo 'src'
    imagem.setAttribute("src", urlImagem1);
    
    console.log("Imagem alterada para: Gato (http.cat )");
}

// Função para trocar a imagem para a "imagem2" (cachorro)
function trocarParaImagem2() {
    // Encontra o elemento da imagem pelo seu ID
    const imagem = document.getElementById("foto");
    
    // Usa setAttribute para alterar o valor do atributo 'src'
    imagem.setAttribute("src", urlImagem2);

    console.log("Imagem alterada para: Cachorro (placedog.net)");
}

// Função para exibir o valor atual do atributo 'src' no console
function mostrarSrcNoConsole() {
    // Encontra o elemento da imagem pelo seu ID
    const imagem = document.getElementById("foto");
    
    // Usa getAttribute para ler o valor do atributo 'src'
    const srcAtual = imagem.getAttribute("src");
    
    // Imprime o valor lido no console do navegador
    console.log("O atributo 'src' da imagem atualmente é:", srcAtual);
}
