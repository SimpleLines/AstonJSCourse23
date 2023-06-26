Array.prototype.filterArray = function(cb, thisArg){
    let result = []
    for(let i = 0; i < this.length; i++){
        if(cb.call(thisArg, this[i], i, this)){
            result.push(this[i])
        }
    }
    return result
}