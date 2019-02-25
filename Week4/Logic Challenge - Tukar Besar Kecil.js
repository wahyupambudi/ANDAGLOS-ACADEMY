function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    
    var newkalimat = kalimat.split("");
    var hasil = "";
    for(var i = 0; i < newkalimat.length; i++){
        if(newkalimat[i] === newkalimat[i].toUpperCase()){
            hasil+=newkalimat[i].toLowerCase();
        }else{
            hasil+=newkalimat[i].toUpperCase();
        }
    }
    return hasil
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
  

// var nama = 'afAsdAsd'
// var gede = nama.split('');
// var hasil = ''

// for (var i=0;i<gede.length;i++){
//     if(gede[i] === gede[i].toUpperCase() ){
//         hasil += gede[i].toLowerCase();
//         console.log(hasil)
//     }else{
//         hasil += gede[i].toUpperCase();
//         // console.log(hasil)

//     }
// }