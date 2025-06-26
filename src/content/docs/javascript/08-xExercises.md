---
title: Arrays and Objects - Exercises
---

## Multiple Choice Questions

### Question 1

How do you access the third element of an array called `numbers`?
A) `numbers[3]`
B) `numbers[2]`
C) `numbers(2)`
D) `numbers.get(2)`

**Answer: B**
**Explanation:** Arrays are zero-indexed, so the third element is at index 2.

### Question 2

Which method adds an element to the end of an array?
A) `append()`
B) `add()`
C) `push()`
D) `insert()`

**Answer: C**
**Explanation:** The `push()` method adds one or more elements to the end of an array.

### Question 3

What does `array.length` return for `[1, 2, 3, undefined, 5]`?
A) 4
B) 5
C) 3
D) Error

**Answer: B**
**Explanation:** The length property returns the number of elements, including `undefined` elements.

### Question 4

How do you access a property called `name` in an object called `person`?
A) `person[name]`
B) `person.name` or `person["name"]`
C) `person(name)`
D) `person->name`

**Answer: B**
**Explanation:** Object properties can be accessed using dot notation or bracket notation with quotes.

### Question 5

What will `Object.keys({a: 1, b: 2, c: 3})` return?
A) `[1, 2, 3]`
B) `["a", "b", "c"]`
C) `{a: 1, b: 2, c: 3}`
D) `3`

**Answer: B**
**Explanation:** `Object.keys()` returns an array of the object's property names (keys).

### Question 6

Which array method creates a new array with all elements that pass a test?
A) `map()`
B) `filter()`
C) `find()`
D) `forEach()`

**Answer: B**
**Explanation:** The `filter()` method creates a new array with elements that pass the test function.

## Practical Coding Exercises

### Exercise 1: Interactive Array Basics

Create an interactive program to perform basic array operations with user input:

```javascript
// TODO: Create a function that demonstrates basic array operations
function interactiveArrayDemo() {
  // TODO: Start with an empty array for fruits
  const fruits = [];

  // TODO: Ask user to add 3 initial fruits
  console.log("Let's build a fruit array together!");

  for (let i = 1; i <= 3; i++) {
    // TODO: Prompt user for each fruit
    const fruit = prompt(`Enter fruit #${i}:`);

    // TODO: Add the fruit to the array
    fruits.push(fruit);
    console.log(`Added ${fruit}. Current array:`, fruits);
  }

  // TODO: Show current array length
  console.log(`You have ${fruits.length} fruits in your array.`);

  // TODO: Ask user what operation they want to perform
  const operation = prompt(`What would you like to do?
1 - Add fruit to the end
2 - Add fruit to the beginning  
3 - Remove last fruit
4 - Remove first fruit
5 - Find a fruit
Enter 1-5:`);

  // TODO: Handle each operation
  if (operation === "1") {
    // TODO: Add to end using push()
    const newFruit = prompt("Enter fruit to add to the end:");
    fruits.push(newFruit);
    console.log(`Added ${newFruit} to the end.`);
  } else if (operation === "2") {
    // TODO: Add to beginning using unshift()
    const newFruit = prompt("Enter fruit to add to the beginning:");
    fruits.unshift(newFruit);
    console.log(`Added ${newFruit} to the beginning.`);
  } else if (operation === "3") {
    // TODO: Remove from end using pop()
    const removed = fruits.pop();
    console.log(`Removed ${removed} from the end.`);
  } else if (operation === "4") {
    // TODO: Remove from beginning using shift()
    const removed = fruits.shift();
    console.log(`Removed ${removed} from the beginning.`);
  } else if (operation === "5") {
    // TODO: Find fruit using indexOf()
    const searchFruit = prompt("Enter fruit to find:");
    const index = fruits.indexOf(searchFruit);

    if (index !== -1) {
      console.log(`Found ${searchFruit} at position ${index}.`);
    } else {
      console.log(`${searchFruit} not found in the array.`);
    }
  }

  // TODO: Show final array
  console.log("Final array:", fruits);
  alert(`Your final fruit array: [${fruits.join(", ")}]`);

  return fruits;
}

