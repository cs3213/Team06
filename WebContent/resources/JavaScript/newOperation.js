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

function addNewoption(option,num1,num2){
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
	
	if(chosenValue1 == "X"){
		createValue1 = "X";
	}
	else if(chosenValue1 =="Y"){
		createValue1 = "Y";
	}
	else{
		createValue1 = document.getElementById(input1).value;
	}
	
	if(chosenValue2 == "X"){
		createValue2 = "X";
	}
	else if(chosenValue2 =="Y"){
		createValue2 = "Y";
	}
	else{
		createValue2 = document.getElementById(input).value;
	}
    var element = document.createElement("li");
    element.innerHTML = createValue1 + "+" + createValue2; 
    element.className = "command_right";
    variable_list.appendChild(element);
}