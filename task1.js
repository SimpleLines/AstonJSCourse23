function deleteElementFromArray(arr, elem) {
	if(!arr.includes(elem)) {
		return arr;
	}

	let copy = [...arr];
	copy.splice(copy.indexOf(elem), 1);
	return copy;
}