// TODO: Call your function to test it
// interactiveArrayDemo();
```

**Expected Behavior:**

- User builds an array with 3 fruits
- User chooses an operation to perform
- Program shows results of the operation
- Final array is displayed

### Exercise 2: Interactive Person Builder

Create and manipulate objects representing people with user input:

```javascript
// TODO: Create a function that builds a person object from user input
function createPersonInteractive() {
  // TODO: Prompt user for name, age, and city
  const name = prompt("Enter the person's name:");
  const age = parseInt(prompt("Enter the person's age:"));
  const city = prompt("Enter the person's city:");

  // TODO: Create person object with an introduce method
  const person = {
    name: name,
    age: age,
    city: city,
    // TODO: Add introduce method that returns greeting
    introduce: function () {
      return `Hi, I'm ${this.name}, I'm ${this.age} years old and I live in ${this.city}.`;
    },
  };

  return person;
}

// TODO: Create a function to update person information
function updatePersonInteractive(person) {
  // TODO: Show current person info
  console.log("Current person info:", person);
  console.log(person.introduce());

  // TODO: Ask what the user wants to update
  const updateChoice = prompt(`What would you like to update?
1 - Name
2 - Age  
3 - City
4 - Add a job
Enter 1-4:`);

  // TODO: Create a copy of the person object (don't modify original)
  const updatedPerson = { ...person };

  // TODO: Handle each update option
  if (updateChoice === "1") {
    updatedPerson.name = prompt("Enter new name:");
  } else if (updateChoice === "2") {
    updatedPerson.age = parseInt(prompt("Enter new age:"));
  } else if (updateChoice === "3") {
    updatedPerson.city = prompt("Enter new city:");
  } else if (updateChoice === "4") {
    updatedPerson.job = prompt("Enter job title:");
    // TODO: Update introduce method to include job if it exists
    updatedPerson.introduce = function () {
      let intro = `Hi, I'm ${this.name}, I'm ${this.age} years old and I live in ${this.city}.`;
      if (this.job) {
        intro += ` I work as a ${this.job}.`;
      }
      return intro;
    };
  }

  // TODO: Show updated person info
  console.log("Updated person info:", updatedPerson);
  console.log(updatedPerson.introduce());
  alert(updatedPerson.introduce());

  return updatedPerson;
}

// TODO: Create a demonstration function
function personDemo() {
  // TODO: Create a person using user input
  const person = createPersonInteractive();

  // TODO: Allow user to update the person
  const updatedPerson = updatePersonInteractive(person);

  // TODO: Show comparison
  console.log("Original person:", person);
  console.log("Updated person:", updatedPerson);
}

