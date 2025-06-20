---
title: Comparisons and Logic - Exercises
---

## Multiple Choice Questions

### Question 1

What is the difference between `==` and `===` in JavaScript?
A) No difference, they work the same way
B) `==` checks type and value, `===` only checks value
C) `===` checks type and value, `==` only checks value
D) `===` checks type and value, `==` performs type coercion

### Question 2

What will `"5" == 5` return?
A) `true`
B) `false`
C) `Error`
D) `undefined`

### Question 3

What will `"5" === 5` return?
A) `true`
B) `false`
C) `Error`
D) `undefined`

### Question 4

What does the logical AND (`&&`) operator return when both operands are truthy?
A) `true`
B) `false`
C) The first operand
D) The second operand

### Question 5

What will `!!"hello"` return?
A) `true`
B) `false`
C) `"hello"`
D) `Error`

### Question 6

Which of the following values is falsy in JavaScript?
A) `"0"`
B) `[]`
C) `{}`
D) `0`

ruthy).

## Practical Coding Exercises

### Exercise 1: Age Comparison

Practice using comparison operators to compare two ages.

```javascript
// TODO: Create a variable called age1 with the value 25
// TODO: Create a variable called age2 with the value 30
// TODO: Use comparison operators to check which person is older
// TODO: Use console.log to display descriptive messages

// HINT: Use >, <, ===, >=, <= operators
// HINT: Compare the ages and display appropriate messages
// HINT: Consider the case where ages are equal

// Expected output:
// "Person 1 is 25 years old"
// "Person 2 is 30 years old"
// "Person 2 is older"
```

### Exercise 2: Login Validation

Practice using logical operators to validate user input.

```javascript
// TODO: Create a variable called username with the value "user123"
// TODO: Create a variable called password with the value "mypassword"
// TODO: Check if username is not empty AND password is at least 6 characters
// TODO: Display whether login is valid or not

// HINT: Use the && (AND) operator
// HINT: Check username !== "" for non-empty username
// HINT: Check password.length >= 6 for password length
// HINT: Combine conditions with logical operators

// Expected output:
// "Username valid: true"
// "Password valid: true"
// "Login valid: true"
```

### Exercise 3: Grade Evaluator

Practice complex logical conditions to determine if a student passes.

```javascript
// TODO: Create a variable called attendance with the value 85 (as percentage)
// TODO: Create a variable called assignments with the value 65 (as percentage)  
// TODO: Create a variable called finalExam with the value 82 (as percentage)
// TODO: Student passes if: Attendance >= 80% AND (Assignments >= 70% OR Final exam >= 80%)
// TODO: Display the result

// HINT: Use && (AND) and || (OR) operators
// HINT: Use parentheses to group the OR condition
// HINT: Test with different values to verify your logic
// HINT: Display both individual conditions and the final result

// Expected output:
// "Attendance: 85% - Pass: true"
// "Assignments: 65% - Pass: false" 
// "Final Exam: 82% - Pass: true"
// "Student passes overall: true"
```

### Exercise 4: Number Range Checker

Practice checking if a number falls within a specific range.

```javascript
// TODO: Create a variable called testNumber with the value 15
// TODO: Create a variable called minValue with the value 10
// TODO: Create a variable called maxValue with the value 20
// TODO: Check if the number is between min and max (inclusive)
// TODO: Display whether the number is in range or not

// HINT: Use comparison operators >= and <=
// HINT: Combine conditions with && operator
// HINT: Try both inclusive and exclusive range checking

// Expected output:
// "Number: 15"
// "Range: 10 to 20"
// "Is in range: true"
```

### Exercise 5: Truthiness Explorer

Practice understanding truthy and falsy values.

