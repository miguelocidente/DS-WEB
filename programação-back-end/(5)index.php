<?php
class computador {

    public $marca; //Atributo
    public $modelo; //Atributo
    public $processador; //Atributo
    public $memoria; //Atributo
    public $armazenamento; //Atributo

    public function ligar() { //Método

        return "O computador está ligado.";
    }

    public function desligar() { //Método

        return "O computador está desligado.";
    }

    public function reiniciar() { //Método

        return "O computador está reiniciando.";
    }
}

$Lenovo = new computador();
$Lenovo->marca = "Lenovo";
echo $Lenovo->ligar();

$sansung = new computador();
$sansung->marca = "galaxy book";
echo $sansung->desligar();

$acer = new computador();
$acer->marca = "nitro V15";
echo $acer->reiniciar();

?>