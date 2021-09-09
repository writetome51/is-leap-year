export function isLeapYear(year) {
	if (typeof year !== 'number') throw new Error(`Input must be type 'number'`);

	return (
		// The ordering of conditions is deliberate, so execution is fastest.
		(year % 4 === 0) && 
		(year % 100 !== 0 || year % 400 === 0)
	);
}
