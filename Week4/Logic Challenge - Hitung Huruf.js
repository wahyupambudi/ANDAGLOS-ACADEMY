function hitungHuruf(kata) {
    // you can only write your code here!
    var hasil = '';
    var newkata = kata.split('');

    for(var i = 0; i < newkata.length; i++){
      console.log(newkata[i])
    }

  }
  
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau
  