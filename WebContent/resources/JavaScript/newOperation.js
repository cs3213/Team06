///**
// * 
// */
//
//$("#add-ops").click(function(){
//	var selectBox1 = document.getElementById('select1');
//	var chosenValue1 = selectBox1.options[selectBox1.selectedIndex].value;
//	var selectBox2 = document.getElementById('select2');
//	var chosenValue2 = selectBox2.options[selectBox2.selectedIndex].value;
//	
//	var createValue1;
//	var createValue2;
//	var variable_list = document.getElementById('variable-list');
//	
//	if(chosenValue1 == "X"){
//		createValue1 = "X";
//	}
//	else if(chosenValue1 =="Y"){
//		createValue1 = "Y";
//	}
//	else{
//		createValue1 = document.getElementById('input1').value;
//	}
//	
//	if(chosenValue2 == "X"){
//		createValue2 = "X";
//	}
//	else if(chosenValue2 =="Y"){
//		createValue2 = "Y";
//	}
//	else{
//		createValue2 = document.getElementById('input2').value;
//	}
//    var element = document.createElement("li");
//    element.innerHTML = createValue1 + "+" + createValue2; 
//    element.className = "command_right";
//    variable_list.appendChild(element);
//
//});

function addNewoption(option, num1, num2, op){
	alert("add");
	var id1 = 'select'+ num1;
	var id2 = 'select'+ num2;
	var input1 = 'input' +num1;
	var input2 = 'input' + num2;
	var selectBox1 = document.getElementById(id1);
	var chosenValue1 = selectBox1.options[selectBox1.selectedIndex].value;
	var selectBox2 = document.getElementById(id2);
	var chosenValue2 = selectBox2.options[selectBox2.selectedIndex].value;
	
	var createValue1;
	var createValue2;
	var variable_list = document.getElementById('variable-list');

	if (chosenValue1 == "customer")
		chosenValue1 = document.getElementById(input1).value;
    console.log(chosenValue2);
    
	if (chosenValue2 == "customer")
		chosenValue2 = document.getElementById(input2).value;

	console.log(chosenValue1);
	console.log(chosenValue2);
    var element = document.createElement("li");
    var content = chosenValue1 + " " + op + " " + chosenValue2;
    element.innerHTML = content;
    var select1;
    if (op == "=" || op=="<=" || op ==">=") {
    select1 = document.getElementById("IfCondition");
	select1.options.add(new Option(content, content));
    } else {
    	for (var i = 1; i <= 6; i ++) {
			select1 = document.getElementById("mselect" + i);
			select1.options.add(new Option(content, content));
    	}
    }
    element.className = "command_right";
    variable_list.appendChild(element);
}