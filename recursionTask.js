const numbers = [
    [1, 2, 3, 4],
    [3, 6, [5, 6], 8, 2,[2, 4], 9],
    [4, 2, [6, 7, [2, 6, 1]]]
]
sum = (array) => {
    if (array.length === 0)
        return 0;
    if (Array.isArray(array[0])) {
        return sum(array[0]);
    }
    else {
        return array[0] + sum(array.slice(1));
    }
}
const myarr = [1, 1, 1, [1, 2, 3, 4]];
// console.log(sum(myarr)); 
