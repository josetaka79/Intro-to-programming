function areArraysSame(arr1, arr2) {
    // First, check if arrays are the same length
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Then, check each element one by one
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    // If we get here, all items matched
    return true;
}

// Test arrays
var array1 = [1, 2, 3];
var array2 = [1, 2, 3];

// Call the function and print the result
console.log(areArraysSame(array1, array2)); 