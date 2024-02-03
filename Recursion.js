function pow(x, num) {
	if (num === 0) return 0;
	if (num === 1) {
		return x;
	} else {
        return x * pow(x, num - 1)
	}
}