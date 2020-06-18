let Vehicles = [];

class Vehicle {
	mileage : number;
	nOfSeats: number;
	fuelType: string;
	yearOfProduction: number;
	manufacturer: string;
	basePrice: number;
	img: string;
	price: number;

	constructor(mileage, nOfSeats, fuelType, yearOfProduction, manufacturer, basePrice, img){
		this.mileage = mileage;
		this.nOfSeats = nOfSeats;
		this.fuelType = fuelType;
		this.yearOfProduction = yearOfProduction;
		this.manufacturer = manufacturer;
		this.basePrice = basePrice;
		this.img = img;

		Vehicles.push(this)
	}

}

class Motor extends Vehicle {
	noOfCylinders: number;
	type: string

	constructor(mileage, nOfSeats, fuelType, yearOfProduction, manufacturer, basePrice, img,  noOfCylinders, type){
		super(mileage, nOfSeats, fuelType, yearOfProduction, manufacturer, basePrice, img);
		this.noOfCylinders = noOfCylinders;
		this.type = type;
		
	}

	getObject(){
		this.price = this.showPrice();
	}

	showObj(){
		return ``;
	}

	showPrice(){
		let calcMileage = this.mileage/1000;
		let calcnOfSeats = this.nOfSeats*1000;
		let calcFuelType : number;
		switch(this.fuelType){
			case "diesel" : calcFuelType = 1000;
			break;
			case "benzin" : calcFuelType = 2000;
			break;
			case "strom" : calcFuelType = 3000;
			break;
		}
		let calcYearOfProduction = (2020 - this.yearOfProduction) *500;
		return (this.basePrice - calcMileage + calcnOfSeats + calcFuelType - calcYearOfProduction);
	}


}

class Truck extends Vehicle {
	weight: number;
	noOfWheels: number;
	trailer : boolean;


	constructor(mileage, nOfSeats, fuelType, yearOfProduction, manufacturer, basePrice, img, noOfWheels, weight, trailer){
		super(mileage, nOfSeats, fuelType, yearOfProduction, manufacturer, basePrice, img);
		this.weight = weight;
		this.noOfWheels = noOfWheels;
		this.trailer = trailer;
	}

	getObject(){
		this.price = this.showPrice();
	}

	showObj(){
		return ``;
	}

	showPrice(){
		let calcMileage = this.mileage/1000;
		let calcnOfSeats = this.nOfSeats*1000;
		let calcFuelType : number;
		switch(this.fuelType){
			case "diesel" : calcFuelType = 1000;
			break;
			case "benzin" : calcFuelType = 2000;
			break;
			case "strom" : calcFuelType = 3000;
			break;
		}
		let calcYearOfProduction = (2020 - this.yearOfProduction) *500;
		return (this.basePrice - calcMileage + calcnOfSeats + calcFuelType - calcYearOfProduction);
	}

}


let motor1 = new Motor(50000, 1, "strom", 2005, "toyota", 20000, "img/motor1.jpg", 1, "good").getObject();
let motor2 = new Motor(40000, 2, "benzin", 2009, "harley", 25000, "img/motor2.jpg", 2, "good").getObject();
let motor3 = new Motor(20000, 2, "diesel", 2012, "susuki", 275000, "img/motor3.jpg", 4, "good").getObject();
let motor4 = new Motor(150000, 1, "strom", 2019, "BMW", 20000, "img/motor4.jpg", 2, "good").getObject();
let motor5 = new Motor(47000, 2, "strom", 2020, "honda", 20000, "img/motor5.jpg", 1, "good").getObject();
let motor6 = new Motor(200000, 1, "strom", 1999, "toyota", 20000, "img/motor6.png", 2, "good").getObject();

let truck1 = new Truck(50000, 1, "strom", 2005, "toyota", 20000, "img/truck1.jpg", 8, 30, true).getObject();
let truck2 = new Truck(40000, 2, "benzin", 2009, "harley", 25000, "img/truck2.webp", 4, 15, false).getObject();
let truck3 = new Truck(20000, 2, "diesel", 2012, "susuki", 275000, "img/truck3.png", 16, 10, true).getObject();
let truck4 = new Truck(150000, 1, "strom", 2019, "BMW", 20000, "img/truck4.jpg", 2, 12, false).getObject();
let truck5 = new Truck(47000, 2, "strom", 2020, "honda", 20000, "img/truck5.jpg", 1, 14, true).getObject();
let truck6 = new Truck(200000, 1, "strom", 1999, "toyota", 20000, "img/truck6.png", 2, 6, false).getObject();

//console.log(toyota1);
//motorArray.push(toyota1);
//motorArray.push(toyota2);
//motorArray.push(toyota3);





var nodes = document.getElementsByClassName("ourNode");



