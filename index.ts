// javascript variables

// var person  = "Thiago"; //string
// let animals = []; //array

// animals = person // valid javascript

// Typescript variables

let firstName: any = "John"; // convert variable type to any type like javascript
let height: number = 6;
let isDone: boolean = false;

firstName = height; // invalid typescript.

// OO Typescript Features

// Interfaces
interface IVehicle {
    wheels: number;
    engine: string;
    drive();
}

// Classes
class Car implements IVehicle {
    wheels: number;
    engine: string;

    //Constructor 
    constructor(wheels: number, engine: string){
        this.wheels = wheels;
        this.engine = engine;
    }

    drive() {
        console.log('Driving...');
    }  
    
}

let myCar = new Car(4, 'v8');
myCar.drive();