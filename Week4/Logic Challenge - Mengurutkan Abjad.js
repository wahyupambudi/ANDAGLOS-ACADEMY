function urutkanAbjad(str) {
    // you can only write your code here!
    var huruf = 'abcdefghijklmnopqrstuvwxyz';
    var strbaru = str.split("");
    var hasil = "";

    for (var i = 0; i < huruf.length; i++){
        for(var j = 0; j < strbaru.length; j++){
            if(huruf[i] === strbaru[j]){
                hasil+=strbaru[j];
            }
        }
    }
    
    return hasil
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'
  
