const getPointOnDistance = (speed, time) => {
    const allDistance = 109;
    return Math.sign(speed) === 1 ?  speed * time - allDistance : allDistance - Math.abs(speed) * time;
};
console.log(getPointOnDistance(60, 2)); // 11
console.log(getPointOnDistance(-1, 1)); // 108