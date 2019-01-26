# Simple Project JavaScript App

Tampilkan judul 'Welcome to the My Simple Project JavaScript App'

Tampilkan 'Voting Presiden 2019'

SIMPAN 'presiden1'
SIMPAN 'presiden2'
SIMPAN 'votingJokowi'
SIMPAN 'votingPrabowo'

Tampilkan 'Jumlah Voting Yang di peroleh ' + presiden1 +  ' adalah : ' +votingJokowi +' Suara'

Tampilkan 'Sedangkan'
Tampilan 'Jumlah Voting Yang di peroleh ' + presiden2 +  ' adalah : ' +votingPrabowo + ' Suara'

if(votingJokowi > votingPrabowo){
    Tampilkan 'Maka Presiden Tahun 2019 adalah: ' + presiden1 
    console.log('Selamat Kepada Bapak ' + presiden1)
}else if(votingJokowi < votingPrabowo){
    Tampilkan 'Maka Presiden Tahun 2019 adalah: ' + presiden2
    Tampilkan 'Selamat Kepada Bapak ' + presiden2
}else if(votingJokowi === votingPrabowo){
    Tampilkan 'Jumlah Voting Yang di peroleh Sama'
    Tampilkan 'Mereka Harus Bertanding'

}