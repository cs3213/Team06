Dropbox.AuthDriver.Popup.oauthReceiver();

// Be sure to use your own app key so you can set up your own redirect URI.
var APP_KEY = '9mtyvo8jbhcwxn3';

var client = new Dropbox.Client({ key: APP_KEY });

var chosenFile = "";

// Use a pop-up for auth.
client.authDriver(new Dropbox.AuthDriver.Popup({ 
	receiverUrl: 'http://localhost:8080/CS3213_assignment3/index'
}));

// First check if we're already authenticated.
client.authenticate({ interactive: false });

if (client.isAuthenticated()) {
	// If we're authenticated, update the UI to reflect the logged in status.
	loggedIn();
} else {
	// Otherwise show the login button.
	console.log($('#dropbox-login-btn'));
	$('dropbox-login-panel').show();
}

function dropboxLogin() {
	client.authenticate(function (err) {
		if (err) { alert('Error: ' + err); return; }
		loggedIn();
	});
}

$('#clickme').click(function () {
	console.log("clicked button");
	
	$.getJSON("http://localhost:8080/CS3213_assignment3/getFile",function(result) {
		console.log("in get json");
		   $.each(result,function(key, val){
			   console.log(val);
		   });	
		});
	
	 alert("here");
});

function changeFunc(){
	var selectBox = document.getElementById('game-file-select');
	chosenFile = selectBox.options[selectBox.selectedIndex].value;
}

function insertValue(value, countElement){
	console.log("come in insert valuse ");
	console.log(value);
	
	for (var i = 0; i<countElement; i++) {
		var sortable = "#sortable"+(i+1).toString()+" li";
		var div = "#div"+(i+1).toString();

		console.log("sortable = "+sortable);
		console.log("div = "+div);
		var j=0;
		if ($(sortable) && $(div)) {
			$(sortable).each(function(){
				$(this).find('input').val(value[i][j]);
				j++;
			});
			
		    $(sortable).delegate(".closeButton", "click", function() {
		        $(this).parent().remove();
		    });
			
			$(div).delegate(".removeImgButton", "click", function() {
		        $(this).parent().remove();
		        $('#sortable'+i).remove();
		    });
		}
	}
}

function loggedIn() {
	$('#dropbox-login-panel').hide();
	$('#file-list-panel').show();
	var datastoreManager = new Dropbox.Datastore.DatastoreManager(client);

	datastoreManager.openDefaultDatastore(function (err, datastore) {
		if (err) { alert('Error: ' + err); return; }

		var table = datastore.getTable('VisualIDE');
		table.setResolutionRule('name', 'local');
		table.setResolutionRule('context', 'local');

		loadGameList();
		
		function getRecord() {
			var results = table.query();
			var list = [];
			
			if (results.length != 0) {
				console.log("there are file get record");
				for (var i=0; i<results.length; i++) {
					console.log(results[i]);
					list.push(results[i].get('name'));
				}
			}
			
			return list;
		}
		
		function loadGameList(){
			var gamelist = document.getElementById('game-file-select');
			var filelist = getRecord();
			
			var prefix = "<option value ='";
			var midfix = "'>";
			var suffix = "</option>";
//			var fillInContent = "";
			gamelist.options.add(new Option("--Select--", "--Select--"));
			for(var i = 0; i < filelist.length ; i++ ){
			    gamelist.options.add(new Option(filelist[i],filelist[i]));
//				fillInContent = fillInContent + prefix + filelist[i] + midfix + filelist[i] + suffix;
			}
//			console.log (fillInContent);
		}
		
		
		
		function saveRecord(fileName, fileContent, countElement, inputValue) {
			console.log("save record!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1");
			
			var results = table.query({name: fileName});
			console.log("insert filename = "+fileName);
			console.log(results);
			
			var fileExist = 0;
			var valString = '';
			for (var i=0; i<inputValue.length; i++) {
				valString = valString + inputValue.toString() + '|';
			}
			if (results.length != 0) {
				for (var i=0; i<results.length; i++) {
					results[i].deleteRecord();
				}
				fileExist = 1;
			} 
			
			var firstTask = table.insert({
			    name: fileName,
			    content: fileContent,
			    count: countElement,
			    value: valString
			});
			
			if (fileExist==0) {
				var gamelist = document.getElementById('game-file-select');
				gamelist.options.add(new Option(fileName, fileName));
			}
		}
		
		datastore.recordsChanged.addListener(function (event) {
		    console.log('records changed:', event.affectedRecordsForTable('VisualIDE'));
		});
		
		$('#save-btn').click(function (e) {
			e.preventDefault();

			var fileName = document.getElementById('user-file-name').value;
			var fileContent = $('#divtest').html();
			var countElement = getCountElement();
			var inputValue = [];
			
			for (var i = 0; i<countElement; i++) {
				inputValue[i]=[];
				var sortable = "#sortable"+(i+1).toString()+" li";

				if ($(sortable)) {
					$(sortable).each(function(){
						var input = $(this).find('input').val();
						console.log("input = "+input);
						if (input) {
							inputValue[i].push(input);
						} else {
							inputValue[i].push(0);
						}
					});
				}
			}
			
			console.log(fileContent);
			console.log(inputValue);
			saveRecord(fileName, fileContent, countElement, inputValue);
		});
		
		$('#loading-btn').click(function (e){
			e.preventDefault();
			var results = table.query({name: chosenFile});
			console.log(results);
			if (results.length != 0) {
				console.log("load file = "+chosenFile);
				console.log(results[0].get('content'));
				
				$('#divtest').html(results[0].get('content'));
				setCountElement(results[0].get('count'));
				var inputValue = results[0].get('value');
				//console.log(results[0].get('value'));
				console.log(inputValue);
				var value = {"inputValue":inputValue};
				$.ajax({
					url:"http://localhost:8080/CS3213_assignment3/index",
					type:"POST",
					contentType:'application/json; charset=utf-8',
					data:JSON.stringify(value),
				    success:function(response) {
				    	console.log(response);
				    	insertValue(response, results[0].get('count'));
				    }
				});
				console.log($('#divtest'));
			} else {
				var gamelist = document.getElementById('game-file-select');
				if (gamelist.selectedIndex != 0) {
					gamelist.remove(gamelist.selectedIndex);
				}
				alert("no such file");
			}
		});
		
		$('#deleting-btn').click(function (e){
			e.preventDefault();
			var results = table.query({name: chosenFile});
			console.log(results);
			
			if (results.length != 0) {
				for (var i=0; i<results.length; i++) {
					results[i].deleteRecord();
				}
			} else {
				alert("no such file");
			}
			
			var gamelist = document.getElementById('game-file-select');
			if (gamelist.selectedIndex != 0) {
				gamelist.remove(gamelist.selectedIndex);
			}
		});
	});
}