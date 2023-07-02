Array.prototype.filterArray = function(cb, thisArg) {
     const array = []
     for (let i = 0; i < this.length; i++) {
         if (cb.call(thisArg, this[i], i, this)) {
             array.push(this[i])
         }
     }
     return array
 }


