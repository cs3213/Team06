var countElement = 0;
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

function play(sequence,value,charactersSrc) {
	var arrayLength = sequence.length;
	var characters=[];
	var leftMargin=[];
	var topMargin=[];
	var leftMarginLimit = [];
	var topMarginLimit = [];
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
		
		leftMargin.push(parseInt($(element).css('margin-left')));
		topMargin.push(parseInt($(element).css('margin-top')));
		leftMarginLimit.push($(newdiv).parent().width() - $(element).width());
		topMarginLimit.push($(newdiv).parent().height() - $(element).height());
	}

	setKeyboardAnimationParams(characters, leftMargin, topMargin, leftMarginLimit, topMarginLimit);
	setcommandAnimationParams(characters, leftMargin, topMargin, leftMarginLimit, topMarginLimit, timer);
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

function submit(){
	clearTimeout(timer);
	var inputSequence = [];
	var inputValue = [];
	var charactersSrc = [];
	
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

	play(inputSequence,inputValue, charactersSrc);
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
	div.style.cssText = "height: 100px; width: 28%; float: left";
	div.id = "div" + countElement.toString();
	var element = document.createElement("img");
	element.id = "element" + countElement.toString();
	element.setAttribute('src', eleSrc);
	element.setAttribute('height', '80px');
	element.setAttribute('width','100px');
	element.setAttribute('draggable', 'false');
	div.appendChild(element);
	//add it to the drop element
	var parent = theEvent.target;
    while (parent && parent.id !== 'divtest') {
        parent = parent.parentElement;
    }
	parent.appendChild(div);

	//instruct the browser to allow the drop
	theEvent.preventDefault();
	$(div).append('<span class="removeImgButton">X</span>');
	
    $(div).delegate(".removeImgButton", "click", function() {
        $(this).parent().remove();

        var index = element.id.substring(7);
        $('#sortable'+index).remove();
    });
}

function dropOver() {
	var element = document.createElement("div");
	element.id = "sortable" + countElement.toString();
	element.class ="scene";
	element.style.cssText = "height: 100px; width: 72%; float: left; border: dotted; overflow: scroll; ";

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

function new_variable(){
	var variable = prompt("Please enter the name of new variable");
	var div = document.getElementById("variable");
	if (variable != null) {
		
			var newdiv = document.createElement("ul");
			newdiv.id = "draggable";
			newdiv.className = "two-col-special";
			var element1 = document.createElement("li");
			element1.className = "command_repeat";
			element1.innerHTML = variable;
			newdiv.appendChild(element1);
			div.appendChild(newdiv);

			var select1 = document.getElementById("selectSet");
			select1.options.add(new Option(variable, variable));
			var select2 = document.getElementById("selectChange");
			select2.options.add(new Option(variable, variable));
	}
}
	
	