class ATM {
    constructor() {
        this.accounts = [];
    }

    addAccount(account) {
        this.accounts.push(account);
    }

    validatePIN(accountNumber, pin) {
        const account = this.accounts.find(account => account.accountNumber === accountNumber);
        if (account && account.pin === pin) {
            return account;
        } else {
            console.log('PIN inválido.');
            return null;
        }
    }

    showMenu(account) {
        console.log(`Bienvenido, ${account.name}`);
        console.log('Seleccione una opción:');
        console.log('1. Depósito');
        console.log('2. Retiro');
        console.log('3. Transferencia');
        console.log('4. Consultar saldo');
        console.log('5. Salir');
    }

    handleInput(input, account) {
        switch (input) {
            case '1':
                this.handleDeposit(account);
                break;
            case '2':
                this.handleWithdraw(account);
                break;
            case '3':
                this.handleTransfer(account);
                break;
            case '4':
                this.handleCheckBalance(account);
                break;
            case '5':
                console.log('Gracias por utilizar nuestro cajero automático. Hasta luego!');
                break;
            default:
                console.log('Opción inválida. Por favor, seleccione una opción válida.');
        }
    }

    handleDeposit(account) {
        readline.question('Ingrese el monto del depósito: ', amount => {
            account.deposit(parseFloat(amount));
            this.showMenu(account);
            this.handleInput('', account);
        });
    }

    handleWithdraw(account) {
        readline.question('Ingrese el monto del retiro: '), amount => {
            account.withdraw(parseFloat(amount));
            this.showMenu(account);
            this.handleInput('', account);
        };
    }

    handleTransfer(account) {
        readline.question('Ingrese el número de cuenta destino: '), targetAccountNumber => {
            const targetAccount = this.accounts.find(account => account.accountNumber === targetAccountNumber);
            if (targetAccount) {
                readline.question('Ingrese el monto de la transferencia: ');  
            }
        };
    }
}