// TODO: Call your demo function to test it
// personDemo();
```

**Expected Behavior:**

- User creates a person with name, age, and city
- Person object has an introduce method
- User can update person information without modifying original
- Shows before and after comparison

### Exercise 3: Interactive Student Record Manager

Create a student management system using basic array operations and user input:

```javascript
// TODO: Create a function to manage student records
function studentManager() {
  // TODO: Start with an empty array for students
  const students = [];

  console.log("=== Student Record Manager ===");

  // TODO: Add some initial students using user input
  const numStudents = parseInt(
    prompt("How many students would you like to add initially?"),
  );

  for (let i = 1; i <= numStudents; i++) {
    // TODO: Get student information from user
    const name = prompt(`Enter name for student #${i}:`);
    const grade = parseFloat(prompt(`Enter grade for ${name} (0-100):`));
    const subject = prompt(`Enter subject for ${name}:`);

    // TODO: Create student object and add to array
    const student = {
      name: name,
      grade: grade,
      subject: subject,
    };

    students.push(student);
    console.log(`Added ${name} to the records.`);
  }

  // TODO: Show all students
  console.log("\n=== Current Students ===");
  for (let i = 0; i < students.length; i++) {
    console.log(
      `${i + 1}. ${students[i].name} - ${students[i].grade}% in ${
        students[i].subject
      }`,
    );
  }

  // TODO: Let user perform operations
  let continueOperations = true;

  while (continueOperations) {
    const operation = prompt(`Choose an operation:
1 - Find student by name
2 - Find students by subject
3 - Find top student (highest grade)
4 - Calculate average grade
5 - Add new student
6 - Remove student
7 - Exit
Enter 1-7:`);

    if (operation === "1") {
      // TODO: Find student by name using loops
      const searchName = prompt("Enter student name to search:");
      let found = false;

      for (let i = 0; i < students.length; i++) {
        if (students[i].name.toLowerCase() === searchName.toLowerCase()) {
          alert(
            `Found: ${students[i].name} - ${students[i].grade}% in ${students[i].subject}`,
          );
          found = true;
          break;
        }
      }

      if (!found) {
        alert("Student not found!");
      }
    } else if (operation === "2") {
      // TODO: Find students by subject using loops
      const searchSubject = prompt("Enter subject to search:");
      const subjectStudents = [];

      for (let i = 0; i < students.length; i++) {
        if (students[i].subject.toLowerCase() === searchSubject.toLowerCase()) {
          subjectStudents.push(students[i]);
        }
      }

      if (subjectStudents.length > 0) {
        console.log(`Students studying ${searchSubject}:`);
        for (let i = 0; i < subjectStudents.length; i++) {
          console.log(
            `- ${subjectStudents[i].name}: ${subjectStudents[i].grade}%`,
          );
        }
      } else {
        alert(`No students found studying ${searchSubject}`);
      }
    } else if (operation === "3") {
      // TODO: Find top student using loops
      if (students.length > 0) {
        let topStudent = students[0];

        for (let i = 1; i < students.length; i++) {
          if (students[i].grade > topStudent.grade) {
            topStudent = students[i];
          }
        }

        alert(
          `Top student: ${topStudent.name} with ${topStudent.grade}% in ${topStudent.subject}`,
        );
      } else {
        alert("No students in the system!");
      }
    } else if (operation === "4") {
      // TODO: Calculate average using loops
      if (students.length > 0) {
        let totalGrades = 0;

        for (let i = 0; i < students.length; i++) {
          totalGrades += students[i].grade;
        }

        const average = totalGrades / students.length;
        alert(`Average grade: ${average.toFixed(2)}%`);
      } else {
        alert("No students to calculate average!");
      }
    } else if (operation === "5") {
      // TODO: Add new student
      const name = prompt("Enter new student's name:");
      const grade = parseFloat(prompt("Enter grade (0-100):"));
      const subject = prompt("Enter subject:");

      students.push({ name, grade, subject });
      alert(`Added ${name} to the records.`);
    } else if (operation === "6") {
      // TODO: Remove student by name
      const nameToRemove = prompt("Enter name of student to remove:");
      let indexToRemove = -1;

      for (let i = 0; i < students.length; i++) {
        if (students[i].name.toLowerCase() === nameToRemove.toLowerCase()) {
          indexToRemove = i;
          break;
        }
      }

      if (indexToRemove !== -1) {
        const removed = students.splice(indexToRemove, 1)[0];
        alert(`Removed ${removed.name} from records.`);
      } else {
        alert("Student not found!");
      }
    } else if (operation === "7") {
      continueOperations = false;
      alert("Goodbye!");
    } else {
      alert("Invalid choice! Please enter 1-7.");
    }
  }

  return students;
}

