var timer;

function play(sequence, value, select, charactersSrc) {
	var arrayLength = sequence.length;
	var characters = [];
	var leftMargin = [];
	var topMargin = [];
	var leftMarginLimit = [];
	var topMarginLimit = [];
	var customizedVariable = getCustomizedVariables();
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
		var thisSelect = select[i];
		var sequenceLength = thisSequence.length;
		for (var j = 0; j < sequenceLength; j++) {
			if (isNaN(thisValue[j])) {
				thisValue[j] = getValueFromExpression(thisSelect[j], customizedVariable);
				console.log("this value is "+thisValue[j]);
			}
			
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
					&& thisSequence[j].indexOf("End Repeat") == -1) {
				var command = thisSequence[j];
				var repeatSequence = [];
				var repeatValue = [];
				var repeatSelect = [];
				var repeatTimes = thisValue[j];
				// get repeat sequence
				for (j = j + 1; j < sequenceLength; j++) {
					if (thisSequence[j].indexOf("End Repeat") > -1) {
						break;
					}
					repeatSequence.push(thisSequence[j]);
					repeatValue.push(thisValue[j]);
					repeatSelect.push(thisSelect[j]);
				}

				// run repeat sequence
				if (command.indexOf("Repeat") > -1) {
					for (var k = 0; k < repeatTimes; k++) {
						repeat(i, repeatSequence, repeatValue, repeatSelect, customizedVariable);
					}
				} else {
					clearTimeout(timer);
					timer = setInterval(function() {
						repeat(i, repeatSequence, repeatValue, repeatSelect, customizedVariable);
					}, 1000);
					return;
				}
			} else if (thisSequence[j].indexOf("Set") > -1
					&& thisSequence[j].indexOf("to") > -1) {
				if (!(thisSelect[j].indexOf("--Select--") > -1)) {
					customizedVariable[thisSelect[j]] = thisValue[j];
				}
			} else if (thisSequence[j].indexOf("If") > -1
					&& thisSequence[j].indexOf("then") > -1) {
				var result = checkForCondition(i, thisSelect[j], customizedVariable);
				var ifSequence = [];
				var ifValue = [];
				var ifSelect = [];

				// get repeat sequence
				for (j = j + 1; j < sequenceLength; j++) {
					if (thisSequence[j].indexOf("End if") > -1) {
						break;
					}
					ifSequence.push(thisSequence[j]);
					ifValue.push(thisValue[j]);
					ifSelect.push(thisSelect[j]);
				}
				if (result) {
					repeat(i, ifSequence, ifValue, ifSelect, customizedVariable);
				}
			}
		}
	}
}

function charactersInput() {
	clearTimeout(timer);
	var inputSequence = [];
	var inputValue = [];
	var inputSelect = [];
	var charactersSrc = [];
	var countElement = getCountElement();

	console.log("count element " + countElement);

	for (var i = 0; i < countElement; i++) {
		inputSequence[i] = [];
		inputValue[i] = [];
		inputSelect[i] = [];
		var sortable = "#sortable" + (i + 1).toString() + " li";
		var div = "#div" + (i + 1).toString();

		if ($(sortable) && $(div)) {
			$(sortable).each(function() {
				var command = $(this).text();
				inputSequence[i].push(command);
				var input = $(this).find('input').val();
				var select = $(this).find('select').val();

				if (input) {
					inputValue[i].push(input);
				} else {
					inputValue[i].push(parseInt(select));
				}
				
				if (select) {
					inputSelect[i].push(select);
				} else {
					inputSelect[i].push("");
				}
			});

			charactersSrc.push($(div).children('img').map(function() {
				return $(this).attr('src');
			}).get());
		}
	}
	
	console.log(inputSequence);
	console.log(inputValue);
	console.log(inputSelect);
	play(inputSequence, inputValue, inputSelect, charactersSrc);
}

function musicInput() {
	var duration = 0;
	$('#sortable-background li').each(function() {
		var command = $(this).text();
		var index = command.substring(5, 6);
		var time = parseInt($(this).find('input').val());
		setTimeout(function(){
			playTimeSound(index, time);
			console.log("play "+index+" duration ", time);
		},duration*1000);
		console.log("music "+index+" "+time);
		duration += time + 1;
		console.log(duration);
	});
}

function submit() {
	addCustomizedOperation('X', 0);
	addCustomizedOperation('Y', 0);
	charactersInput();
	musicInput();
}

function animationStopTimer() {
	clearTimeout(timer);
}
//function render(){
//	var encoder = new GIFEncoder();
//	 encoder.setRepeat(0); //auto-loop
//	  encoder.setDelay(500);
//	  console.log(encoder.start());
//	  encoder.addFrame(context);
//	  encoder.finish();
//	  document.getElementById('image').src = 'data:image/gif;base64,'+encode64(encoder.stream().getData());
//}
