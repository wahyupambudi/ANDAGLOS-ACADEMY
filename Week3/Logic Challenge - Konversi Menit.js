function konversiMenit(menit) {
      // you can only write your code here!
      var hour = Math.floor(menit / 60);
      // console.log(hour);
      var minute = menit % 60;
      // console.log(minute);
    
      if (minute < 10) {
        return hour + ':0' + minute;
      } else {
        return hour + ':' + minute;
      }
    }
/// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00


//Cara 1

// function konversiMenit(menit){
//       var jam = 60
//    if (menit <= 9){
//     return ('00:0'+menit )
//   }
//    if(menit < 60){
//     return ('00:' + menit )
//   }else if(menit === 60){
//         return ('1:00' )
//   }
//    if(menit <= 69){ // 61-69
//         return('1:0' + menit % jam)
//   }else if( menit < 120){ //70-119
//         return('1:' + menit % jam)
//   }else if( menit === 120){ //120
//         return('2:0' + menit % jam)
//   }else if( menit <= 129){ //121 - 129
//         return('2:0' + menit % jam)
//   }else if( menit > 120){
//     return('2:' + menit % jam)
//   }
// }

// CARA 2
// var detiktunggal = 9 // hanya 1-9
// var detikpuluh = 59 // ubah detik 10-59
// var menit = ''

// var jam = 230 //ubah menit 60-239
// var jam1 = 60
// var Menit = jam % jam1

// if (detiktunggal <= 9){
//     console.log('00:0' + detiktunggal )
// }

// if(detikpuluh < 60){
//     console.log('00:' + detikpuluh )
// }else if(detikpuluh === 60){
//     console.log('1:00' )
// }

// if(jam <= 69){
//     console.log('1:0'+Menit)
// }else if( jam < 120){
//     console.log('1:'+Menit)
// }else if( jam === 120){
//     console.log('2:0' + Menit)
// }else if( jam <= 129){
//     console.log('2:0' + Menit)
// }else if( jam > 120){
//     console.log('2:' + Menit)
// }


// function tambah0(x){
//     y=(x>9)?(x>99)?x:'0'+x:'0'+x;
//     return y
// }
// console.log(tambah0(9))