class Vehicle {

    // private _color: string;
    //
    // get color(): string {
    //     return this._color;
    // }
    //
    // set color(value: string) {
    //     this._color = value;
    // }


    constructor(public color: string) {
    }

    public drive(): void {
        console.log('chugga chugga');
    }

    public honk(): void {
        console.log("beep");
    }
}

const vehicle = new Vehicle('red');
vehicle.drive();
console.log(vehicle.color);


class Car extends Vehicle {

    public drive(): void {
        console.log("vroom");
    }

    public drivingProcess(): void {
        this.drive();
    }

}

const car = new Car('orange');
car.drivingProcess();
car.honk();