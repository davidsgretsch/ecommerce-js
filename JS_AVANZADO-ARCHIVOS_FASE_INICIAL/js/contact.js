//CLASS 2
//Exercise 2

var user_name = document.querySelector('input[name="nombre"]');
user_name.addEventListener('blur', nameValidation);

function nameValidation (event) {
	removeClass(this);
	if (this.value.length > 4 && isNaN(this.value.charAt(0))) {
		this.classList.add('ok');
		return true;
	} else {
		this.classList.add('error');
		return false;
	}
};

//Exercise 3

var user_email = document.querySelector('input[name="email"]');
user_email.addEventListener('blur', emailValidation);

function emailValidation (event) {
	removeClass(this);
	if (this.value.indexOf('@') != -1 && this.value.indexOf('.') != -1) {
		this.classList.add('ok');
		return true;
	} else {
		this.classList.add('error');
		return false;
	}
};

//Exercise 4
var user_msg = document.querySelector('textarea[name="mensaje"]');
user_msg.addEventListener('blur', msgValidation);

function msgValidation (event) {
	removeClass(this);
	if (this.value.length && this.value.length < 200) {
		this.classList.add('ok');
		return true;
	} else {
		this.classList.add('error');
		return false;
	}
};

function removeClass (element) {
	element.classList.remove('ok');
	element.classList.remove('error');
};
//Exercise 5
var form = document.querySelector('.contact-form form');
form.addEventListener('submit', checkValidations);

function checkValidations (event) {
	//data no send
	event.preventDefault();
	if (!nameValidation()) {
		alert('Error! Nombre incompleto o invalido');
	} else if (!emailValidation()) {
		alert('Error! Email incompleto o invalido');
	} else if (!msgValidation()) {
		alert('Error! Mensaje incompleto o invalido')
	} else {
		event.target.submit();
	}
};
