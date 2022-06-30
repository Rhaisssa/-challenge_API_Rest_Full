const form = document.getElementById('showAll');
const name = document.getElementById('input-name');
const cpf = document.getElementById('input-cpf');
const birthdate = document.getElementById('input-birthdate');
const email = document.getElementById('input-email');
const adress = document.getElementById('input-adress');
const password = document.getElementById('input-password');
const number = document.getElementById('input-number');
const complement = document.getElementById('input-complement');
const city = document.getElementById('input-city');
const state = document.getElementById('input-state');
const country = document.getElementById('input-country');
const zipcode = document.getElementById('input-zipcode');
//const buttonSubmit = document.getElementById('id-submit');

function checkInputs() {
	// trim to remove the white spaces
    const userNameValue = userName.value.trim();
    const cpfValue = cpf.value.trim();
    const birthdateValue = birthdate.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const adressValue = adress.value.trim();
    const numberValue = number.value.trim();
    const complementValue = complement.value.trim();
    const cityValue = city.value.trim();
    const stateValue = state.value.trim(); 
    const countryValue = country.value.trim();
    const zipcodeValue = state.value.trim();

	form.addEventListener('submit', e => {
		e.preventDefault();
		
		checkInputs();
	});
	

	if(userNameValue === '') {
		setErrorFor(username, 'Name cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
    if(cpfValue === '') {
		setErrorFor(cpf, 'CPF cannot be blank');
	} else {
		setSuccessFor(cpf);
	}

	if(birthdateValue === '') {
		setErrorFor(birthdate, 'Birthdate cannot be blank');
    } else {
		setSuccessFor(birthdate);
	}

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
    if(adressValue === '') {
		setErrorFor(adress, 'Birthdate cannot be blank');
    } else {
		setSuccessFor(adress);
	}

    if(numberValue === '') {
		setErrorFor(number, 'Number cannot be blank');
    } else {
		setSuccessFor(number);
	}

    if(complementValue === '') {
		setErrorFor(complement, 'Complement cannot be blank');
    } else {
		setSuccessFor(complement);
	}

    if(cityValue === '') {
		setErrorFor(city, 'City cannot be blank');
    } else {
		setSuccessFor(city);
	}

    if(stateValue === '') {
		setErrorFor(state, 'State cannot be blank');
    } else {
		setSuccessFor(state);
	}

    if(countryValue === '') {
		setErrorFor(country, 'Country cannot be blank');
    } else {
		setSuccessFor(country);
	}

    if(zipcodeValue === '') {
		setErrorFor(zipcode, 'Zipcode cannot be blank');
    } else {
		setSuccessFor(zipcode);
	}

}

function validationCPF(strCPF) {
    let Add;
    let Rest;
    Add = 0;
    if (strCPF == "00000000000") return false;

	for (i=1; i<=9; i++) Add = Add + parseInt(strCPF.substring(i-1, i)) * (11 - i);
	Rest = (Add * 10) % 11;

    if ((Rest == 10) || (Rest == 11))  Rest = 0;
    if (Rest != parseInt(strCPF.substring(9, 10)) ) return false;

	Add = 0;
    for (i = 1; i <= 10; i++) Add = Add + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Rest = (Add * 10) % 11;

    if ((Rest == 10) || (Rest == 11))  Rest = 0;
    if (Rest != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'The form-control has a error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'The form-control was a success';
}

function sendData(path, parameters, method='post') {

	const form = document.createElement('form');
	form.method = method;
	form.action = path;
	document.body.appendChild(form);

	for (const key in parameters) {
		const formField = document.createElement('input');
		formField.type = 'hidden';
		formField.name = key;
		formField.value = parameters[key];

		form.appendChild(formField);
	}
	form.submit();
}
//sendData('http://localhost:3000/api/v1/user'});

let sendData= document.querySelector("#submit")
submit.addEventListener("click", function(){
    fetch("http://localhost:3000/api/v1/users")
        .then((data) => data.json())
		.then(window.open("http://localhost:3000/api/v1/user"))
});

/*let submit = document.querySelector("#submit")
submit.addEventListener("click", function(){
    fetch("http://localhost:3000/api/v1/users")
        .then((data) => data.json())
		.then(window.open("http://localhost:3000/api/v1/user"))
});
*/




