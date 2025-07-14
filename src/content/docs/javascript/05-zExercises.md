---
title: Loops - Exercises
---

## Multiple Choice Questions

### Question 1

Which loop is best for iterating over an array when you need the index?

- A) `for...in` loop
- B) `for...of` loop
- C) `for` loop
- D) `while` loop

### Question 2

What will this code output?

```javascript
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

- A) 0 1 2 3
- B) 1 2 3
- C) 0 1 2
- D) Error

### Question 3

What happens if you forget the increment in a `for` loop?

- A) The loop runs once
- B) The loop doesn't run at all
- C) The loop runs infinitely
- D) Syntax error

### Question 4

Which statement is used to skip the current iteration and continue with the next one?

- A) `break`
- B) `continue`
- C) `return`
- D) `skip`

### Question 5

What will happen with this `while` loop?

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  // Missing i++
}
```

- A) Prints 0 1 2 3 4
- B) Prints nothing
- C) Infinite loop
- D) Syntax error

### Question 6

What is the output of this nested loop?

```javascript
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(i + "-" + j);
  }
}
```

- A) 1-1, 1-2, 2-1, 2-2
- B) 1-1, 2-2
- C) 1-2, 2-1
- D) Error

## Practical Coding Exercises

### Exercise 1: Basic For Loop

Write a script that asks the user for a number `n` and then prints all numbers from 1 to `n`.

**Instructions:**

1.  Prompt the user to enter a number.
2.  Use a `for` loop to iterate from 1 up to the user's number.
3.  Collect all the numbers into a single string.
4.  Display the final string in an alert box.

**Starter Code:**

```javascript
function printNumbers() {
  const n = prompt("Enter a number to count up to:");
  const number = parseInt(n);

  if (isNaN(number) || number < 1) {
    alert("Please enter a valid number greater than 0.");
    return;
  }

  let output = "";
  // TODO: Use a for loop to build a string of numbers from 1 to `number`.
  // Example: "1 2 3 4 5"

  alert(`Numbers from 1 to ${number}:\n${output}`);
}

printNumbers();
```

**Solution:**

```javascript
function printNumbers() {
  const n = prompt("Enter a number to count up to:");
  const number = parseInt(n);

  if (isNaN(number) || number < 1) {
    alert("Please enter a valid number greater than 0.");
    return;
  }

  let output = "";
  for (let i = 1; i <= number; i++) {
    output += i + " ";
  }

  alert(`Numbers from 1 to ${number}:\n${output.trim()}`);
}
```

### Exercise 2: Sum Calculator

Create a script that calculates the sum of all numbers from 1 up to a number provided by the user.

**Instructions:**

1.  Prompt the user for a number `n`.
2.  Initialize a `sum` variable to 0.
3.  Use a `for` loop to add each number from 1 to `n` to the `sum`.
4.  Display the final sum in an alert.

**Starter Code:**

```javascript
function sumCalculator() {
  const n = prompt("Enter a number to calculate the sum up to:");
  const number = parseInt(n);

  if (isNaN(number) || number < 1) {
    alert("Please enter a valid number greater than 0.");
    return;
  }

  let sum = 0;
  // TODO: Use a for loop to calculate the sum of numbers from 1 to `number`.

  alert(`The sum of numbers from 1 to ${number} is: ${sum}`);
}

sumCalculator();
```

**Solution:**

```javascript
function sumCalculator() {
  const n = prompt("Enter a number to calculate the sum up to:");
  const number = parseInt(n);

  if (isNaN(number) || number < 1) {
    alert("Please enter a valid number greater than 0.");
    return;
  }

  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  alert(`The sum of numbers from 1 to ${number} is: ${sum}`);
}
```

### Exercise 3: Number Pattern

Create a script that asks for a number of rows and prints a right-angled triangle pattern of numbers.

**Instructions:**

1.  Prompt the user for the number of rows.
2.  Use nested `for` loops to build the pattern.
3.  The outer loop will handle the rows.
4.  The inner loop will build the string for each row.
5.  Display the complete pattern in an alert box.

**Starter Code:**

```javascript
function printPattern() {
  const rows = prompt("Enter the number of rows for the pattern:");
  const numRows = parseInt(rows);

  if (isNaN(numRows) || numRows < 1) {
    alert("Please enter a valid number of rows.");
    return;
  }

  let pattern = "";
  // TODO: Use nested loops to create the pattern.
  // The outer loop should iterate from 1 to numRows.
  // The inner loop should build each line of the pattern.

  alert(`Number Pattern with ${numRows} rows:\n\n${pattern}`);
}

printPattern();
```

**Solution:**

```javascript
function printPattern() {
  const rows = prompt("Enter the number of rows for the pattern:");
  const numRows = parseInt(rows);

  if (isNaN(numRows) || numRows < 1) {
    alert("Please enter a valid number of rows.");
    return;
  }

  let pattern = "";
  for (let i = 1; i <= numRows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j + " ";
    }
    pattern += line.trim() + "\n";
  }

  alert(`Number Pattern with ${numRows} rows:\n\n${pattern}`);
}
```

