var touchesEdge = false;

function checkForCondition(index, condition, customizedVariable) {
	var index = -1;
	var leftop;
	var rightop;
	var op;
	if (condition.indexOf(">")>-1) {
		op = ">";
		index = condition.indexOf(">");
	}
	else if (condition.indexOf("<")>-1) {
		op = "<";
		index = condition.indexOf("<");
	}
	else if (condition.indexOf("=")>-1) {
		op = "=";
		index = condition.indexOf("=");
	}
	if (index > -1) {
		leftop = condition.substring(0,index-1);
		rightop = condition.substring(index + 2,condition.length);
		leftop = leftop.trim();
		rightop = rightop.trim();
		console.log(leftop);
		console.log(rightop);
		console.log(op);
		
		var leftValue = parseInt(leftop);
		var rightValue = parseInt(rightop);
		if (isNaN(leftValue)) {
			leftValue = customizedVariable[leftop];
		}
		
		if (isNaN(rightValue)) {
			rightValue = customizedVariable[rightop];
		}
		console.log("left value");
		console.log(leftValue);
		console.log("right value");
		console.log(rightValue);
		
		if (op == "=" && leftValue == rightValue) return true;
		if (op == "<" && leftValue < rightValue) return true;
		if (op == ">" && leftValue > rightValue) return true;
		return false;
	} else if (condition == "Touch edge") {
		if (touchesEdge) {
			return true;
		} else {
			return false;
		}
	}
	return false;
}

function getValueFromExpression(expression, variable) {
	console.log(expression in variable);
	var leftop;
	var rightop;
	var index = -1;
	var op;
	
	if (expression in variable) {
		return variable[expression];
	} else if (expression.indexOf("+") > -1) {
		index = expression.indexOf("+");
		leftop = expression.substring(0, index).trim();
		rightop = expression.substring(index+1).trim();
		
		return parseInt(variable[leftop]) + parseInt(variable[rightop]);
	} else if (expression.indexOf("-") > -1) {
		index = expression.indexOf("-");
		leftop = expression.substring(0, index).trim();
		rightop = expression.substring(index+1).trim();
		
		return parseInt(variable[leftop]) - parseInt(variable[rightop]);
	} else if (expression.indexOf("*") > -1) {
		index = expression.indexOf("*");
		leftop = expression.substring(0, index).trim();
		rightop = expression.substring(index+1).trim();
		
		return parseInt(variable[leftop]) * parseInt(variable[rightop]);
	} else if (expression.indexOf("/") > -1) {
		index = expression.indexOf("/");
		leftop = expression.substring(0, index).trim();
		rightop = expression.substring(index+1).trim();
		
		return parseInt(variable[leftop]) / parseInt(variable[rightop]);
	} else if (expression.indexOf("%") > -1) {
		index = expression.indexOf("%");
		leftop = expression.substring(0, index).trim();
		rightop = expression.substring(index+1).trim();
		
		return parseInt(variable[leftop]) % parseInt(variable[rightop]);
	}
	
	return 0;
}

function setTouchesEdge(touches) {
	touchesEdge = touches;
}