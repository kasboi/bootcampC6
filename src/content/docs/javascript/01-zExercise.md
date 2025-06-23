---
title: Foundations - Practice Exercises
---

> **Topic**: Foundations  
> **Concepts**: Variables, data types, console, operators

---

## 📝 Multiple Choice Questions

### Question 1

Which of the following is the correct way to declare a variable that can be reassigned?

- A) `const name = "John";`
- B) `let name = "John";`
- C) `var name = "John";`
- D) Both B and C

### Question 2

What will `console.log(typeof null)` output?

- A) "null"
- B) "undefined"
- C) "object"
- D) "boolean"

### Question 3

Which of these is NOT a valid variable name in JavaScript?

- A) `firstName`
- B) `$price`
- C) `2ndPlace`
- D) `_secret`

### Question 4

What does `console.log(5 + "3")` output?

- A) 8
- B) "53"
- C) 53
- D) Error

### Question 5

Which data type is `NaN` (Not a Number)?

- A) string
- B) number
- C) undefined
- D) object

---

## 💻 Practical Coding Exercises

### Exercise 1: Variable Practice

Create variables for a person's information and display them:

```javascript
// TODO: Create variables for:
// - firstName (string)
// - lastName (string)
// - age (number)
// - isStudent (boolean)
// - favoriteColor (string)

// TODO: Use console.log to display all information
// Expected output format: "John Doe, age 25, student: true, favorite color: blue"
```

### Exercise 2: Calculator

Create a simple calculator using basic operators:

```javascript
// TODO: Create two variables with numbers
// TODO: Calculate and log the following:
// - Sum
// - Difference
// - Product
// - Division
// - Remainder (modulus)
// - Exponentiation
```

### Exercise 3: Data Type Explorer

Create variables of different types and explore them:

```javascript
// TODO: Create one variable of each type:
// - string, number, boolean, null, undefined

// TODO: Use typeof to check each variable's type
// TODO: Try some operations and see what happens
```

---

## 🎯 Challenge Problems

### Challenge 1: Temperature Converter

Create a program that converts temperatures between Celsius and Fahrenheit:

```javascript
// TODO: Create variables for temperature conversion
// Formula: F = (C × 9/5) + 32
// Formula: C = (F - 32) × 5/9

// Test with: 0°C should be 32°F, 100°C should be 212°F
```

### Challenge 2: Age Calculator

Calculate someone's age in different units:

```javascript
// TODO: Given a birth year, calculate:
// - Age in years
// - Age in months (approximate)
// - Age in days (approximate)
// - Age in hours (approximate)

const birthYear = 1995;
const currentYear = new Date().getFullYear();
```

---

## 🔍 Debugging Exercises

Find and fix the errors in these code snippets:

### Debug 1:

```javascript
// What's wrong with this code?
const userName = "Alice";
let userAge = 25;
const userLocation = "New York";

console.log(
  "User: " + userName + ", Age: " + userAge + ", Location: " + userLocation,
);

userName = "Bob";
```

### Debug 2:

```javascript
// What's wrong with this code?
let price = 19.99;
let quantity = 3;
let total = price * quantity;

console.log("Total: $" + total.toFixed(2));

const 2ndPrice = 29.99;
```

### Debug 3:

```javascript
// What's wrong with this code?
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + lastName; // Missing something?

console.log(fullName);
```

---

## 📊 Self-Assessment Quiz

Rate your understanding (1-5 scale):

1. **Variable Declaration**: Can you correctly use `let`, `const`, and understand when to use each?
2. **Data Types**: Do you understand the 6 primitive types in JavaScript?
3. **Operators**: Can you use arithmetic, assignment, and other operators correctly?
4. **Type Checking**: Do you understand `typeof` and its quirks?
5. **Console**: Can you effectively use `console.log()` for debugging?

**Goal**: Aim for 4-5 in all areas before moving to the next topic.

---

## 💡 Tips for Practice

1. **Use Browser Console**: Practice these exercises in your browser's developer tools
2. **Experiment**: Try variations of the examples
3. **Break Things**: Intentionally make errors to see what happens
4. **Ask Questions**: If something doesn't make sense, research or ask for help
5. **Build Small Projects**: Apply these concepts in mini-projects

Remember: Mastery comes from practice! 🚀
