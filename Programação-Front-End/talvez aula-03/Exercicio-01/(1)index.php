<?php

class cadeira {

    public $cor; //Atributo
    public $material; //Atributo
    public $preco; //Atributo
    public $altura; //Atributo
    public $largura; //Atributo

    public function sentar() { //Método

        return "Você se sentou na cadeira.";
    }

    public function levantar() { //Método

        return "Você se levantou da cadeira.";
    }

    public function mover() { //Método

        return "Você moveu a cadeira.";
    }
}

$gamer = new cadeira();
$gamer-> nome = "Cadeira Gamer";
echo $gamer->sentar();

$ergonomica = new cadeira();
$ergonomica-> nome = "Cadeira Ergonomica";
echo $ergonomica->levantar();

$banquinho = new cadeira();
$banquinho-> nome = "Cadeira banquinho";
echo $banquinho->subir();
?>