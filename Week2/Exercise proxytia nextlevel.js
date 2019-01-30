var nama = 'Zoro'
var peran = 'Ksatria'
var tahunLahir = 2000;
var umur = 2019 - tahunLahir;
var playerHealth = tahunLahir * Math.random();
var monsterHealth = tahunLahir * Math.random();
var kodeMonster = Math.floor(Math.pow(100, Math.random()));

if (nama === ''){
    console.log('Kacung')
}else {
    for (var angka = 1; angka <= tahunLahir; angka++){
        if (angka % umur === 0){
            console.log(peran + ' ' + nama + ' ' +'Menyerang Monster');
            monsterHealth = monsterHealth - umur;
        }
        if (angka % kodeMonster === 0){
            console.log('Monster Menyerang' +' '+peran + ' '+ nama + '!')
            playerHealth = playerHealth - kodeMonster;
        }
        if (angka % umur === 0 && angka % kodeMonster === 0){
            console.log('Health keduanya bertambah')
            playerHealth = playerHealth + kodeMonster;
            monsterHealth = monsterHealth + umur;
        }
        if (playerHealth >= monsterHealth){
            console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!')      
        }else{
            console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...')
        }
    }
}

// for (var um = umur; um <= 2000; um +=19)
// if(um){
//     console.log(peran + ' ' + nama + 'menyerang monster' );
//     console.log(monsterHealth - umur);
// }

// for (var kodem = kodeMonster; kodem <=  2000; kodem +=kodeMonster)
// if (kodem){
//     console.log('monster menyerang ' + peran + ' ' + nama + '!');
//     console.log(playerHealth - kodeMonster);
// }

// for (var umko = um+kodem ; umko <= 2000; umko += um+kodem);
// if(umko){
//     console.log('Health Keduanya Bertambah');
//     console.log(playerHealth + kodeMonster);
//     console.log(monsterHealth + umur);
// }

// if (playerHealth >= monsterHealth){
//     console.log('Selamat, ' + peran + '' + nama + ' memenangkan pertarungan!');
// }else if(playerHealth <= monsterHealth){
//     console.log('Sayang Sekali, ' + peran + ' ' + nama + 'dikalahkan Monster...');
// }