// Given a sorted array and a value, recursively determine whether value is found within array.
// rBinarySearch([1,3,5,6],4) should return false.
// rBinarySearch([4,5,6,8,12],5) should return true.

function rBinarySearch(arr, num, start, end) {

    if(start > end) {
        return false;
    }
    
    if(start === undefined) {
        start = 0;
    }

    if(end === undefined) {
        end = arr.length-1;
    }

    let middle_index = Math.floor((start + end)/2);
    console.log('middle index =', middle_index);

    let middle_value = arr[middle_index];
    console.log('middle value =', middle_value);

    if(num < middle_value) {
        return rBinarySearch(arr, num, start, middle_index-1);
    }

    if(num > middle_value) {
        return rBinarySearch(arr, num, middle_index+1, end);
    } 
    
    if(num === middle_value) {
        console.log(num, middle_value);
        return true;
    }
};

rBinarySearch([1,3,5,7], 1);

// rBinarySearch([1,3,5,7], 1) to return true
// rBinarySearch([1,3,5,7], 7) to return true
// rBinarySearch([1,3,5,7], 5) to return true
// rBinarySearch([1,3,5,7], 4) to return false
// rBinarySearch([1,3,5,7], 10) to return false
// rBinarySearch([1,3,5,7,9], 15) to return false
// rBinarySearch([1,3,5,7,9], -15) to return false