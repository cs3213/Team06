//If it is not IE, we assume that the browser is NS.
var IE = document.all ? true : false;

// If NS -- that is, !IE -- then set up for mouse capture
if (!IE)
	document.captureEvents(Event.MOUSEMOVE);

// Set-up to use getMouseXY function onMouseMove
document.getElementById("divtest-player").onmousemove = displayCoord;
console.log(document.getElementById("divtest-player"));

// Temporary variables to hold mouse x-y pos.s
var tempX = 0;
var tempY = 0;

// Main function to retrieve mouse x-y pos.s
function displayCoord(e) {
	if (IE) { // grab the x-y pos.s if browser is IE
		tempX = event.clientX + document.body.scrollLeft - 41;
		tempY = event.clientY + document.body.scrollTop - 146;
	} else { // grab the x-y pos.s if browser is NS
		tempX = e.pageX - 44;
		tempY = e.pageY - 151;
	}
	// catch possible negative values in NS4
	if (tempX < 0)
		tempX = 0;
	if (tempY < 0)
		tempY = 0;
	// show the position values in the form named Show
	// in the text fields named MouseX and MouseY
	var coor = "X: " +tempX+" Y: "+tempY;
	//document.getElementById("CoordX").innerHTML = tempX;
	//document.getElementById("CoordY").innerHTML = tempY;
	document.getElementById("Coord").innerHTML = coor;
	//console.log(coor);
	return true;
}