var timer;

function setRepeatTimer(t) {
	timer = t;
}

function repeat(index, sequence, value) {
	console.log("repeat");
	var arrayLength = sequence.length;
	console.log(sequence);
	console.log(value);
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