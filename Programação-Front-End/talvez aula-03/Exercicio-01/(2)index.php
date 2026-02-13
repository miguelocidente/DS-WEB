<?php
class carro {

    public $cor; //Atributo
    public $marca; //Atributo
    public $modelo; //Atributo
    public $ano; //Atributo
    public $preco; //Atributo

    public function ligar() { //Método

        return "O carro está ligado.";
    }

    public function acelerar() { //Método

        return "O carro está acelerando.";
    }

    public function frear() { //Método

        return "O carro está freando.";
    }
}

$xc90 = new carro();
$xc90-> nome = "Volvo XC90";
echo $xc90->ligar();

$xc40 = new carro();
$xc40-> nome = "Volvo xc40";
echo $xc40->acelerar();

$xc60 = new carro();
$xc60-> nome = "Volvo xc60";
echo $xc60->frear();

?>