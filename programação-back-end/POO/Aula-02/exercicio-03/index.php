<?php

class Veiculo {
    public $marca;
    public $modelo;
    private $velocidade = 10;

    public function __construct($marca, $modelo) {
        $this->marca = $marca;
        $this->modelo = $modelo;
    }

    // ---------Getter-----------//
    public function getVelocidade() {
        return $this->velocidade;
    }


    public function setVelocidade($valor) {
        if ($valor >= 0) {
            $this->velocidade = $valor;
        } else {
            echo "Velocidade não pode ser negativa.<br>";
        }
    }

    public function exibirInfo() {
        echo "Marca: " . $this->marca . "<br>";
        echo "Modelo: " . $this->modelo . "<br>";
        echo "Velocidade: " . $this->velocidade . " km/h<br>";
    }
}

class Carro extends Veiculo {
    public function acelerar() {
        $this->setVelocidade($this->getVelocidade() + 10);
        echo "Carro acelerou 10 km/h<br>";
    }
}

class Moto extends Veiculo {
    public function acelerar() {
        $this->setVelocidade($this->getVelocidade() + 20);
        echo "Moto acelerou 20 km/h<br>";
    }
}

$carro1 = new Carro("Toyota", "Corolla");
$moto1 = new Moto("Honda", "CB 500");

echo "<h3>=== Carro ===</h3>";
$carro1->acelerar();
$carro1->exibirInfo();

echo "<h3>=== Moto ===</h3>";
$moto1->acelerar();
$moto1->exibirInfo();

?>