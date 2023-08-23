const Car = require("./Car");
const Dealership = function(name, maxNumberOfCars, cars){
    this.name = name;
    this.maxNumberOfCars = maxNumberOfCars;
    this.cars = cars;
}

Dealership.prototype.setName = function(name) {
    this.name = name
}
Dealership.prototype.setMaxNumberOfCars = function(maxNumberOfCars){
    this.maxNumberOfCars = maxNumberOfCars;
}
Dealership.prototype.setCars = function(cars){
    this.cars = cars;
}


Dealership.prototype.getName = function(){return this.name}
Dealership.prototype.getMaxNumberOfCars= function(){return this.maxNumberOfCars}
Dealership.prototype.getCars = function(){return this.cars}

Object.setPrototypeOf(Dealership.prototype, Car.prototype);


// methods 
// Count the number of cars in stock
Dealership.prototype.carsCount = function(){
    return this.cars.length;}


// Add a car to stock
Dealership.prototype.addCar = function(car){
    if(this.cars.length < this.maxNumberOfCars){
        this.cars.push(car);
    }
};


// Return an array containing each car's manufacturer
// const trainerAge = trainers.map((trainer) => {return trainer.age});
Dealership.prototype.getManufacturers = function(){
    const manufacturers = [];
    for(car of this.cars){
        manufacturers.push(car.manufacturer);
    }
    return manufacturers;
}



// Find all the cars from a given manufacturer
Dealership.prototype.getGivenManufacturer = function(givenManufacturer){
    const givenManufacturerCars =[];
    for(car of this.cars){
        if(car.manufacturer === givenManufacturer){
            givenManufacturerCars.push(car);
        }
    }
    return givenManufacturerCars;
}


// Find the total value of all the cars in stock
Dealership.prototype.getTotalValue = function(){
    return this.cars.reduce((reducer, car) => {
        return car.price + reducer;
    }, 0);
}

// const totalValue = cars.reduce((reducer, car) => {
//     return car.price + reducer;
// }, 0)

module.exports = Dealership;


// const car1 = new Car("Fiat", 1, "Diseal");
// const car2 = new Car("Ford", 2, "Petrol");
// const car3 = new Car("Kia", 3, "Water");

// const deadlership1 = new Dealership("London", 20,[car1,car2,car3])

// console.log(deadlership1.getGivenManufacturer('Ford'));
// console.log(deadlership1.getGivenManufacturer('Ford').length);


// console.log(deadlership1.getTotalValue());