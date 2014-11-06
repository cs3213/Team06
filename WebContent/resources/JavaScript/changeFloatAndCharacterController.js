function changeFloatLeft() {
	var curFloat = document.getElementById("curFloat").src;
	var indexOfDot = curFloat.indexOf(".");
	var indexOfFloat = parseInt(curFloat.substring(indexOfDot - 1, indexOfDot));
	indexOfFloat--;
	if(indexOfFloat == 0) {
		indexOfFloat = 6;//= total number of float
	}
	indexOfFloat = indexOfFloat % 7;//= total number of float + 1
	var nextFloat = "resources/img/house"+indexOfFloat.toString()+".png";
	document.getElementById("curFloat").src = nextFloat;	
}

function changeFloatRight() {
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
}

function changeCharacterLeft() {
	var curCharacter = document.getElementById("curCharacter").src;
	var indexOfDot = curCharacter.indexOf(".");
	var indexOfCharacter = parseInt(curCharacter.substring(indexOfDot - 1, indexOfDot));
	indexOfCharacter--;
	if(indexOfCharacter == 0) {
		indexOfCharacter = 6;
	}
	indexOfCharacter = indexOfCharacter % 7;
	var nextCharacter = "resources/img/char" + indexOfCharacter.toString() + ".png";
	document.getElementById("curCharacter").src = nextCharacter;
}

function changeCharacterRight() {
	var curCharacter = document.getElementById("curCharacter").src;
	var indexOfDot = curCharacter.indexOf(".");
	var indexOfCharacter = parseInt(curCharacter.substring(indexOfDot - 1, indexOfDot));
	indexOfCharacter++;
	indexOfCharacter = indexOfCharacter % 7;
	if(indexOfCharacter == 0) {
		indexOfCharacter++;
	}
	var nextCharacter = "resources/img/char" + indexOfCharacter.toString() + ".png";
	document.getElementById("curCharacter").src = nextCharacter;
}
