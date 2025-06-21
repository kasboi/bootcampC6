---
title: Control Flow - Practice Exercises
---

> **Topic**: Control Flow  
> **Concepts**: `if`, `else`, `switch`, conditional statements

---

## 📝 Multiple Choice Questions

### Question 1

What will this code output?

```javascript
let x = 10;
if (x > 5) {
  console.log("A");
} else if (x > 15) {
  console.log("B");
} else {
  console.log("C");
}
```

- A) "A"
- B) "B"
- C) "C"
- D) Nothing

**Answer: A** - The first condition (x > 5) is true, so "A" is printed and the rest is skipped.

### Question 2

Which of these values is considered "falsy" in JavaScript?

- A) "false"
- B) []
- C) 0
- D) " "

**Answer: C** - 0 is falsy. "false" is a string (truthy), [] is an empty array (truthy), and " " contains a space (truthy).

### Question 3

What's the output of this switch statement?

```javascript
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start");
  case "Tuesday":
    console.log("Continue");
    break;
  default:
    console.log("Default");
}
```

- A) "Start"
- B) "Start" then "Continue"
- C) "Start" then "Continue" then "Default"
- D) Error

**Answer: B** - Missing break after "Monday" case causes fall-through to "Tuesday" case.

### Question 4

What does the ternary operator `condition ? value1 : value2` do?

- A) Returns value1 if condition is false
- B) Returns value2 if condition is true
- C) Returns value1 if condition is true, value2 if false
- D) Always returns value1

**Answer: C** - Ternary operator returns the first value if condition is true, second if false.

### Question 5

Which comparison operator checks both value AND type?

- A) ==
- B) ===
- C) !=
- D) <>

**Answer: B** - === is strict equality that checks both value and type.

---

## 💻 Practical Coding Exercises

### Exercise 1: Grade Calculator

Create a program that converts numeric scores to letter grades:

```javascript
// TODO: Create a variable for a student's score (0-100)
// TODO: Use if-else statements to assign letter grades:
//       A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60
// TODO: Display the score and corresponding letter grade

// HINT: Use if-else if-else chain
// HINT: Start with the highest grade first
// HINT: Use >= for comparisons
// HINT: Display both the numeric score and letter grade
```

### Exercise 2: Traffic Light System

Create a traffic light decision system:

```javascript
// TODO: Create a variable for traffic light color
// TODO: Use switch statement to determine action:
//       Red: "STOP", Yellow: "CAUTION", Green: "GO", Invalid: "INVALID COLOR"
// TODO: Display the action message

// HINT: Use switch statement
// HINT: Convert color to lowercase for consistency
// HINT: Use default case for invalid colors
// HINT: Don't forget break statements
```

### Exercise 3: Age Category Classifier

Classify people by age groups:

```javascript
// TODO: Create a variable for person's age
// TODO: Categorize into age groups:
//       0-12: "Child", 13-19: "Teenager", 20-64: "Adult", 65+: "Senior"
// TODO: Handle invalid ages (negative numbers)
// TODO: Display the age category

// HINT: Use if-else if-else chain
// HINT: Check for negative ages first
// HINT: Use appropriate comparison operators for ranges
// HINT: Consider inclusive vs exclusive ranges
```

### Exercise 4: Day Type Checker

Check if a day is a weekday or weekend:

```javascript
// TODO: Create a variable for a day of the week
// TODO: Use switch statement to determine if it's a weekday or weekend
// TODO: Display the result

// HINT: Group multiple cases together
// HINT: Monday-Friday are weekdays, Saturday-Sunday are weekends
// HINT: Handle case-insensitive input
// HINT: Include a default case for invalid days
```

### Exercise 5: Temperature Advisor

Give clothing advice based on temperature:

```javascript
// TODO: Create a variable for temperature in Fahrenheit
// TODO: Give advice based on temperature:
//       Below 32: "Wear a heavy coat!"
//       32-50: "Wear a jacket"
//       51-70: "Wear a sweater"
//       71-80: "Perfect weather!"
//       Above 80: "Stay cool!"
// TODO: Display the temperature and advice

// HINT: Use if-else if-else chain
// HINT: Use appropriate comparison operators
// HINT: Consider the order of conditions
```

## Challenge Problems

### Challenge 1: Grade Calculator with Comments

Create a comprehensive grade calculator:

```javascript
// TODO: Create a variable for a student's score (0-100)
// TODO: Calculate letter grade and add comments:
//       A (90-100): "Excellent work!"
//       B (80-89): "Good job!"
//       C (70-79): "Fair work"
//       D (60-69): "Needs improvement"
//       F (below 60): "Must retake"
// TODO: Also check for invalid scores (negative or over 100)

// HINT: Use if-else if-else chain
// HINT: Validate input first
// HINT: Display both grade and comment
```

