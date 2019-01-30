function perpangkatanDua(angka){
  var i = 0;
  var hasil = 1;
  var pangkat = 1;

  while (hasil < angka){
    pangkat = pangkat *2;
    hasil = pangkat;
    i++;
  }
  if (angka != hasil){
    return -1
  }
  return i;
}

//TEST CASES
console.log(perpangkatanDua(64)); // 6
console.log(perpangkatanDua(22)); // -1
console.log(perpangkatanDua(16)); // 4
console.log(perpangkatanDua(222)); // -1
console.log(perpangkatanDua(1)); // 0