// TODO: Call your student manager to test it
// studentManager();
```

**Expected Behavior:**

- User builds a student database with multiple students
- Can search for students by name or subject
- Can find the top student and calculate averages
- Can add and remove students
- Can add and remove students
- Uses only basic array operations (no map/filter/reduce)

### Exercise 4: Interactive Company Directory

Work with nested objects and arrays using basic operations and user interaction:

```javascript
// TODO: Create an interactive company directory
function companyDirectory() {
  // TODO: Create a company object with user input
  const companyName = prompt("Enter company name:");

  const company = {
    name: companyName,
    departments: [],
  };

  console.log(`=== ${companyName} Directory System ===`);

  // TODO: Add departments with employees
  const numDepartments = parseInt(prompt("How many departments?"));

  for (let d = 1; d <= numDepartments; d++) {
    const deptName = prompt(`Enter name for department #${d}:`);

    const department = {
      name: deptName,
      employees: [],
    };

    // TODO: Add employees to this department
    const numEmployees = parseInt(prompt(`How many employees in ${deptName}?`));

    for (let e = 1; e <= numEmployees; e++) {
      const empName = prompt(`Enter name for employee #${e} in ${deptName}:`);
      const empSalary = parseFloat(prompt(`Enter salary for ${empName}:`));
      const empPosition = prompt(`Enter position for ${empName}:`);

      const employee = {
        name: empName,
        salary: empSalary,
        position: empPosition,
      };

      department.employees.push(employee);
    }

    company.departments.push(department);
  }

  // TODO: Display company structure
  console.log("\n=== Company Structure ===");
  console.log(`Company: ${company.name}`);

  for (let i = 0; i < company.departments.length; i++) {
    const dept = company.departments[i];
    console.log(`\nDepartment: ${dept.name}`);

    for (let j = 0; j < dept.employees.length; j++) {
      const emp = dept.employees[j];
      console.log(`  - ${emp.name}: ${emp.position}, $${emp.salary}`);
    }
  }

  // TODO: Let user perform operations
  let continueOperations = true;

  while (continueOperations) {
    const operation = prompt(`Choose operation:
1 - Find employee by name
2 - Find employees by department
3 - Find highest paid employee
4 - Calculate total salary expense
5 - List all employees
6 - Exit
Enter 1-6:`);

    if (operation === "1") {
      // TODO: Find employee by name across all departments
      const searchName = prompt("Enter employee name:");
      let found = false;

      for (let i = 0; i < company.departments.length; i++) {
        const dept = company.departments[i];
        for (let j = 0; j < dept.employees.length; j++) {
          const emp = dept.employees[j];
          if (emp.name.toLowerCase() === searchName.toLowerCase()) {
            alert(
              `Found: ${emp.name} in ${dept.name} - ${emp.position}, $${emp.salary}`,
            );
            found = true;
            break;
          }
        }
        if (found) break;
      }

      if (!found) {
        alert("Employee not found!");
      }
    } else if (operation === "2") {
      // TODO: List employees by department
      const searchDept = prompt("Enter department name:");
      let deptFound = false;

      for (let i = 0; i < company.departments.length; i++) {
        const dept = company.departments[i];
        if (dept.name.toLowerCase() === searchDept.toLowerCase()) {
          console.log(`\nEmployees in ${dept.name}:`);
          for (let j = 0; j < dept.employees.length; j++) {
            const emp = dept.employees[j];
            console.log(`- ${emp.name}: ${emp.position}, $${emp.salary}`);
          }
          deptFound = true;
          break;
        }
      }

      if (!deptFound) {
        alert("Department not found!");
      }
    } else if (operation === "3") {
      // TODO: Find highest paid employee using loops
      let highestPaid = null;

      for (let i = 0; i < company.departments.length; i++) {
        const dept = company.departments[i];
        for (let j = 0; j < dept.employees.length; j++) {
          const emp = dept.employees[j];
          if (highestPaid === null || emp.salary > highestPaid.salary) {
            highestPaid = emp;
          }
        }
      }

      if (highestPaid) {
        alert(`Highest paid: ${highestPaid.name} - $${highestPaid.salary}`);
      }
    } else if (operation === "4") {
      // TODO: Calculate total salary expense
      let totalSalary = 0;

      for (let i = 0; i < company.departments.length; i++) {
        const dept = company.departments[i];
        for (let j = 0; j < dept.employees.length; j++) {
          totalSalary += dept.employees[j].salary;
        }
      }

      alert(`Total salary expense: $${totalSalary.toLocaleString()}`);
    } else if (operation === "5") {
      // TODO: List all employees
      console.log("\n=== All Employees ===");
      for (let i = 0; i < company.departments.length; i++) {
        const dept = company.departments[i];
        for (let j = 0; j < dept.employees.length; j++) {
          const emp = dept.employees[j];
          console.log(
            `${emp.name} (${dept.name}) - ${emp.position}, $${emp.salary}`,
          );
        }
      }
    } else if (operation === "6") {
      continueOperations = false;
      alert("Goodbye!");
    } else {
      alert("Invalid choice! Please enter 1-6.");
    }
  }

  return company;
}

