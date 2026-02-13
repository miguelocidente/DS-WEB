// Criando o contador de itens
var contadorItem = 0;

function adicionar() {
    // Pede para o usuário digitar a tarefa
    const textoTarefa = prompt("Digite o nome da tarefa:");

    // Se o usuário digitou algo
    if (textoTarefa) {
        // Incrementa o contador de itens
        contadorItem++;

        // Cria o elemento da lista (li)
        let novoItem = document.createElement("li");

        // Define um ID único para o item
        const idItem = "item-" + contadorItem;
        novoItem.setAttribute("id", idItem);

        // Cria um <span> para o texto
        let textoNode = document.createElement("span");

        // *** ESTA É A LINHA QUE VOCÊ PRECISA MUDAR ***
        // Concatena o número do contador, o hífen e o texto da tarefa
        textoNode.textContent = contadorItem + " - " + textoTarefa + " ";
        
        // Adiciona o texto formatado ao item da lista
        novoItem.appendChild(textoNode);

        // Cria o botão "Remover"
        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.setAttribute("onclick", `remover('${idItem}')`);

        // Adiciona o botão ao item
        novoItem.appendChild(botaoRemover);

        // Adiciona o item completo à lista na tela
        document.getElementById("lista").appendChild(novoItem);
    }
}

// Função para remover um item específico pelo seu ID
function remover(idDoItem) {
    // Encontra o elemento na página que tem o ID recebido
    let itemParaRemover = document.getElementById(idDoItem);

    // Se o elemento existir, remove-o da lista
    if (itemParaRemover) {
        itemParaRemover.remove();
    }
}

// Função para remover todos os itens da lista de uma vez
function removerTodos() {
    let lista = document.getElementById("lista");
    lista.innerHTML = ""; // Limpa todo o conteúdo da div "lista"
}
