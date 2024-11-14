class BankAccount {
    static _globalId = 1;
    static _insertRate = 0.02;
    id;
    _balance = 0;
    constructor() {
        this.id = BankAccount._globalId;
        BankAccount._globalId++;
    }
    setInterestRate(newInsertRate) {
        BankAccount._insertRate = newInsertRate;
    }
    getInterest(years) {
        return years * BankAccount._insertRate * this._balance;
    }
    deposit(deposit) {
        this._balance += deposit;
    }
}
function manageBankAccounts(commands) {
    let bankAccounts = [];
    for (let index = 0; index < commands.length; index++) {
        const commandLine = commands[index].split(" ");
        const command = commandLine[0];
        const banckAccountId = Number(commandLine[1]);
        switch (command) {
            case "Create":
                const bankAccount = new BankAccount();
                bankAccounts.push(bankAccount);
                console.log(`Account ID${bankAccount.id} created`);
                break;
            case "Deposit":
                const deposit = Number(commandLine[2]);
                const bankAccountDeposit = bankAccounts.find((ba) => ba.id === banckAccountId);
                if (!bankAccountDeposit) {
                    console.log("Account does not exist");
                }
                else {
                    bankAccountDeposit.deposit(deposit);
                    console.log(`Deposited ${deposit} to ID${banckAccountId}`);
                }
                break;
            case "SetInterest":
                const newInterestRate = Number(commandLine[1]);
                BankAccount._insertRate = newInterestRate;
                break;
            case "GetInterest":
                const years = Number(commandLine[2]);
                const bankAccountInterest = bankAccounts.find((ba) => ba.id === banckAccountId);
                if (!bankAccountInterest) {
                    console.log("Account does not exist");
                }
                else {
                    const interest = bankAccountInterest.getInterest(years);
                    console.log(interest.toFixed(2));
                }
                break;
        }
    }
}
manageBankAccounts([
    "Create",
    "Create",
    "Deposit 1 20",
    "Deposit 3 20",
    "Deposit 2 10",
    "SetInterest 1.5",
    "GetInterest 1 1",
    "GetInterest 2 1",
    "GetInterest 3 1",
    "End",
]);
//# sourceMappingURL=bankAccount.js.map