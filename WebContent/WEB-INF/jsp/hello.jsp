
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>   

<html class=''>
<head>
<meta charset='UTF-8'><meta name="robots" content="noindex">
<link href="<c:url value="/resources/CSS/overlay.css" />" rel="stylesheet">
<script src='//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js'></script>
<script src="https://apis.google.com/js/client:platform.js" async defer></script>
<!-- <script src="https://www.dropbox.com/static/api/dropbox-datastores-1.0-latest.js"></script>
 -->

</head>

<body>


<button id="writeButton">Click to create <code>hello.txt</code> in Dropbox.</button>


<form:form action="dropbox" method="post" ><input type="submit" value="Dropbox" /></form:form>
<a href class="overlay-trigger" data-overlay="overlay-hello">Open Overlay</a>

<div id="overlay-hello" class="overlay" style="">
	<div class="overlay-inner">
	 
	 
	 <button class="g-signin"
          data-scope="https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/userinfo.profile"
          data-clientid="264511181674-td4u09us0emielom73ogag8usopl7e90.apps.googleusercontent.com"
          data-callback="onSignInCallback"
          data-theme="dark"
          data-cookiepolicy="single_host_origin">
      </button>
      
      <button type="button" id="pick" onclick="hideOverlay()">Pick File</button>
      
      
	</div>
</div>

<div id="gConnect" class="button">
      <!-- Textarea for outputting data -->
      <div id="response" class="hide">
        <textarea id="responseContainer" style="width:100%; height:150px"></textarea>
      </div>
</div>


<script src="<c:url value="/resources/JavaScript/controller.js" />"></script>
<script src="<c:url value="/resources/JavaScript/googleLogin.js" />"></script>
<script src="<c:url value="/resources/JavaScript/filepicker.js" />"></script>
<script src="<c:url value="/resources/JavaScript/dropboxController.js" />"></script>

<script src="https://www.google.com/jsapi?key=AIzaSyBoyxG4q9onZh6oXyF1jPsnbuCxeqj8O_M"></script>
<script src="https://apis.google.com/js/client.js?onload=initPicker"></script>



</body>
</html>