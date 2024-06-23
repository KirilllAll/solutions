const sortBlocks = (arr) => arr.sort((a, b) => b.width * b.height - a.width * a.height);
const sortLikes = (arr) => arr.sort((a, b) => b.likes - a.likes);

const getAdaptData = (arr) => {
	const tempData = Object.values(arr);
	const topLikes = sortLikes(tempData).slice(0, 5);
	const restLikes = sortLikes(tempData).slice(5, tempData.length - 1);

	return { top: sortBlocks(topLikes), rest: sortBlocks(restLikes) };
};
