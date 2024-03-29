var characters = [];
var leftMargin = [];
var topMargin = [];
var leftMarginLimit = [];
var topMarginLimit = [];
var touchesRight = false;
var touchesLeft = false;
var touchesTop = false;
var touchesBottom = false;

function setcommandAnimationParams(char, lMargin, tMargin, lMarginLimit,
		tMarginLimit) {
	characters = char;
	leftMargin = lMargin;
	topMargin = tMargin;
	leftMarginLimit = lMarginLimit;
	topMarginLimit = tMarginLimit;
}

function setx(index, posx) {
	var imgObj = characters[index];
	var id = '#' + imgObj.id;
	console.log("set x "+posx);

	if (posx >= 0 && posx <= leftMarginLimit[index]) {
		$(id).animate({
			marginLeft : posx + 'px'
		}, 'fast');
		leftMargin[index] = parseInt(posx);
		addCustomizedOperation('X', leftMargin[index]);
	} else {
		Popup.show("set x out of bound");
	}
}

function sety(index, posy) {
	var imgObj = characters[index];
	var id = '#' + imgObj.id;
	console.log("set y " + posy);

	if (posy >= 0 && posy <= topMarginLimit[index]) {
		$(id).animate({
			marginTop : posy + 'px'
		}, 'fast');
		topMargin[index] = parseInt(posy);
		addCustomizedOperation('Y', topMargin[index]);
	} else {
		Popup.show("set y out of bound");
	}
}

function moveRight(index, steps) {
	var imgObj = characters[index];
	var id = '#' + imgObj.id;
	var length = 10 * steps;
	var out = false;
	touchesLeft = false;
	if (leftMarginLimit[index] < leftMargin[index] + length) {
		out = true;
		console.log("come in");
		length = leftMarginLimit[index] - leftMargin[index];
		setTouchesEdge(true);
	} else {
		setTouchesEdge(touchesRight || touchesLeft || touchesTop || touchesBottom);
	}

	var distance = '+=' + length + 'px';
	console.log("move right "+length);
	$(id).animate({
		marginLeft : distance
	}, 'slow', function() {
		if (out) {
			Popup.show("right out of bound");
		}
	});
	leftMargin[index] += parseInt(length);
	addCustomizedOperation('X', leftMargin[index]);
}

function moveLeft(index, steps) {
	var imgObj = characters[index];
	var id = '#' + imgObj.id;
	var length = 10 * steps;
	var out = false;
	touchesRight = false;
	if (leftMargin[index] - length < 0) {
		out = true;
		length = leftMargin[index];
		setTouchesEdge(true);
	} else {
		setTouchesEdge(touchesRight || touchesLeft || touchesTop || touchesBottom);
	}

	var distance = '-=' + length + 'px';
	console.log("move left "+length);
	$(id).animate({
		marginLeft : distance
	}, 'slow', function() {
		if (out) {
			Popup.show("left out of bound");
		}
	});
	leftMargin[index] -= parseInt(length);
	addCustomizedOperation('X', leftMargin[index]);
}

function moveDown(index, steps) {
	var imgObj = characters[index];
	var id = '#' + imgObj.id;
	var length = 10 * steps;
	var out = false;
	touchesTop = false;
	if (topMarginLimit[index] < topMargin[index] + length) {
		out = true;
		length = topMarginLimit[index] - topMargin[index];
		setTouchesEdge(true);
	} else {
		setTouchesEdge(touchesRight || touchesLeft || touchesTop || touchesBottom);
	}

	var distance = '+=' + length + 'px';
	console.log("move down "+length);
	$(id).animate({
		marginTop : distance
	}, 'slow', function() {
		if (out) {
			Popup.show("down out of bound");
		}
	});
	topMargin[index] += parseInt(length);
	addCustomizedOperation('Y', topMargin[index]);
}

function moveUp(index, steps) {
	var imgObj = characters[index];
	var id = '#' + imgObj.id;
	var length = 10 * steps;
	var out = false;
	var touchesBottom = false;
	if (topMargin[index] - length < 0) {
		out = true;
		length = topMargin[index];
		setTouchesEdge(true);
	} else {
		setTouchesEdge(touchesRight || touchesLeft || touchesTop || touchesBottom);
	}

	var distance = '-=' + length + 'px';
	console.log("move up "+length);
	$(id).animate({
		marginTop : distance
	}, 'slow', function() {
		if (out) {
			Popup.show("up out of bound");
		}
	});
	topMargin[index] -= parseInt(length);
	addCustomizedOperation('Y', topMargin[index]);
}

function show(index) {
	var imgObj = characters[index];
	var id = '#' + imgObj.id;
	console.log("show");
	$(id).animate({
		height : '100px'
	}, 'fast');
}

function hide(index) {
	var imgObj = characters[index];
	var id = '#' + imgObj.id;
	console.log("hide");
	$(id).animate({
		height : '0px'
	}, 'fast');
}

function changeCostume(index) {
	console.log("change costume");
	var imgObj = characters[index];
	var id = '#' + imgObj.id;

	$(id).animate(
			{
				opacity : 1
			},
			'medium',
			function() {
				imgObj = characters[index];
				var curCharacter = imgObj.src;
				var indexOfDot = curCharacter.indexOf(".");
				var indexOfCharacter = parseInt(curCharacter.substring(
						indexOfDot - 1, indexOfDot));
				indexOfCharacter++;
				indexOfCharacter = indexOfCharacter % 7;
				if (indexOfCharacter == 0) {
					indexOfCharacter++;
				}
				var nextCharacter = "resources/img/char"
						+ indexOfCharacter.toString() + ".png";
				imgObj.setAttribute('src', nextCharacter);
			});
}

function changeBackground() {
	console.log("change background");
	var curFloat = document.getElementById("curFloat").src;
	var indexOfDot = curFloat.indexOf(".");
	var indexOfFloat = parseInt(curFloat.substring(indexOfDot - 1, indexOfDot));
	indexOfFloat++;
	indexOfFloat = indexOfFloat % 7;
	if (indexOfFloat == 0) {
		indexOfFloat++;
	}

	var nextFloat = "resources/img/house" + indexOfFloat.toString() + ".png";
	document.getElementById("curFloat").src = nextFloat;

	var newId = "house" + indexOfFloat + "_1.png";
	var path = "resources/img/" + newId;
	var image = document.createElement("img");
	image.setAttribute("src", path);
	var player = document.getElementById("divtest-player");

	$(player).animate({
		opacity : 1
	}, 'slow', function() {
		$(this).css({
			'background-image' : 'url(' + path + ')',
			'background-size' : '100% 100%'
		});
	});
}