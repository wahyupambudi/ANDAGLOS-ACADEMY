function balikString(){
    var kata = "Hello World!"
    var newkata = '';
    for (var i = kata.length -1 ; i >= 0; i--){
        newkata += kata[i]
    }
    return newkata;
};
console.log(balikString());