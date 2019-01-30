function palindrome(kata){
var katabaru= '';
for (var i = kata.length -1 ; i >= 0; i--){
    katabaru = katabaru + kata[i]
}
if (katabaru === kata){
    return true;
}else if(katabaru !== kata){
    return false;
}
return katabaru;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false