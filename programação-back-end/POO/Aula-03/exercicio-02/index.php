<?php

class Artista {
    public $nome;
    public $genero;

    public function __construct($nome, $genero) {
        $this->nome = $nome;
        $this->genero = $genero;
    }

    public function exibirArtista() {
        return "Artista: " . $this->nome . " | Gênero: " . $this->genero;
    }
}

class Musica {
    public $titulo;
    public $duracao;
    public $artista; 

    public function __construct($titulo, $duracao, $artista) {
        $this->titulo = $titulo;
        $this->duracao = $duracao;
        $this->artista = $artista;
    }

    public function exibirInfo() {
        return $this->titulo . " | Duração: " . $this->duracao;
    }
}

$artista1 = new Artista("Queen", "Rock");

$musica1 = new Musica("Bohemian Rhapsody", "5:55", $artista1);

echo $musica1->exibirInfo() . "<br>";
echo $musica1->artista->exibirArtista();

?>