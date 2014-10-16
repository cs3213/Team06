
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>   

<html class=''>
<head>
<meta charset='UTF-8'><meta name="robots" content="noindex">
<META HTTP-EQUIV='Pragma' CONTENT='no-cache'>
<META HTTP-EQUIV="Expires" CONTENT="-1">
<link href="<c:url value="/resources/CSS/overlay.css" />" rel="stylesheet">
<link href="<c:url value="/resources/CSS/style.css" />" rel="stylesheet">

<script src='//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js'></script>
<script src="https://apis.google.com/js/client:platform.js" async defer></script>
<script src="https://www.dropbox.com/static/api/dropbox-datastores-1.0-latest.js"></script>

</head>

<body>
<div id="header">
<label id="Welcome-Word" style="display:none">Welcome,</label>
<label id= "User-Name"></label> 
<a href id="Google-Login-Button" class="overlay-trigger" data-overlay="Google-Login" style="display:none">Google Login</a>
<!-- <a href id="Google-Logout-Button"  style="display:none" onclick="signOut();">Google Logout</a>
 -->
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





<!-- <a href class="overlay-trigger" data-overlay="Google-Login">Google Login</a>
<button id ="Google-Login-Info"  style="display:none"></button>
<button id ="Google-Logout-Button"  style="display:none" onclick="signOut();">Google Logout</button>

<p id="Google-Login-Info"></p>



</div> -->

<%-- <button id="writeButton">Click to create <code>hello.txt</code> in Dropbox.</button>


<form:form action="dropbox" method="post" ><input type="submit" value="Dropbox" /></form:form>

<div id = "dropboxController">

<div id="section-1">
<button id="dropbox_login" style=""> Dropbox-Login</button>

<div id ="gamelist">

</div>
<button id="load" value ="load"> load </button>
loaded game content
<textarea id="load-game-content"></textarea>
</div>

<div id="section-2">
Type game- content
<textarea id= "game-content"></textarea>


<a href class="overlay-trigger" data-overlay="save-game">Save</a>

<div id="save-game" class="overlay" style="">
	<div class="overlay-inner">
	 
	 game-name<textarea id= "game-name"></textarea>
     <button id="save" value="save"> save</button>
	</div>
</div>


</div>


</div>



--%>

<!-- <div id="gConnect" class="button">
      Textarea for outputting data
      <div id="response" class="hide">
        <textarea id="responseContainer" style="width:100%; height:150px"></textarea>
      </div>
</div> -->


<script src="<c:url value="/resources/JavaScript/controller.js" />"></script>
<script src="<c:url value="/resources/JavaScript/googleLogin.js" />"></script>
<script src="<c:url value="/resources/JavaScript/selection.js" />"></script>
<script src="<c:url value="/resources/JavaScript/dropboxController.js" />"></script>

<script src="https://www.google.com/jsapi?key=AIzaSyBoyxG4q9onZh6oXyF1jPsnbuCxeqj8O_M"></script>



</body>
</html>