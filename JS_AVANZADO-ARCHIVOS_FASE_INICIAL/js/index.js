// CLASS 1
// Exercise 1

var featured_title = document.querySelector('#destacados .latest-product');
var latest_title = document.querySelector('#ultimos .latest-product');
featured_title.innerHTML = 'ARTICULOS DESTACADOS';
latest_title.innerHTML = 'ULTIMOS ARTICULOS';

// Exercise 2

var featured_container = document.querySelector('#destacados .products');
featured_container.classList.add('top');

// Exercise 3

var buttons = document.querySelectorAll('.verMas');
buttons.forEach((item) => {
	item.innerHTML = 'VER +';
	item.style.background = '#045fae';
});

// Exercise 4

var product = {
	code: 'P008',
	brand: 'Apple',
	name: 'Macbook Pro',
	price: 1800
};

var products = document.querySelectorAll('#destacados .producto');
products.forEach((item, index) => {
	var title = item.querySelector('h6');
	var price = item.querySelector('.precio');
	var img = item.querySelector('img');
	if (index == 0) {
		title.innerHTML = product.brand + ' - ' + product.name;
		price.innerHTML = '$' + product.price;
		img.src = 'images/productos/' + product.code + '.jpg';
	}
});

// Exercise 5

var products_list = [
	{code: 'P001', brand: 'Apple', name: 'Iphone 6', price: 500},
	{code: 'P002', brand: 'Apple', name: 'Ipad', price: 250},
	{code: 'P003', brand: 'Nexus', name: 'Nexus 6x', price: 400}
];

var product_container = document.querySelector('#ultimos .product-left');
product_container.innerHTML = '';

products_list.forEach((item, index) => {
	var div = document.createElement('div');
  	div.classList.add('col-sm-4', 'col-md-4', 'chain-grid', 'producto');
  	if ((index+1) % 3 == 0) div.classList.add('grid-top-chain');

  	div.innerHTML = ''
  					+ '<a href="producto.html">'
				  	+ '<img class="img-responsive chain" src="images/productos/' + item.code + '.jpg" alt=" " />'
				  	+ '</a>'
					+ '<span class="star"></span>'
					+ '<div class="grid-chain-bottom">'
					+ '<h6><a href="producto.html">' + item.brand + ' - ' + item.name + '</a></h6>'
					+ '<div class="star-price">'
					+ '<div class="dolar-grid">' 
					+ '<span class="precio actual">$' + item.price + '</span>'
					+ '</div>'
					+ '<a class="verMas now-get get-cart" href="producto.html">VER MÁS</a>' 
					+ '<div class="clearfix"></div>'
					+ '</div>'
					+ '</div>';
	
  	product_container.appendChild(div);
});