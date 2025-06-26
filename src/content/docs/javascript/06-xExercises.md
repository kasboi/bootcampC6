---
title: Functions - Exercises
---

## Multiple Choice Questions

### Question 1

What is the correct syntax for a function declaration?
A) `function = myFunction() {}`
B) `function myFunction() {}`
C) `myFunction() = function {}`
D) `function: myFunction() {}`

**Answer: B**
**Explanation:** Function declarations use the `function` keyword followed by the function name and parentheses.

### Question 2

What will this function return?

```javascript
function add(a, b) {
  a + b;
}
```

A) The sum of a and b
B) `undefined`
C) `null`
D) Error

**Answer: B**
**Explanation:** Without a `return` statement, functions return `undefined` by default.

### Question 3

What's the difference between function declarations and function expressions?
A) No difference
B) Declarations are hoisted, expressions are not
C) Expressions are hoisted, declarations are not
D) Only syntax is different

**Answer: B**
**Explanation:** Function declarations are hoisted to the top of their scope, while function expressions are not.

### Question 4

What will this arrow function return?

```javascript
const multiply = (x, y) => x * y;
```

A) `undefined`
B) The product of x and y
C) `null`
D) Error

**Answer: B**
**Explanation:** Arrow functions with a single expression automatically return that expression's value.

### Question 5

How do you provide a default parameter value?
A) `function test(param = defaultValue)`
B) `function test(param || defaultValue)`
C) `function test(param: defaultValue)`
D) `function test(param, defaultValue)`

**Answer: A**
**Explanation:** ES6 default parameters use the `=` syntax in the parameter list.

### Question 6

What happens when you call a function with fewer arguments than parameters?
A) Error
B) Missing parameters are `undefined`
C) Missing parameters are `null`
D) Function doesn't execute

**Answer: B**
**Explanation:** Missing arguments result in `undefined` values for those parameters.

## Practical Coding Exercises

### Exercise 1: Interactive Greeting Function

Create a function that greets a person by name with user input:

```javascript
// TODO: Create a function called greetPerson that takes one parameter: name
// TODO: The function should return a greeting message like "Hello, [name]!"

// TODO: Create a function called interactiveGreeting that:
// TODO: 1. Prompts the user to enter their name
// TODO: 2. Calls greetPerson with the user's input
// TODO: 3. Displays the greeting result

function greetPerson(name) {
  // TODO: Return a greeting message using the name parameter
}

function interactiveGreeting() {
  // TODO: Use prompt() to ask "What's your name?"
  const userName = prompt("What's your name?");

  // TODO: Call greetPerson with the user's name
  const greeting = greetPerson(userName);

  // TODO: Display the greeting using console.log
  console.log(greeting);

  // TODO: Also display it using alert() for the user to see
  alert(greeting);
}

// TODO: Call your interactive function to test it
// interactiveGreeting();
```

**Expected Behavior:**

- User enters their name (e.g., "Alice")
- Function returns "Hello, Alice!"
- Result appears in both console and alert box
  // greetPerson("Bob") should return "Hello, Bob!"

````

### Exercise 2: Interactive Rectangle Calculator

Write a function that calculates the area of a rectangle with user input:

```javascript
// TODO: Create a function called calculateRectangleArea that takes length and width
function calculateRectangleArea(length, width) {
  // TODO: Return the area (length × width)
}

// TODO: Create an interactive calculator function
function rectangleCalculator() {
  // TODO: Prompt user for length
  const length = parseFloat(prompt("Enter the length of the rectangle:"));

  // TODO: Prompt user for width
  const width = parseFloat(prompt("Enter the width of the rectangle:"));

  // TODO: Check if inputs are valid numbers
  if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
    alert("Please enter valid positive numbers!");
    return; // Exit the function early
  }

  // TODO: Calculate the area using your function
  const area = calculateRectangleArea(length, width);

  // TODO: Display the result
  const result = `Rectangle with length ${length} and width ${width} has an area of ${area} square units.`;
  console.log(result);
  alert(result);
}

// TODO: Call your calculator to test it
// rectangleCalculator();
````

**Expected Behavior:**

- User enters length and width
- Function calculates and displays area
- Includes input validation for positive numbers

### Exercise 3: Interactive Savings Calculator

Create a function that calculates compound interest with user input and default values:

```javascript
// TODO: Create a function called calculateInterest with default parameters
function calculateInterest(principal, rate = 0.05, time = 1) {
  // TODO: Calculate compound interest: principal * (1 + rate)^time
  // TODO: Return the final amount
}

