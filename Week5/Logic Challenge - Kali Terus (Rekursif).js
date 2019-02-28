function kaliTerusRekursif(angka) {
    // you can only write your code here!

    if(angka < 10){return angka;}

    var newangka = angka.toString();
    var firstangka = newangka[0];
    var result = newangka.slice(1);
    
    return kaliTerusRekursif(Number(firstangka) * kaliTerusRekursif(Number(result)));
  }



  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6
  