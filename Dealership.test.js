const Car = require("./Car");
const Dealership = require("./Dealership");



describe('Deadlership can do extra methods', ()=> {

    const car1 = new Car("Fiat", 1, "Diseal");
    const car2 = new Car("Ford", 2, "Petrol");
    const car3 = new Car("Kia", 3, "Water");

    const deadlership1 = new Dealership("London", 20,[car1,car2,car3])


    test('can count the number of cars in stock', ()=>{
        actual = deadlership1.carsCount();
        expected =  3;
        expect(actual).toBe(expected);
    });


    test('Add a car to stock', ()=>{
    let deadlership2 = new Dealership("Scotland", 5,[car1]);
    deadlership2.addCar(car3);
        actual = deadlership2.carsCount();
        expected = 2;
        expect(actual).toBe(expected);
    });

    test('Return an array containing each cars manufacturer', ()=>{
        actual = deadlership1.getManufacturers();
        expected =  ["Fiat","Ford","Kia"];
        // toBe => toEqual
        expect(actual).toEqual(expected);
    });

    test('Find all the cars from a given manufacturer', ()=>{
        actual = deadlership1.getGivenManufacturer("Ford").length;
        expected =  1;
        expect(actual).toBe(expected);
    });


    test('Find the total value of all the cars in stock', ()=>{
        actual = deadlership1.getTotalValue();
        expected =  6;
        expect(actual).toBe(expected);
    });


})

