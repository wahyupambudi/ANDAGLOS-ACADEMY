function dataHandling(){
    return ;
}

var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", " 21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", " 10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", " 25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", " 6/4/1970", "Berkebun"]
            ]  

            for (var i = 0; i < input.length; i++){
                console.log('Nomor ID : ' + input[i][0])
                console.log('Nama Lengkap : ' + input[i][1])
                console.log('TTL : ' + input[i][2] + input[i][3])
                console.log('Hobi : ' + input[i][4])
                console.log('')
            }


//cara1

// function dataHandling(){
    
//     return ;
// }

// var input = [
//                 ["0001", "Roman Alamsyah", "Bandar Lampung", " 21/05/1989", "Membaca"],
//                 ["0002", "Dika Sembiring", "Medan", " 10/10/1992", "Bermain Gitar"],
//                 ["0003", "Winona", "Ambon", " 25/12/1965", "Memasak"],
//                 ["0004", "Bintang Senjaya", "Martapura", " 6/4/1970", "Berkebun"]
//             ]  

// var tgl = input[0][3]
// var b = input[1][3]
// var c = input[2][3]
// var d = input[3][3]
// var e = input[0]
            
// var aa = 'Nomor ID: '
// var bb = 'Nama Lengkap: '
// var cc = 'TTL: '
// var dd = 'Hobi: '
// var all = aa+bb+cc+dd

//             var ada0 = ''
//             var ada = ''
//             var ada1 = ''
//             var ada2 = ''
//             var ada3 = ''
            
//             for (var a = 0; a <= 3; a++ ){
//                 ada = input[a][0]
//                 ada1 = input[a][1] 
//                 ada2 = input[a][2] 
//                 ada3 = input[a][4] 

//                 console.log(aa + ada )
//                 console.log(bb +ada1 )
//                 console.log(cc +ada2+tgl)
//                 console.log(dd +ada3 )

//             }


//cara2
// function dataHandling(){
//     return ;
// }

// var input = [
//                 ["0001", "Roman Alamsyah", "Bandar Lampung", " 21/05/1989", "Membaca"],
//                 ["0002", "Dika Sembiring", "Medan", " 10/10/1992", "Bermain Gitar"],
//                 ["0003", "Winona", "Ambon", " 25/12/1965", "Memasak"],
//                 ["0004", "Bintang Senjaya", "Martapura", " 6/4/1970", "Berkebun"]
//             ]  
// var a = input[0][3]
// var b = input[1][3]
// var c = input[2][3]
// var d = input[3][3]

//             console.log('Nomor ID : '+input[0][0])
//             console.log('Nama Lengkap : '+input[0][1])
//             console.log('TTL : '+input[0][2]+a)
//             console.log('Hobi : '+input[0][4])
//             console.log('')

//             console.log('Nomor ID : '+input[1][0])
//             console.log('Nama Lengkap : '+input[1][1])
//             console.log('TTL : '+input[1][2]+b)
//             console.log('Hobi : '+input[1][3])
//             console.log('')
            
//             console.log('Nomor ID : '+input[2][0])
//             console.log('Nama Lengkap : '+input[2][1])
//             console.log('TTL : '+input[2][2]+c)
//             console.log('Hobi : '+input[2][3])
//             console.log('')
            
//             console.log('Nomor ID : '+input[3][0])
//             console.log('Nama Lengkap : '+input[3][1])
//             console.log('TTL : '+input[3][2]+d)
//             console.log('Hobi : '+input[3][3])

// var i = [
//     ['00', 'kk'],
//     ['01', 'elfin']
// ]


// for(var w = 0; w < i.length; w++ ){
//     console.log('nomor : ' + i[w][0])
//     console.log('Nama: ' + i[w][1])
// }