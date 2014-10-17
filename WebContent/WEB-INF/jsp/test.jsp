
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>   

<head>
<meta charset='UTF-8'><meta name="robots" content="noindex">
<%-- <link href="<c:url value="/resources/CSS/overlay.css" />" rel="stylesheet"> --%>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="https://apis.google.com/js/client:platform.js" async defer></script>
<script src="https://www.dropbox.com/static/api/dropbox-datastores-1.0-latest.js"></script>

</head>
<body>
     <form:form method="post"> 
    <button id="play">play</button>
    <input type="hidden" name="inputSequence" id ="inputSequence" />
	<input type="hidden" name="inputValue" id="inputValue" />
  	</form:form>
<button id="clickme">click me</button>
<script>

$('#play').click(function () {
    document.getElementById("inputSequence").value = "asf";
	document.getElementById("inputValue").value = "sdfsd";
});

$('#clickme').click(function () {
	console.log("clicked button");
	
	$.getJSON("http://localhost:8080/CS3213_assignment3/getFile",function(result) {
		//console.log("in get json");
		   $.each(result,function(key, val){
			   console.log(val);
		   });	
		});
	
	 alert("here");
});
</script>
</body>
</html>