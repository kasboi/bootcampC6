---
title: Loops - Exercises
---

## Multiple Choice Questions

### Question 1

Which loop is best for iterating over an array when you need the index?
A) `for...in` loop
B) `for...of` loop
C) `for` loop
D) `while` loop

### Question 2

What will this code output?

```javascript
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

A) 0 1 2 3
B) 1 2 3
C) 0 1 2
D) Error

### Question 3

What happens if you forget the increment in a `for` loop?
A) The loop runs once
B) The loop doesn't run at all
C) The loop runs infinitely
D) Syntax error

### Question 4

Which statement is used to skip the current iteration and continue with the next one?
A) `break`
B) `continue`
C) `return`
D) `skip`

### Question 5

What will happen with this `while` loop?

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  // Missing i++
}
```

A) Prints 0 1 2 3 4
B) Prints nothing
C) Infinite loop
D) Syntax error

### Question 6

What is the output of this nested loop?

```javascript
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(i + "-" + j);
  }
}
```

A) 1-1, 1-2, 2-1, 2-2
B) 1-1, 2-2
C) 1-2, 2-1
D) Error

## Practical Coding Exercises

### Exercise 1: Basic For Loop

Write code that prints numbers from 1 to n:

```javascript
// TODO: Create a variable for the limit (n)
// TODO: Use a for loop to print numbers from 1 to n
// TODO: Display each number on a new line

// HINT: Use for loop with initialization, condition, and increment
// HINT: Start from 1, continue while <= n, increment by 1
// HINT: Use console.log() to print each number
```

### Exercise 2: Sum Calculator

Create code that calculates the sum of numbers from 1 to n:

```javascript
// TODO: Create variables for the limit (n) and sum
// TODO: Use a for loop to add each number to the sum
// TODO: Display the final sum

// HINT: Initialize sum to 0
// HINT: Add each number in the loop to the sum
// HINT: Print the sum after the loop completes
```

// Return the sum of numbers from 1 to n
}

// Test your function
console.log(calculateSum(5)); // Should return: 15 (1+2+3+4+5)
console.log(calculateSum(10)); // Should return: 55

````

### Exercise 3: Number Pattern

Create code that prints a pattern of numbers:

```javascript
// TODO: Create a variable for the number of rows (e.g., 5)
// TODO: Use nested loops to create this pattern:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// HINT: Use outer loop for rows, inner loop for numbers in each row
// HINT: Inner loop should go from 1 to current row number
// HINT: Use process.stdout.write() to print without newlines, console.log() for new lines
````

### Exercise 4: Character Frequency Counter

Create code that counts how often each character appears in a string:

```javascript
// TODO: Create a variable called inputString with the value "hello"
// TODO: Use loops to count how many times each character appears
// TODO: Display the count for each unique character

// HINT: You can use a simple approach with nested loops
// HINT: For each character, count how many times it appears in the string
// HINT: Keep track of which characters you've already counted to avoid duplicates

// Expected output:
// "h: 1"
// "e: 1"
// "l: 2"
// "o: 1"
```

### Exercise 5: Multiplication Table

Create code that displays a multiplication table:

```javascript
// TODO: Create a variable called number with the value 5
// TODO: Use a for loop to create a multiplication table
// TODO: Display the table from 1 x 5 through 10 x 5

// HINT: Loop from 1 to 10
// HINT: Calculate the product for each iteration
// HINT: Format the output nicely (e.g., "5 x 1 = 5")

// Expected output:
// "5 x 1 = 5"
// "5 x 2 = 10"
// ...
// "5 x 10 = 50"
```

### Exercise 6: While Loop Practice

Create code that finds the first number whose square is greater than a given value:

```javascript
// TODO: Create a variable called target with the value 20
// TODO: Create a variable called number starting at 1
// TODO: Use a while loop to find the first number whose square > target
// TODO: Display the result

// HINT: Use while loop with condition (number * number <= target)
// HINT: Increment number in each iteration
// HINT: When loop ends, number will be the answer

// Expected output for target = 20:
// "The first number whose square is greater than 20 is: 5"
// "Because 5 * 5 = 25, which is greater than 20"
```

## Challenge Problems

## Challenge Problems

### Challenge 1: Number Pattern Generator

Create code that generates various patterns using loops:

```javascript
// TODO: Create a variable called size with the value 4
// TODO: Generate a triangle pattern using nested loops
// TODO: Display the pattern using asterisks (*)

// HINT: Use outer loop for rows, inner loop for asterisks in each row
// HINT: Row 1 has 1 asterisk, row 2 has 2 asterisks, etc.

// Expected output:
// *
// **
// ***
// ****
```

### Challenge 2: Prime Number Checker

Create code that checks if numbers are prime:

```javascript
// TODO: Create a variable called testNumber with the value 17
// TODO: Use loops to check if the number is prime
// TODO: A prime number is only divisible by 1 and itself

// HINT: Use a for loop to check divisors from 2 to testNumber-1
// HINT: If any number divides evenly (remainder is 0), it's not prime
// HINT: Use the modulus operator (%) to check for remainders

