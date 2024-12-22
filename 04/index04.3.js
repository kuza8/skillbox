const celsiusToFahrenheit = celsius => celsius * 1.8 + 32;

const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) / 1.8;

const celsiusInput = parseFloat(prompt("Введите температуру в градусах Цельсия:"));
const fahrenheitInput = parseFloat(prompt("Введите температуру в градусах Фаренгейта:"));

console.log(`${celsiusInput} градусов Цельсия в Фаренгейтах:`, celsiusToFahrenheit(celsiusInput));
console.log(`${fahrenheitInput} градусов Фаренгейта в Цельсиях:`, fahrenheitToCelsius(fahrenheitInput));