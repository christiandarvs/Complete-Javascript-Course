let markWeight = 78,
  markHeight = 1.69,
  markBMI = markWeight / markHeight ** 2;

let johnWeight = 92,
  johnHeight = 1.95,
  johnBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;
console.log("1st Scenario");
console.log(`${markBMI} > ${johnBMI}: ${markHigherBMI}\n`);

console.log("2nd Scenario");
(markWeight = 95),
  (markHeight = 1.88),
  (markBMI = markWeight / markHeight ** 2);

(johnWeight = 85),
  (johnHeight = 1.76),
  (johnBMI = johnWeight / johnHeight ** 2);

markHigherBMI = markBMI > johnBMI;

console.log(`${markBMI} > ${johnBMI}: ${markHigherBMI}\n`);
