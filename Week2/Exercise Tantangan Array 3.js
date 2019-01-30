function dataHandling2(input){

    input.splice(1,1, "Roman Alamsyah Elsharawy");
    input.splice(2,1, "Provinsi Bandar Lampung");
    input.splice(4,1, "Pria", "SMA Internasional Metro");
    console.log(input)
    
    var bulan = input[3][4]
    switch(bulan){
        case '1':
        console.log('Januari')
        break;
        case '2':
        console.log('Febuari')
        break;
        case '3':
        console.log('Maret')
        break;
        case '4':
        console.log('April')
        break;
        case '5':
        console.log('Mei')
        break;
        case '6':
        console.log('Juni')
        break;
        case '7':
        console.log('Juli')
        break;
        case '8':
        console.log('Agustus')
        break;
        case '9':
        console.log('September')
        break;
        case '10':
        console.log('Oktober')
        break;
        case '11':
        console.log('November')
        break;
        case '12':
        console.log('Desember')
        break;
    }
    
    var pisah = input[3].split("/");
    pisah.sort(function(value1,value2){return value2 - value1});
    console.log(pisah)
    
    var pisah1 = input[3].split("/")
    console.log(pisah1.join("-"));
    
    var sli1 = input[1];
    var sli2 = sli1.slice(0,15)
    
    console.log(sli2)
    
    // input.splice(1,1, "Roman Alamsyah");
    // console.log(input[1])
}
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

dataHandling2(input);