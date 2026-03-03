<?php
echo "<h1>Exercício 01 - Funcionarios</h1>";
    class pessoa {
       public $nome = "Miguel";
       protected $idade = 18;
    }

    class funcionario extends pessoa {
        public $salario = 7000;
    }

    class gerente extends funcionario {
     public $departamento = "Vendas";
     public function CaucularBonus() {
        return $this->salario * 0.1;
     }
    }

    class densenvolvedor extends funcionario {
        public $linguagem = "PHP";
        public function CaucularBonus() {
        return $this->salario * 0.3;
     }
    }

    $gerente = new gerente();
    echo "Gerente: " . $gerente->nome . "<br/>";
    echo "Salário: " . $gerente->salario . "<br/>";
    echo "Departamento: " . $gerente->departamento . "<br/>";
    echo "Bonus: " . $gerente->CaucularBonus() . "<br/>";
    $desenvolvedor = new densenvolvedor();
    echo "Desenvolvedor: " . $desenvolvedor->nome . "<br/>";
    echo "Salário: " . $desenvolvedor->salario . "<br/>";
    echo "Linguagem: " . $desenvolvedor->linguagem . "<br/>";
    echo "Bonus: " . $desenvolvedor->CaucularBonus() . "<br/>";
?>