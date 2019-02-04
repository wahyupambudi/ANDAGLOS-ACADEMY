function pasanganTerbesar(num){
var newNumber = num.toString().split('');
var hasil = [];
var end = 0;
for (var i = 0 ; i < newNumber.length -1 ; i++){
    hasil[i] = newNumber[i] + newNumber[i + 1];

    if (hasil[i] > end){
        end = hasil[i];
    }
}
return end;
}
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

//coretan
// var num = 11231398;
// var newNumber = num.toString().split('');
// var a = [];
// // var aa =newNumber += a;
// // // console.log(newNumber)

// var as = 0;
// for (var i = 0 ; i < newNumber.length -1 ; i++){
// a[i] = newNumber[i] + newNumber[i + 1]
// // if (a[i] > as){
// //     as = a[i]
// // }
// console.log(a)
// }