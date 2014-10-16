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

function show(target){
	document.getElementById(target).style.display = 'block';
}

function hide(target){
	document.getElementById(target).style.display = 'none';
}


function setVisibility(id, visibility) {
	document.getElementById(id).style.display = visibility;
}

function moveDown(steps) {
	imgObj.style.top = parseInt(imgObj.style.top) + 10*steps + 'px';
}

function moveUp(steps) {
	imgObj.style.top = parseInt(imgObj.style.top) - 10*steps + 'px';
}

function setx(posx) {
	imObj.style.position.left=pos + 'px';
}

function sety(posy) {
	imObj.style.position.top=posy + 'px';
}

var imgObj = null;
function init(){
   imgObj = document.getElementById('myImage');
   imgObj.style.position= 'relative'; 
   imgObj.style.left = '0px'; 
}
function moveRight(steps){
	imgObj.style.left = parseInt(imgObj.style.left) + 10*steps + 'px';
}

function moveLeft(steps){
	imgObj.style.left = parseInt(imgObj.style.left) - 10*steps + 'px';
}
window.onload =init;

function play(sequence,value) {
	var arrayLength = sequence.length;
	for (var i = 0; i < arrayLength; i++) {
	    if (sequence[i].equals("set x")) setx(value[i]);
	    else if (sequence[i].equals("set y")) sety(value[i]);
	    else if (sequence[i].equals("moveright")) moveRight(value[i]);
	    else if (sequence[i].equals("moveleft")) moveLeft(value[i]);
	}
}

function submit(){
	var inputSequence = [];
	var inputValue = [];
	$('#sortable1 li').find('input').each(function(){
		inputValue.push($(this).val());
	})
	$('#sortable1 li').each(function(){
		inputSequence.push($(this).text());
	})
	console.log(inputSequence);
	console.log(inputValue);
	Play(inputSequence,inputValue)
}


var countElement = 0;
$(function() {
    $( "#draggable li" ).draggable({
         connectToSortable: "#sortable1",
         helper: "clone",
         revert: "invalid"
    });

    $( "#sortable" ).sortable({
        revert: true,
        receive: function(event, ui) {
        }
    });
});
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
	div.style.cssText = "height: 100px; width: 100px; float: left";
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
}
function changeFloatLeft() {
	var curFloat = document.getElementById("curFloat").src;
	var indexOfDot = curFloat.indexOf(".");
	var indexOfFloat = parseInt(curFloat.substring(indexOfDot - 1, indexOfDot));
	indexOfFloat--;
	if(indexOfFloat == 0) {
		indexOfFloat = 3;//= total number of float
	}
	indexOfFloat = indexOfFloat % 4;//= total number of float + 1
	var nextFloat = "float" + indexOfFloat.toString() + ".jpeg";
	document.getElementById("curFloat").src = nextFloat;	
}
function changeFloatRight() {
	var curFloat = document.getElementById("curFloat").src;
	var indexOfDot = curFloat.indexOf(".");
	var indexOfFloat = parseInt(curFloat.substring(indexOfDot - 1, indexOfDot));
	indexOfFloat++;
	indexOfFloat = indexOfFloat % 4;
	if(indexOfFloat == 0) {
		indexOfFloat++;
	}
	var nextFloat = "float" + indexOfFloat.toString() + ".jpeg";
	document.getElementById("curFloat").src = nextFloat;
}
function changeCharacterLeft() {
	var curCharacter = document.getElementById("curCharacter").src;
	var indexOfDot = curCharacter.indexOf(".");
	var indexOfCharacter = parseInt(curCharacter.substring(indexOfDot - 1, indexOfDot));
	indexOfCharacter--;
	if(indexOfCharacter == 0) {
		indexOfCharacter = 2;
	}
	indexOfCharacter = indexOfCharacter % 3;
	var nextCharacter = "char" + indexOfCharacter.toString() + ".jpeg";
	document.getElementById("curCharacter").src = nextCharacter;
}
function changeCharacterRight() {
	var curCharacter = document.getElementById("curCharacter").src;
	var indexOfDot = curCharacter.indexOf(".");
	var indexOfCharacter = parseInt(curCharacter.substring(indexOfDot - 1, indexOfDot));
	indexOfCharacter++;
	indexOfCharacter = indexOfCharacter % 3;
	if(indexOfCharacter == 0) {
		indexOfCharacter++;
	}
	var nextCharacter = "char" + indexOfCharacter.toString() + ".jpeg";
	document.getElementById("curCharacter").src = nextCharacter;
}
function dropOver() {
	var element = document.createElement("div");
	element.id = "sortable" + countElement.toString();
	element.style.cssText = "height: 110px; width: 170px; float: right; border: dotted";
	document.getElementById('divtest').appendChild(element);

	   $(element).sortable({
	        revert: true,
	    	stop: function(event, ui){
	            var text = ui.item.html();
	            if (text.indexOf("<span class=\"closeButton\">X</span>")==-1) ui.item.html(text+'<span class="closeButton">X</span>');
	         }
	    });
	    
	    $(element).delegate(".closeButton", "click", function() {
	        $(this).parent().remove();
	    });
}