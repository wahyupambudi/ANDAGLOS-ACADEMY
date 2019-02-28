function hitungHuruf(kata) {
    // you can only write your code here!
    var hasil = '';
    var nilai = 0;
    var newkata = kata.split(' ');
    var result = 0;

    // console.log(newkata)

    for(var i = 0; i < newkata.length; i++){
      hasil = newkata[i];
      // console.log(hasil)

      // var result = 0;
      for(var j=0; j < hasil.length; j++){
        // console.log(hasil[j])
        for(var k=0; k < hasil.length; k++){
          // console.log(hasil[k])
          if(j !== k && hasil[j] === hasil[k]){
            result++;
            // console.log(result)
          }
        }
      }
      if(result > nilai){
        nilai = result;
        // console.log(nilai)
        newkata = hasil;
        // console.log(newkata)
      }
    }
    if(nilai >= 2){
      return newkata;
    }else{
      return -1
    }

  }
  
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau
  