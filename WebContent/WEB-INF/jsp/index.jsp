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

<script
	src="<c:url value="/resources/JavaScript/dragAndDropController.js" />"></script>
<script
	src="<c:url value="/resources/JavaScript/operatorController.js" />"></script>
<script
	src="<c:url value="/resources/JavaScript/commandAnimationController.js" />"></script>
<script
	src="<c:url value="/resources/JavaScript/keyboardAnimationController.js" />"></script>
<script
	src="<c:url value="/resources/JavaScript/repeatController.js" />"></script>
<script src="<c:url value="/resources/JavaScript/soundController.js" />"></script>
<script
	src="<c:url value="/resources/JavaScript/selectFloatAndCharacterController.js" />"></script>
<script src="<c:url value="/resources/JavaScript/playController.js" />"></script>
<script
	src="<c:url value="/resources/JavaScript/customizedVariableController.js" />"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script
	src="<c:url value="/resources/JavaScript/bootstrap-select.js" />"></script>
<script src="<c:url value="/resources/JavaScript/bootstrap.min.js" />"></script>
<script src="<c:url value="/resources/JavaScript/bootbox.min.js" />"></script>
<script src="<c:url value="/resources/JavaScript/bootbox.js" />"></script>
<script src="<c:url value="/resources/JavaScript/popup.js" />"></script>
<script src="<c:url value="/resources/JavaScript/googleLogin.js" />"></script>
<script
	src="https://www.google.com/jsapi?key=AIzaSyBoyxG4q9onZh6oXyF1jPsnbuCxeqj8O_M"></script>


</head>

