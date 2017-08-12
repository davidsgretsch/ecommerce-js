//CLASS 2
//Exercise 2

var user_name = document.querySelector('input[name="nombre"]');
user_name.addEventListener('blur', nameValidation);

function nameValidation (event) {
	clearClass(user_name);
	if (user_name.value.length > 4 && isNaN(user_name.value.charAt(0))) {
		user_name.classList.add('ok');
		return true;
	} else {
		user_name.classList.add('error');
		return false;
	}
};

// Exercise 3

var user_email = document.querySelector('input[name="email"]');
user_email.addEventListener('blur', emailValidation);

function emailValidation (event) {
	clearClass(user_email);
	if (user_email.value.indexOf('@') != -1 && user_email.value.indexOf('.') != -1) {
		user_email.classList.add('ok');
		return true;
	} else {
		user_email.classList.add('error');
		return false;
	}
};

// Exercise 4

var user_msg = document.querySelector('textarea[name="mensaje"]');
user_msg.addEventListener('blur', msgValidation);

function msgValidation (event) {
	clearClass(user_msg);
	if (user_msg.value && user_msg.value.length < 200) {
		user_msg.classList.add('ok');
		return true;
	} else {
		user_msg.classList.add('error');
		return false;
	}
};

function clearClass (elem) {
	elem.classList.remove('ok', 'error');
};

// Exercise 5

var form = document.querySelector('.contact-form form');
form.addEventListener('submit', formSubmit);

function formSubmit (event) {
	event.preventDefault();

	if (!nameValidation()) {
		alert('Error! Nombre incompleto o invalido');
	} else if (!emailValidation()) {
		alert('Error! Email incompleto o invalido');		
	} else if (!msgValidation()) {
		alert('Error! Mensaje incompleto o invalido');				
	} else {

		var queryString;

		for (var i = 0; i < event.target.length; i++) {
			if (event.target[i].type != 'submit') {
				queryString += event.target[i].name + '=' + event.target[i].value + '&';
			}
		}

		var send_ajax = new XMLHttpRequest();
			send_ajax.open(method, URL, true);
		send_ajax.setRequestHeader("Content-type", "application/json");
		send_ajax.send(data);
		// event.target.submit();
		console.log(queryString);
	}
};