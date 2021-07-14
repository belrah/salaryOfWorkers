let salary = parseInt(prompt('Please enter employee salary'));
let employeeAge = prompt('Please enter employee age');

function take_home() {

    if (employeeAge >= 18 && employeeAge <= 20) {
        document.write(`Net salary for employee aged ${employeeAge} is ${salary + (salary * 0.05)}`)
    } else if (employeeAge >= 21 && employeeAge <= 30) {
        document.write(`Net salary for employee aged ${employeeAge} is ${salary + (salary * 0.1)}`);
    } else if (employeeAge >= 31 && employeeAge <= 50) {
        document.write(`Net salary for employee aged ${employeeAge} is ${salary + (salary * 0.2)}`);
    } else {
        document.write(`Net salary for employee is ${salary}`);
    }
}

take_home();