function tentukanDeretGeometri(arr){
var hasil = arr[arr.length-1] / arr[arr.length-2];
// console.log(hasil)
for (var i = 0; i < arr.length; i++){
    for (var j = i+1; i < arr.length; j++){
        // var aa = arr[j] / arr[i];
        // console.log(aa)
        if(arr[j] / arr[i] === hasil){
            return true;
        }else{
            return false;
        }
    }
}
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false