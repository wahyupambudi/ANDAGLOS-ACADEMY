//creator wahyup
console.log('Welcome to the My Simple Project JavaScript App');
console.log('')

console.log('Voting Presiden 2019')

var presiden1 = 'Jokowi'
var presiden2 = 'Prabowo'
var votingJokowi = Math.floor(Math.pow(1000000, Math.random()));
var votingPrabowo = Math.floor(Math.pow(1000000, Math.random()));

console.log('')
console.log('Jumlah Voting Yang di peroleh ' + presiden1 +  ' adalah : ' +votingJokowi +' Suara')

console.log('Sedangkan')
console.log('Jumlah Voting Yang di peroleh ' + presiden2 +  ' adalah : ' +votingPrabowo + ' Suara' )

console.log('')

if(votingJokowi > votingPrabowo){
    console.log('Maka Presiden Tahun 2019 adalah: ' + presiden1 )
    console.log('Selamat Kepada Bapak ' + presiden1)
}else if(votingJokowi < votingPrabowo){
    console.log('Maka Presiden Tahun 2019 adalah: ' + presiden2 )
    console.log('Selamat Kepada Bapak ' + presiden2)
}else if(votingJokowi === votingPrabowo){
    console.log('Jumlah Voting Yang di peroleh Sama')
    console.log('Mereka Harus Bertanding')

}