const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

function calcAverage(money) {
  let sum = 0;
  for (let i = 0; i < money.length; i++) {
    sum += money[i];
  }
  return sum / money.length;
}

const calculateTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i++) {
  tips[i] = calculateTip(bills[i]);
  totals[i] = bills[i] + tips[i];
}
console.log(`Bills: ${bills}\n`);
console.log(`Tips: ${tips}\n`);
console.log(`Totals: ${totals}\n`);

const average = calcAverage(totals);
console.log(`Average: ${average}`);
