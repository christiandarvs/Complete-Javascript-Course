const BILL_VALUE = 275;
let tip;
let total;

// Ternary Operator
BILL_VALUE >= 50 && BILL_VALUE <= 300
  ? (tip = BILL_VALUE * 0.15)
  : (tip = BILL_VALUE * 0.2);

total = BILL_VALUE + tip;
console.log(`Bill: $${BILL_VALUE}\nTip: $${tip}\nTotal: $${total}`);
