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

const run = async () => {
	let topRatedCats;
	try {
		topRatedCats = await getCats();
		console.log(topRatedCats);
	} catch (err) {
		console.error(err);
	}
};

run();
