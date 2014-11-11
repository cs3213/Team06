var VariableSet = {};
var customizedVariable = [];

customizedVariable['X'] = 0;
customizedVariable['Y'] = 0;

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
		element1.className = "command_e";
		element1.innerHTML = variable;
		div.appendChild(element1);

		var select = document.getElementsByTagName('select');
	    for (var i = 0; i < select.length; i++) {
	    	if (select[i].id.indexOf("select") > -1) {
	    			select[i].options.add(new Option(variable,variable));
	    		}
	    	}
	/*	var select1 = document.getElementById("selectSet");
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
		} */
	}
}

function getCustomizedVariables() {
	return customizedVariable;
}

function addCustomizedOperation(operation, value) {
	customizedVariable[operation] = value;
}
