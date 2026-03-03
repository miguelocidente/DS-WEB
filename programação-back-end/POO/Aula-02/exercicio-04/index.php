<?php

class Produto {
    public $nome;
    public $preco;
    public $estoque;

    public function CalcularDesconto() {
        return $this->preco; // padrão sem desconto
    }
}

class Eletronico extends Produto {
    public $nome = "Smartphone";
    public $preco = 2000;
    public $estoque = 50;

    public function CalcularDesconto() {
        return $this->preco * 0.90; // 10% desconto
    }
}

class Roupa extends Produto {
    public $nome = "Camiseta";
    public $preco = 50;
    public $estoque = 100;

    public function CalcularDesconto() {
        return $this->preco * 0.80; // 20% desconto
    }
}

$eletronico = new Eletronico();
echo "Produto: " . $eletronico->nome . "<br/>";
echo "Preço: " . $eletronico->preco . "<br/>";
echo "Estoque: " . $eletronico->estoque . "<br/>";
echo "Preço com Desconto: " . $eletronico->CalcularDesconto() . "<br/>";

$roupa = new Roupa();
echo "Produto: " . $roupa->nome . "<br/>";
echo "Preço: " . $roupa->preco . "<br/>";
echo "Estoque: " . $roupa->estoque . "<br/>";
echo "Preço com Desconto: " . $roupa->CalcularDesconto() . "<br/>";

?>