function average(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

let number1 = parseFloat(prompt("Введите первое число:"));
let number2 = parseFloat(prompt("Введите второе число:"));
let number3 = parseFloat(prompt("Введите третье число:"));

let result = average(number1, number2, number3);
console.log("Среднее арифметическое:", result);