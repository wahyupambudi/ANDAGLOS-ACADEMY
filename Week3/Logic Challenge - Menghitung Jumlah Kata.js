//Cara 0
function hitungJumlahKata(kalimat){
var hasil = kalimat.split(" ");
for ( var i = 0; i < hasil.length ; i++){

}
return i;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5

//Cara1
// function hitungJumlahKata(kalimat){
// var hasil = 1;

// for (var i = 0; i < kalimat.length ; i++){
//     if (kalimat[i] === ' '){
//         hasil = hasil + 1;
// }
// // console.log(kalimat[i])
// }
// return hasil
// }