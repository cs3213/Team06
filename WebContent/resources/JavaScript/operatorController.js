
function checkForCondition(condition, customizedVariable) {
	var index = -1;
	var leftop;
	var rightop;
	var op;
	if (condition.indexOf(">=")>-1) {
		op = ">=";
		index = condition.indexOf(">=");
	}
	else if (condition.indexOf("<=")>-1) {
		op = "<=";
		index = condition.indexOf("<=");
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
		console.log(customizedVariable[leftop]);
		console.log(customizedVariable[rightop]);
		if (op == "=" && customizedVariable[leftop] == customizedVariable[rightop]) return true;
		if (op == "<=" && customizedVariable[leftop] <= customizedVariable[rightop]) return true;
		if (op == ">=" && customizedVariable[leftop] >= customizedVariable[rightop]) return true;
		return false;
	} else if (condition == "Touch edge") {
		return false;
	}
	return false;
}