const numbers = [
    [1, 2, 3, 4],
    [3, 6, [5, 6], 8, 2,[2, 4], 9],
    [4, 2, [6, 7, [2, 6, 1]]]
]
sum = (array) => {
    arrsum = 0;
    if (array.length === 0)
        return 0;
    array.forEach(element => {
        if (Array.isArray(element)) {
            arrsum+=sum(element);
        }
        else {
            arrsum += element;
        }
    });
    return arrsum;
    
}
console.log(sum(numbers)); 
