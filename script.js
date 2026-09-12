const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const calculateButton = document.getElementById("calculate");
const bmiDisplay = document.querySelector(".bmi-value span");
const bmiCategory = document.querySelector(".result p");

const underweight = document.querySelector(".underweight");
const healthy = document.querySelector(".healthy");
const overweight = document.querySelector(".overweight");
const obese = document.querySelector(".obese");

const resultMessage = document.querySelector(".result-message");
const resetButton = document.getElementById("reset");
calculateButton.onclick = function () {
const height = Number(heightInput.value);
const weight = Number(weightInput.value);
const heightInMeters = height / 100;
const bmi = weight / (heightInMeters * heightInMeters);
const roundedBmi = bmi.toFixed(1);
bmiDisplay.textContent = roundedBmi;

underweight.classList.remove("active");
healthy.classList.remove("active");
overweight.classList.remove("active");
obese.classList.remove("active");

if (bmi < 18.5) {
    bmiCategory.textContent = "Underweight";
    underweight.classList.add("active");
    resultMessage.textContent = "Your BMI is below the healthy range.";
}

else if (bmi < 25) {
    bmiCategory.textContent = "Healthy weight";
    healthy.classList.add("active");
    resultMessage.textContent = "Your BMI is within the healthy range.";
}

else if (bmi < 30) {
    bmiCategory.textContent = "Overweight";
    overweight.classList.add("active");
    resultMessage.textContent = "Your BMI is above the healthy range.";
}

else {
    bmiCategory.textContent = "Obese";
    obese.classList.add("active");
    resultMessage.textContent = "Your BMI is in the obesity range.";
}
if (height <= 0 || weight <= 0) {
    bmiCategory.textContent = "Please enter a valid height and weight.";
    bmiDisplay.textContent = "--";
    return;
}
if (bmi < 18.5) {
    bmiCategory.textContent = "Underweight";
    underweight.classList.add("active");
}

else if (bmi < 25) {
    bmiCategory.textContent = "Healthy weight";
    healthy.classList.add("active");
}

else if (bmi < 30) {
    bmiCategory.textContent = "Overweight";
    overweight.classList.add("active");
}

else {
    bmiCategory.textContent = "Obese";
    obese.classList.add("active");
}
};

resetButton.onclick = function () {
    heightInput.value = "";
    weightInput.value = "";

    bmiDisplay.textContent = "--";
    bmiCategory.textContent = "Your result will appear here.";
    resultMessage.textContent = "Enter your height and weight to see your result.";

    underweight.classList.remove("active");
    healthy.classList.remove("active");
    overweight.classList.remove("active");
    obese.classList.remove("active");
};