<body class="">
	<div id="message" class="bb-alert alert alert-info"
		style="display: none;">
		<span>Hello world callback</span>
	</div>

	<div class="transparent" id="">
		<div class="row" style="width: 100%">
			<div>
				<a href id="Google-Login-Button" class="overlay-trigger"
					data-overlay="Google-Login" style="display: none">Google Login</a>

				<div id="User-Name" style="float: right"></div>

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
				<div id="Coord" class="coordDisplay"></div>
			</div>
		</div>

		<!-- 		<div class="transparent editor-panel" id="editor">
			<div id="divName" class="container inner-container">
				<h4>Editor</h4>
			</div>
			<div class="container inner-container">
			<div id="divtest" class="scene-inner-container"
				ondrop="dropIt(event); dropOver();"
				ondragover="event.preventDefault();"></div>
		</div> -->



		<div class="transparent tab-editor-panel ">
			<div class="inner-tab">
				<ul class="nav nav-tabs inner-tab" role="tablist">
					<li class="active"><a href="#character-editor-pane" role="tab"
						data-toggle="tab"><h5>Character Editor</h5></a></li>
					<li><a href="#background-editor-pane" role="tab"
						data-toggle="tab" onclick="dropOver1();"><h5>Background
								Editor</h5></a></li>

				</ul>
			</div>


			<div class="tab-content container tab-content-container">
				<div class="tab-pane active select-pane" id="character-editor-pane">
					<div class=transparent-inner id="character-editor">
						<div id="divtest" class="scene-inner-container"
							ondrop="dropIt(event); dropOver();"
							ondragover="event.preventDefault();"></div>
					</div>
				</div>



				<div class="tab-pane select-pane" id="background-editor-pane">
					<div class=transparent-inner id="background-editor">

						<div id="sortable" class="scene-inner-container"
							ondrop="dropIt(event);" ondragover="event.preventDefault();">

							<!-- 							<button onclick="dropOver1();">Edit</button>
							<button onclick="playTimeSound();">Play</button> -->
							<div id="soundPlayer"></div>

							<div id="sortable-background" class="ui-sortable"
								style="height: 300px; width: 72%; float: left; border: dotted; overflow: scroll;">

							</div>
						</div>

					</div>
				</div>

			</div>
		</div>



		<!-- Nav tabs -->
		<div class="transparent tab-panel">
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
					<div class="" id="source">
						<div id="floatArea">
							<h4>Scene</h4>
							<button onclick="changeFloatLeft()">
								<img src="<c:url value="/resources/img/arrow_left.gif" />"
									height="15px">
							</button>
							<img id="curFloat"
								src="<c:url value="/resources/img/house1.png"/>" height="100px"
								onclick="displayHouse(this)">
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

					<div class="" id="coordEditor">

						<div>
							<ul class="nav nav-tabs inner-tab" role="tablist">
								<li class="active"><a href="#Motion" role="tab"
									data-toggle="tab">Motion</a></li>
								<li><a href="#Control" role="tab" data-toggle="tab">Control</a>
								</li>
								<li><a href="#Operator" role="tab" data-toggle="tab">Operator</a>
								</li>

								<li><a href="#Customized-Variable" role="tab"
									data-toggle="tab">Customized Variable</a></li>
							</ul>
						</div>
						<div class="tab-content">
							<div role="tabpanel" class="tab-pane active" id="Motion">
								<form>
									<ul id="draggable" class="two-col-special">
										<li class="command_right">Move Right <input
											id="userInput1" type="text" class="selectItem" name="input"
											size="2" style="display: none" onchange="checkType(this)">
											<select id="mselect1" class="selectItem"
											onchange="selectForMove(this)">
												<option value="variable">Variable</option>
												<option value="userInput">Input</option>
										</select>steps
										</li>
										<li class="command_left">Move Left <input id="userInput2"
											type="text" class="selectItem" name="input" size="2"
											style="display: none" onchange="checkType(this)"> <select
											id="mselect2" class="selectItem"
											onchange="selectForMove(this)">
												<option value="variable">Variable</option>
												<option value="userInput">Input</option>
										</select>steps
										</li>
										<li class="command_up">Move Up <input id="userInput3"
											type="text" class="selectItem" name="input" size="2"
											style="display: none" onchange="checkType(this)"> <select
											id="mselect3" class="selectItem"
											onchange="selectForMove(this)">
												<option value="variable">Variable</option>
												<option value="userInput">Input</option>
										</select>steps
										</li>
										<li class="command_down">Move Down <input id="userInput4"
											type="text" class="selectItem" name="input" size="2"
											style="display: none" onchange="checkType(this)"> <select
											id="mselect4" class="selectItem"
											onchange="selectForMove(this)">
												<option value="variable">Variable</option>
												<option value="userInput">Input</option>
										</select>steps
										</li>
										<li class="command_x">Set X <input id="userInput5"
											type="text" class="selectItem" name="input" size="2"
											style="display: none" onchange="checkType(this)"> <select
											id="mselect5" class="selectItem"
											onchange="selectForMove(this)">
												<option value="variable">Variable</option>
												<option value="userInput">Input</option>
										</select>px
										</li>
										<li class="command_y">Set Y <input id="userInput6"
											type="text" class="selectItem" name="input" size="2"
											style="display: none" onchange="checkType(this)"> <select
											id="mselect6" class="selectItem"
											onchange="selectForMove(this)">
												<option value="variable">Variable</option>
												<option value="userInput">Input</option>
										</select>px
										</li>
									</ul>
								</form>
							</div>

							<div role="tabpanel" class="tab-pane" id="Customized-Variable">
								<div class="create_variable">
									<button type="button" class="btn btn-danger"
										onClick="new_variable()">New a variable</button>
								</div>
								<ul id="variable-list" class="variable-list"
									style="text-align: left">

								</ul>
								<ul id="draggable" class="two-col-special">
									<li class='command_e'>Set <select class="selectItem"
										id="selectSet"><option>--Select--</option>
									</select> to <input type="text" name="setVariable" size="2"
										class="input-word"></li>
									<li class='command_e'>Change <select class="selectItem"
										id="selectChange"><option>--Select--</option>
									</select> by <input type="text" name="changeVariable" size="2"
										class="input-word"></li>
								</ul>
							</div>

							<div role="tabpanel" class="tab-pane" id="Control">
								<form>
									<ul id="draggable" class="two-col-special">
										<li class='command_repeat'>Repeat <input type="text"
											name="repeat" size="2" class="input-word">
										</li>
										<li class='command_forever_loop'>Forever Loop</li>
										<li class='command_end_repeat'>End Repeat</li>
										<li class='command_show'>Show</li>
										<li class='command_hide'>Hide</li>
										<li class='command_costume'>Change Costume</li>
										<li class='command_background'>Change Background</li>
										<li class='command_repeat'>If <select class="selectItem"
											id="IfCondition"><option>--Select--</option>
												<option>Touch edge</option>
										</select> then
										</li>
										<li class='command_background'>End if</li>
									</ul>
								</form>
							</div>

							<div class="tab-pane select-pane" id="Operator">

								<ul id="notdraggable" style="text-align: left">
									<li class='addOperation'><input id="input1" type="text"
										class="selectItem" name="input" size="2" style="display: none"
										onchange="checkType(this)"> <select id="select1"
										class="selectItem" onchange="selectCustomer(this)"><option
												value="X">X</option>
											<option value="Y">Y</option>
											<option value="customer">Input</option></select> + <input id="input2"
										type="text" class="selectItem" name="input" size="2"
										style="display: none" onchange="checkType(this)"> <select
										id="select2" class="selectItem"
										onchange="selectCustomer(this)"><option value="X">X</option>
											<option value="Y">Y</option>
											<option value="customer">Input</option></select>
										<button id="add-ops"
											onclick="addNewoption(this, '1', '2', '+')">New</button></li>
									<li class='substractOperation'><input id="input3"
										type="text" class="selectItem" name="input" size="2"
										style="display: none" onchange="checkType(this)"> <select
										id="select3" class="selectItem"
										onchange="selectCustomer(this)"><option value="X">X</option>
											<option value="Y">Y</option>
											<option value="customer">Input</option></select> - <input id="input4"
										type="text" class="selectItem" name="input" size="2"
										style="display: none" onchange="checkType(this)"> <select
										id="select4" class="selectItem"
										onchange="selectCustomer(this)"><option value="X">X</option>
											<option value="Y">Y</option>
											<option value="customer">Input</option></select>
										<button id="substract-ops"
											onclick="addNewoption(this, '3', '4', '-')">New</button></li>
									<li class='multiplyOperation'><input id="input5"
										type="text" class="selectItem" name="input" size="2"
										style="display: none" onchange="checkType(this)"> <select
										id="select5" class="selectItem"
										onchange="selectCustomer(this)"><option value="X">X</option>
											<option value="Y">Y</option>
											<option value="customer">Input</option></select> * <input id="input6"
										type="text" class="selectItem" name="input" size="2"
										style="display: none" onchange="checkType(this)"> <select
										id="select6" class="selectItem"
										onchange="selectCustomer(this)"><option value="X">X</option>
											<option value="Y">Y</option>
											<option value="customer">Input</option></select>
										<button id="mutiply-ops"
											onclick="addNewoption(this, '5', '6', '*')">New</button></li>
									<li class='divideOperation'><input id="input7" type="text"
										class="selectItem" name="input" size="2" style="display: none"
										onchange="checkType(this)"> <select id="select7"
										class="selectItem" onchange="selectCustomer(this)"><option
												value="X">X</option>
											<option value="Y">Y</option>
											<option value="customer">Input</option></select> / <input id="input8"
										type="text" class="selectItem" name="input" size="2"
										style="display: none" onchange="checkType(this)"> <select
										id="select8" class="selectItem"
										onchange="selectCustomer(this)"><option value="X">X</option>
											<option value="Y">Y</option>
											<option value="customer">Input</option></select>
										<button id="divide-ops"
											onclick="addNewoption(this, '7', '8', '/')">New</button></li>
									<li class='modOperation'><input id="input9" type="text"
										class="selectItem" name="input" size="2" style="display: none"
										onchange="checkType(this)"> <select id="select9"
										class="selectItem" onchange="selectCustomer(this)"><option
												value="X">X</option>
											<option value="Y">Y</option>
											<option value="customer">Input</option></select> % <input id="input10"
										type="text" class="selectItem" name="input" size="2"
										style="display: none" onchange="checkType(this)"> <select
										id="select10" class="selectItem"
										onchange="selectCustomer(this)"><option value="X">X</option>
											<option value="Y">Y</option>
											<option value="customer">Input</option></select>
										<button id="mod-ops"
											onclick="addNewoption(this, '9', '10', '%')">New</button></li>
									<li class='equalOperation'><input id="input11" type="text"
										class="selectItem" name="input" size="2" style="display: none"
										onchange="checkType(this)"> <select id="select11"
										class="selectItem" onchange="selectCustomer(this)"><option
												value="X">X</option>
											<option value="Y">Y</option>
											<option value="customer">Input</option></select> = <input id="input12"
										type="text" class="selectItem" name="input" size="2"
										style="display: none" onchange="checkType(this)"> <select
										id="select12" class="selectItem"
										onchange="selectCustomer(this)"><option value="X">X</option>
											<option value="Y">Y</option>
											<option value="customer">Input</option></select>
										<button id="equal-ops"
											onclick="addNewoption(this, '11', '12', '=')">New</button></li>
									<li class='greaterThanOperation'><input id="input13"
										type="text" class="selectItem" name="input" size="2"
										style="display: none" onchange="checkType(this)"> <select
										id="select13" class="selectItem"
										onchange="selectCustomer(this)"><option value="X">X</option>
											<option value="Y">Y</option>
											<option value="customer">Input</option></select> >= <input
										id="input14" type="text" class="selectItem" name="input"
										size="2" style="display: none" onchange="checkType(this)">
										<select id="select14" class="selectItem"
										onchange="selectCustomer(this)"><option value="X">X</option>
											<option value="Y">Y</option>
											<option value="customer">Input</option></select>
										<button id="greaterThan-ops"
											onclick="addNewoption(this, '13', '14', '>=')">New</button></li>
									<li class='lessThanOperation'><input id="input15"
										type="text" class="selectItem" name="input" size="2"
										style="display: none" onchange="checkType(this)"> <select
										id="select15" class="selectItem"
										onchange="selectCustomer(this)"><option value="X">X</option>
											<option value="Y">Y</option>
											<option value="customer">Input</option></select> <= <input
										id="input16" type="text" class="selectItem" name="input"
										size="2" style="display: none" onchange="checkType(this)">
										<select id="select16" class="selectItem"
										onchange="selectCustomer(this)"><option value="X">X</option>
											<option value="Y">Y</option>
											<option value="customer">Input</option></select>
										<button id="lessThan-ops"
											onclick="addNewoption(this, '15', '16', '<=')">New</button></li>
								</ul>


							</div>

						</div>
					</div>



				</div>


				<div class="tab-pane select-pane" id="music-pane">
					<div class="" id="musicList">
						<form>
							<ul id="draggable">

								<li class="command_music" class="music1">Music1 <input
									type="text" class="selectItem" name="input" size="2"></input>
									seconds
								</li>
								<li class="command_music" class="music2">Music2 <input
									type="text" class="selectItem" name="input" size="2"></input>
									seconds
								</li>
								<li class="command_music" class="music3">Music3 <input
									type="text" class="selectItem" name="input" size="2"></input>
									seconds
								</li>
								<li class="command_music" class="music4">Music4 <input
									type="text" class="selectItem" name="input" size="2"></input>
									seconds
								</li>

							</ul>
						</form>
					</div>
				</div>

			</div>
		</div>
	</div>

	<script src="<c:url value="/resources/JavaScript/popup.js" />"></script>
	<script src="<c:url value="/resources/JavaScript/controller.js" />"></script>
	<script src="<c:url value="/resources/JavaScript/newOperation.js" />"></script>

	<script
		src="<c:url value="/resources/JavaScript/coordinateController.js" />"></script>
	<script
		src="<c:url value="/resources/JavaScript/dropboxController.js" />"></script>

</body>
</html>