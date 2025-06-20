---
title: Strings and Type Conversion - Exercises
---

## Multiple Choice Questions

### Question 1

What is the correct way to create a string in JavaScript?

- A) `let str = 'Hello World'`
- B) `let str = "Hello World"`
- C) `let str = \`Hello World\``
  D) All of the above

### Question 2

What will `"5" + 3` return in JavaScript?

- A) `8`
- B) `"8"`
- C) `"53"`
- D) `Error`

### Question 3

Which method is used to convert a string to uppercase?

- A) `toUpper()`
- B) `toUpperCase()`
- C) `upperCase()`
- D) `upper()`

### Question 4

What does `Number("123")` return?

- A) `"123"`
- B) `123`
- C) `NaN`
- D) `undefined`

### Question 5

What will `Boolean("")` return?

- A) `true`
- B) `false`
- C) `""`
- D) `Error`

## Practical Coding Exercises

### Exercise 1: String Manipulation

Create variables for a person's first and last name, then format them as "Last, First".

```javascript
// TODO: Create a variable called firstName with the value "Sarah"
// TODO: Create a variable called lastName with the value "Johnson"
// TODO: Create a variable called fullName that combines them in "Last, First" format
// TODO: Use console.log to display the result

// HINT: Use string concatenation with + operator
// HINT: Don't forget the comma and space between last and first name

// Expected output: "Johnson, Sarah"
```

### Exercise 2: String Length and Properties

Create variables to practice working with string properties and basic validation.

```javascript
// TODO: Create a variable called password with the value "mySecret123"
// TODO: Check the length of the password using .length property
// TODO: Display if the password is at least 8 characters long
// TODO: Convert the password to uppercase and lowercase

// HINT: Use .length property to get string length
// HINT: Use comparison operators to check if length >= 8
// HINT: Use .toUpperCase() and .toLowerCase() methods

// Expected output:
// "Password: mySecret123"
// "Length: 11"
// "Is long enough: true"
// "Uppercase: MYSECRET123"
// "Lowercase: mysecret123"
```

### Exercise 3: Template Literals

Practice using template literals to create dynamic messages.

```javascript
// TODO: Create a variable called userName with the value "Alex"
// TODO: Create a variable called timeOfDay with the value "morning"
// TODO: Use template literals to create a greeting message
// TODO: Format: "Good [timeOfDay], [userName]! Welcome to our website."

// HINT: Use backticks `` instead of quotes
// HINT: Use ${variableName} syntax inside the backticks

// Expected output: "Good morning, Alex! Welcome to our website."
```

### Exercise 4: Type Conversion Practice

Practice converting between different data types.

```javascript
// TODO: Create a variable called originalNumber with the value 42
// TODO: Create a variable called originalString with the value "123"
// TODO: Create a variable called originalBoolean with the value true
// TODO: Convert each to different types and display the results
// TODO: Use typeof to show the original and converted types

// HINT: Use String(), Number(), Boolean() functions
// HINT: Use typeof operator to check data types
// HINT: Try converting: a number, a string with numbers, and a boolean

// Expected output format:
// "Original: 42 (number) → String: '42' (string)"
// "Original: '123' (string) → Number: 123 (number)"
// "Original: true (boolean) → String: 'true' (string)"
```

## Challenge Problems

### Challenge 1: String Exploration

Practice working with string methods and properties.

```javascript
// TODO: Create a variable called fullName with the value "Emma Thompson"
// TODO: Display the length of your name
// TODO: Convert it to uppercase and lowercase
// TODO: Use template literals to create a sentence about yourself

// HINT: Combine what you learned about .length, .toUpperCase(), .toLowerCase()
// HINT: Use template literals with ${} syntax
// HINT: Create multiple console.log statements to display different information

// Expected output:
// "My name is Emma Thompson"
// "It has 13 characters"
// "Uppercase: EMMA THOMPSON"
// "Lowercase: emma thompson"
```

### Challenge 2: Sentence Builder

Create a program that builds sentences using string concatenation and template literals.

```javascript
// TODO: Create a variable called subject with the value "The cat"
// TODO: Create a variable called verb with the value "jumped"
// TODO: Create a variable called object with the value "over the fence"
// TODO: Build the same sentence using both concatenation (+) and template literals
// TODO: Compare the readability of both approaches

// HINT: Create 3 variables for different parts of speech
// HINT: Use + operator for concatenation method
// HINT: Use backticks and ${} for template literal method
// HINT: Don't forget spaces and punctuation

// Expected output:
// "Using concatenation: The cat jumped over the fence."
// "Using template literals: The cat jumped over the fence."
```

