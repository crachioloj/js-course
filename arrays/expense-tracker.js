const account = {
    name: 'Joey C',
    expenses: [],
    income: [],
    addExpense: function(description, amount) {
        let expense = {
            description: description,
            amount: amount
        };
        this.expenses.push(expense);
    },
    addIncome: function(description, amount) {
        this.income.push({
            description: description,
            ammount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0;
        this.expenses.forEach(function(expense) {
            totalExpenses += expense.amount;
        })

        let totalIncome = 0;
        this.income.forEach(function(incomeItem) {
            totalIncome += incomeItem.ammount;
        })

        let balance = totalIncome - totalExpenses;
        let balanceSummary = `${this.name} has a balance of $${balance}.`;
        let expenseSummary = `${this.name} has $${totalExpenses} in expenses.`;
        let incomeSummary = `${this.name} has an income of $${totalIncome}.`;
        return balanceSummary + '\r\n' + expenseSummary + '\r\n' + incomeSummary;
    }
}

console.log(account);
console.log('');

account.addExpense('Rent', 960);
account.addExpense('Coffee', 1.50);
account.addExpense('Groceries', 45.12);
account.addExpense('Coffee', 1.50);

account.addIncome('Day job', 5000.00);
account.addIncome('A little under the table', 25.00);

console.log(account);
console.log('');

console.log(account.getAccountSummary());