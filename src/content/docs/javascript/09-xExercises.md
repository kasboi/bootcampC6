---
title: Built-in Methods - Exercises
---

## Multiple Choice Questions

### Question 1

What does `Math.floor(4.7)` return?
A) 5
B) 4
C) 4.7
D) Error

**Answer: B**
**Explanation:** `Math.floor()` rounds down to the nearest integer, so 4.7 becomes 4.

### Question 2

Which method converts a string to an array?
A) `split()`
B) `slice()`
C) `splice()`
D) `join()`

**Answer: A**
**Explanation:** The `split()` method splits a string into an array based on a delimiter.

### Question 3

What does `"hello".charAt(1)` return?
A) "h"
B) "e"
C) "l"
D) "o"

**Answer: B**
**Explanation:** `charAt(1)` returns the character at index 1, which is "e".

### Question 4

Which method returns the current date and time as a number?
A) `Date.now()`
B) `Date.time()`
C) `Date.current()`
D) `Date.get()`

**Answer: A**
**Explanation:** `Date.now()` returns the current timestamp in milliseconds since January 1, 1970.

### Question 5

What does `Math.random()` return?
A) A random integer between 0 and 1
B) A random decimal between 0 and 1 (excluding 1)
C) A random integer between 1 and 10
D) A random decimal between 1 and 10

**Answer: B**
**Explanation:** `Math.random()` returns a random decimal number between 0 (inclusive) and 1 (exclusive).

### Question 6

Which method checks if an array includes a specific element?
A) `contains()`
B) `has()`
C) `includes()`
D) `indexOf()`

**Answer: C**
**Explanation:** The `includes()` method returns true if the array contains the specified element.

## Practical Coding Exercises

### Exercise 1: Math Methods Practice

Create a script that asks the user for a list of numbers and then performs several calculations using the `Math` object.

**Instructions:**

1.  Prompt the user to enter a comma-separated list of numbers.
2.  Use `Math.max()` and `Math.min()` to find the largest and smallest numbers.
3.  Calculate the sum of the numbers. A `for` loop is a good choice here.
4.  Generate a random integer between the min and max values.
5.  Display the results in an alert box.

**Starter Code:**

```javascript
function mathOperations() {
  const input = prompt(
    "Enter a list of numbers separated by commas (e.g., 1, 2, 3):",
  );
  if (!input) {
    alert("No input provided. Please try again.");
    return;
  }

  // TODO: Convert the input string into an array of numbers.
  // Hint: Use split(',') and then convert each part to a number.
  const numbers = []; // Your code here

  // TODO: Find the maximum value using Math.max().
  // Hint: The spread operator (...) is useful here.
  const max = 0; // Your code here

  // TODO: Find the minimum value using Math.min().
  const min = 0; // Your code here

  // TODO: Calculate the sum of the numbers using a for loop.
  let sum = 0;
  // Your code here

  // TODO: Generate a random number between min and max (inclusive).
  // Hint: Math.random() * (max - min + 1) + min
  const randomInRange = 0; // Your code here

  // Display the results
  const results = `
    Original Numbers: ${numbers.join(", ")}
    Maximum: ${max}
    Minimum: ${min}
    Sum: ${sum}
    Random Number in Range: ${randomInRange}
  `;

  alert(results);
}

// Run the function
mathOperations();
```

**Solution:**

```javascript
function mathOperations() {
  const input = prompt(
    "Enter a list of numbers separated by commas (e.g., 1, 2, 3):",
  );
  if (!input) {
    alert("No input provided. Please try again.");
    return;
  }

  // Convert the input string into an array of numbers.
  const numbers = input.split(",").map(Number);

  // Find the maximum value
  const max = Math.max(...numbers);

  // Find the minimum value
  const min = Math.min(...numbers);

  // Calculate the sum
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  // Generate a random number between min and max (inclusive)
  const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;

  // Display the results
  const results = `
    Original Numbers: ${numbers.join(", ")}
    Maximum: ${max}
    Minimum: ${min}
    Sum: ${sum}
    Random Number in Range: ${randomInRange}
  `;

  alert(results);
}
```