### Challenge 2: Simple Calculator

Create a basic calculator using conditional statements:

```javascript
// TODO: Create variables for two numbers and an operator (+, -, *, /)
// TODO: Use switch statement to perform the calculation
// TODO: Handle division by zero
// TODO: Handle invalid operators
// TODO: Display the calculation and result

// HINT: Use switch statement for operators
// HINT: Check for division by zero before calculating
// HINT: Use default case for invalid operators
// HINT: Format output nicely (e.g., "5 + 3 = 8")
```

### Challenge 3: Voting Eligibility Checker

Check if someone can vote based on multiple criteria:

```javascript
// TODO: Create variables for age, citizenship status, and registration status
// TODO: Check eligibility (must be 18+, citizen, and registered)
// TODO: Provide specific feedback for why someone can't vote
// TODO: Display the eligibility result

// HINT: Use logical operators (&&, ||)
// HINT: Check each condition and provide specific feedback
// HINT: Consider using nested if statements
// HINT: Give encouraging messages for eligible voters
```

## Debugging Exercises

### Debug Exercise 1: Missing Break Statement

Find and fix the error:

```javascript
// This switch statement has a bug
let day = "Monday";
let dayType;

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    dayType = "Weekday";
  case "Saturday":
  case "Sunday":
    dayType = "Weekend";
    break;
  default:
    dayType = "Invalid day";
}

console.log(dayType); // What will this output and why?

// TODO: Fix the bug
// HINT: What happens when break statements are missing?
```

### Debug Exercise 2: Assignment vs Comparison

Find and fix the error:

```javascript
// This condition has a bug
let temperature = 75;

if ((temperature = 70)) {
  console.log("Perfect temperature!");
} else {
  console.log("Not perfect temperature");
}

// TODO: Fix the bug
// HINT: Look at the comparison operator
```

### Debug Exercise 3: Logic Error

Find and fix the error:

```javascript
// This age check has a logic error
let age = 25;
let hasLicense = false;

// Should allow driving if 18+ AND has license
if (age >= 18 || hasLicense) {
  console.log("Can drive");
} else {
  console.log("Cannot drive");
}

// TODO: Fix the logical operator
// HINT: Should it be OR or AND?
```

## Real-World Applications

### Application 1: ATM Transaction

Simulate ATM transaction logic:

```javascript
// TODO: Create variables for account balance, withdrawal amount, and daily limit
// TODO: Check if transaction is allowed:
//       - Sufficient funds
//       - Within daily limit
//       - Positive withdrawal amount
// TODO: Display appropriate messages

// HINT: Use multiple conditions with logical operators
// HINT: Check for edge cases (negative amounts, zero balance)
// HINT: Provide clear feedback for each condition
```

### Application 2: Shipping Cost Calculator

Calculate shipping costs based on weight and distance:

```javascript
// TODO: Create variables for package weight and shipping distance
// TODO: Calculate shipping cost:
//       - Light package (0-5 lbs): Base rate $5
//       - Medium package (6-20 lbs): Base rate $10
//       - Heavy package (21+ lbs): Base rate $20
//       - Add $2 for every 100 miles over 500 miles
// TODO: Display the shipping cost breakdown

// HINT: Use if-else for weight categories
// HINT: Calculate distance surcharge separately
// HINT: Show detailed cost breakdown
```

### Application 3: Movie Theater Pricing

Calculate movie ticket prices with discounts:

```javascript
// TODO: Create variables for customer age, movie time, and membership status
// TODO: Apply pricing rules:
//       - Base price: $12
//       - Senior (65+): 25% discount
//       - Child (under 13): 30% discount
//       - Matinee (before 5 PM): $3 off
//       - Member: Additional 10% off final price
// TODO: Display original price, discounts applied, and final price

// HINT: Calculate discounts step by step
// HINT: Apply membership discount last
// HINT: Show all calculations clearly
```

## Self-Assessment Checklist

After completing these exercises, check that you can:

- [ ] Write basic if-else statements
- [ ] Use if-else if-else chains for multiple conditions
- [ ] Use switch statements with multiple cases
- [ ] Handle default cases in switch statements
- [ ] Use logical operators (&&, ||, !) in conditions
- [ ] Compare values using ===, !==, >, <, >=, <=
- [ ] Handle edge cases and invalid inputs
- [ ] Debug common conditional logic errors
- [ ] Apply conditional logic to real-world problems
- [ ] Write clean, readable conditional code

## Additional Practice Suggestions

1. Create a simple quiz program with multiple choice questions
2. Build a basic recommendation system (movie, book, restaurant)
3. Make a simple game with branching storylines
4. Create a form validator for user input
5. Build a basic chatbot with predefined responses

---

**Next Topic:** [05 - Loops](./05-loops.md)
