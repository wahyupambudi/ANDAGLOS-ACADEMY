function checkAB(num) {
    // you can only write your code here!
    var jarak = num.length;

    for(var i = 0; i < num.length; i++){
      // console.log(num[i])
      if(num[i] === 'a'){
        jarak = 3;
      }else if(num[i] === 'b'){
        if(jarak <= 3){
          return true;
        }
      }
      else{
        if(jarak > 3){
          hasil = false;
        }
      }
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false