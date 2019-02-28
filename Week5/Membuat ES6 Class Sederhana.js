//cara 1

class Mobil{
  constructor(Merek, Harga, Warna, Bensin, Jumlah_Roda){
    this.Merek = Merek;
    this.Harga = Harga;
    this.Warna = Warna;
    this.Bensin = Bensin;
    this.Jumlah_Roda = Jumlah_Roda;
  }
  setMerek(newMerek){
  	this.Merek = newMerek;
  }
  setHarga(newHarga){
  	this.Harga = newHarga;
  }
  setWarna(newWarna){
  	this.Warna = newWarna;
  }
  setBensin(newBensin){
  	this.Bensin = newBensin;
  }
  setJumlah_Roda(newJumlah_Roda){
  	this.Jumlah_Roda = newJumlah_Roda;
  }

  getMerek(){
  	return this.Merek;
  }
  getHarga(){
  	return this.Harga;
  }
  getWarna(){
  	return this.Warna;
  }
  getBensin(){
  	return this.Bensin;
  }
  getJumlah_Roda(){
  	return this.Jumlah_Roda;
  }
  getArea(){
  	let area = 'Mobil saya bermerek ' + this.Merek + ' dengan harga ' + this.Harga + ' Rupiah,' + ' berwarna ' + this.Warna + ', bensinya ' + this.Bensin + ', dan beroda ' + this.Jumlah_Roda;
  	return area;
  }
}

let newcar = new Mobil();

let Merek = 'Hando';
let Harga = 300000000;
let Warna = 'Merah';
let Bensin = 'Solar';
let Jumlah_Roda = 4;

newcar.setMerek(Merek);
newcar.setHarga(Harga);
newcar.setWarna(Warna);
newcar.setBensin(Bensin);
newcar.setJumlah_Roda(Jumlah_Roda);

console.log(newcar.getArea());



class sellcar{
	constructor(hargamobil, diskon){
		this.hargamobil = hargamobil;
		this.diskon = diskon;
	}

	sethargamobil(newhargamobil){
		this.hargamobil = newhargamobil;
	}
	setdiskon(newdiskon){
		this.diskon = newdiskon;
	}

	gethargamobil(){
		return this.hargamobil;
	}
	getdiskon(){
		return this.diskon;
	}
	getarea(){
		let area = 'Mobil dijual dengan harga ' + this.hargamobil * this.diskon + ' Rupiah';
		return area;
	}
}

let newsell = new sellcar();

let hargamobil = 300000000;
let diskon = 20 / 100;

newsell.sethargamobil(hargamobil);
newsell.setdiskon(diskon);

console.log(newsell.getarea());


//Cara 2

// class Mobil {
//   constructor(Merek, Harga, Warna, Bensin, Jumlah_Roda) {
//           this.Merek = Merek;
//           this.Harga = Harga;
//           this.Warna = Warna;
//           this.Bensin = Bensin;
//           this.Jumlah_Roda = Jumlah_Roda;
//         }

//         setMerek(newMerek){
//           this.Merek = newMerek;
//         }
//         setHarga(newHarga){
//           this.Harga = newHarga;
//         }
//         setWarna(newWarna){
//           this.Warna = newWarna;
//         }
//         setBensin(newBensin){
//           this.Bensin = newBensin;
//         }
//         setJumlah_Roda(newJumlah_Roda){
//           this.Jumlah_Roda = newJumlah_Roda;
//         }

//         getMerek(){
//           return this.Merek;
//         }
//         getHarga(){
//           return this.Harga;
//         }
//         getWarna(){
//           return this.Warna;
//         }
//         getBensin(){
//           return this.Bensin;
//         }
//         getJumlah_Roda(){
//           return this.Jumlah_Roda;
//         }
// }

// let hasil = new Mobil('Hando', 300000000, 'Merah', 'Solar', 4);

// console.log('Mobil saya bermerek ' + hasil.getMerek() + ' dengan Harga ' + hasil.getHarga() + ' Rupiah' + ' bewarna ' + hasil.getWarna() + ', bensinya ' + hasil.getBensin() + ', dan beroda ' + hasil.getJumlah_Roda());


// class jualmobil{
//   constructor(hargamobil, diskon){
//     this.hargamobil = hargamobil;
//     this.diskon = diskon;
//   }

//   sethargamobil(newhargamobil){
//     this.hargamobil = newhargamobil;
//   }
//   setdiskon(newdiskon){
//     this.diskon = newdiskon;
//   }
//   gethargamobil(){
//     return this.hargamobil;
//   }
//   getdiskon(){
//     return this.diskon;
//   }
// }

// let nilai = new jualmobil(300000000, 20/100);
// console.log('Jual Mobil dengan Diskon 20% = ' + nilai.gethargamobil() * nilai.getdiskon() + ' Rupiah')




//cara 3

// class Mobil {
//     constructor(Merek, Harga, Warna, Bensin, Jumlah_Roda) {
//       this.Merek = Merek;
//       this.Harga = Harga;
//       this.Warna = Warna;
//       this.Bensin = Bensin;
//       this.Jumlah_Roda = Jumlah_Roda;
      
//     }
//   }
  
//   // let kotak = new Mobil('Hando');
//   // let hargamobil = new Mobil('Hando' , 300000000);
//   // let a = new Mobil('Hando' , 300000000, 'Merah');
//   // let b = new Mobil('Hando' , 300000000, 'Merah', 'Solar');
//   // let c = new Mobil('Hando' , 300000000, 'Merah', 'Solar', 4);
  
//   // console.log('Mobil saya bermerek '+ kotak.Merek + ' Dengan Harga ' + hargamobil.Harga + ' berwarna ' + a.Warna + ' bensinya ' + b.Bensin + ' dan beroda ' + c.Jumlah_Roda);

//   // let kotak = new Mobil('Hando');
//   // let hargamobil = new Mobil('Hando' , 300000000);
//   // let a = new Mobil('Hando' , 300000000, 'Merah');
//   // let b = new Mobil('Hando' , 300000000, 'Merah', 'Solar');
//   let hasil = new Mobil('Hando' , 300000000, 'Merah', 'Solar', 4);
  
//   console.log('Mobil saya bermerek '+ hasil.Merek + ' Dengan Harga ' + hasil.Harga + ' berwarna ' + hasil.Warna + ' bensinya ' + hasil.Bensin + ' dan beroda ' + hasil.Jumlah_Roda);


// class jualmobil {
//     constructor(Harga, Diskon){
//         this.Harga = Harga;
//         this.Diskon = Diskon;
//       }
//   }

//   let hargaawal = new jualmobil(300000000);
//   let hargadiskon = new jualmobil(300000000, 20 / 100);

//   console.log('Mobil Dijual dengan Harga ' + hargaawal.Harga * hargadiskon.Diskon );

