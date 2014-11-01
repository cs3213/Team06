
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<html class=''>
<head>
<meta charset='UTF-8'>
<meta name="robots" content="noindex">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet"
	href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
<link rel="stylesheet"
	href="http://code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.css">
<link href="<c:url value="/resources/CSS/overlay.css" />"
	rel="stylesheet">
<link href="<c:url value="/resources/CSS/content.css" />"
	rel="stylesheet">
<link href="<c:url value="/resources/CSS/scrollable.css" />"
	rel="stylesheet">
<link href="<c:url value="/resources/CSS/alert.css" />" rel="stylesheet">
<link href="<c:url value="/resources/CSS/simple-sidebar.css" />"
	rel="stylesheet">

<script
	src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.js"></script>
<script
	src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="http://code.jquery.com/ui/1.8.18/jquery-ui.min.js"></script>
<script src="https://apis.google.com/js/client:platform.js" async defer></script>
<script
	src="https://www.dropbox.com/static/api/dropbox-datastores-1.0-latest.js"></script>
<script src="<c:url value="/resources/JavaScript/selection.js" />"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script
	src="<c:url value="/resources/JavaScript/bootstrap-select.js" />"></script>
<script src="<c:url value="/resources/JavaScript/bootstrap.min.js" />"></script>
<script src="<c:url value="/resources/JavaScript/bootbox.min.js" />"></script>
<script src="<c:url value="/resources/JavaScript/bootbox.js" />"></script>
<script src="<c:url value="/resources/JavaScript/popup.js" />"></script>
</head>

<body class="">

	<div id="wrapper">

		<!-- Sidebar -->
		<div id="sidebar-wrapper">
			<ul class="sidebar-nav">
				<li class="sidebar-brand"><a href="#"> Menu </a></li>
				<li><a href id="Google-Login-Button" class="overlay-trigger"
					data-overlay="Google-Login" style="display:">Google Login</a></li>
				<div id="Google-Login" class="overlay" style="">
					<div class="overlay-inner">
						<button class="g-signin"
							data-scope="https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/userinfo.profile"
							data-clientid="264511181674-td4u09us0emielom73ogag8usopl7e90.apps.googleusercontent.com"
							data-callback="onSignInCallback" data-theme="dark"
							data-cookiepolicy="single_host_origin"></button>

					</div>
				</div>


				<li><a href="#">Player</a></li>
				<li><a href="#">Editor</a></li>
				<Li><a hred="#">Load</a></Li>


			</ul>
		</div>
		<!-- /#sidebar-wrapper -->

		<!-- Page Content -->
		<div id="page-content-wrapper">
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-12">
						<a href="#menu-toggle" class="btn btn-default" id="menu-toggle">Toggle
							Menu</a>


						<div class="transparent editor-panel" id="editor">

							<div id="divName" class="container inner-container">
								<h4>Editor</h4>
							</div>
							<!-- <div class="container inner-container"> -->
							<div id="divtest" class="scene-inner-container"
								ondrop="dropIt(event); dropOver();"
								ondragover="event.preventDefault();"></div>

							<div id="loading-bar" class="progress progress-inner"
								style="display: none">
								<div id="loading-bar-content"
									class="progress-bar progress-bar-striped active"
									role="progressbar" aria-valuenow="0" aria-valuemin="0"
									aria-valuemax="100" style="width: 45%">
									<span id="loading-bar-indicator">0% Complete</span>
								</div>
							</div>


						</div>

						<div class="tab-panel">
							<div class="inner-tab">
								<ul class="nav nav-tabs inner-tab" role="tablist">
									<li class="active"><a href="#source-pane" role="tab"
										data-toggle="tab"><h4>Characters</h4></a></li>
									<li><a href="#coordEditor-pane" role="tab"
										data-toggle="tab"><h4>Actions</h4></a></li>

								</ul>
							</div>
							<div class="tab-content container tab-content-container">

								<div class="tab-pane active select-pane" id="source-pane">
									<div class=transparent id="source">
										<div id="floatArea">
											<h4>Scene</h4>
											<button onclick="changeFloatLeft()">
												<img src="<c:url value="/resources/img/arrow_left.gif" />"
													height="15px">
											</button>
											<img id="curFloat"
												src="<c:url value="/resources/img/house1.png"/>"
												height="100px" / onclick="displayHouse(this)">
											<button onclick="changeFloatRight()">
												<img src="<c:url value="/resources/img/arrow_right.gif" />"
													height="15px">
											</button>
										</div>

										<div id="characterArea" ondragover="event.preventDefault();">
											<h4>Character</h4>
											<button onclick="changeCharacterLeft()">
												<img src="<c:url value="/resources/img/arrow_left.gif" />"
													height="15px">
											</button>
											<img id="curCharacter"
												src="<c:url value="/resources/img/char1.png" />"
												height="100px" draggable="true" ondragstart="dragIt(event);" />
											<button onclick="changeCharacterRight()">
												<img src="<c:url value="/resources/img/arrow_right.gif" />"
													height="15px">
											</button>
										</div>
									</div>
								</div>

								<div class="tab-pane select-pane" id="coordEditor-pane">
									<div class="transparent" id="coordEditor">
										<div id="divName" class="container">
											<h4>Setting</h4>
										</div>
										<form>
											<ul id="draggable" class="two-col-special">
												<li id="right">Move Right <input type="text"
													name="right" size="2" class="input-word">steps
												</li>
												<li id="left">Move Left <input type="text" name="left"
													size="2" class="input-word">steps
												</li>
												<li id="up">Move Up <input type="text" name="right"
													size="2" class="input-word">steps
												</li>
												<li id="down">Move Down <input type="text" name="left"
													size="2" class="input-word">steps
												</li>
												<li id="x">Set X <input type="text" name="x_pos"
													size="2" class="input-word" onchange="checkXValue(this);">px
												</li>
												<li id="y">Set Y <input type="text" name="y_pos"
													size="2" class="input-word" onchange="checkYValue(this);">px
												</li>
												<li id='repeat'>Repeat <input type="text" name="repeat"
													size="2" class="input-word">
												</li>
												<li id='end_repeat'>End_Repeat</li>
												<li id='show'>Show</li>
												<li id='hide'>Hide</li>
												<li id='costume'>Change Constume</li>
												<li id='background'>Change Background</li>
											</ul>
										</form>
									</div>
								</div>
							</div>
						</div>





					</div>
				</div>
			</div>
		</div>
		<!-- /#page-content-wrapper -->

	</div>
	<!-- /#wrapper -->





	<script src="<c:url value="/resources/JavaScript/popup.js" />"></script>
	<script src="<c:url value="/resources/JavaScript/controller.js" />"></script>
	<script src="<c:url value="/resources/JavaScript/googleLogin.js" />"></script>
	<script
		src="<c:url value="/resources/JavaScript/dropboxController.js" />"></script>
	<script
		src="https://www.google.com/jsapi?key=AIzaSyBoyxG4q9onZh6oXyF1jPsnbuCxeqj8O_M"></script>



</body>
</html>