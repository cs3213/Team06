
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>   

<html class=''>
<head>
<meta charset='UTF-8'><meta name="robots" content="noindex">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
<link rel="stylesheet" href="http://code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.css">
<link href="<c:url value="/resources/CSS/overlay.css" />" rel="stylesheet">
<link href="<c:url value="/resources/CSS/content.css" />" rel="stylesheet">
<link href="<c:url value="/resources/CSS/scrollable.css" />" rel="stylesheet">
<link href="<c:url value="/resources/CSS/bootstrap-select.css" />" rel="stylesheet">
<link href="<c:url value="/resources/CSS/bootstrap-select.min.css" />" rel="stylesheet">

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="http://code.jquery.com/ui/1.8.18/jquery-ui.min.js"></script>
<script src="https://apis.google.com/js/client:platform.js" async defer></script>
<script src="https://www.dropbox.com/static/api/dropbox-datastores-1.0-latest.js"></script>
<script src="<c:url value="/resources/JavaScript/selection.js" />"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script src="<c:url value="/resources/JavaScript/bootstrap-select.js" />"></script>

</head>

<body>


<div class="transparent" id="">
<div class= "overlay-word" id = "header-words">
  <label id="Welcome-Word" style="display:none">Welcome,</label>
  <label id= "User-Name"></label> 
</div>

<div>
<a href id="Google-Login-Button" class="overlay-trigger" data-overlay="Google-Login" style="display:none">Google Login</a>
</div>

</div>



<div id="Google-Login" class="overlay" style="">
	<div class="overlay-inner">
	 
	 
	 <button class="g-signin"
          data-scope="https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/userinfo.profile"
          data-clientid="264511181674-td4u09us0emielom73ogag8usopl7e90.apps.googleusercontent.com"
          data-callback="onSignInCallback"
          data-theme="dark"
          data-cookiepolicy="single_host_origin"
           >
      </button>
      
	</div>
</div>

<div id="Main-Panel">

 <div class= transparent id="player">
 	<div id="divName" class="container"><h4> Player</h4></div>
 	<div id="control-panel" class = "container">
     <button type="button" class="btn btn-primary"> Start A New Program </button>
     <button type="button" class="btn btn-primary"> Save </button>
    </div>
 </div>
 

<div class= transparent id="storage">
 	<div id="divName" class = "container content-div"><h4> Old Project</h4></div>
 	
 	<div class="container">
 	
                <select class="selectpicker"  data-witdth ="50px">
                    <option>a</option>
                </select>

    </div>
    
 	<div id="control-panel" class = "container">
     <button type="button" id="loading-btn" data-loading-text="Loading..." class="btn btn-primary">
        Load 
     </button>
     <button type="button" id="deleting-btn" data-loading-text="Deleting..." class="btn btn-primary">
        Delete 
      </button>
    </div>
 	
</div>
 
 
 

 
<div class= transparent id="editor">
 	<div id="divName" class="container"> <h4> Editor</h4></div>
 	<div id="divtest" style="overflow: scroll; height: 300px; width: 350px; float: left; border: dotted" 
 		ondrop="dropIt(event); dropOver();" ondragover="event.preventDefault();">
 	</div>
 	<button type="button" class="btn btn-primary"> Play</button>
</div>
 
<div class= transparent id="coordEditor">
 	<div id="divName" class="container"><h4>Setting</h4></div>
 	<form>
    	<ul id="draggable">
    		<li id="right">Move Right <input type="text" name="right" size="2">steps</li>
    		<li id="left">Move Left <input type="text" name="left" size="2">steps</li>
    		<li id="x">Set X <input type="text" name="x_pos" size="2">  </li>
    		<li id="y">Set Y <input type="text" name="y_pos" size="2">  </li>   
    		<li id='repeat'>Repeat <input type="text" name="repeat" size="2"> </li>     
		</ul>
	</form>
</div>
 
 <div class= transparent id="source">
 	<div id="floatArea" ondragover="event.preventDefault();">
 		<h4>Float</h4>
 			<button onclick="changeFloatLeft()"><img src="<c:url value="/resources/img/arrow_left.gif" />" height="15px"></button>
 			<img id="curFloat"  src="<c:url value="/resources/img/float1.jpeg" />" height="100px" draggable="true" ondragstart="dragIt(event);"/>
 			<button onclick="changeFloatRight()"><img src="<c:url value="/resources/img/arrow_right.gif" />" height="15px"></button>
 	</div>
 	
 	<div id="floatArea" ondragover="event.preventDefault();">
 		<h4>Character</h4>
 		<button onclick="changeCharacterLeft()"><img src="<c:url value="/resources/img/arrow_left.gif" />" height="15px"></button>
 			<img id="curCharacter" src="<c:url value="/resources/img/char1.jpeg" />" height="100px" draggable="true" ondragstart="dragIt(event);"/>
 		<button onclick="changeCharacterRight()"><img src="<c:url value="/resources/img/arrow_right.gif" />" height="15px"></button>
 	</div>
</div>

</div>







<script src="<c:url value="/resources/JavaScript/controller.js" />"></script>
<script src="<c:url value="/resources/JavaScript/googleLogin.js" />"></script>
<script src="<c:url value="/resources/JavaScript/dropboxController.js" />"></script>

<script src="https://www.google.com/jsapi?key=AIzaSyBoyxG4q9onZh6oXyF1jPsnbuCxeqj8O_M"></script>



</body>
</html>