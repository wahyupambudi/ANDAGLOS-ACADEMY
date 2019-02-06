function cariMean(arr){

    var hasil = 0;
    var nilai = 0;

    for (var i = 0; i < arr.length; i++){
        // console.log(i)
        nilai = nilai + arr[i];
        // console.log(nilai)
        hasil = Math.round(nilai / arr.length);
        // console.log(hasil)
    }
    return hasil;
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7