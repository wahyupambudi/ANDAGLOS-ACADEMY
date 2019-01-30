function bandingkanAngka(angka1, angka2){
    if(angka2 > angka1){
        return true;
    }else if(angka2 < angka1){
        return false;
    }else if(angka1 === angka2){
        return -1;
    }

}
console.log(bandingkanAngka(123,11));

// var angka1 = 111;
// var angka2 = 12;

// if(angka1 >= angka2){
//     console.log("Membandingkan angka ( "+angka1+',' +angka2+ " )"+ " = TRUE");
// }else if(angka1 <= angka2){
//     console.log("Membandingkan angka ( "+angka1+',' +angka2+ " )"+ " = FALSE");
// }else if(angka1 === angka2){
//     console.log("Membandingkan angka ( "+angka1+',' +angka2+ " )"+ " = -1");
// }
