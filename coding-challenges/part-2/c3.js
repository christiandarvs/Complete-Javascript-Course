const markDetails = {
  fullName: "Mark Smith",
  mass: 78,
  height: 1.69,
  calculateBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const johnDetails = {
  fullName: "John Miller",
  mass: 92,
  height: 1.95,
  calculateBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const markBMI = markDetails.calculateBMI();
const johnBMI = johnDetails.calculateBMI();

if (markBMI > johnBMI) {
  console.log(
    `${markDetails.fullName}'s BMI (${markBMI}) is higher than ${johnDetails.fullName}'s BMI (${johnBMI})`
  );
} else {
  console.log(
    `${johnDetails.fullName}'s BMI (${johnBMI}) is higher than ${markDetails.fullName}'s BMI (${markBMI})`
  );
}