// TODO: Call your company directory to test it
// companyDirectory();
```

**Expected Behavior:**

- User creates a company with multiple departments
- Each department has multiple employees
- Can search and analyze data using basic array/object operations
- No advanced array methods used

**Solution:**

```javascript
function analyzeCompany(company) {
  // 1. Get all employee names - flatten the nested structure
  const allEmployees = company.departments
    .flatMap((dept) => dept.employees)
    .map((emp) => emp.name);

  // 2. Calculate total salary expense
  const totalSalary = company.departments
    .flatMap((dept) => dept.employees)
    .reduce((total, emp) => total + emp.salary, 0);

  // 3. Find highest paid employee
  const allEmps = company.departments.flatMap((dept) => dept.employees);
  const highestPaid = allEmps.reduce((highest, current) =>
    current.salary > highest.salary ? current : highest,
  );

  // 4. Group employees by position
  const byPosition = {};
  allEmps.forEach((emp) => {
    if (!byPosition[emp.position]) {
      byPosition[emp.position] = [];
    }
    byPosition[emp.position].push(emp);
  });

  return {
    allEmployees,
    totalSalary,
    highestPaid,
    byPosition,
  };
}
```

### Exercise 5: Object Methods and `this`

Create objects with methods that use `this`.

```javascript
function createCalculator() {
  // Create a calculator object with:
  // - result property (starts at 0)
  // - add method
  // - subtract method
  // - multiply method
  // - divide method
  // - clear method
  // - getResult method
  // Each method should return the calculator object for chaining
}

// Test your calculator
const calc = createCalculator();
console.log(calc.add(10).multiply(2).subtract(5).getResult()); // Should be 15
```

**Solution:**

```javascript
function createCalculator() {
  return {
    result: 0,

    add: function (num) {
      this.result += num;
      return this;
    },

    subtract: function (num) {
      this.result -= num;
      return this;
    },

    multiply: function (num) {
      this.result *= num;
      return this;
    },

    divide: function (num) {
      if (num !== 0) {
        this.result /= num;
      } else {
        console.error("Cannot divide by zero");
      }
      return this;
    },

    clear: function () {
      this.result = 0;
      return this;
    },

    getResult: function () {
      return this.result;
    },
  };
}
```

## JavaScript Test Functions

```javascript
// Test function for arrays and objects exercises
function testArraysObjectsExercises() {
  console.log("=== Testing Arrays and Objects Exercises ===");

  // Test arrayBasics
  const fruits = arrayBasics();
  const test1 = Array.isArray(fruits) && fruits.length > 0;
  console.log("arrayBasics test:", test1 ? "PASS" : "FAIL");

  // Test createPerson
  const person = createPerson("Alice", 30, "New York");
  const test2 =
    person.name === "Alice" && typeof person.introduce === "function";
  console.log("createPerson test:", test2 ? "PASS" : "FAIL");

  // Test updatePerson
  const updated = updatePerson(person, { age: 31 });
  const test3 = updated.age === 31 && person.age === 30; // Original unchanged
  console.log("updatePerson test:", test3 ? "PASS" : "FAIL");

  // Test analyzeStudents
  const students = [
    { name: "Alice", grade: 85, subject: "Math" },
    { name: "Bob", grade: 92, subject: "Science" },
  ];
  const analysis = analyzeStudents(students);
  const test4 = analysis.names.length === 2 && analysis.averageGrade === 88.5;
  console.log("analyzeStudents test:", test4 ? "PASS" : "FAIL");

  // Test calculator
  const calc = createCalculator();
  const result = calc.add(10).multiply(2).subtract(5).getResult();
  const test5 = result === 15;
  console.log("calculator test:", test5 ? "PASS" : "FAIL");
}