```javascript
// TODO: Create a variable called testValue1 with the value 0
// TODO: Create a variable called testValue2 with the value ""
// TODO: Create a variable called testValue3 with the value "hello"
// TODO: Create a variable called testValue4 with the value null
// TODO: Create a variable called testValue5 with the value undefined
// TODO: Use Boolean() to check if each value is truthy or falsy
// TODO: Use typeof to display the data type of each value

// HINT: Use Boolean(value) to convert to true/false
// HINT: Use typeof value to get the data type
// HINT: Remember the falsy values: 0, "", null, undefined, false, NaN
// HINT: Everything else is truthy

// Expected output:
// "testValue1 (0): false - type: number"
// "testValue2 (''): false - type: string"
// "testValue3 ('hello'): true - type: string"
// "testValue4 (null): false - type: object"
// "testValue5 (undefined): false - type: undefined"
```

## Challenge Problems

### Challenge 1: Weather Condition Checker

Practice complex logical conditions for weather-based decisions.

```javascript
// TODO: Create a variable called temperature with the value 72
// TODO: Create a variable called humidity with the value 65
// TODO: Create a variable called windSpeed with the value 12
// TODO: Determine if it's a good day for outdoor activities
// TODO: Conditions: Temperature 65-85°F, humidity < 70%, wind < 15 mph
// TODO: Display each condition result and final decision

// HINT: Use >= and <= for temperature range (temperature >= 65 && temperature <= 85)
// HINT: Use < for humidity and wind limits
// HINT: Combine all conditions with && operator
// HINT: Store the result in a variable called isGoodWeather

// Expected output:
// "Temperature (72°F): Good for outdoors"
// "Humidity (65%): Good for outdoors"
// "Wind Speed (12 mph): Good for outdoors"
// "Perfect day for outdoor activities!"
```

### Challenge 2: Access Control System

Practice role-based access using logical operators.

```javascript
// TODO: Create a variable called userRole with the value "user"
// TODO: Create a variable called isLoggedIn with the value true
// TODO: Create a variable called accountActive with the value true
// TODO: Determine access level based on multiple conditions
// TODO: Admin gets full access, Users need to be logged in AND have active account
// TODO: Display the access level and reason

// HINT: Check if userRole === "admin" for full access
// HINT: For users: use && to combine isLoggedIn && accountActive
// HINT: Use || to combine admin access OR user access
// HINT: Store result in variable called hasAccess

// Expected output:
// "User Role: user"
// "Logged In: true"
// "Account Active: true"
// "Access Granted: User has limited access"
```

## Debugging Exercises

### Debug Exercise 1: Fix the Voting Eligibility Logic

Find and fix the logical error in this voting eligibility check:

```javascript
// TODO: Create a variable called voterAge with the value 16
// TODO: Create a variable called isCitizen with the value true
// TODO: Fix the logical error in the condition below
// BUG: Using OR instead of AND - this allows 16-year-old citizens to vote!

let canVote = voterAge >= 18 || isCitizen === true;
console.log("Can vote:", canVote); // Currently shows true but should be false

// HINT: Both conditions must be true for voting eligibility
// HINT: Change || to && so BOTH age >= 18 AND citizenship are required
// Expected after fix: "Can vote: false"
```

### Debug Exercise 2: Fix the Comparison Operator

Fix this comparison issue:

```javascript
// TODO: Create a variable called userScore with the value 85
// TODO: Create a variable called passingScore with the value 70
// TODO: Fix the assignment operator error below

// BUG: Using assignment (=) instead of comparison (===)
if (userScore = passingScore) {
  console.log("Student passed the test");
} else {
  console.log("Student failed the test");
}

// HINT: Use === for comparison, not = (which assigns values)
// HINT: The condition should check if userScore is greater than or equal to passingScore
// Expected after fix: "Student passed the test"
```

### Debug Exercise 3: Fix the Operator Precedence

Fix the operator precedence issue:

