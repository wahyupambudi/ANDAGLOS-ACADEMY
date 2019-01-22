//Tugas1
function shoutOut(){
    var kata = "Halo Function!"
    return kata;
};
console.log(shoutOut());



//Tugas2
function calculateMultiply(num1,num2){
 return num1*num2;
}
// var num1 = 5;
// var num2 = 6;   
var hasilPerkalian = calculateMultiply(5,6);
console.log(hasilPerkalian);


//Tugas3
function processSentence(name,age,address,hobby){
    return 'Nama Saya' + name + ', umur saya ' + age + ' Tahun,' + ' alamat saya di ' + address + ' dan Saya Punya Hobby Yaitu ' + hobby;

}

// var name = " Agus";
// var age = 30;
// var address = "Jln. Malioboro, Yogyakarta,";
// var hobby = "gaming!";

// var fullSentence = processSentence(name,age,address,hobby);

var fullSentence = processSentence(' Agus',30,'Jln. Malioboro, Yogyakarta,','gaming!');
console.log(fullSentence);