### Challenge 3: Type Conversion Explorer

Explore what happens when you convert different values to different types.

```javascript
// TODO: Create a variable called emptyString with the value ""
// TODO: Create a variable called stringZero with the value "0"
// TODO: Create a variable called numberZero with the value 0
// TODO: Convert each to String, Number, and Boolean
// TODO: Use typeof to show the original and converted types
// TODO: Notice which values become truthy/falsy when converted to Boolean

// HINT: Remember the falsy values: 0, "", null, undefined, false, NaN
// HINT: Use console.log to display your results clearly
// HINT: Try converting both "0" (string) and 0 (number) to see the difference

// Expected output format:
// "emptyString: '' (string) → Number: 0, Boolean: false"
// "stringZero: '0' (string) → Number: 0, Boolean: true"
// "numberZero: 0 (number) → String: '0', Boolean: false"
```

## Debugging Exercises

### Debug Exercise 1

Find and fix the error in this code that's trying to combine names:

```javascript
// This code should display a full name even if last name is missing
let firstName = "John";
let lastName; // undefined

let fullName = firstName + " " + lastName;
console.log(fullName); // Currently shows "John undefined"

// TODO: Fix this so it shows just "John" when lastName is undefined
// HINT: You might need to check if lastName exists before using it
// HINT: Use an if statement or the || operator

// Expected output after fix: "John"
```

### Debug Exercise 2

Fix this type conversion issue:

```javascript
// This should add two numbers, not concatenate strings
let num1 = "5";
let num2 = "3";
let result = num1 + num2;

console.log(result); // Currently shows "53" instead of 8

// TODO: Fix this so it shows 8
// HINT: You need to convert the strings to numbers first

// Expected output after fix: 8
```

## Real-World Applications

### Application 1: User Input Processing

Practice working with user input and string manipulation.

```javascript
// TODO: Use prompt() to get user's name and store in variable userName
// TODO: Use prompt() to get user's age and store in variable userAge
// TODO: Convert age to number using Number() and store in variable ageNumber
// TODO: Display the information using template literals
// TODO: Check if the converted age is a valid number (not NaN)

// HINT: Use prompt() to get user input
// HINT: Use Number() to convert age string to number
// HINT: Use template literals to create nice output messages
// HINT: Check if the converted age is a valid number (not NaN)

// Expected output format:
// "Hello Emma! You are 25 years old."
// "Your name has 4 characters."
// "Age is a valid number: true"
```

### Application 2: Simple Calculator Input

Create a simple calculator that takes string inputs and converts them to numbers.

```javascript
// TODO: Create a variable called firstNumber and use prompt() to get the first number
// TODO: Create a variable called secondNumber and use prompt() to get the second number
// TODO: Convert them to numbers using Number() and store in num1 and num2
// TODO: Perform basic arithmetic operations (+, -, *, /)
// TODO: Display results using template literals

// HINT: Use prompt() to get user input
// HINT: Use Number() to convert strings to numbers
// HINT: Use template literals to format the output nicely
// HINT: Test with different inputs to see what happens

// Expected output format:
// "10 + 5 = 15"
// "10 - 5 = 5"
// "10 * 5 = 50"
// "10 / 5 = 2"
```

### Application 3: Name Formatter

Practice string manipulation by creating a name formatter.

```javascript
// TODO: Create a variable called fullName with the value "john doe smith"
// TODO: Convert each part to proper case (first letter uppercase, rest lowercase)
// TODO: Display the formatted name

// HINT: You might need to work with individual parts of the name
// HINT: Use string methods like toUpperCase() and toLowerCase()
// HINT: Consider how to handle the first letter vs the rest of each word
// HINT: This is a challenging exercise - try your best with the tools you know

// Expected output: "John Doe Smith"
// Note: This is advanced - focus on converting the whole string first
```

## Self-Assessment Checklist

- [ ] I can create strings using different quote types
- [ ] I understand string concatenation vs template literals
- [ ] I can use common string methods (length, toUpperCase, toLowerCase, etc.)
- [ ] I understand the difference between explicit and implicit type conversion
- [ ] I can convert between strings, numbers, and booleans
- [ ] I know which values are truthy and falsy
- [ ] I can work with template literals and interpolation
- [ ] I can debug common string and conversion issues
- [ ] I can apply string manipulation in real-world scenarios

## Additional Practice Resources

1. Practice string methods on different inputs
2. Experiment with edge cases in type conversion
3. Build small projects using string manipulation
4. Try converting user input from forms
5. Practice with different data validation scenarios

---

**Next Topic:** [03 - Comparisons and Logic](./03-comparisons-and-logic-exercises.md)
