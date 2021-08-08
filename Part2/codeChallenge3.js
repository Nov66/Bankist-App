/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

Your tasks:

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method

3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
*/
const markMiller = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function() {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
}

const johnSmith = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function() {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
};
markMiller.calcBMI(); //* need to call the function first to use this.BMI
johnSmith.calcBMI();

if(johnSmith.BMI > markMiller.BMI) {
  console.log(`${johnSmith.fullName}'s BMI (${johnSmith.BMI}) is higher than ${markMiller.fullName}'s BMI (${markMiller.BMI}!)`)
} else if(markMiller.BMI > johnSmith.BMI) {
    console.log(`${markMiller.fullName}'s BMI (${markMiller.BMI}) is higher than ${johnSmith.fullName}'s BMI (${markMiller.BMI}!)`)
}
