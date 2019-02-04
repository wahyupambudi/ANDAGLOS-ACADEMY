function angkaPrima(angka){

    for (var i = 2 ; i <= angka ; i++){
        // var hasil = angka % i;
        // console.log(hasil)
        // console.log(i)     
        // console.log(angka % i);   
        if (angka % i === 0 ){ // 33 / 3 = 11 
            return false;
        }else{
            return true;
        }
    }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
