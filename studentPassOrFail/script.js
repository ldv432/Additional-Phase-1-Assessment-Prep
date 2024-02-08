// Problem Statement:
// You are tasked with creating a Student Pass/Fail System.
// You have a provided array of students, each represented as an object with properties `id`, `name`, and `score`.
// Your goal is to implement a function to determine whether each student has passed or failed based on their score.

// Instructions:
// Implement a function to determine whether each student has passed or failed.
// For each student in the array, if their score is 60 or above, they pass; otherwise, they fail.
// The function should return an array of objects with the same structure as the input array, but with an additional property `result` indicating 'Pass' or 'Fail' for each student.

// Example Usage:
// - Call the determinePassFail function with the provided array of students.
// - The function should return an array of students with an additional property `result` indicating whether each student has passed or failed.

// You can now proceed to implement this functionality according to the provided instructions.


// Provided Array of Students
const students = [
    { id: 1, name: 'Alice', score: 85 },
    { id: 2, name: 'Bob', score: 60 },
    { id: 3, name: 'Charlie', score: 45 },
    { id: 4, name: 'David', score: 75 },
    { id: 5, name: 'Ella', score: 90 },
    { id: 6, name: 'Frank', score: 55 },
    { id: 7, name: 'Grace', score: 80 },
    { id: 8, name: 'Henry', score: 65 },
    { id: 9, name: 'Isabel', score: 70 },
    { id: 10, name: 'Jack', score: 40 },
    { id: 11, name: 'Katherine', score: 95 },
    { id: 12, name: 'Liam', score: 50 },
    { id: 13, name: 'Mia', score: 85 },
    { id: 14, name: 'Noah', score: 75 },
    { id: 15, name: 'Olivia', score: 80 },
];