// Expected output:
// "17 is a prime number"
```

### Challenge 3: Counting Challenge

Create code that counts specific patterns in numbers:

```javascript
// TODO: Create a variable called limit with the value 100
// TODO: Count how many numbers from 1 to limit contain the digit 5
// TODO: Use loops and string methods to check each number

// HINT: Convert numbers to strings to check individual digits
// HINT: Use a loop to go through each number from 1 to limit
// HINT: For each number, check if it contains the digit "5"

// Expected output:
// "Numbers containing digit 5: 19"
// "Examples: 5, 15, 25, 35, 45, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 65, 75, 85, 95"
```

## Debugging Exercises

## Debugging Exercises

### Debug Exercise 1: Fix the Infinite Loop

Find and fix the infinite loop:

```javascript
// TODO: This code has a bug - it will run forever!
let countdown = 5;
while (countdown > 0) {
  console.log(countdown);
  // BUG: Missing countdown decrement
}
console.log("Done!");

// HINT: What's missing to make the countdown variable change?
// HINT: Add countdown-- or countdown = countdown - 1
// Expected after fix: 5, 4, 3, 2, 1, Done!
```

### Debug Exercise 2: Fix the Off-by-One Error

Find and fix the off-by-one error:

```javascript
// TODO: This loop should print numbers 1 through 10, but it has a bug
for (let i = 1; i <= 10; i++) {
  if (i === 10) {
    break; // BUG: This exits before printing 10
  }
  console.log(i);
}

// HINT: What happens when i equals 10?
// HINT: Remove the break statement or change the condition
// Expected after fix: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
```

### Debug Exercise 3: Fix the Logic Error

Find and fix the logic error:

```javascript
// TODO: This should count even numbers from 1 to 10, but it has a bug
let evenCount = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 1) {
    // BUG: This checks for odd numbers, not even
    evenCount++;
  }
}
console.log("Even numbers count:", evenCount);

// HINT: What does i % 2 === 1 actually check for?
// HINT: Change the condition to check for even numbers (i % 2 === 0)
// Expected after fix: "Even numbers count: 5"
```

## Real-World Applications

### Application 1: Receipt Calculator

Create code that calculates the total for multiple items:

```javascript
// TODO: You have item prices: 12.99, 8.50, 25.00, 4.75, 15.25
// TODO: Use loops to calculate the total cost
// TODO: Apply 8.5% sales tax to the subtotal
// TODO: Display itemized breakdown and final total

// HINT: You can use a loop with individual price variables
// HINT: Calculate tax as subtotal * 0.085
// HINT: Format prices to 2 decimal places using .toFixed(2)

// Expected output:
// "Item 1: $12.99"
// "Item 2: $8.50"
// ...
// "Subtotal: $66.49"
// "Tax (8.5%): $5.65"
// "Total: $72.14"
```

### Application 2: Grade Point Average Calculator

Create code that calculates GPA from multiple course grades:

```javascript
// TODO: You have grades: 85, 92, 78, 88, 95, 82
// TODO: Use loops to calculate the average grade
// TODO: Convert the average to a GPA scale (A=4.0, B=3.0, C=2.0, D=1.0, F=0.0)
// TODO: Display all grades and final GPA

// HINT: A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60
// HINT: Sum all grades, then divide by count
// HINT: Use conditional logic to convert average to letter grade

// Expected output:
// "Grade 1: 85 (B)"
// "Grade 2: 92 (A)"
// ...
// "Average: 86.67"
// "Letter Grade: B"
// "GPA: 3.0"
```

### Application 3: Simple Interest Calculator

Create code that calculates compound interest over multiple years:

```javascript
// TODO: Create variables for principal ($1000), rate (5%), and years (10)
// TODO: Use a loop to calculate compound interest year by year
// TODO: Display the balance for each year

// HINT: Each year: newBalance = oldBalance * (1 + rate/100)
// HINT: Use a for loop from year 1 to final year
// HINT: Track and display the balance for each year

// Expected output:
// "Year 1: $1,050.00"
// "Year 2: $1,102.50"
// ...
// "Year 10: $1,628.89"
// "Total interest earned: $628.89"
```

## Self-Assessment Checklist

- [ ] I can write and understand `for` loops with proper syntax
- [ ] I know when to use `while` vs `for` loops
- [ ] I can use `break` and `continue` statements appropriately
- [ ] I can avoid infinite loops by ensuring proper loop conditions
- [ ] I can write nested loops for pattern generation
- [ ] I can debug common loop-related errors
- [ ] I can apply loops to solve real-world programming problems
- [ ] I understand loop control flow and iteration concepts

## Additional Practice Resources

1. Practice with different loop patterns and counting exercises
2. Create more complex nested loop patterns (squares, diamonds, etc.)
3. Work with string manipulation using loops
4. Practice number processing and mathematical calculations
5. Build simple games that use loop logic (guessing games, etc.)

---

**Next Topic:** [06 - Functions](./06-functions-exercises.md)
