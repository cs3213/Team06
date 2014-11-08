var characters = [];
var leftMargin = [];
var topMargin = [];
var leftMarginLimit = [];
var topMarginLimit = [];

document.onkeydown = checkKey;

function setKeyboardAnimationParams(char, lMargin, tMargin, lMarginLimit,
		tMarginLimit) {
	characters = char;
	leftMargin = lMargin;
	topMargin = tMargin;
	leftMarginLimit = lMarginLimit;
	topMarginLimit = tMarginLimit;
}

function checkKey(e) {
	if (characters[0]) {
		switch (e.keyCode) {
		case 37:
			keyboardLeft(0, 1);// left
			break;
		case 38:
			keyboardUp(0, 1);// up
			break;
		case 39:
			keyboardRight(0, 1);// right
			break;
		case 40:
			keyboardDown(0, 1);// down
			break;
		}
	}
}

function keyboardRight(index, steps) {
	var imgObj = characters[index];
	var id = '#' + imgObj.id;
	var length = 10 * steps;
	var out = false;
	if (leftMarginLimit[index] < leftMargin[index] + length) {
		out = true;
		length = leftMarginLimit[index] - leftMargin[index];
	}

	var distance = '+=' + length + 'px';
	console.log("keyboard right");
	$(id).animate({
		marginLeft : distance
	}, 'fast', function() {
		if (out) {
			Popup.show("keyboard right out of bound");
		}
	});
	leftMargin[index] += length;
}

function keyboardLeft(index, steps) {
	var imgObj = characters[index];
	var id = '#' + imgObj.id;
	var length = 10 * steps;
	var out = false;
	if (leftMargin[index] - length < 0) {
		out = true;
		length = leftMargin[index];
	}

	var distance = '-=' + length + 'px';
	console.log("keyboard left");
	$(id).animate({
		marginLeft : distance
	}, 'fast', function() {
		if (out) {
			Popup.show("keyboard left out of bound");
		}
	});
	leftMargin[index] -= length;
}

function keyboardDown(index, steps) {
	var imgObj = characters[index];
	var id = '#' + imgObj.id;
	var length = 10 * steps;
	var out = false;
	if (topMarginLimit[index] < topMargin[index] + length) {
		out = true;
		length = topMarginLimit[index] - topMargin[index];
	}

	var distance = '+=' + length + 'px';
	console.log("keyboard down");
	$(id).animate({
		marginTop : distance
	}, 'fast', function() {
		if (out) {
			Popup.show("keyboard down out of bound");
		}
	});
	topMargin[index] += length;
}

function keyboardUp(index, steps) {
	var imgObj = characters[index];
	var id = '#' + imgObj.id;
	var length = 10 * steps;
	var out = false;
	if (topMargin[index] - length < 0) {
		out = true;
		length = topMargin[index];
	}

	var distance = '-=' + length + 'px';
	console.log("keyboard up");
	$(id).animate({
		marginTop : distance
	}, 'fast', function() {
		if (out) {
			Popup.show("keyboard up out of bound");
		}
	});
	topMargin[index] -= length;
}