const Car = require("./Car");


describe('Car getters', ()=> {

    const car = new Car("Bwm", 2, "type");
    // let car2 = new Car("Ford", 3, "type");

    test('can get manufacturer ', ()=>{
        // const car = new Car("Bwm", 2, "bwm");
        actual = car.getManufacturer();
        expected =  "Bwm";
        expect(actual).toBe(expected);
    });

    test('can get price', ()=>{
        actual = car.getPrice();
        expected =  2;
        expect(actual).toBe(expected);
    });

    test('can get engineType', ()=>{
        actual = car.getEngineType();
        expected =  "type";
        expect(actual).toBe(expected);
    });

})

describe('Car setters', ()=> {

    test('can set manufacturer ', ()=>{
        let car2 = new Car("Ford", 3, "type");
        actual =  car2.setManufacturer("Estate");
        expected = "Estate";
        expect(actual).toBe(expected);
    });

    test('can set price', ()=>{
        let car3 = new Car("Ford", 3, "type");
        actual = car3.setPrice(4);
        expected =  4;
        expect(actual).toBe(expected);
    });

    test('can set engineType', ()=>{
        let car4 = new Car("Ford", 3, "insertType");
        actual = car4.setEngineType("Type");
        expected =  "Type";
        expect(actual).toBe(expected);
    });

})