### Exercise 2: String Methods Mastery

Create a script that asks the user for a sentence and then manipulates it using various string methods.

**Instructions:**

1.  Prompt the user to enter a sentence.
2.  Perform a series of transformations: convert to uppercase, lowercase, and trim whitespace.
3.  Replace all spaces with underscores.
4.  Extract the first 10 characters as an excerpt.
5.  Check if the original sentence includes the word "javascript" (case-insensitive).
6.  Display the results in an alert box.

**Starter Code:**

```javascript
function stringManipulation() {
  const text = prompt("Enter a sentence:");
  if (!text) {
    alert("No input provided. Please try again.");
    return;
  }

  // TODO: Convert to uppercase.
  const uppercase = ""; // Your code here

  // TODO: Convert to lowercase.
  const lowercase = ""; // Your code here

  // TODO: Remove whitespace from beginning and end.
  const trimmed = ""; // Your code here

  // TODO: Replace all spaces with underscores.
  // Hint: Use the replaceAll() method.
  const withUnderscores = ""; // Your code here

  // TODO: Extract the first 10 characters.
  // Hint: Use substring() or slice().
  const excerpt = ""; // Your code here

  // TODO: Check if it contains "javascript" (case-insensitive).
  // Hint: Convert the text to lowercase first.
  const containsJavaScript = false; // Your code here

  const results = `
    Original: "${text}"
    Uppercase: ${uppercase}
    Lowercase: ${lowercase}
    Trimmed: "${trimmed}"
    With Underscores: ${withUnderscores}
    Excerpt: "${excerpt}..."
    Contains "JavaScript"?: ${containsJavaScript ? "Yes" : "No"}
  `;

  alert(results);
}

// Run the function
stringManipulation();
```

**Solution:**

```javascript
function stringManipulation() {
  const text = prompt("Enter a sentence:");
  if (!text) {
    alert("No input provided. Please try again.");
    return;
  }

  // Convert to uppercase
  const uppercase = text.toUpperCase();

  // Convert to lowercase
  const lowercase = text.toLowerCase();

  // Remove whitespace from beginning and end
  const trimmed = text.trim();

  // Replace all spaces with underscores
  const withUnderscores = trimmed.replaceAll(" ", "_");

  // Extract first 10 characters
  const excerpt = text.substring(0, 10);

  // Check if it contains a specific substring (case-insensitive)
  const containsJavaScript = text.toLowerCase().includes("javascript");

  const results = `
    Original: "${text}"
    Uppercase: ${uppercase}
    Lowercase: ${lowercase}
    Trimmed: "${trimmed}"
    With Underscores: ${withUnderscores}
    Excerpt: "${excerpt}..."
    Contains "JavaScript"?: ${containsJavaScript ? "Yes" : "No"}
  `;

  alert(results);
}
```

### Exercise 3: Date Methods Practice

Create a script that displays information about the current date and calculates the days until the new year.

**Instructions:**

1.  Create a `new Date()` object for the current moment.
2.  Get the current year, month, and day.
3.  Create a `Date` object for the first day of the next year.
4.  Calculate the difference in days between today and New Year's Day.
5.  Format today's date into a readable string (e.g., "December 25, 2023").
6.  Display all the collected information in an alert box.

**Starter Code:**

