// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  const employeesArray = [];
  let addingEmployees = true;
  while (addingEmployees) {
    const firstName = prompt(`Enter first name.`);
    console.log(`${firstName} as a First name logged.`);

    const lastName = prompt(`Enter last name.`);
    console.log(`${lastName} as a Last name logged.`);

    const salary = prompt(`Enter disered Salary.`);
    console.log(`${salary} as a Disered Salary logged.`);

    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseInt(salary)
    }
    //console.log(employee.salary);

    employeesArray.push(employee);
    addingEmployees = confirm(`Would you like to add another employee?`);
  }
  console.log(employeesArray);
  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let salaries = employeesArray.map(employee => employee.salary);
  console.log(salaries);
  let totalSalary;
  if (salaries.length > 0) {
    salaries = salaries.map(salary => typeof salary === 'string' ? parseInt(salary, 10) : salary);
    totalSalary = salaries.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  } 
  else {
  }
 

}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee

}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