### Exercise 4: Multiplication Table

Create a script that generates a multiplication table for a number provided by the user.

**Instructions:**

1.  Prompt the user to enter a number.
2.  Use a `for` loop to iterate from 1 to 10.
3.  In each iteration, calculate the product of the user's number and the loop counter.
4.  Format the output into a readable table.
5.  Display the table in an alert box.

**Starter Code:**

```javascript
function multiplicationTable() {
  const input = prompt("Enter a number for its multiplication table:");
  const number = parseInt(input);

  if (isNaN(number)) {
    alert("Invalid input. Please enter a number.");
    return;
  }

  let table = "";
  // TODO: Use a for loop (1 to 10) to build the multiplication table string.
  // Each line should look like: "5 x 1 = 5"

  alert(`Multiplication Table for ${number}:\n\n${table}`);
}

multiplicationTable();
```

**Solution:**

```javascript
function multiplicationTable() {
  const input = prompt("Enter a number for its multiplication table:");
  const number = parseInt(input);

  if (isNaN(number)) {
    alert("Invalid input. Please enter a number.");
    return;
  }

  let table = "";
  for (let i = 1; i <= 10; i++) {
    const result = number * i;
    table += `${number} x ${i} = ${result}\n`;
  }

  alert(`Multiplication Table for ${number}:\n\n${table}`);
}
```

### Exercise 5: While Loop Practice

Create a script that finds the first integer whose square is greater than a number provided by the user.

**Instructions:**

1.  Prompt the user for a `target` number.
2.  Use a `while` loop to find the first integer `n` where `n*n > target`.
3.  Start with a counter at 1 and increment it inside the loop.
4.  The loop should continue as long as the square of the counter is less than or equal to the target.
5.  Display the result in an alert.

**Starter Code:**

```javascript
function findFirstSquare() {
  const target = parseInt(prompt("Enter a target number (e.g., 100):"));

  if (isNaN(target)) {
    alert("Invalid input. Please enter a number.");
    return;
  }

  let number = 1;
  // TODO: Use a while loop to find the first number whose square is > target.
  // The condition should check `number * number <= target`.

  alert(
    `The first number whose square is greater than ${target} is ${number}.`,
  );
}

findFirstSquare();
```

**Solution:**

```javascript
function findFirstSquare() {
  const target = parseInt(prompt("Enter a target number (e.g., 100):"));

  if (isNaN(target)) {
    alert("Invalid input. Please enter a number.");
    return;
  }

  let number = 1;
  while (number * number <= target) {
    number++;
  }

  alert(
    `The first number whose square is greater than ${target} is ${number}.`,
  );
}
```

## Challenge Problems

### Challenge 1: Prime Number Checker

Create a script that checks if a user-provided number is a prime number.

**Instructions:**

1.  Prompt the user to enter a number.
2.  Handle edge cases: numbers less than 2 are not prime.
3.  Use a `for` loop to check for divisibility from 2 up to the square root of the number.
4.  If the number is divisible by any integer in that range, it's not prime.
5.  Display whether the number is prime or not in an alert.

**Starter Code:**

```javascript
function checkPrime() {
  const num = parseInt(prompt("Enter a number to check if it's prime:"));

  if (isNaN(num) || num < 0) {
    alert("Please enter a valid positive number.");
    return;
  }

  let isPrime = true;
  // TODO: Write the logic to check if `num` is a prime number.
  // 1. Handle cases for numbers less than 2.
  // 2. Use a for loop to check for divisors.
  // 3. If a divisor is found, set isPrime to false and break the loop.

  if (isPrime) {
    alert(`${num} is a prime number.`);
  } else {
    alert(`${num} is not a prime number.`);
  }
}

checkPrime();
```

**Solution:**

```javascript
function checkPrime() {
  const num = parseInt(prompt("Enter a number to check if it's prime:"));

  if (isNaN(num) || num < 0) {
    alert("Please enter a valid positive number.");
    return;
  }

  let isPrime = true;

  if (num < 2) {
    isPrime = false;
  } else {
    // Check for divisors from 2 up to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break; // Exit the loop early if a divisor is found
      }
    }
  }

  if (isPrime) {
    alert(`${num} is a prime number.`);
  } else {
    alert(`${num} is not a prime number.`);
  }
}
```

## Debugging Exercises

### Debug Exercise 1: Fix the Infinite Loop

This code has a bug that causes an infinite loop. Find and fix it.

**Code with Bug:**

```javascript
function infiniteLoop() {
  let countdown = 5;
  let message = "";
  while (countdown > 0) {
    message += countdown + "\n";
    // BUG: The countdown variable is never changed.
  }
  message += "Done!";
  alert(message);
}
```

**Solution:**

```javascript
function fixedLoop() {
  let countdown = 5;
  let message = "";
  while (countdown > 0) {
    message += countdown + "\n";
    countdown--; // FIX: Decrement the counter
  }
  message += "Done!";
  alert(message);
}
```

---

**Next Topic:** [06 - Functions](./06-functions-exercises.md)
