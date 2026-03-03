<?php

class livro {

    public $titulo; //Atributo
    public $autor; //Atributo
    public $genero; //Atributo
    public $anoPublicacao; //Atributo
    public $editora; //Atributo

    public function abrir() { //Método

        return "O livro está aberto.";
    }

    public function fechar() { //Método

        return "O livro está fechado.";
    }

    public function folhear() { //Método

        return "Você está folheando o livro.";
    }
}

$pequenoPrincipe = new livro();
$pequenoPrincipe->titulo = "O Pequeno Príncipe";
echo $pequenoPrincipe->abrir();

$crusoé = new livro();
$crusoé->titulo = "Robson Cruzoé";
echo $crusoé->abrir();

$Paulo = new livro();
$Paulo->titulo = "Paulo Scor";
echo $Paulo->abrir();
?>