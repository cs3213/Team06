/**
 * 
 */

var client = new Dropbox.Client({ key: 'hpcnnotex154ndg' });

        function doHelloWorld() {
            client.writeFile('hello.txt', 'Hello, World!', function (error) {
                if (error) {
                    alert('Error: ' + error);
                } else {
                    alert('File written successfully!');
                }
            });
        }

        // Try to complete OAuth flow.
        client.authenticate({ interactive: false }, function (error, client) {
            if (error) {
                alert('Error: ' + error);
            }
        });

        if (client.isAuthenticated()) {
            doHelloWorld();
        }

        document.getElementById('writeButton').onclick = function () {
            client.authenticate(function (error, client) {
                if (error) {
                    alert('Error: ' + error);
                } else {
                    doHelloWorld();
                }
            });
        }