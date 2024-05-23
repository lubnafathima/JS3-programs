// 9. WAP to calculate BMI that accepts a person's weight (in kilograms) and height (in meters) as parameters. Print "Underweight" if BMI is less than 18.5, "Normal weight" if between 18.5 and 24.9, "Overweight" if between 25 and 29.9, and "Obese" if 30 or above. You can look for the formula of BMI on internet.
let weight = 65; // in kilograms
let height = 1.75;
let bmi = weight / (height * height);
if (bmi < 18.5) {
  console.log("Underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("Normal weight");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("Overweight");
} else {
  console.log("Obese");
} 