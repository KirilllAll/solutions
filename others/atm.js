// Необходимо написать функцию банкомата, которая бы возвращала массив возможных номиналов денег по запросу пользователя.
// Номиналы должны выдаваться максимально крупные с минимально возможным общим количеством выданных купюр.
// Результат возвращается в формате от большего к меньшему — ['5000x1', '1000x3', ...].

const getRest = (data, item) => data % item;
const getCount = (data, item) => Math.floor(data / item);

const getAtmMoney = (sum) => {
	const nominals = [5000, 1000, 500];
    let money = sum;
	return nominals.reduce((acc, item) => {
        let res = getRest(money, item);
        let count = getCount(money, item)
        money = res;
        return [...acc, `${item}x${count}`]
	}, []);
};
console.log(getAtmMoney(8500)); //[ 5000x1 1000x3 500x1]
