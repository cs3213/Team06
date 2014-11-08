var VariableSet = {};
var customizedVariable = [];

function new_variable() {
	var variable = prompt("Please enter the name of new variable");
	while (!isNaN(parseFloat(variable)) && variable != null) 
		{
		variable = prompt("Please enter the name of new variable(should not be a number)");
		console.log(variable);
		}
	var div = document.getElementById('variable-list');
	if (variable != "" && variable != null && !(variable in VariableSet)) {
		VariableSet[variable] = true;
		customizedVariable[variable] = 0;
		var element1 = document.createElement("li");
		element1.className = "command_repeat";
		element1.innerHTML = variable;
		div.appendChild(element1);

		var select1 = document.getElementById("selectSet");
		select1.options.add(new Option(variable, variable));
		var select2 = document.getElementById("selectChange");
		select2.options.add(new Option(variable, variable));
		for (var i = 1; i <= 6; i ++) {
			select1 = document.getElementById("mselect" + i);
			select1.options.add(new Option(variable, variable));
		}
		for (var i = 1; i <= 16; i ++) {
			select1 = document.getElementById("select" + i);
			select1.options.add(new Option(variable, variable));
		}
	}
}

function getCustomizedVariables() {
	return customizedVariable;
}

function addCustomizedOperation(operation, value) {
	customizedVariable[operation] = value;
}
