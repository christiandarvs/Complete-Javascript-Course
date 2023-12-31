let markWeight = 78,
  markHeight = 1.69,
  markBMI = markWeight / markHeight ** 2;

let johnWeight = 92,
  johnHeight = 1.95,
  johnBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}`);
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`);
}
