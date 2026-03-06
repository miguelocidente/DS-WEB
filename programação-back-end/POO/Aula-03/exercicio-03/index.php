<?php

class Fabricante {
    public $nome;
    public $paisOrigem;

    public function __construct($nome, $paisOrigem) {
        $this->nome = $nome;
        $this->paisOrigem = $paisOrigem;
    }

    public function exibirFabricante() {
        return "Fabricante: " . $this->nome . " | Origem: " . $this->paisOrigem;
    }
}

class Motor {
    public $potencia;
    public $combustivel;

    public function __construct($potencia, $combustivel) {
        $this->potencia = $potencia;
        $this->combustivel = $combustivel;
    }

    public function exibirMotor() {
        return "Motor: " . $this->potencia . " | Combustível: " . $this->combustivel;
    }
}

class Carro {
    public $modelo;
    public $ano;
    public $fabricante; 
    public $motor;      

    public function __construct($modelo, $ano, $fabricante, $motor) {
        $this->modelo = $modelo;
        $this->ano = $ano;
        $this->fabricante = $fabricante;
        $this->motor = $motor;
    }

    public function exibirFicha() {
        return $this->modelo . " | " . $this->ano;
    }
}

$fabricante1 = new Fabricante("Honda", "Japão");

$motor1 = new Motor("150cv", "Flex");

$carro1 = new Carro("Civic", 2024, $fabricante1, $motor1);

echo $carro1->exibirFicha() . "<br>";
echo $carro1->fabricante->exibirFabricante() . "<br>";
echo $carro1->motor->exibirMotor();

?>