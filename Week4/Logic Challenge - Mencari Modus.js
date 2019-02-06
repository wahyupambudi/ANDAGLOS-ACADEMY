function cariModus(arr){
    var hasil = 0;
    var nilai = 0;
    var modus = 0;
    
    for (var i = 0; i < arr.length ; i++){
        // console.log(i)
        for (var j = 0; j < arr.length ; j++){
            if(arr[i] === arr[j]){
                nilai += 1;
                // console.log(nilai)
            }
        }
        if (modus < nilai){
            modus = nilai;
            hasil = arr[i];
        }
        nilai = 0;
    }
    if (modus === arr.length || modus === 1){
        hasil = -1;
    }
    return hasil;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
