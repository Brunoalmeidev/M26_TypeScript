// Classe base que representa uma conta bancária genérica
class Conta {
    numeroDaConta: number; // Número da conta
    saldo: number = 0; // Saldo inicial da conta, definido como zero

    // Construtor que inicializa o número da conta
    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
    }
}

// Classe para contas salário, que herda de Conta
class ContaSalario extends Conta {
     // Método para depósito de valores na conta
    depositar(valor: number) {
        this.saldo += valor;
    }
}

// Interface que define métodos e propriedades para contas transacionais
interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean; // Método para transferir valor para outra conta
    taxaTransferencia: number; // Taxa cobrada para transferências
}

// Interface de exemplo com uma propriedade de CNPJ
interface IExemplo2 {
    cnpj: number;
}

// Interface que estende IExemplo2, adicionando uma propriedade para telefone
interface IExemplo3 extends IExemplo2 {
    telefone: number;
}

// Classe para contas correntes, que implementa ITransacional, além de herdar de Conta
class ContaCorrente extends Conta implements ITransacional {
    // Implementação do método de transferência, descontando a taxa de transferência
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true; // Retorna true para indicar sucesso na transferência
    };
    taxaTransferencia: number = 0; // Define a taxa de transferência como zero, podendo ser alterada
}