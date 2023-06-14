function sum(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    if(isNaN(a) || isNaN(b)) {
        throw new Error ('Аргументы не являются числами!');
    }
    let result = (a + b).toFixed(3);
    return parseFloat(result);
}