```javascript
// TODO: Create a variable called isEmployee with the value true
// TODO: Create a variable called hasKeyCard with the value false  
// TODO: Create a variable called isManager with the value true
// TODO: Fix the precedence grouping below

// BUG: Wrong precedence - this allows managers who aren't employees to access
let hasAccess = isEmployee && hasKeyCard || isManager;
console.log("Access granted:", hasAccess); // Works by luck, but logic is wrong

// HINT: Employee must have keycard OR be a manager, but must be employee first
// HINT: Add parentheses: isEmployee && (hasKeyCard || isManager)
// Expected logic: Must be employee AND (have keycard OR be manager)
```

## Real-World Applications

### Application 1: Age Group Classifier

Create a program that classifies people into age groups.

```javascript
// TODO: Create a variable called personAge with the value 16
// TODO: Classify into: Child (0-12), Teen (13-19), Adult (20-64), Senior (65+)
// TODO: Use comparison operators to determine the age group
// TODO: Display the appropriate message for the age group

// HINT: Use >= and <= for age ranges
// HINT: Check conditions in order: child, teen, adult, senior
// HINT: Use multiple if statements or logical operators
// HINT: Consider whether ranges are inclusive or exclusive

// Expected output:
// "Person is 16 years old"
// "Age group: Teen"
```

### Application 2: Discount Eligibility Checker

Create a program that determines shopping discounts.

```javascript
// TODO: Create a variable called customerAge with the value 67
// TODO: Create a variable called isMember with the value false
// TODO: Create a variable called purchaseAmount with the value 120
// TODO: Apply discount rules and find the best discount:
//       - Senior (65+): 15% discount
//       - Members: 10% discount  
//       - Large purchase ($100+): 5% discount
// TODO: Calculate and display the discount amount and final price

// HINT: Check each discount condition separately
// HINT: Store each discount percentage in variables (seniorDiscount, memberDiscount, etc.)
// HINT: Use Math.max() or comparison operators to find the best discount
// HINT: Calculate: discountAmount = purchaseAmount * (discountPercent / 100)
// HINT: Calculate: finalPrice = purchaseAmount - discountAmount

// Expected output:
// "Purchase amount: $120"
// "Customer qualifies for: Senior discount (15%)"
// "Discount amount: $18"
// "Final price: $102"
```

### Application 3: Password Strength Checker

Create a program that evaluates password strength.

```javascript
// TODO: Create a variable called userPassword with the value "MyPass123!"
// TODO: Check multiple criteria and store results in variables:
//       - At least 8 characters long (store in hasLength)
//       - Contains uppercase letters (store in hasUppercase) 
//       - Contains lowercase letters (store in hasLowercase)
//       - Contains numbers (store in hasNumber)
//       - Contains special characters (store in hasSpecial)
// TODO: Determine strength level based on how many criteria are met
// TODO: Display each criterion result and overall strength

// HINT: Use .length property for length check
// HINT: For character checks, you can use comparison with specific characters
// HINT: This is challenging with current knowledge - focus on length and basic checks
// HINT: Count how many criteria are met to determine strength (3+ = strong, 2 = medium, 1 = weak)

// Expected output:
// "Password: MyPass123!"
// "Length (8+): true"
// "Has uppercase: true"
// "Has lowercase: true" 
// "Has numbers: true"
// "Has special chars: true"
// "Password strength: Strong"
```

## Self-Assessment Checklist

- [ ] I understand the difference between `==` and `===`
- [ ] I can use logical operators (`&&`, `||`, `!`) correctly
- [ ] I know which values are truthy and falsy in JavaScript
- [ ] I can write complex conditional expressions
- [ ] I understand operator precedence and use parentheses when needed
- [ ] I can debug logical errors in conditional statements
- [ ] I can combine multiple comparison operators effectively
- [ ] I can validate form data using logical operators
- [ ] I understand short-circuit evaluation in logical operators
- [ ] I can write readable and maintainable conditional logic

## Additional Practice Resources

1. Practice with truth tables for logical operators
2. Experiment with type coercion in comparisons
3. Build validation functions for different scenarios
4. Create decision trees using nested conditionals
5. Practice debugging logical errors in existing code

---

**Next Topic:** [05 - Loops](./05-loops-exercises.md)
