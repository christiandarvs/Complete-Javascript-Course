const person1 = {
  firstName: "Christian",
  lastName: "Smith",
  birthYear: 1991,
  eyeColor: "brown",
  nationality: "Filipino",
  programmingLang: "JavaScript",
  hasWork: false,
  calcAge: function () {
    return 2024 - this.birthYear;
  },
  checkIfHasWork: function () {
    if (this.hasWork) {
      return `${this.firstName} has a job.`;
    } else {
      return `${this.firstName} does not have a job.`;
    }
  },
};

console.log(`${person1.firstName} is ${person1.calcAge()} years old.`);
console.log(person1.checkIfHasWork());