```javascript
function dateOperations() {
  // TODO: Create a new date for today.
  const today = null; // Your code here

  // TODO: Get the current year.
  const currentYear = 0; // Your code here

  // TODO: Get the current month (0-11).
  const currentMonthIndex = 0; // Your code here

  // TODO: Get the current day of the month.
  const currentDay = 0; // Your code here

  // TODO: Create a date for the first day of the next year.
  const nextYear = currentYear + 1;
  const newYearDate = null; // Your code here

  // TODO: Calculate the difference in milliseconds between now and New Year's.
  const timeDiff = 0; // Your code here

  // TODO: Convert the time difference to days.
  // Hint: 1000ms * 60s * 60min * 24hr
  const daysUntilNewYear = 0; // Your code here

  // TODO: Format today's date as a readable string.
  // Example: "December 25, 2023"
  const formattedDate = ""; // Your code here

  const results = `
    Today's Date: ${formattedDate}
    Current Year: ${currentYear}
    Days Until New Year: ${daysUntilNewYear}
  `;

  alert(results);
}

// Run the function
dateOperations();
```

**Solution:**

```javascript
function dateOperations() {
  // Create a new date for today
  const today = new Date();

  // Get the current year
  const currentYear = today.getFullYear();

  // Get the current month (0-11)
  const currentMonthIndex = today.getMonth();

  // Get the current day of month
  const currentDay = today.getDate();

  // Create a date for the first day of the next year
  const newYearDate = new Date(currentYear + 1, 0, 1);

  // Calculate days until the new year
  const timeDiff = newYearDate.getTime() - today.getTime();
  const daysUntilNewYear = Math.ceil(timeDiff / (1000 * 3600 * 24));

  // Format today as a readable string
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const formattedDate = `${months[currentMonthIndex]} ${currentDay}, ${currentYear}`;

  const results = `
    Today's Date: ${formattedDate}
    Current Year: ${currentYear}
    Days Until New Year: ${daysUntilNewYear}
  `;

  alert(results);
}
```

### Exercise 4: JSON and Object Methods

Create a script that works with a JSON string representing user data.

**Instructions:**

1.  Start with a given JSON string.
2.  Use `JSON.parse()` to convert the string into a JavaScript object.
3.  Use `Object.keys()`, `Object.values()`, and `Object.entries()` to inspect the object's properties.
4.  Use `JSON.stringify()` to convert the object back into a formatted JSON string.
5.  Display the results in an alert box.

**Starter Code:**

```javascript
function jsonOperations() {
  const userDataString =
    '{"name": "Alice", "age": 30, "hobbies": ["reading", "coding"], "isActive": true}';

  // TODO: Parse the JSON string into an object.
  const userData = {}; // Your code here

  // TODO: Get all property keys from the object.
  const keys = []; // Your code here

  // TODO: Get all property values.
  const values = []; // Your code here

  // TODO: Get key-value pairs as an array of arrays.
  const entries = []; // Your code here

  // TODO: Convert the object back to a JSON string (with formatting).
  // Hint: Use the third argument of JSON.stringify for indentation.
  const formattedJson = ""; // Your code here

  const results = `
    Original JSON String:
    ${userDataString}

    Object Keys:
    ${keys.join(", ")}

    Object Values:
    ${values.join(" | ")}

    Formatted JSON:
    ${formattedJson}
  `;

  alert(results);
  console.log("Key-Value Entries:", entries);
}

// Run the function
jsonOperations();
```

**Solution:**

```javascript
function jsonOperations() {
  const userDataString =
    '{"name": "Alice", "age": 30, "hobbies": ["reading", "coding"], "isActive": true}';

  // Parse the JSON string
  const userData = JSON.parse(userDataString);

  // Get all property keys
  const keys = Object.keys(userData);

  // Get all property values
  const values = Object.values(userData);

  // Get key-value pairs as arrays
  const entries = Object.entries(userData);

  // Convert object back to JSON string (with formatting)
  const formattedJson = JSON.stringify(userData, null, 2);

  const results = `
    Original JSON String:
    ${userDataString}

    Object Keys:
    ${keys.join(", ")}

    Object Values:
    ${values.join(" | ")}

    Formatted JSON:
    ${formattedJson}
  `;

  alert(results);
  console.log("Key-Value Entries:", entries);
}
```
