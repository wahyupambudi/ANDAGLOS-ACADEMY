var Student = {
	name : 'Wahyu Pambudi',
	age : 18,
	dateofbirth : '09 November 2000',
	gender : gender('Male'),
	student_id : 'Admin798',
	hobies : ['Run', ' Eat']
}

function gender (jenis) { //kondisi untuk selain male dan female
	switch (jenis) {
		case 'Male':
			return 'Male'
			break;
		case 'Female':
			return 'Female'
			break;
		default:
			return 'Only Input Male or Female'
			break;
	}
}

console.log('Name : ' + Student.name + '\nAge : ' + Student.age + '\nDate Of Birth : ' + Student.dateofbirth + '\nGender : '+ Student.gender + '\nStudent_ID : ' + Student.student_id + '\nHobies : ' + Student.hobies);


//add new hobies
console.log('\nAdd New Hobies \n')

var newhobby = ' Coding'
var addHobby = Student.hobies.push(newhobby);

console.log('Name : ' + Student.name + '\nAge : ' + Student.age + '\nDate Of Birth : ' + Student.dateofbirth + '\nGender : '+ Student.gender + '\nStudent_ID : ' + Student.student_id + '\nHobies : ' + Student.hobies);

//add removehobies
console.log('\nAdd Remove Hobies \n')

var newhobby = 'Run';
var removehobies = Student.hobies.splice(Student.hobies.indexOf(newhobby), 1)

console.log('Name : ' + Student.name + '\nAge : ' + Student.age + '\nDate Of Birth : ' + Student.dateofbirth + '\nGender : '+ Student.gender + '\nStudent_ID : ' + Student.student_id + '\nHobies : ' + Student.hobies);
