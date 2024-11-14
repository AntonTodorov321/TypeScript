class BankAccount {
  private static _globalId: number = 1;
  static _insertRate: number = 0.02;
  public id: number;
  private _balance: number = 0;

  constructor() {
    this.id = BankAccount._globalId;
    BankAccount._globalId++;
  }

  setInterestRate(newInsertRate: number): void {
    BankAccount._insertRate = newInsertRate;
  }

  getInterest(years: number): number {
    return years * BankAccount._insertRate * this._balance;
  }

  deposit(deposit: number): void {
    this._balance += deposit;
  }
}

function manageBankAccounts(commands: string[]) {
  let bankAccounts: BankAccount[] = [];

  for (let index: number = 0; index < commands.length; index++) {
    const commandLine: string[] = commands[index].split(" ");
    const command: string = commandLine[0];
    const banckAccountId: number = Number(commandLine[1]);

    switch (command) {
      case "Create":
        const bankAccount: BankAccount = new BankAccount();
        bankAccounts.push(bankAccount);
        console.log(`Account ID${bankAccount.id} created`);
        break;
      case "Deposit":
        const deposit: number = Number(commandLine[2]);
        const bankAccountDeposit = bankAccounts.find(
          (ba) => ba.id === banckAccountId
        );

        if (!bankAccountDeposit) {
          console.log("Account does not exist");
        } else {
          bankAccountDeposit.deposit(deposit);
          console.log(`Deposited ${deposit} to ID${banckAccountId}`);
        }
        break;
      case "SetInterest":
        const newInterestRate: number = Number(commandLine[1]);
        BankAccount._insertRate = newInterestRate;
        break;
      case "GetInterest":
        const years: number = Number(commandLine[2]);
        const bankAccountInterest = bankAccounts.find(
          (ba) => ba.id === banckAccountId
        );

        if (!bankAccountInterest) {
          console.log("Account does not exist");
        } else {
          const interest: number = bankAccountInterest.getInterest(years);
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
