let horsepower = parseInt(prompt("Введите мощность автомобиля (л.с.):"));
let taxRate;

if (horsepower <= 100) {
    taxRate = 12;
} else if (horsepower <= 125) {
    taxRate = 25;
} else if (horsepower <= 150) {
    taxRate = 35;
} else if (horsepower <= 175) {
    taxRate = 45;
} else if (horsepower <= 200) {
    taxRate = 50;
} else if (horsepower <= 225) {
    taxRate = 65;
} else if (horsepower <= 250) {
    taxRate = 75;
} else {
    taxRate = 150;
}

let taxAmount = horsepower * taxRate;

console.log("Сумма налога:", taxAmount);