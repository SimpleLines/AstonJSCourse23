Array.prototype.filterArray = function(cb, thisArg) {
  let arr = []
  const callback = cb.bind(thisArg)

  for(let i = 0; i < this.length; i++) {
    let res = callback(this[i], i, this)
    if(res) {
      arr.push(this[i])
    }
  }
  return arr
}