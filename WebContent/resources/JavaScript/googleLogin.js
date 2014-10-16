/**
 * 
 */

function initiateSignIn() {
  var myParams = {
    'clientid' : '264511181674-td4u09us0emielom73ogag8usopl7e90.apps.googleusercontent.com',
    'cookiepolicy' : 'single_host_origin',
    'callback' : 'mySignInCallback',
    'scope' : 'https://www.googleapis.com/auth/plus.login',
    'requestvisibleactions' : 'http://schema.org/AddAction'
    // Additional parameters
  };
  gapi.auth.signIn(myParams);
}