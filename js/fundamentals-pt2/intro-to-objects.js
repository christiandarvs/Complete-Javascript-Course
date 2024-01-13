const person1 = {
  firstName: "Christian",
  lastName: "Smith",
  age: 25,
  eyeColor: "brown",
  nationality: "Filipino",
  programmingLang: "JavaScript",
}; // properties

// Dot Notation
console.log("------ Dot Notation -----");
console.log(`First Name: ${person1.firstName}`);
console.log(`Last Name: ${person1.lastName}`);
console.log(`Age: ${person1.age}`);
console.log(`Eye Color: ${person1.eyeColor}`);
console.log(`Nationality: ${person1.nationality}`);
console.log(`Programming Language: ${person1.programmingLang}\n`);

// Bracket Notation
console.log(`------ Bracket Notation -----`);
console.log(`First Name: ${person1["firstName"]}`);
console.log(`Last Name: ${person1["lastName"]}`);
console.log(`Age: ${person1["age"]}`);
console.log(`Eye Color: ${person1["eyeColor"]}`);
console.log(`Nationality: ${person1["nationality"]}`);
console.log(`Programming Language: ${person1["programmingLang"]}\n`);

console.log(`Full Name: ${person1.firstName} ${person1.lastName}\n`);
// Array - ordered data, Object - unordered data

// add new properties
person1.faveDrink = "Coffee";
person1.university = "DLSU-D";

person1["birthPlace"] = "Jupiter";
person1["faveFood"] = "Pizza";

console.log(`Favourite Drink: ${person1.faveDrink}`);
console.log(`University: ${person1.university}`);
console.log(`Birth Place: ${person1.birthPlace}`);
console.log(`Favourite Food: ${person1.faveFood}\n`);

// ASSIGNMENT
const myCountry = {
  country: "Philippines",
  capital: "Manila",
  language: "Filipino",
  population: 115.56,
  neighbours: ["China", "Taiwan", "Malaysia"],
};

console.log("------ ASSIGNMENT -----");

myCountry.population += 2;
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} and a capital called ${myCountry.capital}.\n`
);

myCountry["population"] -= 2;
console.log(
  `${myCountry["country"]} has ${myCountry["population"]} million ${myCountry["language"]}-speaking people, ${myCountry["neighbours"].length} and a capital called ${myCountry["capital"]}.`
);
