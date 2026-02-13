// Função para mudar o fundo para AZUL
function mudarParaAzul() {
    // 1. Seleciona o elemento <body> da página.
    //    O body é um elemento único, então podemos usar document.body.
    document.body.style.backgroundColor = "cornflowerblue";

    // 2. Seleciona o h1 pelo seu ID.
    const titulo = document.getElementById("titulo-principal");

    // 3. Altera o texto do título.
    titulo.innerHTML = "Página com Fundo Azul";
}

// Função para mudar o fundo para VERDE
function mudarParaVerde() {
    // 1. Seleciona o <body> e muda sua cor de fundo.
    document.body.style.backgroundColor = "lightgreen";

    // 2. Seleciona o h1 pelo seu ID.
    const titulo = document.getElementById("titulo-principal");

    // 3. Altera o texto do título.
    titulo.innerHTML = "Página com Fundo Verde";
}

// Função para mudar o fundo para VERMELHO
function mudarParaVermelho() {
    // 1. Seleciona o <body> e muda sua cor de fundo.
    document.body.style.backgroundColor = "lightcoral";

    // 2. Seleciona o h1 pelo seu ID.
    const titulo = document.getElementById("titulo-principal");

    // 3. Altera o texto do título.
    titulo.innerHTML = "Página com Fundo Vermelho";
}
