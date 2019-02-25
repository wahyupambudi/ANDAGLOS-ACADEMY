function ubahKapital(kalimat) {
    // you can only write your code here!
    var kalimatbaru = kalimat.split(" ");
    var hasil = "";

    for(var i = 0; i < kalimatbaru.length; i++){
        for(var j = 0; j < kalimatbaru[i].length; j++){
            // console.log(kalimatbaru[i])
            if(j === 0){
                hasil +=kalimatbaru[i][j].toUpperCase();
            }else{
                hasil +=kalimatbaru[i][j]
            }
        }
        hasil += " "
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(ubahKapital('saya makan sushi')); // Saya Makan Sushi
  console.log(ubahKapital('programming adalah hobi saya')); // Programming Adalah Hobi Saya
  console.log(ubahKapital('menjadi developer adalah cita-cita saya')); // Menjadi Developer Adalah Cita-cita Saya
  console.log(ubahKapital('i have a dream')); // I Have A Dream
  console.log(ubahKapital('coding is fun')); // Coding Is Fun
  