var countElement = 0;
var charactersSrc=[];
var characters=[];
var inputSequence = [];
var inputValue = [];
var timer;

//If it is not IE, we assume that the browser is NS.
/*var IE = document.all?true:false;

// If NS -- that is, !IE -- then set up for mouse capture
if (!IE) document.captureEvents(Event.MOUSEMOVE);

// Set-up to use getMouseXY function onMouseMove
document.onmousemove = displayCoord;

// Temporary variables to hold mouse x-y pos.s
var tempX = 0;
var tempY = 0;

// Main function to retrieve mouse x-y pos.s
function displayCoord(e) {
	if (IE) { // grab the x-y pos.s if browser is IE
	    tempX = event.clientX + document.body.scrollLeft;
	    tempY = event.clientY + document.body.scrollTop;
	  } else {  // grab the x-y pos.s if browser is NS
	    tempX = e.pageX;
	    tempY = e.pageY;
	  }  
	  // catch possible negative values in NS4
	  if (tempX < 0) tempX = 0;
	  if (tempY < 0) tempY = 0; 
	  // show the position values in the form named Show
	  // in the text fields named MouseX and MouseY
	console.log(tempX);
	console.log(tempY);
	return true;
}*/

function myFunction() {
    var x, text;
    // Get the value of input field with id="numb"
    x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}

function setx(index, posx) {
	imgObj = characters[index];
	var id = '#'+imgObj.id;
	console.log("set x");
	
	$(id).animate({
		marginLeft: posx + 'px'
	}, 'fast');
}

function sety(index, posy) {
	imgObj = characters[index];
	var id = '#'+imgObj.id;
	console.log("set y");

	$(id).animate({
		marginTop: posy+'px'
	}, 'fast');
}

function moveRight(index, steps){
	imgObj = characters[index];
	var id = '#'+imgObj.id;
	var distance = '+='+(10*steps) + 'px';
	console.log("move right");
	$(id).animate({marginLeft: distance},'slow');
}

function moveLeft(index, steps){
	imgObj = characters[index];
	var id = '#'+imgObj.id;
	var distance = '-='+(10*steps) + 'px';
	console.log("move left");
	$(id).animate({marginLeft: distance},'slow');
}

function moveDown(index, steps) {
	imgObj = characters[index];
	imgObj = characters[index];
	var id = '#'+imgObj.id;
	var distance = '+='+(10*steps) + 'px';
	console.log("move down");
	$(id).animate({marginTop: distance},'slow');
}

