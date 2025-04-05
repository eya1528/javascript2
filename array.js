function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function filterArray(arr, condition) {
    return arr.filter(condition);
}