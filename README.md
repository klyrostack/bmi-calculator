# BMI Studio

A modern, responsive BMI calculator built with **HTML, CSS, and
JavaScript**.

BMI Studio allows users to enter their height and weight, calculate
their BMI, and instantly see their BMI category through an interactive
and clean interface.

## ✨ Features

-   BMI calculation using height and weight
-   Height input in centimeters (cm)
-   Weight input in kilograms (kg)
-   Automatic BMI category detection
-   Interactive BMI category scale
-   Dynamic BMI result display
-   Input validation for invalid values
-   Personalized result messages
-   Reset functionality
-   Responsive mobile layout
-   Modern dark-themed interface
-   Hover and focus interactions

## 🛠️ Technologies Used

-   **HTML5** --- page structure and semantic elements
-   **CSS3** --- styling, layout, responsiveness, and interactions
-   **JavaScript** --- calculations, DOM manipulation, button events,
    and conditional logic

## 🧮 How BMI Is Calculated

BMI is calculated using:

``` text
BMI = weight ÷ height²
```

Because the calculator accepts height in centimeters, the height is
first converted into meters.

For example:

``` text
Height: 175 cm
Weight: 70 kg

Height in meters = 175 ÷ 100 = 1.75 m

BMI = 70 ÷ (1.75 × 1.75)
BMI ≈ 22.9
```

## 📊 BMI Categories

  BMI            Category
  -------------- ----------------
  Below 18.5     Underweight
  18.5 -- 24.9   Healthy weight
  25 -- 29.9     Overweight
  30 or above    Obese

## 📁 Project Structure

``` text
BMI Calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 How to Run

1.  Clone or download the repository.
2.  Open the project folder.
3.  Open `index.html` in a web browser.
4.  Enter your height and weight.
5.  Click **Calculate BMI**.

No frameworks, packages, or build tools are required.

## 📚 What I Learned

This project was built while learning the fundamentals of JavaScript. It
helped me practice:

-   Variables and constants
-   Arithmetic operations
-   Accepting user input
-   Type conversion with `Number()`
-   DOM selection
-   DOM manipulation with `textContent`
-   Button click events
-   `if / else if / else` statements
-   Basic input validation
-   CSS Flexbox and Grid
-   Responsive design

## 🔮 Future Improvements

Possible future versions could include:

-   Multiple unit systems
-   BMI history
-   Local storage
-   Interactive charts
-   Improved accessibility
-   More advanced health metrics
-   Additional personalization

## ⚠️ Disclaimer

BMI is a general screening measurement and does not directly measure
body fat or overall health. It should not be treated as a complete
assessment of an individual's health.

------------------------------------------------------------------------

**Built as a beginner JavaScript project by Klyro Stack.**
