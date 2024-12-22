let isCardInserted = true;
let balance = 500;

let amount = parseInt(prompt("Введите сумму для операции:"));

if (isCardInserted && amount <= balance) {
    console.log("Операция выполняется");
} else {
    console.log("Операция отклонена");
}