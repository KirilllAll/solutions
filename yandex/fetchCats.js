// cats and dogs
import { catAndDogFetcher, magicalCatRecognizer } from './lib.js';

async function getCats() {
	const allAnimals = await catAndDogFetcher.fetchAll();
	const results = await Promise.all(
		allAnimals.map(async (item) => {
			const isCat = await magicalCatRecognizer.recognize(item);
			return { item, isCat };
		})
	);

	return results
		.filter((result) => !result.isCat)
		.map((result) => result.item)
		.slice(0, 3);
}

async function* filterCats(getData, condition) {
	const array = await getData();
	for (const item of array) {
		if (await condition(item)) {
			yield item;
		}
	}
}

async function getGeneratorCats(data) {
	const result = [];
	for await (const item of data) {
		result.push(item);
	}
	return result.slice(0, 3);
}

const prepareData = filterCats(catAndDogFetcher.fetchAll, magicalCatRecognizer.recognize);

const run = async () => {
	let topRatedCats;
	try {
		topRatedCats = await getGeneratorCats(prepareData);
		console.log(topRatedCats);
	} catch (err) {
		console.error(err);
	}
};

run();
