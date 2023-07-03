Array.prototype.filterArray = function(callback, thisArg) {
    if (this === null) {
        throw new Error("Нельзя выполнить итерацию по неопределенному или пустому значению.");
      }
    
      let context = this;
    
      let objArr = Object(this);
    
      if (arguments.length > 1) {
        context = thisArg;
      }
    
      if (typeof callback !== "function") {
        throw new Error("Переданный callback не функция");
      }
    
      let len = objArr.length;
    
      let res = [];
    
      for (let i = 0; i < len; i++) {
        if (i in objArr) {
          let current = this[i];
          if (callback.call(context, current, i, objArr)) {
            res.push(current);
          }
        }
      }
    
      return res;
}

