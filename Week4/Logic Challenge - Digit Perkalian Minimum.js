function digitPerkalianMinimum(angka){

    var nilai = []
    for(var i=0; i <= angka; i++){
        // console.log(i)
        for(var j=0; j <= angka; j++){
            if(i * j === angka){
                nilai.push(i + '' + j);
            }
        }
    }

    // console.log(nilai[0])
    var hasil = nilai[0].length;
    // console.log(hasil)
    for(var i=0; i < nilai.length; i++){
        // console.log(i)
        // console.log(nilai[i].length)
        if(hasil > nilai[i].length){
            hasil = nilai[i].length;
        }
    }

    return hasil;

}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
