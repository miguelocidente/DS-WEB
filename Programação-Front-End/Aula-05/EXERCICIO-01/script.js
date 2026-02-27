//========= ========== EVENTOS DO MOUSE NO BODY var body = document.getElementById("body") body.addEventListener("click", function body() { mensagem.TextContent = "clique simples no body" area.stylebackground = "grey" })

// ======= EVENTOS DO MOUSE =======

var area = document.getElementById("area");

area.addEventListener("click", function () {
    mensagem.textContent = "Clique simples na área!";
    area.style.background = "lightblue";
});


area.addEventListener("dblclick", function () {
    mensagem.textContent = "Clique duplo na área!";
    area.style.background = "skyblue";

});

area.addEventListener("mouseenter", function () {
    mensagem.textContent = "O mouse entrou na área!";
    area.style.background = "green";

});

area.addEventListener("mouseleave", function () {
    mensagem.textContent = "O mouse saiu da área!";
    area.style.background = "red";

});

var posicao = document.getElementById("posicao");
area.addEventListener("mousemove", function (event) {
    posicao.textContent = "X:" + event.clientX + " Y:"
        + event.clientY;
});






// ======= EVENTOS DO TECLADO ========



document.addEventListener("keydown", function(event){
console.log("Tecla pressionada: " + event.key);
});


document.addEventListener("keyup", function(event){
console.log("Tecla liberada: " + event.key);
});


document.addEventListener("keypress", function(event){
console.log("Caractere digitado: " + event.key);
});



document.addEventListener("keydown", function(event){
// Exibe a tecla pressionada
var campo = document.getElementById("resultado");
campo.textContent = "Tecla pressionada: " + event.keyCode;
// Também mostra no console
console.log("Tecla pressionada: " + event.key);

});

// ======= EVENTOS DO FORMULARIO =======


// ======= EVENTOS DA JANELA =======