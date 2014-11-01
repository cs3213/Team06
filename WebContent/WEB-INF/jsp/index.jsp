
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

	<p id="demo"></p>


	<div id="message" class="bb-alert alert alert-info"
		style="display: none;">
		<span>Hello world callback</span>

	</div>

	<div class="transparent" id="">


		<div class="row">


			<!-- 			<div class="overlay-word" id="header-words">
				<label id="Welcome-Word" style="display: none; float: centre;"><h3>CS3216
						Animation Player</h3> </label> <label id="User-Name" style="float: right;"></label>
			</div> -->


			<div>
				<a href id="Google-Login-Button" class="overlay-trigger"
					data-overlay="Google-Login" style="display: none">Google Login</a>

				<button id="Drop-boxLogin" class="overlay-trigger"
					onclick="dropboxLogin()" style="display:">Load Program</button>

				<select id="game-file-select" style="display:"
					class="form-control form-control-inline btn-primary-customize"
					onchange='changeFunc();'>

				</select>
				
				

				<button type="button" id="loading-btn" style="display:"
					data-loading-text="Loading..."
					class="btn btn-primary btn-primary-customize">Load</button>

				<button type="button" id="deleting-btn" style="display:"
					data-loading-text="Deleting..."
					class="btn btn-primary btn-primary-customize">Delete</button>



			</div>

		</div>





	</div>



	<div id="Google-Login" class="overlay" style="">
		<div class="overlay-inner">


			<button class="g-signin"
				data-scope="https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/userinfo.profile"
				data-clientid="264511181674-td4u09us0emielom73ogag8usopl7e90.apps.googleusercontent.com"
				data-callback="onSignInCallback" data-theme="dark"
				data-cookiepolicy="single_host_origin"></button>

		</div>
	</div>

	<div id="Main-Panel">
		<div class="transparent" id="player">
			<div id="divName" class="container content-div">
				<h4>Player</h4>
			</div>

			<div class="container content-div">


				<div id="divtest-player" class="scene_play"
					onmouseover="displayCoord" style=""></div>
			</div>

			<div id="control-panel" class="container content-div">
				<button type="button" id="reset-background-btn"
					class="btn btn-primary">Reset Background</button>
				<button type="button" id="reset-character-btn"
					class="btn btn-success">Reset Character</button>

				<button type="button" id="save-trigger" class="btn btn-info">
					Save</button>
				<div id="game-name-input" class="overlay" style="">
					<div class="overlay-inner">

						<input type="input" class="form-control" id="user-file-name"
							placeholder="File Name">

						<button id="save-btn" class="btn btn-primary">Confirm</button>

						<button id="cancel-btn" class="btn btn-primary">Cancel</button>

					</div>
				</div>

				<button type="button" class="btn btn-warning" onClick="submit()">
					Play</button>
			</div>
		</div>


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
					class="progress-bar progress-bar-striped active" role="progressbar"
					aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
					style="width: 45%">
					<span id="loading-bar-indicator">0% Complete</span>
				</div>
			</div>


		</div>



		<!-- Nav tabs -->

		<div class="tab-panel">
			<div class="inner-tab">
				<ul class="nav nav-tabs inner-tab" role="tablist">
					<li class="active"><a href="#source-pane" role="tab"
						data-toggle="tab"><h5>Characters</h5></a></li>
					<li><a href="#coordEditor-pane" role="tab" data-toggle="tab"><h5>Actions</h5></a></li>
					<li><a href="#music-pane" role="tab" data-toggle="tab"><h5>Music</h5></a></li>
				</ul>
			</div>
			<div class="tab-content container tab-content-container">

				<div class="tab-pane active select-pane" id="source-pane">
					<div class=transparent-inner id="source">
						<div id="floatArea">
							<h4>Scene</h4>
							<button onclick="changeFloatLeft()">
								<img src="<c:url value="/resources/img/arrow_left.gif" />"
									height="15px">
							</button>
							<img id="curFloat"
								src="<c:url value="/resources/img/house1.png"/>" height="100px"
								/ onclick="displayHouse(this)">
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
								src="<c:url value="/resources/img/char1.png" />" height="100px"
								draggable="true" ondragstart="dragIt(event);" />
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
						<div>
							<ul class="nav nav-tabs inner-tab" role="tablist">
								<li class="active"><a href="#Motion" role="tab"
									data-toggle="tab">Motion</a></li>
								<li><a href="#Data" role="tab" data-toggle="tab">Data</a></li>
								<li><a href="#Control" role="tab" data-toggle="tab">Control</a>
								</li>
								<li><a href="#Operator" role="tab" data-toggle="tab">Operator</a>
								</li>
							</ul>
						</div>
						<div class="tab-content">
							<div role="tabpanel" class="tab-pane active" id="Motion">
								<form>
									<ul id="draggable" class="two-col-special">
										<li class="command_right">Move Right <input type="text"
											name="right" size="2" class="input-word">steps
										</li>
										<li class="command_left">Move Left <input type="text"
											name="left" size="2" class="input-word">steps
										</li>
										<li class="command_up">Move Up <input type="text"
											name="right" size="2" class="input-word">steps
										</li>
										<li class="command_down">Move Down <input type="text"
											name="left" size="2" class="input-word">steps
										</li>
										<li class="command_x">Set X <input type="text"
											name="x_pos" size="2" class="input-word"
											onchange="checkXValue(this);">px
										</li>
										<li class="command_y">Set Y <input type="text"
											name="y_pos" size="2" class="input-word"
											onchange="checkYValue(this);">px
										</li>
									</ul>
								</form>
							</div>
							<div role="tabpanel" class="tab-pane" id="Data"></div>
							<div role="tabpanel" class="tab-pane" id="Control">
								<form>
									<ul id="draggable" class="two-col-special">
										<li class='command_repeat'>Repeat <input type="text"
											name="repeat" size="2" class="input-word">
										</li>
										<li class='command_forever_loop'>Forever Loop</li>
										<li class='command_end_repeat'>End_Repeat</li>
										<li class='command_show'>Show</li>
										<li class='command_hide'>Hide</li>
										<li class='command_costume'>Change Constume</li>
										<li class='command_background'>Change Background</li>
									</ul>
								</form>
							</div>
							<div class="tab-pane select-pane" id="Operator">
									<ul id="draggable" style = "text-align: left">
										<li class='addOperation'>
											<input id="input1" type="text" name="input" size="2" style = "display: none">
											<select id="select1" class="selectItem" onchange="selectCustomer(this)"><option value="X">X</option>
  											<option value="Y">Y</option>
  											<option value="customer">Input</option></select> + 
  											<input id="input2" type="text" name="input" size="2" style = "display: none">
  											<select id="select2" class="selectItem" onchange="selectCustomer(this)"><option value="X">X</option>
  											<option value="Y">Y</option>
  											<option value="customer">Input</option></select> <button>New</button>
  										</li>
  										<li class='substractOperation'>
  											<input id="input3" type="text" name="input" size="2" style = "display: none">
											<select id="select3" class="selectItem" onchange="selectCustomer(this)"><option value="X">X</option>
  											<option value="Y">Y</option>
  											<option value="customer">Input</option></select> - 
  											<input id="input4" type="text" name="input" size="2" style = "display: none">
  											<select id="select4" class="selectItem" onchange="selectCustomer(this)"><option value="X">X</option>
  											<option value="Y">Y</option>
  											<option value="customer">Input</option></select> <button>New</button>
  										</li>
  										<li class='multiplyOperation'>
  											<input id="input5" type="text" name="input" size="2" style = "display: none">
											<select id="select5" class="selectItem" onchange="selectCustomer(this)"><option value="X">X</option>
  											<option value="Y">Y</option>
  											<option value="customer">Input</option></select> * 
  											<input id="input6" type="text" name="input" size="2" style = "display: none">
  											<select id="select6" class="selectItem" onchange="selectCustomer(this)"><option value="X">X</option>
  											<option value="Y">Y</option>
  											<option value="customer">Input</option></select> <button>New</button>
  										</li>
  										<li class='divideOperation'>
  											<input id="input7" type="text" name="input" size="2" style = "display: none">
											<select id="select7" class="selectItem" onchange="selectCustomer(this)"><option value="X">X</option>
  											<option value="Y">Y</option>
  											<option value="customer">Input</option></select> / 
  											<input id="input8" type="text" name="input" size="2" style = "display: none">
  											<select id="select8" class="selectItem" onchange="selectCustomer(this)"><option value="X">X</option>
  											<option value="Y">Y</option>
  											<option value="customer">Input</option></select> <button>New</button>
  										</li>
  										<li class='modOperation'>
  											<input id="input9" type="text" name="input" size="2" style = "display: none">
											<select id="select9" class="selectItem" onchange="selectCustomer(this)"><option value="X">X</option>
  											<option value="Y">Y</option>
  											<option value="customer">Input</option></select> mod 
  											<input id="input10" type="text" name="input" size="2" style = "display: none">
  											<select id="select10" class="selectItem" onchange="selectCustomer(this)"><option value="X">X</option>
  											<option value="Y">Y</option>
  											<option value="customer">Input</option></select> <button>New</button>
  										</li>
  										<li class='equalOperation'>
  											<input id="input11" type="text" name="input" size="2" style = "display: none">
											<select id="select11" class="selectItem" onchange="selectCustomer(this)"><option value="X">X</option>
  											<option value="Y">Y</option>
  											<option value="customer">Input</option></select> = 
  											<input id="input12" type="text" name="input" size="2" style = "display: none">
  											<select id="select12" class="selectItem" onchange="selectCustomer(this)"><option value="X">X</option>
  											<option value="Y">Y</option>
  											<option value="customer">Input</option></select> <button>New</button>
  										</li>
  										<li class='greaterThanOperation'>
  											<input id="input13" type="text" name="input" size="2" style = "display: none">
											<select id="select13" class="selectItem" onchange="selectCustomer(this)"><option value="X">X</option>
  											<option value="Y">Y</option>
  											<option value="customer">Input</option></select> >= 
  											<input id="input14" type="text" name="input" size="2" style = "display: none">
  											<select id="select14" class="selectItem" onchange="selectCustomer(this)"><option value="X">X</option>
  											<option value="Y">Y</option>
  											<option value="customer">Input</option></select> <button>New</button>
  										</li>
  										<li class='lessThanOperation'>
  											<input id="input15" type="text" name="input" size="2" style = "display: none">
											<select id="select15" class="selectItem" onchange="selectCustomer(this)"><option value="X">X</option>
  											<option value="Y">Y</option>
  											<option value="customer">Input</option></select> <= 
  											<input id="input16" type="text" name="input" size="2" style = "display: none">
  											<select id="select16" class="selectItem" onchange="selectCustomer(this)"><option value="X">X</option>
  											<option value="Y">Y</option>
  											<option value="customer">Input</option></select> <button>New</button>
  										</li>
									</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="tab-pane select-pane" id="music-pane">
					<div class="transparent" id="musicList">
						<form>
							<ul id="draggable">
								<li class="music1">Music1</li>
								<li class="music2">Music2</li>
								<li class="music3">Music3</li>
								<li class="music4">Music4</li>
							</ul>
						</form>
					</div>
				</div>



			</div>
		</div>
	</div>






	<script src="<c:url value="/resources/JavaScript/popup.js" />"></script>
	<script src="<c:url value="/resources/JavaScript/controller.js" />"></script>
	<script src="<c:url value="/resources/JavaScript/googleLogin.js" />"></script>
	<script
		src="<c:url value="/resources/JavaScript/dropboxController.js" />"></script>
	<script
		src="https://www.google.com/jsapi?key=AIzaSyBoyxG4q9onZh6oXyF1jPsnbuCxeqj8O_M"></script>



</body>
</html>