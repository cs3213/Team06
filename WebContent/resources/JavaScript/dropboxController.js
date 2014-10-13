Dropbox.AuthDriver.Popup.oauthReceiver();

// Be sure to use your own app key so you can set up your own redirect URI.
var APP_KEY = '9mtyvo8jbhcwxn3';

var client = new Dropbox.Client({ key: APP_KEY });

var chosenFile = "";

// Use a pop-up for auth.
client.authDriver(new Dropbox.AuthDriver.Popup({ 
	receiverUrl: 'http://localhost:8080/CS3213_assignment3/hello'
}));

// First check if we're already authenticated.
client.authenticate({ interactive: false });

if (client.isAuthenticated()) {
	// If we're authenticated, update the UI to reflect the logged in status.
	loggedIn();
	
	
} else {
	// Otherwise show the login button.
	$('#dropbox_login').show();
}

$('#dropbox_login').click(function () {
	client.authenticate(function (err) {
		if (err) { alert('Error: ' + err); return; }
		loggedIn();
	});
});

function changeFunc(){
	chosenFile = selectBox.options[selectBox.selectedIndex].value;
}


function loggedIn() {
	$('#dropbox_login').hide();
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
			
			for (var i=0; i<results.length; i++) {
				list.push(results[i].get('name'));
			}
			
			return list;
		}
		
		
		
		function loadGameList(){
			var gamelist = document.getElementById('gamelist');
			var filelist = getRecord();
			var prefix = "<option value ='";
			var midfix = "'>";
			var suffix = "</option>";
			var fillInContent = prefix+midfix+suffix;
			
			for(var i = 0; i < filelist.length ; i++ ){
				fillInContent = fillInContent + prefix + filelist[i] + midfix + filelist[i] + suffix;
			}
			
			fillInContent = "<select id='selectBox' onchange='changeFunc();'>" + fillInContent + "</select>";
			console.log (fillInContent);
			
			
			gamelist.innerHTML = fillInContent;
			
		}
		
		
		
		function saveRecord(fileName, fileContent) {
			var firstTask = table.insert({
			    name: fileName,
			    content: fileContent
			});
		}
		
		datastore.recordsChanged.addListener(function (event) {
		    console.log('records changed:', event.affectedRecordsForTable('VisualIDE'));
		});
		
		
		$('#save').click(function (e) {
			e.preventDefault();

			var fileName = document.getElementById('game-name').value;
			var fileContent = document.getElementById('game-content').value;
			
			console.log(fileName);
			console.log(fileContent);

			saveRecord(fileName, fileContent);
		});
		
		
		$('#load').click(function (e){
			e.preventDefault();
			var results = table.query({name: chosenFile});
			console.log(results);
			if (results.length != 0) {
				var fileContent=results[0].get('content');
				document.getElementById('load-game-content').innerText = fileContent;
			} else {
				document.getElementById('load-game-content').innerText = "";
				alert("no such file");
			}
		});
		
	});
}




