var nama = ''
var peran = 'kacung'
var tahunLahir = 2000;
var umur = 2019 - tahunLahir;
var playerHealth = tahunLahir * Math.random();
var monsterHealth = tahunLahir * Math.random();
var kodeMonster = Math.floor(Math.pow(100, Math.random()));

if (nama === '' && peran ==='kacung'){
    console.log('Kacung')
    for (var angka = 1; angka <= 2000; angka++){
        console.log('kacung');
    }
}

for (var um = umur; um <= 2000; um +=19)
if(um){
    console.log(peran + ' ' + nama + 'menyerang monster' );
    console.log(monsterHealth - umur);
}

for (var kodem = kodeMonster; kodem <=  2000; kodem +=kodeMonster)
if (kodem){
    console.log('monster menyerang ' + peran + ' ' + nama + '!');
    console.log(playerHealth - kodeMonster);
}

for (var umko = um+kodem ; umko <= 2000; umko += um+kodem);
if(umko){
    console.log('Health Keduanya Bertambah');
    console.log(playerHealth + kodeMonster);
    console.log(monsterHealth + umur);
}

if (playerHealth >= monsterHealth){
    console.log('Selamat, ' + peran + '' + nama + ' memenangkan pertarungan!');
}else if(playerHealth <= monsterHealth){
    console.log('Sayang Sekali, ' + peran + ' ' + nama + 'dikalahkan Monster...');
}