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

function selectCustomer(el) {
	var selectId = $(el).attr('id').substring(6);
	var value = el.options[el.selectedIndex].value;
	
	if(value == "customer") {
		var inputId = "input" + selectId;
		document.getElementById(inputId).style.display = "";
	} else {
		var inputId = "input" + selectId;
		document.getElementById(inputId).style.display = "none";
	}
}

function selectForMove(el) {
	alert(el);
	var selectId = $(el).attr('id').substring(7);
	var value = el.options[el.selectedIndex].value;
	
	if(value == "userInput") {
		var inputId = "userInput" + selectId;
		document.getElementById(inputId).style.display = "";
		//el.style.display="";
	} else {
		var inputId = "userInput" + selectId;
		document.getElementById(inputId).style.display = "none";
		//el.style.display="";
	var input = $(el).parent().find('input');
	var value = el.options[el.selectedIndex].value;
	
	if(value == "userInput") {
		input[0].style.display = "";
	} else {
		input[0].style.display = "none";
	}
}
}

function displayHouse(el) {
	var src = $(el).attr('src');
	var index = src.indexOf("house") + 5;//5=length of house
	var houseId = src.substring(index, index+1);
	
	var newId = "house" + houseId + "_1.png";
	var path = "resources/img/" + newId;

	var image = document.createElement("img");
	image.setAttribute("src", path);
	var player = document.getElementById("divtest-player");
	var newStyle = "background-image:url("+path+");" + "background-size: 100% 100%";
	
	player.setAttribute("style", newStyle);

}

function checkType(evt) {
	var input = parseInt(evt.value);
	
	if(isNaN(input)) {
		Popup.show("Value can only be integer.");
		evt.value = "";
	}
}