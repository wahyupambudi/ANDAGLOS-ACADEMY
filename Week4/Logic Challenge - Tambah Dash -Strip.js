function tambahDash(str) {
    // you can only write your code here!
    var hasil = '';
    
    for(var i=0; i < str.length; i++){
        hasil += str[i];
        // console.log(hasil)

        if(str[i] % 2 === 1 && str[i + 1] % 2 === 1 ){
            hasil += '-';
        }
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(tambahDash('454793')); // '4547-9-3'
  console.log(tambahDash('1739028')); // '1-7-3-9028'
  console.log(tambahDash('891829')); // '89-1829'
  console.log(tambahDash('10192')); // '101-92'
  console.log(tambahDash('222222')); // '222222'
