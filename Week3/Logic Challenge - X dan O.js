function xo(str){
var forX = 0;
var forO = 0;
for (var i = 0 ; i < str.length; i++){
   if (str[i] === 'x'){
       forX++
   }else if (str[i] === 'o'){
       forO++ 
   }
}
// if (forX === forO){
//     return true;
// }else{
//     return false;
// }

return forX === forO ? true : false;
// console.log(forX,forO)
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
