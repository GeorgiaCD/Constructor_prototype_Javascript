const Car = function(manufacturer, price, engineType){
    this.manufacturer = manufacturer;
    this.price = price;
    this.engineType = engineType;
}

Car.prototype.setManufacturer = function(manufacturer) {
   return this.manufacturer = manufacturer
}
Car.prototype.setPrice = function(price){
    return this.price = price;
}
Car.prototype.setEngineType = function(engineType){
    return this.engineType = engineType;
}

Car.prototype.getManufacturer = function(){return this.manufacturer}
Car.prototype.getPrice = function(){return this.price}
Car.prototype.getEngineType = function(){return this.engineType}

module.exports = Car;