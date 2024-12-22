const totalSum = (price, amount, discount) => {
    const discountAmount = (price * discount) / 100;
    const discountedPrice = price - discountAmount;
    return discountedPrice * amount;
};

const priceItem = parseFloat(prompt("Введите цену товара:"));
const amountItem = parseInt(prompt("Введите количество товара:"));
const discountItem = parseFloat(prompt("Введите скидку в процентах:"));

console.log("Итоговая стоимость:", totalSum(priceItem, amountItem, discountItem));