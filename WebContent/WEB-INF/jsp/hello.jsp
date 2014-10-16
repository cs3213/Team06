
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html class=''>
<head>
<meta charset='UTF-8'><meta name="robots" content="noindex">
<link href="<c:url value="/resources/CSS/overlay.css" />" rel="stylesheet">
<script src='//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js'></script>
<script src="https://apis.google.com/js/platform.js" async defer></script>
<script src="https://apis.google.com/js/client:platform.js" async defer></script>
<script src="<c:url value="/resources/JavaScript/googleLogin.js" />"></script>
</head>

<body>
<a href class="overlay-trigger" data-overlay="overlay-hello">Open Overlay</a>

<div id="overlay-hello" class="overlay">
	<div class="overlay-inner">
		<button id="googleLogin" onClick="initiateSignIn();">LoginWithGoogle</button>
	</div>
</div>


<script src="<c:url value="/resources/JavaScript/controller.js" />"></script>


</body>
</html>