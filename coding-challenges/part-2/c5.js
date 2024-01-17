const manilaTemperatures = [17, 21, 23];
const seoulTemperatures = [12, 5, -5, 0, 4];

function printForecast(temperatures) {
  for (let i = 0; i < temperatures.length; i++) {
    console.log(`${temperatures[i]}⁰C in ${i + 1} days`);
  }
  console.log();
}

console.log("Temperature in Mani;a: ");
printForecast(manilaTemperatures);

console.log("Temperature in Seoul: ");
printForecast(seoulTemperatures);
