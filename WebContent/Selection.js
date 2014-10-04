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
document.getElementById("clickMeId").style.display = 'none';
}

function hide(target){
document.getElementById(target).style.display = 'none';
document.getElementById("clickMeId").style.display = 'block';
}


function setVisibility(id, visibility) {
	document.getElementById(id).style.display = visibility;
}

function moveRight() {
	imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}

function moveLeft() {
	imgObj.style.right = parseInt(imgObj.style.right) + 10 + 'px';
}

function moveUp() {
	
}

function moveDown() {
	
}

function setPosition() {
	
}

var imgObj = null;
function init(){
   imgObj = document.getElementById('myImage');
   imgObj.style.position= 'relative'; 
   imgObj.style.left = '0px'; 
}
function moveRight(){
   imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}
window.onload =init;

function Select(target) {
    
}

function play() {
	
}