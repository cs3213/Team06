var characters=[];
var leftMargin=[];
var topMargin=[];
var leftMarginLimit = [];
var topMarginLimit = [];

function setcommandAnimationParams(char, lMargin, tMargin, lMarginLimit, tMarginLimit) {
	characters = char;
	leftMargin = lMargin;
	topMargin = tMargin;
	leftMarginLimit = lMarginLimit;
	topMarginLimit = tMarginLimit;
}

function setx(index, posx) {
	imgObj = characters[index];
	var id = '#'+imgObj.id;
	console.log("set x");
	
	if (posx >= 0 && posx <= leftMarginLimit[index]) {
		$(id).animate({
			marginLeft: posx + 'px'
		}, 'fast');
		leftMargin[index] = posx;
	} else {
		Popup.show("set x out of bound");
	}
}

function sety(index, posy) {
	imgObj = characters[index];
	var id = '#'+imgObj.id;
	console.log("set y");

	if (posy >= 0 && posy <= topMarginLimit[index]) {
		$(id).animate({
			marginTop: posy + 'px'
		}, 'fast');
		topMargin[index] = posy;
	} else {
		Popup.show("set y out of bound");
	}
}

function moveRight(index, steps){
	imgObj = characters[index];
	var id = '#'+imgObj.id;
	var length = 10 * steps;
	var out = false;
	if (leftMarginLimit[index] < leftMargin[index] + length) {
		out = true;
		length = leftMarginLimit[index] - leftMargin[index];
	}
	
	var distance = '+='+ length + 'px';
	console.log("move right");
	$(id).animate({marginLeft: distance},'slow', function() {
		if (out) {
			Popup.show("right out of bound");
		}
	});
	leftMargin[index] += length;
}

function moveLeft(index, steps){
	imgObj = characters[index];
	var id = '#'+imgObj.id;
	var length = 10 * steps;
	var out = false;
	if (leftMargin[index]-length < 0) {
		out = true;
		length = leftMargin[index];
	}
	
	var distance = '-='+ length + 'px';
	console.log("move left");
	$(id).animate({marginLeft: distance},'slow', function() {
		if (out) {
			Popup.show("left out of bound");
		}
	});
	leftMargin[index] -= length;
}

function moveDown(index, steps) {
	imgObj = characters[index];
	var id = '#'+imgObj.id;
	var length = 10 * steps;
	var out = false
	if (topMarginLimit[index] < topMargin[index] + length ) {
		out = true;
		length = topMarginLimit[index] - topMargin[index];
	}
	
	var distance = '+='+ length + 'px';
	console.log("move down");
	$(id).animate({marginTop: distance},'slow', function() {
		if (out) {
			Popup.show("down out of bound");
		}
	});
	topMargin[index] += length;
}

function moveUp(index, steps) {
	imgObj = characters[index];
	var id = '#'+imgObj.id;
	var length = 10 * steps;
	var out = false;
	if (topMargin[index] - length < 0) {
		out = true;
		length = topMargin[index];
	}
	
	var distance = '-='+ length + 'px';
	console.log("move up");
	$(id).animate({marginTop: distance},'slow', function(){
		if (out) {
			Popup.show("up out of bound");
		}
	});
	topMargin[index] -= length;
}

function show(index){
	imgObj = characters[index];
	var id = '#'+imgObj.id;
	console.log("show");
	$(id).animate({height: '100px'},'fast');
}

function hide(index){
	imgObj = characters[index];
	var id = '#'+imgObj.id;
	console.log("hide");
	$(id).animate({height: '0px'},'fast');
}

function changeCostume(index) {
	console.log("change costume");
	imgObj = characters[index];
	var id = '#'+imgObj.id;
	
	$(id).animate({opacity: 1}, 'medium', function() {
		imgObj = characters[index];
    	var curCharacter = imgObj.src;
    	var indexOfDot = curCharacter.indexOf(".");
    	var indexOfCharacter = parseInt(curCharacter.substring(indexOfDot - 1, indexOfDot));
    	indexOfCharacter++;
    	indexOfCharacter = indexOfCharacter % 7;
    	if(indexOfCharacter == 0) {
    		indexOfCharacter++;
    	}
    	var nextCharacter = "resources/img/char" + indexOfCharacter.toString() + ".png";
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
	if(indexOfFloat == 0) {
		indexOfFloat++;
	}
	
	var nextFloat = "resources/img/house"+indexOfFloat.toString()+".png";
	document.getElementById("curFloat").src = nextFloat;
	
	var newId = "house" + indexOfFloat + "_1.png";
	var path = "resources/img/" + newId;
	var image = document.createElement("img");
	image.setAttribute("src", path);
	var player = document.getElementById("divtest-player");
	
	$(player).animate({opacity: 1}, 'slow', function() {
        $(this).css({'background-image': 'url('+path+')','background-size': '100% 100%'})
    });
}