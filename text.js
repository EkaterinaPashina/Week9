const sum = document.querySelector('.sum').value;
const button = document.querySelector('.button');
const total = document.querySelector('.total');

let interestRate = 18.5;

const deposit = '30000';

const growth = '150';

const currency = 'руб';

console.log(`Ваш депозит на начало расчетного периода составлял ${deposit} ${currency}`);

console.log(`Согласно вашему тарифу, вам была присвоена ставка ${interestRate}%`);

console.log(`К концу расчетного периода прирост составил ${growth} руб и на данный момент ваш депозит составляет ${+deposit + +growth} руб`); // К концу расчетного прирост составил 150 руб и на данный момент ваш депозит составляет 30150 руб

button.addEventListener('click', () => {
    const sum = document.querySelector('.sum').value;
    let result = ((sum / 100) * 7) + +sum;
    let message;
    message = "Через год у вас будет " + result + " руб. на счету";
    total.textContent = (message); // Через год у вас будет XXX руб. на счету", где вместо ХХХ выведите сколько получится на счету с учетом процентной ставки 7% годовых
});