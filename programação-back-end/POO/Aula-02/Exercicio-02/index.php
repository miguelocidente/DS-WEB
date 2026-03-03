<?php

class Animal {
    public $nome;

    public function FazerSom() {
        // método base vazio
    }
}

class Sapo extends Animal {
    public function FazerSom() {
        echo "O sapo faz: Coaxar";
    }
}

class Cavalo extends Animal {
    public function FazerSom() {
        echo "O cavalo faz: Relinchar";
    }

    public function Mover() {
        echo "Galopa e anda";
    }
}

class Tartaruga extends Animal {
    public function FazerSom() {
        echo "A tartaruga faz: Grunhir";
    }
}

$sapo1 = new Sapo();
$sapo1->FazerSom();
echo "<br>";

$cavalo1 = new Cavalo();
$cavalo1->FazerSom();
echo "<br>";
$cavalo1->Mover();
echo "<br>";

$tartaruga1 = new Tartaruga();
$tartaruga1->FazerSom();

?>