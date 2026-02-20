
var contadorId = 0;

function cadastrarAluno() {
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const rm = document.getElementById("rm").value;
    const telefone = document.getElementById("telefone").value;
    const turma = document.getElementById("turma").value;

    // Validação simples: verificar se todos os campos estão preenchidos
    if (nome === "" || email === "" || rm === "" || telefone === "" || turma === "") {
        alert("Por favor, preencha todos os campos antes de cadastrar.");
        return;
    }

    //  Incrementar o ID para o novo aluno
    contadorId++;
    const idAtual = "aluno-" + contadorId;

    //  Selecionar o container da lista
    const lista = document.getElementById("listaAlunos");

    //  Criar o elemento principal do item (div)
    const itemDiv = document.createElement("div");
    itemDiv.setAttribute("id", idAtual); 
    itemDiv.setAttribute("class", "aluno-item");

    //  Criar o conteúdo interno, informações do aluno
    itemDiv.innerHTML = `
        <div class="aluno-info">
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>RM:</strong> ${rm} | <strong>Telefone:</strong> ${telefone}</p>
            <p><strong>Turma:</strong> ${turma}</p>
        </div>
        <button class="btn-excluir" onclick="excluirAluno('${idAtual}')">Excluir</button>
    `;

    //  Adicionar o novo item à lista na tela
    lista.appendChild(itemDiv);

    //  Limpar o formulário para o próximo cadastro
    limparCampos();
    
    console.log("Aluno cadastrado com sucesso! ID:", idAtual);
}

// Função para remover um aluno específico da lista
function excluirAluno(idParaRemover) {
    // Confirmar se o usuário realmente deseja excluir
    if (confirm("Tem certeza que deseja excluir este cadastro?")) {
        const elemento = document.getElementById(idParaRemover);
        if (elemento) {
            elemento.remove(); // Remove o elemento do DOM
            console.log("Cadastro removido:", idParaRemover);
        }
    }
}

// Função auxiliar para limpar os campos de entrada
function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("rm").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("turma").value = "";
    
    // Foca o cursor de volta no primeiro campo
    document.getElementById("nome").focus();
}