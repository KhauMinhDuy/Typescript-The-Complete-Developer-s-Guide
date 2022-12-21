const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number): number => {
    return a - b;
}

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function(a: number, b: number): number {
    return a * b;
}

const logMessage = (message: string): void => {
    console.log(message);
}

const throwError = (message: string): string => {
    if(message) {
        throw new Error(message);
    }
    return message;
}

const todayWeather = {
    date: new Date(),
    weather: "Sunny"
}

const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
}

logWeather(todayWeather);