<?php
//--------------------------primeiro--------------------//

class cadeira {

    public $cor; //Atributo
    public $material; //Atributo
    public $preco; //Atributo
    public $altura; //Atributo
    public $largura; //Atributo

    public function sentar() { //Método

        return "Você se sentou na cadeira.";
    }

    public function levantar() { //Método

        return "Você se levantou da cadeira.";
    }

    public function mover() { //Método

        return "Você moveu a cadeira.";
    }
}

//--------------------------segundo--------------------//

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

//--------------------------terceiro--------------------//

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

//--------------------------quarto--------------------//

class livro {

    public $titulo; //Atributo
    public $autor; //Atributo
    public $genero; //Atributo
    public $anoPublicacao; //Atributo
    public $editora; //Atributo

    public function abrir() { //Método

        return "O livro está aberto.";
    }

    public function fechar() { //Método

        return "O livro está fechado.";
    }

    public function folhear() { //Método

        return "Você está folheando o livro.";
    }
}


//--------------------------quinto--------------------//

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