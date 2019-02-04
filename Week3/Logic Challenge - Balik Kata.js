function balikKata(kata){
    var kata0 = '';
    for (var i = kata.length -1 ; i >= 0; i--){
        kata0 += kata[i]
    }
    return kata0;
}

console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));