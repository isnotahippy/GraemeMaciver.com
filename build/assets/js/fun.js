var Fun = {};

// Skills animation
Fun.skills = function() {
	var skills = Sizzle.matches('.skill');

	for(skill in skills) {
		var level = skills[skill].getAttribute('data-level');
		skills[skill].style.width = level + '%';
	}
}

// Headline links
Fun.headlines = function() {
	var headlines = Sizzle.matches('h2,h3');

	for(headline in headlines) {
		var link = document.createElement("a");
		link.setAttribute('class','icon-share');
		link.setAttribute('href', '#' + headlines[headline].id);
		headlines[headline].appendChild(link);
	}
}

// Menu open and closing
Fun.toggle = true;

Fun.toggleMenu = function() {
	if(Fun.toggle) {
		Sizzle.matches('body')[0].setAttribute('class','menu-closed');
		Fun.toggle = false;
	} else {
		Sizzle.matches('body')[0].setAttribute('class','menu-open');
		Fun.toggle = true;
	}
}

Fun.menu = function() {
	Sizzle.matches('body')[0].setAttribute('class','menu-open');

	Sizzle.matches('.close')[0].onclick = Fun.toggleMenu;
	Sizzle.matches('.open')[0].onclick = Fun.toggleMenu;
}

// Set up
window.onload = function() {
	Fun.skills();
	Fun.headlines();
	Fun.menu();
	console.log('Want to see my code? Check out http://github.com/isnotahippy');
}

// just for fun
console.image('assets/img/cat.gif');