let i =0;
	for(let j=0; j<Vehicles.length; j++){
		var img = Vehicles[j].img;
		var mileage = Vehicles[j].mileage;
// (Vehicles[j].hasOwnProperty("img")) ?  Vehicles[j].img : false;
		// if(a == 12){
		// 	method
		// }else {
		// 	method
		// }
		var noOfWheels = (Vehicles[j].hasOwnProperty("noOfWheels")) ? Vehicles[j].noOfWheels : false;

		// var test = (a==12) ? true : false;

		var nOfSeats = Vehicles[j].nOfSeats;
		var fuelType = Vehicles[j].fuelType;
		var yearOfProduction = Vehicles[j].yearOfProduction;
		var manufacturer = Vehicles[j].manufacturer;
		var noOfCylinders = Vehicles[j].noOfCylinders;
		var price = Vehicles[j].price;
		var trailor = (Vehicles[j].hasOwnProperty("trailer")) ? Vehicles[j].trailer  : false;

	if(!Vehicles[j].hasOwnProperty("noOfWheels")){
		nodes[0].innerHTML += ` 
	<div class="elementNode col col-12 col-md-4 col-lg-3 border border-light" id=${i}${j}>
            <img class="img-fluid" src="${img}" alt="" />
            <ul class="list-group list-group-flush">
              <li class="list-group-item">&#9656;Mileage: ${mileage}</li>
              <li class="list-group-item">&#9656; No. of seats: ${nOfSeats}</li>
              <li class="list-group-item">&#9656; Fuel Type: ${fuelType}</li>
              <li class="list-group-item">&#9656;Manufactured in: ${yearOfProduction}</li>
              <li class="list-group-item">&#9656;Manufactured by:${manufacturer}</li>
              <li class="list-group-item">&#9656;# of cylinders: ${noOfCylinders}</li>
              <li class="list-group-item clickPrice" id="price${i}${j}">Click for price</li>
              <li class="list-group-item price" id="click${i}${j}">Price: ${price}</li>
              
              
            </ul>
          </div>
          `
	}else {
		nodes[1].innerHTML += ` 
	<div class="elementNode col col-12 col-md-4 col-lg-3 border border-light" id=${i}${j}>
            <img class="img-fluid" src="${img}" alt="" />
            <ul class="list-group list-group-flush">
              <li class="list-group-item">&#9656;Mileage: ${mileage}</li>
              <li class="list-group-item">&#9656; No. of seats: ${nOfSeats}</li>
              <li class="list-group-item">&#9656; Fuel Type: ${fuelType}</li>
              <li class="list-group-item">&#9656;Manufactured in: ${yearOfProduction}</li>
              <li class="list-group-item">&#9656;Manufactured by:${manufacturer}</li>
              <li class="list-group-item">&#9656;# of Wheels: ${noOfWheels}</li>
              <li class="list-group-item">&#9656;Trailor: ${trailor}</li>

              <li class="list-group-item clickPrice" id="price${i}${j}">Click for price</li>
              <li class="list-group-item price" id="click${i}${j}">Price: ${price}</li>
              
              
            </ul>
          </div>
          `
	}
	
}

	i=1;

// 	for(let j=0; j<6; j++){
// 		var img = trucksArray[j].img;
// 		var mileage = trucksArray[j].mileage;
// 		var nOfSeats = trucksArray[j].nOfSeats;
// 		var fuelType = trucksArray[j].fuelType;
// 		var yearOfProduction = trucksArray[j].yearOfProduction;
// 		var manufacturer = trucksArray[j].manufacturer;
// 		var noOfWheels = trucksArray[j].noOfWheels;
// 		var price = trucksArray[j].price;
// 		var trailor = trucksArray[j].trailer;


// 	nodes[i].innerHTML += ` 
// 	<div class="elementNode col col-12 col-md-4 col-lg-3 border border-light" id=${i}${j}>
//             <img class="img-fluid" src="${img}" alt="" />
//             <ul class="list-group list-group-flush">
//               <li class="list-group-item">&#9656;Mileage: ${mileage}</li>
//               <li class="list-group-item">&#9656; No. of seats: ${nOfSeats}</li>
//               <li class="list-group-item">&#9656; Fuel Type: ${fuelType}</li>
//               <li class="list-group-item">&#9656;Manufactured in: ${yearOfProduction}</li>
//               <li class="list-group-item">&#9656;Manufactured by:${manufacturer}</li>
//               <li class="list-group-item">&#9656;# of Wheels: ${noOfWheels}</li>
//               <li class="list-group-item">&#9656;Trailor: ${trailor}</li>

//               <li class="list-group-item clickPrice" id="price${i}${j}">Click for price</li>
//               <li class="list-group-item price" id="click${i}${j}">Price: ${price}</li>
              
              
//             </ul>
//           </div>
//           `
// }


var priceArray = document.getElementsByClassName("price");
var clickArray = document.getElementsByClassName("clickPrice");
console.log(clickArray);

for(let i=0; i < clickArray.length; i++){
	clickArray[i].addEventListener("click", function(){
		clickArray[i].style.display = "none"
		priceArray[i].style.display = "block"

	})
}