// TODO: Create an interactive savings calculator
function savingsCalculator() {
  // TODO: Prompt user for initial savings amount
  const principal = parseFloat(
    prompt("How much money are you starting with? $"),
  );

  // TODO: Ask if they want to use default interest rate (5%) or enter their own
  const useDefaultRate = confirm(
    "Use default interest rate of 5%? (OK = Yes, Cancel = No)",
  );

  let rate = 0.05; // Default rate
  if (!useDefaultRate) {
    // TODO: Prompt for custom interest rate as percentage
    const ratePercent = parseFloat(
      prompt("Enter interest rate as percentage (e.g., 5 for 5%):"),
    );
    rate = ratePercent / 100; // Convert percentage to decimal
  }

  // TODO: Ask if they want to use default time (1 year) or enter their own
  const useDefaultTime = confirm(
    "Calculate for 1 year? (OK = Yes, Cancel = No)",
  );

  let time = 1; // Default time
  if (!useDefaultTime) {
    // TODO: Prompt for number of years
    time = parseFloat(prompt("How many years?"));
  }

  // TODO: Validate inputs
  if (
    isNaN(principal) ||
    isNaN(rate) ||
    isNaN(time) ||
    principal <= 0 ||
    rate < 0 ||
    time <= 0
  ) {
    alert("Please enter valid positive numbers!");
    return;
  }

  // TODO: Calculate using your function
  const finalAmount = calculateInterest(principal, rate, time);
  const interestEarned = finalAmount - principal;

  // TODO: Display detailed results
  const result = `Initial amount: $${principal}
Interest rate: ${(rate * 100).toFixed(2)}%
Time period: ${time} year(s)
Final amount: $${finalAmount.toFixed(2)}
Interest earned: $${interestEarned.toFixed(2)}`;

  console.log(result);
  alert(result);
}

// TODO: Call your calculator to test it
// savingsCalculator();
```

**Expected Behavior:**

- User enters savings amount
- Option to use default or custom interest rate
- Option to use default or custom time period
- Shows detailed calculation results

### Exercise 4: Arrow Function Practice

Practice converting function declarations to arrow functions:

```javascript
// TODO: Convert this function declaration to an arrow function
// TODO: Store it in a variable called square
function square(x) {
  return x * x;
}

// TODO: Convert this function declaration to an arrow function
// TODO: Store it in a variable called isEven
function isEven(number) {
  return number % 2 === 0;
}

// TODO: Convert this function declaration to an arrow function
// TODO: Store it in a variable called getFullName
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

// TODO: Test your arrow functions
// square(5) should return 25
// isEven(4) should return true
// isEven(3) should return false
// getFullName("John", "Doe") should return "John Doe"
```

**Hint:** Arrow function syntax is: `const functionName = (parameters) => expression`

### Exercise 5: Function Expression

Create a function expression that finds the maximum of three numbers:

```javascript
// TODO: Create a function expression called findMax
// TODO: It should take three parameters: a, b, c
// TODO: Return the largest of the three numbers
// TODO: Don't use Math.max - write your own logic using if statements

const findMax = // Your function expression here
  // Test your function
  console.log(findMax(10, 5, 8)); // Expected: 10
console.log(findMax(1, 9, 3)); // Expected: 9
console.log(findMax(7, 7, 7)); // Expected: 7
```

**Hints:**

- Function expression syntax: `const name = function(params) { ... }`
- Use if statements to compare the numbers
- Remember to return the largest value

````

### Exercise 6: Return vs No Return

Create two functions to demonstrate the difference:

```javascript
function printMessage(message) {
  // This function should print the message but not return anything
}

function formatMessage(message) {
  // This function should return a formatted message
}

// Test both functions
printMessage("Hello World"); // Prints to console
const formatted = formatMessage("Hello World"); // Returns formatted string
console.log(formatted);
````

**Solutions:**

```javascript
function printMessage(message) {
  console.log(`Message: ${message}`);
  // No return statement - returns undefined
}

function formatMessage(message) {
  return `*** ${message} ***`;
}
```

## JavaScript Test Functions

