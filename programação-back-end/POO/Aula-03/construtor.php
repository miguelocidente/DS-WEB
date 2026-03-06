<?php

class pessoa {
    public $nome;
    public $idade;

    public function __construct($novoNome, $novoIdade){
        $this->nome = $novoNome;
    }   $this->idade = $novoIdade;

    public function exibirDados(){
        return "O nome da pessoa é "$this->nome. "A idade da pessoa é "$this->idade;
    }

    public function alterarDados ($novoNome, $novoIdade){
        $this->nome = $novoNome;
        $this->idade = $novoIdade;
    }
}

$pessoa = new pessoa("Miguel", 18);

echo $pessoa->exibirDados();

$pessoa->alterarDados("Sanches", 17);

echo "<br>";

echo $pessoa->exibirDados();
?>