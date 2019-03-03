class Student{
	constructor(Name, Age, DateofBirth, Gender, Student_ID, Hobies){
		this.Name = Name;
		this.Age = Age;
		this.DateofBirth = DateofBirth;
		this.Gender = Gender;
		this.Student_ID = Student_ID;
		this.Hobies = [];
	}

	setName(newName){
		this.Name = newName;
	}
	setAge(newAge){
		this.Age = newAge;
	}
	setDateofBirth(newDateofBirth){
		this.DateofBirth = newDateofBirth;
	}
	setGender(newGender){
		if(newGender === 'Male' || newGender === 'Female'){
			this.Gender = newGender;
		}else {
			this.Gender = 'Hanya dapat di isi dengan Male dan Female'
		}
	}
	setStudent_ID(newStudent_ID){
		this.Student_ID = newStudent_ID;
	}
	setHobies(newHobies){
		this.Hobies = newHobies;
	}

	addHobby(newaddHobby){
		return this.Hobies.push(newaddHobby)
	}
	removeHobby(newremoveHobby){
		return this.Hobies.splice(this.Hobies.indexOf(newremoveHobby), 1);
		// return this.Hobies.splice(this.Hobies(2,0))
		// return this.Hobies.pop(newremoveHobby)

	}

	
	getName(){
		return this.Name;
	}
	getAge(){
		return this.Age;
	}
	getDateofBirth(){
		return this.DateofBirth;
	}
	getGender(){
		return this.Gender;
	}
	getStudent_ID(){
		return this.Student_ID;
	}
	getHobies(){
		return this.Hobies;
	}
	getData(){
		let data = 'Nama : ' + this.Name + '\nUmur : ' + this.Age + '\nTanggal Lahir : ' + this.DateofBirth + '\nJenis Kelamin : ' + this.Gender + '\nStudent_ID : ' + this.Student_ID + '\nHobi : ' + this.Hobies;
		return data;
	}
}

let hasil = new Student('Wahyu Pambudi' , 18 , '19 November 2000' , ' ' , 'Admin798');

let Gender = 'Male'; // agar if bisa berjalan
let Hobies = ['Makan', ' main', ' futsal'];

hasil.setGender(Gender); // mengambil set Gender
hasil.setHobies(Hobies);
console.log(hasil.getData());

console.log('\n**** Ditambah addHobby **** \n')

let addHobby = ' Jalan-Jalan'
hasil.addHobby(addHobby);
console.log(hasil.getData());

console.log('\n**** Dihapus dengan removeHobby **** \n')

// let removeHobby = ' main'
hasil.removeHobby(' main')
// hasil.removeHobby(removeHobby)
console.log(hasil.getData());

