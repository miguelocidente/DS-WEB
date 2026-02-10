<?php

class telefone {

    public $marca; //Atributo
    public $modelo; //Atributo
    public $sistemaOperacional; //Atributo
    public $armazenamento; //Atributo
    public $camera; //Atributo

    public function ligar() { //Método

        return "O telefone está ligado.";
    }

    public function desligar() { //Método

        return "O telefone está desligado.";
    }

    public function fazerChamada() { //Método

        return "Você está fazendo uma chamada.";
    }
}

$iphone = new telefone();
$iphone->marca = "Apple";
echo $iphone->ligar();

$sansung = new telefone();
$sansung-> marca = "sansung";
echo $sansung->desligar();

$motorola = new telefone();
$motorola-> marca = "Motorola";
echo $motorola->fazerChamada();

?>