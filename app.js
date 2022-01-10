// Dependencies
const db = require("./config/connection");
const inquirer = require("inquirer");
const cTable = require("console.table");

// GIVEN a command-line application that accepts user input

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database
// Dont forget to do bonus
//? ////////////////////////////////////////////////////////////////////////////

//todo Assign aliases to table columns

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
const viewDepartments = function () {
  db.promise()
    .query(`SELECT * FROM department`)
    .then(([rows, fields]) => {
      console.table(rows);
      userInput();
    });
};

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
const viewRoles = function () {
  db.promise()
    .query(`SELECT * FROM role`)
    .then(([rows, fields]) => {
      console.table(rows);
      userInput();
    });
};

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
//! Need to change query to a type of join
const viewEmployees = function () {
  db.promise()
    .query(
      `SELECT employee.id, 
    employee.first_name, 
    employee.last_name, 
    role.title, 
    department.name AS department,
    role.salary, 
    CONCAT (manager.first_name, " ", manager.last_name) AS manager
FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON employee.manager_id = manager.id`
    )
    .then(([rows, fields]) => {
      console.table(rows);
      userInput();
    });
};

const insertIntoDepartment = function () {};

const insertIntoRole = function () {};

const insertIntoEmployee = function () {};

const alterEmployee = function () {};

// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
const userInput = function () {
  return inquirer
    .prompt({
      type: "list",
      name: "options",
      message: "What would you like to do?",
      choices: [
        "1. View all departments",
        "2. View all roles",
        "3. View all employees",
        "4. Add a department",
        "5. Add a role",
        "6. Add an employee",
        "7. Update an employee role",
        "8. Finish",
      ],
    })
    .then((userChoice) => {
      // View department table
      if (userChoice.options === "1. View all departments") viewDepartments();
      // View role table
      if (userChoice.options === "2. View all roles") viewRoles();
      // View employee table
      if (userChoice.options === "3. View all employees") viewEmployees();
      // Insert value into department table
      if (userChoice.options === "4. Add a department") viewDepartments();
      // Insert value into role table
      if (userChoice.options === "5. Add a role") viewDepartments();
      // Insert value into employee table
      if (userChoice.options === "6. Add an employee") viewDepartments();
      // Alter employee table
      if (userChoice.options === "7. Update an employee role")
        viewDepartments();
      // Close connection
      if (userChoice.options === "8. Finish") db.end();
    });
};

userInput();
