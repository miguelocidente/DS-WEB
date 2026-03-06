<?php

class Dono {
    public $nome;
    public $telefone;

    public function __construct($nome, $telefone) {
        $this->nome = $nome;
        $this->telefone = $telefone;
    }

    public function exibirDono() {
        return "Dono: " . $this->nome . " | Tel: " . $this->telefone;
    }
}

class Animal {
    public $nome;
    public $especie;
    public $dono; 

    public function __construct($nome, $especie, $dono) {
        $this->nome = $nome;
        $this->especie = $especie;
        $this->dono = $dono;
    }

    public function exibirAnimal() {
        return $this->nome . " | " . $this->especie;
    }
}


$dono1 = new Dono("João", "(11) 99999-9999");


$animal1 = new Animal("Rex", "Cachorro", $dono1);


echo $animal1->exibirAnimal() . "<br>";
echo $animal1->dono->exibirDono();

?>