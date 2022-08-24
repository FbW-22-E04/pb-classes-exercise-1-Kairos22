class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
		// Complete the code!
		this.fullname = `${firstname} ${lastname}`
		this.email = `${firstname}.${lastname}@company.com`.toLowerCase()
	}
}

const emp1 = new Employee ("John", "Smith");
const emp2 = new Employee ("Mary", "Sue");
const emp3 = new Employee ("Antony", "Walker");

console.log(emp1);
console.log(emp2);
console.log(emp3);