```javascript
// Test function for function exercises
function testFunctionExercises() {
  console.log("=== Testing Function Exercises ===");

  // Test greetPerson
  const test1 = greetPerson("Alice") === "Hello, Alice!";
  console.log("greetPerson test:", test1 ? "PASS" : "FAIL");

  // Test calculateRectangleArea
  const test2 = calculateRectangleArea(5, 3) === 15;
  console.log("calculateRectangleArea test:", test2 ? "PASS" : "FAIL");

  // Test calculateInterest with defaults
  const result1 = calculateInterest(1000);
  const test3 = Math.abs(result1 - 1050) < 0.01; // Using small tolerance for floating point
  console.log("calculateInterest test:", test3 ? "PASS" : "FAIL");

  // Test arrow functions
  const test4 = square(4) === 16;
  const test5 = isEven(4) === true && isEven(5) === false;
  console.log("Arrow functions test:", test4 && test5 ? "PASS" : "FAIL");

  // Test findMax
  const test6 = findMax(10, 5, 8) === 10;
  console.log("findMax test:", test6 ? "PASS" : "FAIL");

  // Test formatMessage
  const test7 = formatMessage("Hello") === "*** Hello ***";
  console.log("formatMessage test:", test7 ? "PASS" : "FAIL");
}

// Run tests
testFunctionExercises();
```

## Challenge Problems

### Challenge 1: Temperature Converter

Create functions to convert between Celsius and Fahrenheit with user interaction:

```javascript
// TODO: Create conversion functions
function celsiusToFahrenheit(celsius) {
  // TODO: Formula: (celsius * 9/5) + 32
}

function fahrenheitToCelsius(fahrenheit) {
  // TODO: Formula: (fahrenheit - 32) * 5/9
}

// TODO: Create an interactive temperature converter
function temperatureConverter() {
  // TODO: Ask user which conversion they want
  const conversionType = prompt(
    "Choose conversion:\n1 - Celsius to Fahrenheit\n2 - Fahrenheit to Celsius\nEnter 1 or 2:",
  );

  if (conversionType === "1") {
    // TODO: Prompt for Celsius temperature
    const celsius = parseFloat(prompt("Enter temperature in Celsius:"));

    // TODO: Validate input
    if (isNaN(celsius)) {
      alert("Please enter a valid number!");
      return;
    }

    // TODO: Convert and display result
    const fahrenheit = celsiusToFahrenheit(celsius);
    const result = `${celsius}°C = ${fahrenheit.toFixed(1)}°F`;
    console.log(result);
    alert(result);
  } else if (conversionType === "2") {
    // TODO: Prompt for Fahrenheit temperature
    const fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit:"));

    // TODO: Validate input
    if (isNaN(fahrenheit)) {
      alert("Please enter a valid number!");
      return;
    }

    // TODO: Convert and display result
    const celsius = fahrenheitToCelsius(fahrenheit);
    const result = `${fahrenheit}°F = ${celsius.toFixed(1)}°C`;
    console.log(result);
    alert(result);
  } else {
    alert("Invalid choice! Please enter 1 or 2.");
  }
}

// TODO: Call your converter to test it
// temperatureConverter();
```

### Challenge 2: Grade Calculator

Create a function that calculates letter grades:

```javascript
// TODO: Create a function called getLetterGrade that takes a number score
// TODO: Return letter grades based on:
// TODO: 90-100: "A", 80-89: "B", 70-79: "C", 60-69: "D", below 60: "F"
// TODO: Test with scores: 95, 87, 73, 65, 45

// getLetterGrade(95) should return "A"
// getLetterGrade(87) should return "B"
// getLetterGrade(73) should return "C"
// getLetterGrade(65) should return "D"
// getLetterGrade(45) should return "F"
```

### Challenge 3: Simple Interest Calculator

Create a function for financial calculations:

```javascript
// TODO: Create a function called calculateSimpleInterest
// TODO: Parameters: principal, rate (as decimal), time (in years)
// TODO: Formula: principal * rate * time
// TODO: Return the interest amount (not total)

// TODO: Test your function:
// calculateSimpleInterest(1000, 0.05, 2) should return 100
// calculateSimpleInterest(500, 0.08, 1) should return 40
```

### Challenge 4: Number Validator

Create functions to validate different types of numbers:

