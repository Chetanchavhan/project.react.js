
class Vehicle {
    constructor(name) {
        this.name = name;
    }
    drive() {
        console.log(`${this.name} is driving.`);
    }
}


class Car extends Vehicle {
    drive() {
        console.log(`${this.name} is driving fast.`);
    }
}

let myCar = new Car('Tesla');
myCar.drive(); 


// We have a base class Vehicle with a name property and a drive method.
// The Car class extends the Vehicle class and overrides the drive method to provide a different implementation.
// When we create an instance of Car with the name 'Tesla' and call the drive method, it outputs "Tesla is driving fast."