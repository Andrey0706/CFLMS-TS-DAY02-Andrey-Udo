class Person {
	name : string = "";
	age : number;
	jobTitle : string = "";

	constructor(name, age, jobTitle){
		this.name = name;
		this.age = age;
		this.jobTitle = jobTitle;
	}

	print(){
		return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
	}

}

var person = new Person("Lionel", 32, "Footballer");

console.log(person.print());

console.log(`---------------------\n basic2:\n`)

class moreInfo extends Person {
	salary : number;
	jobLocation : string;
	
	constructor(name, age, jobTitle, salary, jobLocation){
		super(name, age, jobTitle);
		this.salary = salary;
		this.jobLocation = jobLocation;
	}

	printMore(){
		return `${super.print()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`
	}

}

let newPerson = new moreInfo("lionell", 32, "Footballer", "1000000000", "Barcelona");

let toPrint = newPerson.printMore();
console.log(toPrint);