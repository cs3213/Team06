var timer;

function play(sequence, value, charactersSrc) {
	var arrayLength = sequence.length;
	var characters = [];
	var leftMargin = [];
	var topMargin = [];
	var leftMarginLimit = [];
	var topMarginLimit = [];
	// put images in player
	var div = document.getElementById("divtest-player");
	div.innerHTML = '';

	for (var i = 0; i < arrayLength; i++) {
		eleSrc = charactersSrc[i];
		var newdiv = document.createElement("div");
		newdiv.style.cssText = "height: 100px; width: 100px; position:absolute";
		newdiv.id = "img_div" + (i + 1);

		var element = document.createElement("img");
		element.id = "image" + (i + 1);
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

	setKeyboardAnimationParams(characters, leftMargin, topMargin,
			leftMarginLimit, topMarginLimit);
	setcommandAnimationParams(characters, leftMargin, topMargin,
			leftMarginLimit, topMarginLimit);
	setRepeatTimer(timer);
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
			} else if ((thisSequence[j].indexOf("Repeat") > -1 || thisSequence[j]
					.indexOf("Forever Loop") > -1)
					&& thisSequence[j].indexOf("End_Repeat") == -1) {
				var command = thisSequence[j];
				var repeatSequence = [];
				var repeatValue = [];
				var repeatTimes = thisValue[j];
				// get repeat sequence
				for (j = j + 1; j < sequenceLength; j++) {
					if (thisSequence[j].indexOf("End_Repeat") > -1) {
						break;
					}
					repeatSequence.push(thisSequence[j]);
					repeatValue.push(thisValue[j]);
				}

				// run repeat sequence
				if (command.indexOf("Repeat") > -1) {
					for (var k = 0; k < repeatTimes; k++) {
						repeat(i, repeatSequence, repeatValue);
					}
				} else {
					clearTimeout(timer);
					timer = setInterval(function() {
						repeat(i, repeatSequence, repeatValue);
					}, 1000);
					return;
				}
			}
		}
	}
}

function submit() {
	clearTimeout(timer);
	var inputSequence = [];
	var inputValue = [];
	var charactersSrc = [];
	var countElement = getCountElement();

	console.log("count element " + countElement);

	for (var i = 0; i < countElement; i++) {
		inputSequence[i] = [];
		inputValue[i] = [];
		var sortable = "#sortable" + (i + 1).toString() + " li";
		var div = "#div" + (i + 1).toString();

		if ($(sortable) && $(div)) {
			$(sortable).each(function() {
				var command = $(this).text();
				inputSequence[i].push(command);
				var input = $(this).find('input').val();
				if (input) {
					inputValue[i].push(input);
				} else {
					inputValue[i].push(0);
				}
			});

			charactersSrc.push($(div).children('img').map(function() {
				return $(this).attr('src')
			}).get());
		}
	}

	play(inputSequence, inputValue, charactersSrc);
}