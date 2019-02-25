function targetTerdekat(arr){
    var nilai = 0;
    var hasil = 0;
    var target = 0;

    for (var i = 0; i < arr.length; i++){
        // console.log(i)
        // console.log(arr[i])
        if(arr[i] === 'x' && nilai === 'o'){
            hasil += target;
        }else if(arr[i] === 'o' && nilai === 'x'){
            hasil += target;
        }
        if(arr[i] === 'x'){
            target = 1;
            nilai = 'x';
        }else if(arr[i] === 'o'){
            target = 1;
            nilai = 'o';
        }else{
            target += 1;
        }
    }
    return hasil;
}


// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); 
// 2
