function angkaPalindrome(angka){
    var cek = false;
    while(cek === false){
    angka++;
        // console.log(cek)
    var angkabaru = angka.toString();
    var hasil = '';
    
    for (var i = angkabaru.length -1 ; i >= 0; i--){
        hasil = hasil+angkabaru[i]
        // console.log(hasil)
        if (hasil === angkabaru){
            cek = true;
            return angka;
            }
        }
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001