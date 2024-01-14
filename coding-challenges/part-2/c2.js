const calculateTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

bills = [125, 555, 44];

const getTips = [
  calculateTip(bills[0]),
  calculateTip(bills[1]),
  calculateTip(bills[2]),
];

const totals = [
  bills[0] + getTips[0],
  bills[1] + getTips[1],
  bills[2] + getTips[2],
];

console.log(`Bills: ${bills}`);
console.log(`Tips: ${getTips}`);
console.log(`Totals: ${totals}`);
console.log(bills);