// Run tests
testArraysObjectsExercises();
```

## Challenge Problems

### Challenge 1: Deep Clone Function

Implement a function that creates a deep copy of an object or array.

```javascript
function deepClone(obj) {
  // Handle primitive types
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle Date objects
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // Handle Arrays
  if (Array.isArray(obj)) {
    // Your implementation here
  }

  // Handle Objects
  // Your implementation here
}

// Test your function
const original = {
  name: "John",
  age: 30,
  hobbies: ["reading", "gaming"],
  address: {
    city: "New York",
    zip: "10001",
  },
};

const cloned = deepClone(original);
cloned.address.city = "Boston";

console.log("Original city:", original.address.city); // Should still be "New York"
console.log("Cloned city:", cloned.address.city); // Should be "Boston"
```

**Solution:**

```javascript
function deepClone(obj) {
  // Handle primitive types
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle Date objects
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // Handle Arrays
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  // Handle Objects
  const clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
}
```

### Challenge 2: Array Intersection and Union

Implement functions to find intersection and union of arrays.

```javascript
function arrayIntersection(arr1, arr2) {
  // Return array of elements that exist in both arrays
  // Remove duplicates
}

function arrayUnion(arr1, arr2) {
  // Return array of all unique elements from both arrays
}

function arrayDifference(arr1, arr2) {
  // Return elements that are in arr1 but not in arr2
}

// Test your functions
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log("Intersection:", arrayIntersection(array1, array2)); // [3, 4, 5]
console.log("Union:", arrayUnion(array1, array2)); // [1, 2, 3, 4, 5, 6, 7]
console.log("Difference:", arrayDifference(array1, array2)); // [1, 2]
```

**Solution:**

```javascript
function arrayIntersection(arr1, arr2) {
  const set2 = new Set(arr2);
  return [...new Set(arr1.filter((item) => set2.has(item)))];
}

function arrayUnion(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

function arrayDifference(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter((item) => !set2.has(item));
}
```

### Challenge 3: Object Path Manipulation

Create functions to get and set values in nested objects using dot notation paths.

```javascript
function getNestedValue(obj, path) {
  // Get value from nested object using path like "user.address.city"
}

function setNestedValue(obj, path, value) {
  // Set value in nested object using path
  // Create nested objects if they don't exist
}

// Test your functions
const data = {
  user: {
    name: "John",
    address: {
      city: "New York",
      zip: "10001",
    },
  },
};

console.log(getNestedValue(data, "user.name")); // "John"
console.log(getNestedValue(data, "user.address.city")); // "New York"

setNestedValue(data, "user.age", 30);
setNestedValue(data, "user.contact.email", "john@email.com");
console.log(data);
```

**Solution:**

```javascript
function getNestedValue(obj, path) {
  return path.split(".").reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined;
  }, obj);
}

function setNestedValue(obj, path, value) {
  const keys = path.split(".");
  const lastKey = keys.pop();

  const target = keys.reduce((current, key) => {
    if (current[key] === undefined || typeof current[key] !== "object") {
      current[key] = {};
    }
    return current[key];
  }, obj);

  target[lastKey] = value;
}
```

### Challenge 4: Array Grouping and Aggregation

Create a flexible grouping function for arrays of objects.

```javascript
function groupBy(array, keyOrFunction) {
  // Group array elements by a key or the result of a function
}

function aggregate(groupedData, aggregations) {
  // Apply aggregation functions to grouped data
  // aggregations = { count: 'count', avgAge: 'avg:age', totalSalary: 'sum:salary' }
}

// Test data
const employees = [
  { name: "Alice", department: "Engineering", age: 30, salary: 75000 },
  { name: "Bob", department: "Engineering", age: 25, salary: 65000 },
  { name: "Charlie", department: "Marketing", age: 35, salary: 60000 },
  { name: "Diana", department: "Marketing", age: 28, salary: 70000 },
];

// Test your functions
const byDepartment = groupBy(employees, "department");
console.log(byDepartment);

