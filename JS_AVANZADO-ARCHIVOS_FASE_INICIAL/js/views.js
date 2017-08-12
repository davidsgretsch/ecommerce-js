// CLASS 3
//Exercise 3

var links = document.querySelectorAll('#menu a');
var container = document.querySelector('#page');
var ajax;

links.forEach((item, index) => {
	item.addEventListener('click', changeViews);
});

function changeViews (event) {
	event.preventDefault();
	var view_url = this.getAttribute('href');
	getViews(view_url);
};

function getViews (url) {
	container.innerHTML = '<span class="cargando"></span>';
	
	ajax = new XMLHttpRequest();
	ajax.open('GET', url, true);
	ajax.addEventListener('load', printViews);
	ajax.send();
};

function printViews (response) {
	if (ajax.status == 200) {
		container.innerHTML = ajax.responseText;
		createNodo();
	} else {
		var error_msg = '<span class="error">Contenido no disponible :(</span>';
		container.innerHTML = error_msg;
	}
};

// Exercise 4


function createNodo () {
	var new_script = document.createElement('script');
	var script = container.querySelector('script');
	new_script.src = script.getAttribute('src');
	script.remove();
	document.body.appendChild(new_script);
};