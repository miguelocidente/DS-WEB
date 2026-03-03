let modoAtivo = false;

const botao = document.getElementById("botao");
const light = document.getElementById("light");

botao.addEventListener("click", function () {
    modoAtivo = !modoAtivo;
    document.body.classList.toggle("dark");

    if (modoAtivo) {
        light.style.display = "block";
        document.getElementsByClassName("Texto").style.color = "black";
    } else {
        light.style.display = "none";
    }

});



const imagem = document.getElementById("imagemSecreta");

document.addEventListener("mousemove", function (e) {
    if (modoAtivo) {
        light.style.left = e.clientX + "px";
        light.style.top = e.clientY + "px";

        const larguraTela = window.innerWidth;
        const alturaTela = window.innerHeight;

        // Define uma área de ativação (150px do canto)
        if (
            e.clientX > larguraTela - 230 &&
            e.clientY > alturaTela - 230
        ) {
            imagem.style.display = "block";
            mensagem.style.display = "block";
        } else {
            imagem.style.display = "none";
        }


    }
});



const botao2 = document.getElementById("botao2");
const texto = document.getElementById("texto");

botao2.addEventListener("click", function () {
    texto.classList.remove("escondido");
});



