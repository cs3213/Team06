var countElement = 0;

function dragIt(theEvent) {
	//tell the browser what to drag
	theEvent.dataTransfer.setData("Text", theEvent.target.id);
}

function dropIt(theEvent) {
	countElement++;
	//get a reference to the element being dragged
	var theData = theEvent.dataTransfer.getData("Text");
	//get the element
	var theDraggedElement = document.getElementById(theData);
	var eleSrc = theDraggedElement.getAttribute("src");
	var div = document.createElement("div");
	div.style.cssText = "height: 100px; width: 28%; float: left";
	div.id = "div" + countElement.toString();
	var element = document.createElement("img");
	element.id = "element" + countElement.toString();
	element.setAttribute('src', eleSrc);
	element.setAttribute('height', '80px');
	element.setAttribute('width','100px');
	element.setAttribute('draggable', 'false');
	div.appendChild(element);
	//add it to the drop element
	var parent = theEvent.target;
    while (parent && parent.id !== 'divtest') {
        parent = parent.parentElement;
    }
	parent.appendChild(div);

	//instruct the browser to allow the drop
	theEvent.preventDefault();
	$(div).append('<span class="removeImgButton">X</span>');
	
    $(div).delegate(".removeImgButton", "click", function() {
        $(this).parent().remove();

        var index = element.id.substring(7);
        $('#sortable'+index).remove();
    });
}

function dropOver() {
	var element = document.createElement("div");
	element.id = "sortable" + countElement.toString();
	element.class ="scene";
	element.style.cssText = "height: 100px; width: 72%; float: left; border: dotted; overflow: scroll; ";

	document.getElementById('divtest').appendChild(element);
	
	
	var editButton = document.createElement("input");
	editButton.type = "button";
	editButton.value = "Edit";
	editButton.id = "edit" + countElement.toString();
	editButton.setAttribute("class", "btn btn-primary onbtn");
	var i = 1;
	for(i = 1; i < countElement; i++) {
		var object = document.getElementById("edit"+i.toString());
		if (object){
			object.setAttribute("class", "btn onbtn");
		}
	}
	editButton.setAttribute("onclick", "changeConnect(this)");
	document.getElementById(element.id).appendChild(editButton);
	
	var sortNode = "#"+element.id;

    $( "#draggable li" ).draggable({
         connectToSortable: sortNode,
         helper: "clone",
         revert: "invalid",
    });
    
    $( sortNode ).sortable({
        revert: true,
        stop: function(event, ui){
	        var html = ui.item.html();

	        if (html.indexOf("span") == -1) {
		        ui.item.css("border-radius", "10px");
		        ui.item.css("margin", "3px 3px 3px 3px");
		        ui.item.css("padding", "3px 3px");
		        ui.item.css("font-size", "0.8em");
		        ui.item.css("color", "white");
		        ui.item.css("width", "200px");
		        ui.item.css("text-align", "center");
		        ui.item.css("list-style-type", "none");
		        
		        ui.item.append('<span class="closeButton">X</span>');

		        document.getElementById("demo").innerHTML = ui.item.context.id;
	        }
	    }
    });
    
    $(element).delegate(".closeButton", "click", function() {
        $(this).parent().remove();
    });
}

function changeConnect(el) {
	var thisID = $(el).attr('id');
	el.setAttribute("class", "btn btn-primary onbtn");
	var i = 1;

	var indexOfEdit = thisID.substring(4).toString(); 
	for(i = 1; i <= countElement; i++) {
		if(i != parseInt(indexOfEdit)) {
			var ID = "edit"+i.toString();
			var object = document.getElementById(ID);
			if (object) {
				object.setAttribute("class", "btn onbtn");
			}
		}
	}
	
	var sortNodeID = "#sortable"+indexOfEdit.toString();
	$( "#draggable li" ).draggable({
         connectToSortable: sortNodeID,
         helper: "clone",
         revert: "invalid"
    });

    $( sortNodeID ).sortable({
        revert: true,
        stop: function(event, ui){
	        var html = ui.item.html();
	        
	        if (html.indexOf("span") == -1) {
		        ui.item.css("border-radius", "10px");
		        ui.item.css("margin", "3px 3px 3px 3px");
		        ui.item.css("padding", "3px 3px");
		        ui.item.css("font-size", "0.8em");
		        ui.item.css("color", "white");
		        ui.item.css("width", "200px");
		        ui.item.css("text-align", "center");
		        ui.item.css("list-style-type", "none");
		        
		        ui.item.append('<span class="closeButton">X</span>');
		        
		        document.getElementById("demo").innerHTML = ui.item.context.id;
	        }
	    }
    });
    
    $(sortNodeID).delegate(".closeButton", "click", function() {
        $(this).parent().remove();
    });
}

function new_variable(){
	var variable = prompt("Please enter the name of new variable");
	var div = document.getElementById("variable");
	if (variable != null) {
		
			var newdiv = document.createElement("ul");
			newdiv.id = "draggable";
			newdiv.className = "two-col-special";
			var element1 = document.createElement("li");
			element1.className = "command_repeat";
			element1.innerHTML = variable;
			newdiv.appendChild(element1);
			div.appendChild(newdiv);

			var select1 = document.getElementById("selectSet");
			select1.options.add(new Option(variable, variable));
			var select2 = document.getElementById("selectChange");
			select2.options.add(new Option(variable, variable));
	}
}
	
function getCountElement() {
	return countElement;
}

function setCountElement(number) {
	countElement = number;
}