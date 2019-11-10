let myAccount = {
    name: 'Joseph',
    expenses: 0,
    income: 0
}

console.log(myAccount);

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount;
}

let addIncome = function(account, income) {
    account.income += income;
}

let resetAccount = function(account) {
    account.expenses = 0;
    account.income = 0;
}

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses;
    return `Account for ${account.name} has $${balance} balance, $${account.income} income, and $${account.expenses} expenses.`;
}

addIncome(myAccount, 100.02);
console.log(myAccount);

addExpense(myAccount, 50.0);
console.log(myAccount);

addExpense(myAccount, 12.99);
console.log(myAccount);

console.log(getAccountSummary(myAccount));

resetAccount(myAccount);
console.log(myAccount);

console.log(getAccountSummary(myAccount));