function moveUp(index, steps) {
	imgObj = characters[index];
	var id = '#'+imgObj.id;
	var distance = '-='+(10*steps) + 'px';
	console.log("move up");
	$(id).animate({marginTop: distance},'slow');
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

function play(sequence,value) {
	var arrayLength = sequence.length;
	characters = [];
	// put images in player
	var div = document.getElementById("divtest-player");
	div.innerHTML = '';
	
	for (var i=0; i<arrayLength; i++) {
		eleSrc = charactersSrc[i];
		var newdiv = document.createElement("div");
		newdiv.style.cssText = "height: 100px; width: 100px; position:absolute";
		newdiv.id = "img_div" + (i+1);
		
		var element = document.createElement("img");
		element.id = "image" + (i+1);
		element.setAttribute('src', eleSrc);
		element.setAttribute('height', '100px');
		newdiv.appendChild(element);
		div.appendChild(newdiv);
		characters.push(element);
	}
	
	// execute command
	for (var i = 0; i < arrayLength; i++) {
		var thisSequence = sequence[i];
		var thisValue = value[i];
		var sequenceLength = thisSequence.length;
		for (var j = 0; j < sequenceLength; j++) {
			if (thisSequence[j].indexOf("Set X") > -1) {
				setx(i, thisValue[j]);
			} else if (thisSequence[j].indexOf("Set Y") > -1) {
				sety(i, thisValue[j]);
			} else if (thisSequence[j].indexOf("Move Right") > -1) {
				moveRight(i, thisValue[j]);
			} else if (thisSequence[j].indexOf("Move Left") > -1) {
				moveLeft(i, thisValue[j]);
			} else if (thisSequence[j].indexOf("Move Up") > -1) {
				moveUp(i, thisValue[j]);
			} else if (thisSequence[j].indexOf("Move Down") > -1) {
				moveDown(i, thisValue[j]);
			} else if (thisSequence[j].indexOf("Show") > -1) {
				show(i);
			} else if (thisSequence[j].indexOf("Hide") > -1) {
				hide(i);
			} else if (thisSequence[j].indexOf("Costume") > -1) {
				changeCostume(i);
			} else if (thisSequence[j].indexOf("Background") > -1) {
				changeBackground(i);
			} else if ((thisSequence[j].indexOf("Repeat") > -1 
					|| thisSequence[j].indexOf("Forever Loop") > -1) 
					&& thisSequence[j].indexOf("End_Repeat") == -1) {
				var command = thisSequence[j];
				var repeatSequence = [];
				var repeatValue = [];
				var repeatTimes = thisValue[j];
				//get repeat sequence
				for (j=j+1; j< sequenceLength; j++) {
					if (thisSequence[j].indexOf("End_Repeat") > -1) {
						break;
					}
					repeatSequence.push(thisSequence[j]);
					repeatValue.push(thisValue[j]);
				}
				console.log("repeat");
				console.log(repeatSequence);
				console.log(repeatValue);
				
				//run repeat sequence
				if (command.indexOf("Repeat") > -1) {
					for (var k=0; k<repeatTimes; k++) {
						repeat(i, repeatSequence, repeatValue);
					}
				} else {
					clearTimeout(timer);
					timer = setInterval(
							function(){
								repeat(i, repeatSequence, repeatValue);
							}, 1000);
					return;
				}
			}
		}
	}
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

function repeat(index, sequence, value) {
	var arrayLength = sequence.length;
	
	// execute command
	for (var i = 0; i < arrayLength; i++) {
		if (sequence[i].indexOf("Set X") > -1) {
			setx(index, value[i]);
		} else if (sequence[i].indexOf("Set Y") > -1) {
			sety(index, value[i]);
		} else if (sequence[i].indexOf("Move Right") > -1) {
			moveRight(index, value[i]);
		} else if (sequence[i].indexOf("Move Left") > -1) {
			moveLeft(index, value[i]);
		} else if (sequence[i].indexOf("Move Up") > -1) {
			moveUp(index, value[i]);
		} else if (sequence[i].indexOf("Move Down") > -1) {
			moveDown(index, value[i]);
		} else if (sequence[i].indexOf("Show") > -1) {
			show(index);
		} else if (sequence[i].indexOf("Hide") > -1) {
			hide(index);
		} else if (sequence[i].indexOf("Costume") > -1) {
			changeCostume(index);
		} else if (sequence[i].indexOf("Background") > -1) {
			changeBackground();
		} else if ((sequence[i].indexOf("Repeat") > -1 
				|| sequence[i].indexOf("Forever Loop") > -1)
				&& sequence[i].indexOf("End_Repeat") == -1) {
			
			var command = sequence[i];
			var repeatSequence = [];
			var repeatValue = [];
			var repeatTimes = value[i];
			//get repeat sequence
			for (i=i+1; i< arrayLength; i++) {
				if (sequence[i].indexOf("End_Repeat") > -1) {
					break;
				}
				repeatSequence.push(sequence[i]);
				repeatValue.push(value[i]);
			}
			console.log("repeat");
			console.log(repeatSequence);
			console.log(repeatValue);
			
			//run repeat sequence
			if (command.indexOf("Repeat") > -1) {
				for (var k=0; k<repeatTimes; k++) {
					repeat(index, repeatSequence, repeatValue);
				}
			} else {
				clearTimeout(timer);
				timer = setInterval(
						function(){
							repeat(index, repeatSequence, repeatValue);
						}, 1000);
				return;
			}
		}
	}
}

function submit(){
	inputSequence = [];
	inputValue = [];
	charactersSrc = [];
	
	for (var i = 0; i<countElement; i++) {
		inputSequence[i]=[];
		inputValue[i]=[];
		var sortable = "#sortable"+(i+1).toString()+" li";
		var div = "#div"+(i+1).toString();

		if ($(sortable) && $(div)) {
			$(sortable).each(function(){
				var command = $(this).text();
				inputSequence[i].push(command);
				var input = $(this).find('input').val();
				if (input) {
					inputValue[i].push(input);
				} else {
					inputValue[i].push(0);
				}
			});
			
			charactersSrc.push(
				$(div).children('img').map(function(){
					return $(this).attr('src')
				}).get()
			);
		}
	}

	play(inputSequence,inputValue);
}

function dragIt(theEvent) {
	//tell the browser what to drag
	theEvent.dataTransfer.setData("Text", theEvent.target.id);
}

function dropIt(theEvent) {
	countElement++;
	//get a reference to the element being dragged
	var theData = theEvent.dataTransfer.getData("Text");
	//get the element
	var theDraggedElement = document.getElementById(theData);
	var eleSrc = theDraggedElement.getAttribute("src");
	var div = document.createElement("div");
	div.style.cssText = "height: 100px; width: 35%; float: left";
	div.id = "div" + countElement.toString();
	var element = document.createElement("img");
	element.id = "element" + countElement.toString();
	element.setAttribute('src', eleSrc);
	element.setAttribute('height', '100px');
	element.setAttribute('dragable', 'false');
	div.appendChild(element);
	//add it to the drop element
	theEvent.target.appendChild(div);
	//instruct the browser to allow the drop
	theEvent.preventDefault();
	$(div).append('<span class="removeImgButton">X</span>');
	
    $(div).delegate(".removeImgButton", "click", function() {
        $(this).parent().remove();

        var index = element.id.substring(7);
        $('#sortable'+index).remove();
    });
}

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

function dropOver() {
	var element = document.createElement("div");
	element.id = "sortable" + countElement.toString();
	element.class ="scene";
	element.style.cssText = "height: 110px; width: 60%; float: right; border: dotted; overflow: scroll; ";
	
	document.getElementById('divtest').appendChild(element);
	
	
	var editButton = document.createElement("input");
	editButton.type = "button";
	editButton.value = "Edit";
	editButton.id = "edit" + countElement.toString();
	editButton.setAttribute("class", "btn btn-primary onbtn");
	var i = 1;
	for(i = 1; i < countElement; i++) {
		var object = document.getElementById("edit"+i.toString());
		if (object){
			object.setAttribute("class", "btn onbtn");
		}
	}
	editButton.setAttribute("onclick", "changeConnect(this)");
	document.getElementById(element.id).appendChild(editButton);
	
	var sortNode = "#"+element.id;

    $( "#draggable li" ).draggable({
         connectToSortable: sortNode,
         helper: "clone",
         revert: "invalid",
    });
    
    $( sortNode ).sortable({
        revert: true,
        stop: function(event, ui){
	        var html = ui.item.html();

	        if (html.indexOf("span") == -1) {
		        ui.item.css("border-radius", "10px");
		        ui.item.css("margin", "3px 3px 3px 3px");
		        ui.item.css("padding", "3px 3px");
		        ui.item.css("font-size", "0.8em");
		        ui.item.css("color", "white");
		        ui.item.css("width", "200px");
		        ui.item.css("text-align", "center");
		        ui.item.css("list-style-type", "none");
		        
		        ui.item.append('<span class="closeButton">X</span>');

		        document.getElementById("demo").innerHTML = ui.item.context.id;
	        }
	    }
    });
    
    $(element).delegate(".closeButton", "click", function() {
        $(this).parent().remove();
    });
}

function changeConnect(el) {
	var thisID = $(el).attr('id');
	el.setAttribute("class", "btn btn-primary onbtn");
	var i = 1;

	var indexOfEdit = thisID.substring(4).toString(); 
	for(i = 1; i <= countElement; i++) {
		if(i != parseInt(indexOfEdit)) {
			var ID = "edit"+i.toString();
			var object = document.getElementById(ID);
			if (object) {
				object.setAttribute("class", "btn onbtn");
			}
		}
	}
	
	var sortNodeID = "#sortable"+indexOfEdit.toString();
	$( "#draggable li" ).draggable({
         connectToSortable: sortNodeID,
         helper: "clone",
         revert: "invalid"
    });

    $( sortNodeID ).sortable({
        revert: true,
        stop: function(event, ui){
	        var html = ui.item.html();
	        
	        if (html.indexOf("span") == -1) {
		        ui.item.css("border-radius", "10px");
		        ui.item.css("margin", "3px 3px 3px 3px");
		        ui.item.css("padding", "3px 3px");
		        ui.item.css("font-size", "0.8em");
		        ui.item.css("color", "white");
		        ui.item.css("width", "200px");
		        ui.item.css("text-align", "center");
		        ui.item.css("list-style-type", "none");
		        
		        ui.item.append('<span class="closeButton">X</span>');
		        
		        document.getElementById("demo").innerHTML = ui.item.context.id;
	        }
	    }
    });
    
    $(sortNodeID).delegate(".closeButton", "click", function() {
        $(this).parent().remove();
    });
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

function getCountElement() {
	return countElement;
}

function setCountElement(number) {
	countElement = number;
}