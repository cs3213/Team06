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