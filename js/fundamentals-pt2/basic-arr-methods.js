const brands = ["Nike", "Adidas", "Puma"];
console.log(`Brands (Initial): ${brands}\n`);

// Add to end of array
brands.push("New Balance");
console.log(`Push: ${brands}\n`);

// Add to beginning of array
brands.unshift("Reebok");
console.log(`Unshift: ${brands}\n`);

// Remove from end of array
brands.pop();
console.log(`Pop: ${brands}\n`);

const poppedElement = brands.pop();
console.log(`Popped Element: ${poppedElement}`);
console.log(`Brands (After Pop): ${brands}\n`);

// Remove from beginning of array
brands.shift();
console.log(`Shift: ${brands}\n`);

console.log(`Index of Adidas: ${brands.indexOf("Adidas")}`);
console.log(`Index of Nike: ${brands.indexOf("Nike")}`);
console.log(`Index of Puma: ${brands.indexOf("Puma")}\n`);

// includes() returns true or false if element is in array | strict - equality
console.log(`Includes Adidas: ${brands.includes("Adidas")}`);
console.log(`Includes Nike: ${brands.includes("Nike")}`);
console.log(`Includes Puma: ${brands.includes("Puma")}\n`);

const searchElement = "Samsung";
brands.includes(searchElement)
  ? console.log(`Includes ${searchElement}`)
  : console.log(`Does not include ${searchElement}\n`);

// EXPERIMENT WITH LINEAR SEARCH
function linearSearch(array, targetElement) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === targetElement) return i;
  }
  return -1;
}

const targetElement = 10;

const randomNumbers = [5, 2, 9, 1, 8, 4, 6, 7, 3, 10];
const result = linearSearch(randomNumbers, targetElement);
if (result !== -1) {
  console.log(`Element ${targetElement} is present at index ${result}`);
} else {
  console.log(`Element ${targetElement} is not present in array`);
}
console.log("----------------------------------\n");

// ASSIGNMENT
const neighborCountries = ["Germany", "Japan"];
console.log(`Neighbor Countries: ${neighborCountries}\n`);

neighborCountries.push("Dystopia");
console.log(`Neighbor Countries: ${neighborCountries}\n`);

neighborCountries.pop();
console.log(`Neighbor Countries: ${neighborCountries}\n`);

const message = neighborCountries.includes("Germany")
  ? "Contains a central European country :D"
  : "Does not contain a central European country :(";
console.log(message + "\n");

const countryToBeReplaced = "Japan";
if (neighborCountries.indexOf(countryToBeReplaced)) {
  neighborCountries[neighborCountries.indexOf(countryToBeReplaced)] = "Korea";
} else {
  console.log(`${countryToBeReplaced} is not in the array`);
}

console.log(`Neighbor Countries: ${neighborCountries}\n`);
