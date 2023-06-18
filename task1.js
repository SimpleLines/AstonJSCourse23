function sum(a, b) {
    let result = Number(a) + Number(b)
    let afterComa = result - Math.trunc(result)
    let beforeComa = Math.trunc(Math.round(afterComa * 1000))

    return Math.trunc(result) + beforeComa / 1000
}