const aggregated = aggregate(byDepartment, {
  count: "count",
  avgAge: "avg:age",
  totalSalary: "sum:salary",
});
console.log(aggregated);
```

**Solution:**

```javascript
function groupBy(array, keyOrFunction) {
  const groups = {};

  array.forEach((item) => {
    let key;
    if (typeof keyOrFunction === "function") {
      key = keyOrFunction(item);
    } else {
      key = item[keyOrFunction];
    }

    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
  });

  return groups;
}

function aggregate(groupedData, aggregations) {
  const result = {};

  Object.keys(groupedData).forEach((groupKey) => {
    const group = groupedData[groupKey];
    result[groupKey] = {};

    Object.keys(aggregations).forEach((aggKey) => {
      const aggConfig = aggregations[aggKey];

      if (aggConfig === "count") {
        result[groupKey][aggKey] = group.length;
      } else if (aggConfig.startsWith("sum:")) {
        const field = aggConfig.split(":")[1];
        result[groupKey][aggKey] = group.reduce(
          (sum, item) => sum + item[field],
          0,
        );
      } else if (aggConfig.startsWith("avg:")) {
        const field = aggConfig.split(":")[1];
        const sum = group.reduce((sum, item) => sum + item[field], 0);
        result[groupKey][aggKey] = sum / group.length;
      }
    });
  });

  return result;
}
```

## Debugging Exercises

### Debug Exercise 1

Fix the array mutation issue:

```javascript
function addToArray(arr, item) {
  arr.push(item); // This mutates the original array
  return arr;
}

const originalArray = [1, 2, 3];
const newArray = addToArray(originalArray, 4);
console.log(originalArray); // [1, 2, 3, 4] - mutated!
```

**Fix:**

```javascript
function addToArray(arr, item) {
  return [...arr, item]; // Create new array
}

// Alternative:
function addToArray(arr, item) {
  return arr.concat(item);
}
```

### Debug Exercise 2

Fix the object reference issue:

```javascript
function updateUser(user, updates) {
  user.name = updates.name; // Mutates original object
  user.age = updates.age;
  return user;
}

const originalUser = { name: "Alice", age: 30 };
const updatedUser = updateUser(originalUser, { name: "Alice Smith", age: 31 });
console.log(originalUser); // { name: "Alice Smith", age: 31 } - mutated!
```

**Fix:**

```javascript
function updateUser(user, updates) {
  return { ...user, ...updates }; // Create new object
}

// Alternative:
function updateUser(user, updates) {
  return Object.assign({}, user, updates);
}
```

### Debug Exercise 3

Fix the array method chaining issue:

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .filter((n) => n > 2)
  .map((n) => n * 2)
  .sort(); // Problem: sort() converts to strings by default

console.log(result); // ["10", "6", "8"] - not what we want!
```

**Fix:**

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .filter((n) => n > 2)
  .map((n) => n * 2)
  .sort((a, b) => a - b); // Proper numeric sort

console.log(result); // [6, 8, 10] - correct!
```

## Real-World Applications

### Application 1: Shopping Cart Management

Create a shopping cart system with arrays and objects.

```javascript
function createShoppingCart() {
  let items = [];

  return {
    addItem: function (product, quantity = 1) {
      const existingItem = items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        items.push({ ...product, quantity });
      }
    },

    removeItem: function (productId) {
      items = items.filter((item) => item.id !== productId);
    },

    updateQuantity: function (productId, quantity) {
      const item = items.find((item) => item.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    },

    getTotal: function () {
      return items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },

    getItems: function () {
      return [...items]; // Return copy to prevent mutation
    },

    clear: function () {
      items = [];
    },
  };
}

