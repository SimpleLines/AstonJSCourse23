function getUniqArray(arr){
    const uniqArr = [];
    for (const element of arr) {
        if(!uniqArr.includes(element)){
            uniqArr.push(element);
        }
    }
        return uniqArr;
}