const carMakers = ["ford", "toyota", "chevy"];
const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [
    ["f150"],
    ["corolla"],
    ["camaro"]
];

// help with inference extract value
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible value
// carMakers.push(100);

// help with 'map'
carMakers.map((car): string => {
    return car.toUpperCase();
})

// Flexible type
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("12312");
// importantDates.push(true); // error

