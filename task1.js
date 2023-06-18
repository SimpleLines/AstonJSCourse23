function sum(a, b) {
    const numbA = parseFloat(a);
    const numbB = parseFloat(b);
    if (isNaN(numbA) || isNaN(numbB)) {
      console.log('Данные аргементы не являются числами')
    }
    return parseFloat((numbA + numbB).toFixed(3));
}