```javascript
// TODO: Create a function called isPositive that returns true if number > 0
// TODO: Create a function called isNegative that returns true if number < 0
// TODO: Create a function called isZero that returns true if number equals 0

// TODO: Test each function with: 5, -3, 0, 10.5, -7.2
```

### Challenge 5: String Length Counter

Create a function that counts characters in a name:

```javascript
// TODO: Create a function called getNameLength that takes firstName and lastName
// TODO: Return the total number of characters (including the space between names)
// TODO: Format: "FirstName LastName" (first + space + last)

// getNameLength("John", "Doe") should return 8
// getNameLength("Alice", "Smith") should return 11
```

## Debugging Exercises

## Debugging Exercises

### Debug Exercise 1: Missing Return Statement

```javascript
// TODO: Fix this function - it should return the final price but returns undefined
function calculateDiscount(price, discountPercent) {
  const discount = price * (discountPercent / 100);
  const finalPrice = price - discount;
  // TODO: Add the missing return statement
}

console.log(calculateDiscount(100, 20)); // Should return 80, but returns undefined
```

### Debug Exercise 2: Arrow Function Syntax

```javascript
// TODO: Fix this arrow function - it's not returning the calculated area
const calculateArea = (radius) => {
  const area = Math.PI * radius * radius;
  area; // TODO: This line doesn't return the value - fix it
};

console.log(calculateArea(5)); // Should return area, but returns undefined
```

### Debug Exercise 3: Missing Default Parameter

```javascript
// TODO: Fix this function so it works when only one parameter is provided
function greetUser(name, greeting) {
  return greeting + ", " + name + "!";
}

console.log(greetUser("Alice")); // Should provide default greeting, but shows "undefined, Alice!"
// TODO: Add a default value for the greeting parameter
```

## Real-World Applications

## Real-World Applications

### Application 1: Simple Calculator Functions

Create basic calculator functions for everyday use:

```javascript
// TODO: Create a function called add that takes two numbers and returns their sum
// TODO: Create a function called subtract that takes two numbers and returns their difference
// TODO: Create a function called multiply that takes two numbers and returns their product
// TODO: Create a function called divide that takes two numbers and returns their quotient

// Test your calculator functions:
// add(5, 3) should return 8
// subtract(10, 4) should return 6
// multiply(6, 7) should return 42
// divide(15, 3) should return 5
```

### Application 2: Personal Information Functions

Create functions to work with personal data:

```javascript
// TODO: Create a function called getFullName that takes firstName and lastName
// TODO: Return the full name with a space between first and last name

// TODO: Create a function called calculateAge that takes birthYear and currentYear
// TODO: Return the person's age

// TODO: Create a function called formatPhoneNumber that takes a 10-digit number
// TODO: Return it formatted as "(XXX) XXX-XXXX"

// Test your functions:
// getFullName("John", "Smith") should return "John Smith"
// calculateAge(1990, 2024) should return 34
// formatPhoneNumber(1234567890) should return "(123) 456-7890"
```

### Application 3: Shopping Functions

Create functions for shopping calculations:

```javascript
// TODO: Create a function called calculateTax that takes price and taxRate
// TODO: Return the tax amount (price * taxRate)

// TODO: Create a function called calculateTotalPrice that takes price and taxRate
// TODO: Return the total price including tax

// TODO: Create a function called applyDiscount that takes price and discountPercent
// TODO: Return the discounted price

// Test your functions:
// calculateTax(100, 0.08) should return 8
// calculateTotalPrice(100, 0.08) should return 108
// applyDiscount(100, 20) should return 80 (20% off)
```

## Self-Assessment Checklist

- [ ] I can write function declarations using the `function` keyword
- [ ] I can write function expressions using `const functionName = function() {}`
- [ ] I can write arrow functions using `const functionName = () => {}`
- [ ] I understand how to use parameters in functions
- [ ] I know how to return values from functions
- [ ] I can use default parameters when needed
- [ ] I can call functions and use their return values
- [ ] I understand the difference between returning and console.log
- [ ] I can write functions that solve real-world problems
- [ ] I follow good naming conventions for functions

## Additional Practice Resources

1. Practice writing functions for mathematical operations
2. Create functions that format and validate data
3. Build simple calculator programs using functions
4. Practice converting between function declaration and expression syntax
5. Create utility functions for common tasks
6. Write functions that work with strings and numbers
7. Practice debugging function-related issues

---

**Next Topic:** [07 - Scope](./07-scope.md)
