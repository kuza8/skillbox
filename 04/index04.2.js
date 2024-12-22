function celsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

let celsiusInput = parseFloat(prompt("Введите температуру в градусах Цельсия:"));
let fahrenheitInput = parseFloat(prompt("Введите температуру в градусах Фаренгейта:"));

console.log(`${celsiusInput} градусов Цельсия в Фаренгейтах:`, celsiusToFahrenheit(celsiusInput));
console.log(`${fahrenheitInput} градусов Фаренгейта в Цельсиях:`, fahrenheitToCelsius(fahrenheitInput));