Dropbox.AuthDriver.Popup.oauthReceiver();

// Be sure to use your own app key so you can set up your own redirect URI.
var APP_KEY = '9mtyvo8jbhcwxn3';

var client = new Dropbox.Client({ key: APP_KEY });

// Use a pop-up for auth.
client.authDriver(new Dropbox.AuthDriver.Popup({ 
	receiverUrl: 'localhost:8080/CS3213_assignment3/hello'
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

function loggedIn() {
	$('#dropbox_login').hide();
	var datastoreManager = new Dropbox.Datastore.DatastoreManager(client);

	datastoreManager.openDefaultDatastore(function (err, datastore) {
		if (err) { alert('Error: ' + err); return; }

		var table = datastore.getTable('VisualIDE');
		table.setResolutionRule('name', 'local');
		table.setResolutionRule('context', 'local');

		function getRecord() {
			var results = table.query();
			var list = [];
			
			for (var i=0; i<results.length; i++) {
				list.push(results[i].get('name'));
			}
			
			return list;
		}
		
		function saveRecord(fileName, fileContent) {
			var firstTask = taskTable.insert({
			    name: fileName,
			    content: fileContent
			});
		}
		
		datastore.recordsChanged.addListener(function (event) {
		    console.log('records changed:', event.affectedRecordsForTable('VisualIDE'));
		});
		
//		function updateRecord(fileName, fileContent) {
//			var record = getRecord(fileName);
//			record.set('content', fileContent);
//		}
		
		$('#save').click(function (e) {
			e.preventDefault();

			var fileName;
			var fileContent;
			
			saveRecord(fileName, fileContent);
		});
	});
}

