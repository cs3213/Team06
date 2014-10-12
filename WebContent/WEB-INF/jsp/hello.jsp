
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html class=''>
<head>
<meta charset='UTF-8'><meta name="robots" content="noindex">
<link href="<c:url value="/resources/CSS/overlay.css" />" rel="stylesheet">
</head>

<body>
<a href class="overlay-trigger" data-overlay="overlay-hello">Open Overlay</a>

<div id="overlay-hello" class="overlay">
	<div class="overlay-inner">
		<h3>I'm a super simple (yet cool) overlay.</h3>
		<h4>Also, I like bacon.</h4>
		<p>Shoulder turducken pastrami meatloaf.  Drumstick short loin pastrami short ribs chuck beef ribs.  Shankle kevin sirloin, fatback hamburger tenderloin t-bone filet mignon short ribs.  Meatball jowl turkey, tri-tip tail salami pastrami spare ribs pork loin porchetta andouille short ribs corned beef tongue pig.  Strip steak pork pancetta tail.  Shank flank meatball, filet mignon jowl brisket pork chop strip steak.<p>
	</div>
</div>

<script src='//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js'></script>
<script src="<c:url value="/resources/JavaScript/controller.js" />"></script>


</body>
</html>