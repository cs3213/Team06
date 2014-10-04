/**
 * 
 */

function start() {
 
        var eventSource = new EventSource("HelloServlet");
         
        eventSource.onmessage = function(event) {
         
            document.getElementById('foo').innerHTML = event.data;
         
        };
         
    }