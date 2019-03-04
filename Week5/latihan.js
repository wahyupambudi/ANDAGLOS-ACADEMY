// function hitungHuruf(kata) {
//     // you can only write your code here!
//   }
  
//   // TEST CASES
//   console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
//   console.log(hitungHuruf('I am a passionate developer')); // passionate
//   console.log(hitungHuruf('aku adalah anak gembala')); // adalah
//   console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
//   console.log(hitungHuruf('mengayuh perahu di danau')); // danau



// let myArray = ["one", "two", "three", "four"];

// for(let i = 0; i < myArray.length; i++){

//    console.log(myArray[i]);

// }

// let myArray = [{"child": ["one", "two", "three", "four"]}, 
//                {"child": ["five", "six", "seven", "eight"]}];

// for(let i = 0; i < myArray.length; i++){

//    let childArray = myArray[i].child;
// //    console.log(childArray)
//    for(let j = 0; j < childArray.length; j++){

//   console.log(childArray[j]);

//    }

// }

// var json = {
//    jsonData: [{
//    one: [11, 12, 13, 14, 15]
//    }, {
//    two: [21, 22, 23]
//    }, {
//    three: [31, 32]
//    }]
//    };
//    for (var i = 0; i < json.jsonData.length; i++) {
//        for (var key in json.jsonData[i]) {
//            for (var j = 0; j < json.jsonData[i][key].length; j++) {
//                console.log(json.jsonData[i][key][j])
//            }
//        }
//    }
// var a = ''
// for(var i = 0; i < 5; i++){
//    for(var j = 0; j < i; j++){
//       a+='*'
// console.log(a)
//    }
//    for(var k = j; k > 0 ; k--){
//       a+='*'
//       console.log(a)
//    }
// }


// function numberSum(num){
//    if(num == 1){
//       return 1;
//    }else{
//       return num + numberSum(num - 1);
//    }
// }

// console.log(numberSum(6));


// function power(base, exponen){
//    if(exponen == 0){
//       return 1;
//    }else{
//       return base * power(base, exponen -1);
//    }
// }

// console.log(power(3,3))

// function faktorialRekursif(angka) {
//    // you can only write your code here!
//    if(angka == 1){
//       return 1;
//    }else{
//       return angka * faktorialRekursif(angka-1)
//    }
//  }
 
//  // TEST CASES
//  console.log(faktorialRekursif(3)); // 6
//  console.log(faktorialRekursif(4)); // 24
//  console.log(faktorialRekursif(5)); // 120
//  console.log(faktorialRekursif(2)); // 2
//  console.log(faktorialRekursif(1)); // 1

// var paragraph = 'far far away, behind the word mountains, far from the countries Vokalia and Consonantia,there live the blind texts!. Separated they! live in far away from Bookmarksgrove right at the coast of the Semantics,a large language ocean. A small . When she reached the first hills! of the Italic Mountains,she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road!, the Line Lane. Pityful a rethoric question ran over her cheek!'

// console.log(paragraph.match(/far/g))

// var message = 'Regex itu Mudah!';
// console.log(/[A-Z]/.test(message));
// // mengembalikan nilai true karena minimal satu karakter memenuhi pattern A-Z. Dan true, karena regex itu memang mudah :)


// var messageAllLowerCase = 'regex itu susah?';
// console.log(/[A-Z]/.test(messageAllLowerCase));
// // mengembalikan nilai false karena tidak ada satupun karakter yang memenuhi pattern A-Z. statement tersebut juga memang false! regex tidak sesulit yang kita kira!

// var str = 'belajar regex itu menyenangkan';
// console.log(str.split(/\s/));
// // mengembalikan nilai "belajar, regex, itu, menyenangkan" karena \s adalah sebuah pattern untuk satu spasi.

// var stringAwal = 'Regex itu sangat susah!';
// stringHasil = stringAwal.replace(/susah/, 'mudah');
// console.log(stringHasil); // mengembalikan nilai "Regex itu sangat mudah!"

// var message = 'Regex seru DEH!';
// console.log(message.match(/e/));
// // menampilkan "e", namun hanya sekali

// console.log(message.match(/e/g));
// // menampilkan "e" untuk setiap "e" yang terdapat di dalam teks. `g` menandakan pencarian secara global, tidak hanya satu kali

// console.log(message.match(/e/gi));
// // menampilkan "e" untuk setiap "e" yang terdapat di dalam teks. `i` menandakan pencarian karakter dengan ignore case, atau mengabaikan besar kecilnya karakter, sehingga "E" pun akan dicocokkan.


var supermanObj = {
  id: "1a2b3c",
  name: "Superman",
  age: 200,
  favorites: [
    "coding",
    "reading",
    {
      sports: ["parkour", "hill climbing"]
    }
  ],
  address: {},
  speak: function() {
    console.log('i am superman!');
  }
};

console.log(supermanObj.name); // "Superman"
console.log(supermanObj.age); // 200
console.log(supermanObj.favorites[0]); // "coding"
console.log(supermanObj.favorites[2].sports); // ["parkour", "hill climbing"]
console.log(supermanObj.favorites[2].sports[0]); // "parkour"
supermanObj.speak(); // "i am superman"

