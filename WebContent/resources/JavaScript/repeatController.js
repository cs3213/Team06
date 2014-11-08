var timer;

function setRepeatTimer(t) {
	timer = t;
}

function repeat(index, sequence, value, select, customizedVariable) {
	console.log("repeat");
	var arrayLength = sequence.length;

	// execute command
	for (var i = 0; i < arrayLength; i++) {
		if (isNaN(value[i])) {
			value[i] = customizedVariable[select[i]];
		}
		
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
				&& sequence[i].indexOf("End Repeat") == -1) {

			var command = sequence[i];
			var repeatSequence = [];
			var repeatValue = [];
			var repeatSelect = [];
			var repeatTimes = value[i];
			
			// get repeat sequence
			for (i = i + 1; i < arrayLength; i++) {
				if (sequence[i].indexOf("End Repeat") > -1) {
					break;
				}
				repeatSequence.push(sequence[i]);
				repeatValue.push(value[i]);
				repeatSelect.push(select[i]);
			}

			// run repeat sequence
			if (command.indexOf("Repeat") > -1) {
				for (var k = 0; k < repeatTimes; k++) {
					repeat(index, repeatSequence, repeatValue, repeatSelect, customizedVariable);
				}
			} else {
				clearTimeout(timer);
				timer = setInterval(function() {
					repeat(index, repeatSequence, repeatValue, repeatSelect, customizedVariable);
				}, 1000);
				return;
			}
		} else if (sequence[i].indexOf("Set") > -1
				&& sequence[i].indexOf("to") > -1) {
			console.log("come in set to ");
			if (!(select[i].indexOf("--Select--") > -1)) {
				customizedVariable[select[i]] = value[i];
			}
		} else if (sequence[i].indexOf("If") > -1
				&& sequence[i].indexOf("then") > -1) {
			var result = checkForCondition(select[i], customizedVariable);
			if (result) {
				var ifSequence = [];
				var ifValue = [];
				var ifSelect = [];

				// get repeat sequence
				for (i = i + 1; i < arrayLength; i++) {
					if (sequence[i].indexOf("End if") > -1) {
						break;
					}
					ifSequence.push(sequence[i]);
					ifValue.push(value[i]);
					ifSelect.push(select[i]);
				}
				
				repeat(index, ifSequence, ifValue, ifSelect, customizedVariable);
			}
		}
	}
}