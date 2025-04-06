function findMinAndMax(arr) {
    if (arr.length === 0) {
        return null; // or throw an error if you prefer
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return { min, max };
}


function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function filterArray(arr, condition) {
    return arr.filter(condition);
}