// Usage
const cart = createShoppingCart();
cart.addItem({ id: 1, name: "Laptop", price: 999 });
cart.addItem({ id: 2, name: "Mouse", price: 25 }, 2);
console.log("Total:", cart.getTotal());
console.log("Items:", cart.getItems());
```

### Application 2: Data Processing Pipeline

Create a data processing system for handling collections.

```javascript
function createDataProcessor() {
  return {
    clean: function (data) {
      // Remove null/undefined values and trim strings
      return data
        .filter((item) => item != null)
        .map((item) => {
          if (typeof item === "string") {
            return item.trim();
          }
          if (typeof item === "object") {
            const cleaned = {};
            Object.keys(item).forEach((key) => {
              if (item[key] != null) {
                cleaned[key] =
                  typeof item[key] === "string" ? item[key].trim() : item[key];
              }
            });
            return cleaned;
          }
          return item;
        });
    },

    validate: function (data, schema) {
      // Validate data against a simple schema
      return data.filter((item) => {
        return Object.keys(schema).every((key) => {
          const rule = schema[key];
          const value = item[key];

          if (rule.required && (value == null || value === "")) {
            return false;
          }

          if (rule.type && typeof value !== rule.type) {
            return false;
          }

          return true;
        });
      });
    },

    transform: function (data, transformations) {
      // Apply transformations to data
      return data.map((item) => {
        const transformed = { ...item };

        Object.keys(transformations).forEach((key) => {
          const transform = transformations[key];
          if (typeof transform === "function") {
            transformed[key] = transform(item[key], item);
          }
        });

        return transformed;
      });
    },
  };
}

// Usage
const processor = createDataProcessor();
const rawData = [
  { name: "  Alice  ", age: "30", email: "alice@email.com" },
  { name: "Bob", age: "25", email: null },
  null,
  { name: "", age: "35", email: "charlie@email.com" },
];

const cleanData = processor.clean(rawData);
const validData = processor.validate(cleanData, {
  name: { required: true, type: "string" },
  age: { required: true },
  email: { required: false, type: "string" },
});

const transformedData = processor.transform(validData, {
  age: (age) => parseInt(age),
  fullName: (_, item) => item.name.toUpperCase(),
});

console.log(transformedData);
```

### Application 3: Search and Filter System

Create a flexible search system for collections.

```javascript
function createSearchEngine(data) {
  return {
    search: function (query, fields = []) {
      const lowerQuery = query.toLowerCase();

      return data.filter((item) => {
        if (fields.length === 0) {
          // Search all string fields
          return Object.values(item).some(
            (value) =>
              typeof value === "string" &&
              value.toLowerCase().includes(lowerQuery),
          );
        } else {
          // Search specific fields
          return fields.some((field) => {
            const value = item[field];
            return (
              typeof value === "string" &&
              value.toLowerCase().includes(lowerQuery)
            );
          });
        }
      });
    },

    filter: function (filters) {
      return data.filter((item) => {
        return Object.keys(filters).every((key) => {
          const filterValue = filters[key];
          const itemValue = item[key];

          if (typeof filterValue === "function") {
            return filterValue(itemValue);
          }

          if (Array.isArray(filterValue)) {
            return filterValue.includes(itemValue);
          }

          return itemValue === filterValue;
        });
      });
    },

    sort: function (field, direction = "asc") {
      return [...data].sort((a, b) => {
        let valueA = a[field];
        let valueB = b[field];

        // Handle different data types
        if (typeof valueA === "string") {
          valueA = valueA.toLowerCase();
          valueB = valueB.toLowerCase();
        }

        if (direction === "asc") {
          return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
        } else {
          return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
        }
      });
    },
  };
}
```

## Self-Assessment Checklist

- [ ] I can create and manipulate arrays using various methods
- [ ] I understand how to access and modify array elements
- [ ] I can use array methods like `map()`, `filter()`, `reduce()`, etc.
- [ ] I can create and work with objects using different syntaxes
- [ ] I understand object property access methods (dot and bracket notation)
- [ ] I can work with nested arrays and objects
- [ ] I understand the difference between mutation and immutability
- [ ] I can use object methods and understand `this` context
- [ ] I can debug common array and object-related issues
- [ ] I can apply arrays and objects to solve real-world problems

## Additional Practice Resources

1. Practice array method chaining with different datasets
2. Work with complex nested data structures (JSON APIs)
3. Implement common data manipulation patterns
4. Practice object-oriented patterns with objects
5. Build projects that heavily use arrays and objects
6. Practice immutable programming patterns
7. Work with real-world data transformation scenarios

---

**Next Topic:** [09 - Built-in Methods](./09-built-in-methods-exercises.md)
