const campoNome = document.getElementById("nome");
const erroNome = document.getElementById("erro-nome");





// esconde a mensagem ao carregar
erroNome.style.display = "none";

campoNome.addEventListener("input", function () {

    const nome = campoNome.value;






    // aceita apenas letras e espaço
    const apenasLetras = /^[A-Za-zÀ-ÿ\s]+$/;

    if (nome.length >= 3 && apenasLetras.test(nome)) {

        // campo válido
        erroNome.style.display = "inline";
        erroNome.textContent = "Nome válido";

    } else {

        // campo inválido
        erroNome.style.display = "inline";
        erroNome.textContent = "Caracteres errados no nome";

    }

});





//=================================================================
//
//====================     EMAIL        ===========================
//
//=================================================================





const campoEmail = document.getElementById("email");
const erroEmail = document.getElementById("erro-email");


erroEmail.style.display = "none";



campoEmail.addEventListener("input", function () {



    const email = campoEmail.value;

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexEmail.test(email)) {

        erroEmail.style.display = "inline";
        erroEmail.textContent = "Email válido ";

    } else {

        erroEmail.style.display = "inline";
        erroEmail.textContent = "Caracteres errados no email";

    }

});









//=================================================================
//
//====================     SENHA        ===========================
//
//=================================================================







// pega o campo da senha principal
const campoSenha = document.getElementById("senha");

// pega o campo de confirmação da senha
const campoConfirmar = document.getElementById("confirma-senha");

// pega o span de mensagem
const erroSenha = document.getElementById("erro-senha");

// esconde a mensagem ao carregar
erroSenha.style.display = "none";

// executa sempre que o usuário digitar na confirmação
campoConfirmar.addEventListener("input", function () {

    // pega os valores das duas senhas
    const senha = campoSenha.value;
    const confirmar = campoConfirmar.value;

    // se as duas senhas forem iguais e não estiverem vazias
    if (senha === confirmar && confirmar !== "") {

        // mostra mensagem de sucesso
        erroSenha.style.display = "inline";
        erroSenha.textContent = "Senha confirmada ✓";
        erroSenha.style.color = "green";

    } else {

        // mostra mensagem de erro
        erroSenha.style.display = "inline";
        erroSenha.textContent = "As senhas não coincidem";
        erroSenha.style.color = "red";

    }

});











//=================================================================
//
//====================     CPF        ===========================
//
//=================================================================





const campoCpf = document.getElementById("cpf");
const erroCpf = document.getElementById("erro-cpf");

// esconde o erro ao carregar a página
erroCpf.style.display = "none";

campoCpf.addEventListener("input", function () {

    const cpf = campoCpf.value;

    const regexCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

    if (regexCpf.test(cpf)) {

        erroCpf.style.display = "inline";
        erroCpf.textContent = "CPF válido ";


    } else {

        erroCpf.style.display = "inline";
        erroCpf.textContent = "Caracteres errados no CPF";
        erroCpf.style.color = "red";

    }

});






//=================================================================
//
//====================     TELEFONE        ===========================
//
//=================================================================



// pega o campo telefone e o span de erro
const campoTelefone = document.getElementById("telefone");
const erroTelefone = document.getElementById("erro-telefone");

// esconde a mensagem ao carregar a página
erroTelefone.style.display = "none";


// executa quando o usuário digitar
campoTelefone.addEventListener("input", function () {



    // pega o valor digitado
    const telefone = campoTelefone.value;


    // regex para formato de telefone 
    const regexTelefone = /^\(\d{2}\)\s\d{5}-\d{4}$/;

    // verifica se o telefone é válido
    if (regexTelefone.test(telefone)) {



        // telefone correto
        erroTelefone.style.display = "inline";
        erroTelefone.textContent = "Telefone válido ";


    } else {

        // telefone incorreto
        erroTelefone.style.display = "inline";
        erroTelefone.textContent = "Caracteres errados no telefone";
        erroTelefone.style.color = "red";

    }

});








//=================================================================
//
//====================     VALOR        ===========================
//
//=================================================================




// pega o campo do CEP e o span de erro
const campoCep = document.getElementById("cep");
const erroCep = document.getElementById("erro-cep");

// esconde a mensagem ao carregar a página
erroCep.style.display = "none";

// executa quando o usuário digitar
campoCep.addEventListener("input", function () {

    // pega o valor digitado
    const cep = campoCep.value;

    // regex para o formato 00000-000
    const regexCep = /^\d{5}-\d{3}$/;

    // verifica se o CEP é válido
    if (regexCep.test(cep)) {

        // CEP válido
        erroCep.style.display = "inline";
        erroCep.textContent = "CEP válido";

    } else {

        // CEP inválido
        erroCep.style.display = "inline";
        erroCep.textContent = "Caracteres errados no CEP";
        erroCep.style.color = "red";

    }

});




//
//=================================================================
//
//====================     nascimento        ===========================
//
//=================================================================






// pega o campo da data
const campoData = document.getElementById("data-nascimento");

// pega o span de erro
const erroData = document.getElementById("erro-data-nascimento");

// esconde a mensagem ao carregar
erroData.style.display = "none";

// executa quando o usuário digitar
campoData.addEventListener("input", function () {

    // pega o valor digitado
    const data = campoData.value;

    // regex para formato dd/mm/aaaa
    const regexData = /^\d{2}\/\d{2}\/\d{4}$/;

    // verifica se a data está correta
    if (regexData.test(data)) {

        // data válida
        erroData.style.display = "inline";
        erroData.textContent = "Data válida ";

    } else {

        // data inválida
        erroData.style.display = "inline";
        erroData.textContent = "Caracteres errados na data";
        erroData.style.color = "red";

    }

});



//=================================================================
//
//====================     valor       ===========================
//
//=================================================================





const campoValor = document.getElementById("valor");
const erroValor = document.getElementById("erro-valor");

erroValor.style.display = "none";

campoValor.addEventListener("input", function () {

    const valor = campoValor.value;

    // regex para moeda brasileira
    const regexValor = /^(?:[1-9]\d{0,2}(?:\.\d{3})*|0),\d{2}$/;

    if (regexValor.test(valor)) {

        erroValor.style.display = "inline";
        erroValor.textContent = "Valor válido";

    } else {

        // valor inválido
        erroValor.style.display = "inline";
        erroValor.textContent = "Caracteres errados no valor";

    }

});




//=================================================================
//
//====================     link       ===========================
//
//=================================================================



const campoURL = document.getElementById("url");
const erroURL = document.getElementById("erro-url");

erroURL.style.display = "none";

campoURL.addEventListener("input", function () {

    const url = campoURL.value;

    // regex simples para URL
    const regexURL = /^https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regexURL.test(url)) {

        erroURL.style.display = "inline";
        erroURL.textContent = "URL válida";

    } else {
// URL inválida
        erroURL.style.display = "inline";
        erroURL.textContent = "Caracteres errados na url";
        erroURL.style.color = "red";

    }

});




//=================================================================
//
//====================     cartão       ===========================
//
//=================================================================




const campoCartao = document.getElementById("cartao");
const erroCartao = document.getElementById("erro-cartao");

erroCartao.style.display = "none";

campoCartao.addEventListener("input", function () {

    const cartao = campoCartao.value;

    // regex para formato 0000 0000 0000 0000
    const regexCartao = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;

    if (regexCartao.test(cartao)) {

        erroCartao.style.display = "inline";
        erroCartao.textContent = "Número do cartão válido";

    } else {

        erroCartao.style.display = "inline";
        erroCartao.textContent = "Caracteres errados no numero";
        erroCartao.style.color = "red";

    }

});