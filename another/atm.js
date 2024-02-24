// Необходимо написать функцию банкомата, которая бы возвращала массив возможных номиналов денег по запросу пользователя.
// Номиналы должны выдаваться максимально крупные с минимально возможным общим количеством выданных купюр.
//TODO Результат возвращается в формате от большего к меньшему — ['5000x1', '1000x3', ...].

const nominals = [5000, 1000, 500];

const getAtmMoney = (sum) => {
	let money = sum;
	const storage = {
		5000: 0,
		1000: 0,
		500: 0,
	};

	while (money) {
		if (money < 1000) {
			money -= 500;
			storage[500] += 1;
		} else if (money < 5000 && money >= 1000) {
			money -= 1000;
			storage[1000] += 1;
		} else {
			money -= 5000;
			storage[5000] += 1;
		}
	}

	return Object.entries(storage).map(([key, value]) => `${key}x${value}`);
};
console.log(getAtmMoney(7500)); //[ 5000x1 1000x2 500x1]
console.log(getAtmMoney(10000)); //[ 5000x2]
console.log(getAtmMoney(13500)); //[ 5000x2]
