function tentukanDeretAritmatika(arr){
    var kurang = arr[arr.length-1] - arr[arr.length-2];
    // console.log(kurang)
    for (var i = 0 ; i < arr.length ; i++){
        console.log(i)
        for (var j = i+1; j < arr.length ; j++){
         // console.log(j)
            if (arr[j] - arr[i] === kurang){
                return true;
            }else {
                return false
            }
        }
    }
}


// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false