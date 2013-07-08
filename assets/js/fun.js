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
		Sizzle.matches('body')[0].className = 'menu-closed transitions';
		Fun.toggle = false;
	} else {
		Sizzle.matches('body')[0].className = 'menu-open transitions';
		Fun.toggle = true;
	}
}

Fun.menu = function() {
	console.log(Sizzle.matches('body')[0]);
	Sizzle.matches('body')[0].className = 'menu-open transitions';
	Sizzle.matches('.close')[0].onclick = Fun.toggleMenu;
	Sizzle.matches('.open')[0].onclick = Fun.toggleMenu;
}

// menu highlighting
Fun.sections = [];
Fun.heights = [];
Fun.current = null;
Fun.menuItems = [];

Fun.resetmenu = function() {
	for(item in Fun.menuItems) {
		Fun.menuItems[item].className = Fun.menuItems[item].className.replace(/ active/g, "");
	}
}

Fun.menuActive = function(heightIndex) {

	if(heightIndex<0) heightIndex = 0;

	if(heightIndex==Fun.current) return null;

	Fun.resetmenu();

	var navItem = Sizzle.matches('.left ul li.' + Fun.sections[heightIndex].getElementsByTagName('h2')[0].id)[0];
	navItem.className += ' active';

	Fun.current = heightIndex;
}

Fun.scrolling = function() {

	Fun.sections = Sizzle.matches('.right section');
	Fun.heights = [];
	Fun.current = Fun.sections[0];
	Fun.menuItems = Sizzle.matches('.left ul li');

	for(section in Fun.sections) {
		Fun.heights.push(Fun.sections[section].offsetTop);
	}

	document.onscroll = function() {
		var val = document.body.scrollTop;

		for(height in Fun.heights) {
			if(val<Fun.heights[height]) {
				Fun.menuActive(height-1);
				break;
			}
		}
	}
}

// Set up
window.onload = function() {
	Fun.skills();
	Fun.headlines();
	Fun.menu();
	Fun.scrolling();
	console.log('Want to see my code? Check out http://github.com/isnotahippy');
}

// just for fun
console.image('http://graememaciver.com/assets/img/cat.gif');