const getPointOnCircleDistance = (speed, time) => {
	const ALL_DISTANCE = 109;
	const formula = (speed * time) % ALL_DISTANCE;
    const isPositiveNumber = Math.sign(formula) === 1;

	return isPositiveNumber ? formula : ALL_DISTANCE - Math.abs(formula);
};
console.log('test 60 60', getPointOnDistance(60, 60)); // 11
console.log('test 60 2',getPointOnDistance(60, 2));
console.log('test -1 1',getPointOnDistance(-10, 1)); // 108

