// CLASS 3
//Exercise 3

var main = document.querySelector('#menu');
var links = main.querySelectorAll('li a');

links.forEach((item, index) => {
	item.addEventListener('click', changeViews);
});

function changeViews (event) {
	event.preventDefault();
	var view_url = this.getAttribute('href');
	getViews(view_url);
};

function getViews (url) {
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4 && ajax.status == 200) {
			var response = ajax.responseText;
		}
	};
	ajax.open('GET', url, true);
	ajax.addEventListener('load', printViews);
	ajax.addEventListener('error', printError);
	ajax.send();
};

function printViews (response) {
	console.log(response.currentTarget.responseText);
	var container = document.querySelector('#page');
	container.innerHTML = '';
	container.innerHTML = response.currentTarget.responseText;
};

function printError (error) {
	console.log(error);
};