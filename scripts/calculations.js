let budgetValue = 0;
let totalExpensesValue = 0;

let balanceColor = "green";

const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

//loop para o ponteiro percorrer o array e descobrir o valor total das despesas

for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
}

// Função calculadora média de gastos

function calculateAverageExpense() {
  if (expenseEntries.length === 0) return 0;
  return totalExpensesValue / expenseEntries.length;
}

// Função calculadora de saldo da conta

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

//Função atribuidora de cor de acordo ao saldo

function updateBalanceColor() {
  const balance = calculateBalance();
  if (balance < 0) {
    balanceColor = `red`;
  } else if (balance < budgetValue * 0.25) {
    balanceColor = `orange`;
  } else {
    balanceColor = `green`;
  }
}

//Função calculadora de gastos por categoria

function calculateCategoryExpenses(category) {
  let total = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      total += expenseEntries[i][1];
    }
  }
  return total;
}

//Função calculadora da categoria com maior gasto a partir da função (calculateCategoryExpenses)

function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];
  const categoriesTotals = [];

  for (let i = 0; i < categories.length; i++) {
    categoriesTotals.push([
      categories[i],
      calculateCategoryExpenses(categories[i]),
    ]);
  }

  let largestCategory = categoriesTotals[0][0];
  let largestTotal = categoriesTotals[0][1];

  for (let i = 1; i < categoriesTotals.length; i++) {
    if (categoriesTotals[i][1] > largestTotal) {
      largestTotal = categoriesTotals[i][1];
      largestCategory = categoriesTotals[i][0];
    }
  }
  return largestCategory;
}

//Função para adição de novas entradas

function addExpenseEntry(values) {
  expenseEntries.push(values);
  totalExpensesValue += values[1];
}
