/**
 * 
 */

//function initiateSignIn() {
//  var myParams = {
//    'clientid' : '264511181674-td4u09us0emielom73ogag8usopl7e90.apps.googleusercontent.com',
//    'cookiepolicy' : 'single_host_origin',
//    'callback' : 'onSignInCallback',
//    'scope' : 'https://www.googleapis.com/auth/plus.login',
//    'requestvisibleactions' : 'http://schema.org/AddAction'
//    // Additional parameters
//  };
//  gapi.auth.signIn(myParams);
//}

function onSignInCallback(authResult) {
    console.log(authResult);
	if (authResult['status']['signed_in']) {
		
		
	    document.getElementById('Google-Login-Button').setAttribute('style', 'display: none');

	    
	    
	    gapi.client.load('oauth2', 'v2', function() {
            gapi.client.oauth2.userinfo.get().execute(function(resp){
                var email = resp.email; //get user email
                var given_name = resp.given_name; //get user email
                var family_name = resp.family_name;
                var id=resp.id;
                document.getElementById('Welcome-Word').setAttribute('style', 'display: block');
                document.getElementById('Google-Login').setAttribute('style', 'display: none');
                document.getElementById('User-Name').innerHTML = "<h4>"+given_name+"</h4>";
                console.log(email);
                console.log(given_name);
                
                
               
                
                
            });
        });	    
	    
	  } else {
		 document.getElementById('Google-Login-Button').setAttribute('style', 'display: block');
//         document.getElementById('Google-Logout-Button').setAttribute('style', 'display: none');
         document.getElementById('Welcome-Word').setAttribute('style', 'display: none');
	     console.log('Sign-in state: ' + authResult['error']);
	  }
    
  }

function signOut(event){
	alert("logout");
	gapi.auth.signOut();
	
	location.reload();
}



function printFile(fileId) {
	
	gapi.client.load('drive', 'v2', function(){
		var request = gapi.client.drive.files.get({
		    'fileId': fileId
		  });
		  request.execute(function(resp) {
		    console.log('Title: ' + resp.title);
		    console.log('Description: ' + resp.description);
		    console.log('MIME type: ' + resp.mimeType);
		  });
		
	});
}




