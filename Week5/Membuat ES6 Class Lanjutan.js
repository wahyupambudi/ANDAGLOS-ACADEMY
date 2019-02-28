class Student{
	constructor(Name, Age, DateofBirth, Gender, Student_ID, Hobies){
		this.Name = Name;
		this.Age = Age;
		this.DateofBirth = DateofBirth;
		this.Gender = Gender;
		this.Student_ID = Student_ID;
		this.Hobies = Hobies;
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
		return this.Hobies.push(newaddHobby);
	}
	removeHobby(newremoveHobby){
		return this.Hobies.pop(newremoveHobby);
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

let newdata = new Student();

let Name = 'Wahyu Pambudi';
let Age  = 18;
let DateofBirth = '09-November-2000';
let Gender = 'Male';
let Student_ID = 'admin123';
let Hobies = ['Futsal', ' Study', ' Halan-Halan'];
let addHobby = 'ad'

// let newdata = new Student(Name,Age,DateofBirth,Gender,Student_ID,Hobies);

newdata.setName(Name);
newdata.setAge(Age);
newdata.setDateofBirth(DateofBirth);
newdata.setGender(Gender);
newdata.setStudent_ID(Student_ID);
newdata.setHobies(Hobies);


console.log(newdata.getData());