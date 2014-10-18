( function($) {
	/**
	 * Our trigger event for opening the overlay. This class
	 * should exist on the overlay trigger, as well as an
	 * attribute (data-overlay) to adentify the overlay to open.
	*/
	$( '#Google-Login-Button' ).on( 'click', function( event ) {
		document.getElementById('Google-Login').setAttribute('style','');
		event.preventDefault();

		/**
		 * Set the overlay variable based on the data provided
		 * by the overlay trigger.
		 */
		var overlay = $( this ).data( 'overlay' );

		/**
		 * If the overlay variable is not defined, give a message
		 * and return.
		*/
		if ( ! overlay ) {
			console.log( 'You must provide the overlay id in the trigger. (data-overlay="overlay-id").' );
			return;
		}

		/**
		 * If we've made it this far, we should have the data
		 * needed to open a overlay. Here we set the id variable
		 * based on overlay variable.
		 */
		var id = '#' + overlay;

		/**
		 * Let's open up the overlay and prevent the body from
		 * scrolling, both by adding a simple class. The rest
		 * is handled by CSS (awesome).
		 */
		$( id ).addClass( 'overlay-open' );
		$( 'body' ).addClass( 'overlay-view' );

		/**
		 * When the overlay outer wrapper or `overlay-close`
		 * triger is clicked, lets remove the classes from
		 * the current overlay and body. Removal of these
		 * classes restores the current state of the user
		 * experience. Again, all handled by CSS (awesome).
		 */
		$( id ).on( 'click', function( event ) {
			// Verify that only the outer wrapper was clicked.
			if ( event.target.id == overlay ) {
				$( id ).removeClass( 'overlay-open' );
				$( 'body' ).removeClass( 'overlay-view' );
			}
		});
		$( '#Google-Login' ).on( 'click', function( event ) {
			// Verify that only the outer wrapper was clicked.
				$( id ).removeClass( 'overlay-open' );
				$( 'body' ).removeClass( 'overlay-view' );
			
		});
		

		/**
		 * Closes the overlay when the esc key is pressed. See
		 * comment above on closing the overlay for more info
		 * on how this is accomplished.
		 */
		$( document ).keyup( function( event ) {
			// Verify that the esc key was pressed.
			if ( event.keyCode == 27 ) {
				$( id ).removeClass( 'overlay-open' );
				$( 'body' ).removeClass( 'overlay-view' );
			}
		});
	});
}) (jQuery);


( function($) {
	/**
	 * Our trigger event for opening the overlay. This class
	 * should exist on the overlay trigger, as well as an
	 * attribute (data-overlay) to adentify the overlay to open.
	*/
	$( '#save-trigger-hello' ).on( 'click', function( event ) {
		document.getElementById('game-name-input').setAttribute('style','');
		event.preventDefault();

		/**
		 * Set the overlay variable based on the data provided
		 * by the overlay trigger.
		 */
		var overlay = $( this ).data( 'overlay' );

		/**
		 * If the overlay variable is not defined, give a message
		 * and return.
		*/
		if ( ! overlay ) {
			console.log( 'You must provide the overlay id in the trigger. (data-overlay="overlay-id").' );
			return;
		}

		/**
		 * If we've made it this far, we should have the data
		 * needed to open a overlay. Here we set the id variable
		 * based on overlay variable.
		 */
		var id = '#' + overlay;

		/**
		 * Let's open up the overlay and prevent the body from
		 * scrolling, both by adding a simple class. The rest
		 * is handled by CSS (awesome).
		 */
		$( id ).addClass( 'overlay-open' );
		$( 'body' ).addClass( 'overlay-view' );

		/**
		 * When the overlay outer wrapper or `overlay-close`
		 * triger is clicked, lets remove the classes from
		 * the current overlay and body. Removal of these
		 * classes restores the current state of the user
		 * experience. Again, all handled by CSS (awesome).
		 */
		$( id ).on( 'click', function( event ) {
			// Verify that only the outer wrapper was clicked.
			if ( event.target.id == overlay ) {
				$( id ).removeClass( 'overlay-open' );
				$( 'body' ).removeClass( 'overlay-view' );
			}
		});
		
		$( '#cancel-btn' ).click( function( event ) {

			// Verify that only the outer wrapper was clicked.
				$( id ).removeClass( 'overlay-open' );
				$( 'body' ).removeClass( 'overlay-view' );
		});
		
		$( '#save-btn' ).click( function( event ) {
			var fileName = document.getElementById('user-file-name').value;
			alert(fileName);
			// Verify that only the outer wrapper was clicked.
			if(fileName){
				$( id ).removeClass( 'overlay-open' );
				$( 'body' ).removeClass( 'overlay-view' );
			}
			else{
				alert("pop up");
				
				bootbox.alert("Hello world!", function() {
//					  Popup.show("Hello world callback");
					});
			}
				
		});
		
		

		/**
		 * Closes the overlay when the esc key is pressed. See
		 * comment above on closing the overlay for more info
		 * on how this is accomplished.
		 */
		$( document ).keyup( function( event ) {
			// Verify that the esc key was pressed.
			if ( event.keyCode == 27 ) {
				$( id ).removeClass( 'overlay-open' );
				$( 'body' ).removeClass( 'overlay-view' );
			}
		});
	});
}) (jQuery);


$(function() {
    Popup.init({
        "selector": ".bb-alert"
    });
});


$( '#save-trigger' ).on( 'click', function( event ) {
	
	bootbox.prompt("What is your file name?", function(result) {                
		  if (result === null) {    
			  
		    Popup.show("Cancel Save!");                              
		  } else {
			if(result){
				document.getElementById('user-file-name').value=result;
				document.getElementById('save-btn').click()
				Popup.show("Your File Is Saved Successfully"); 
			}
			else{
				
				Popup.show("Your Filename Cannot Be Empty"); 
			}
		  }
		});
});

$('#loading-btn').click(function () {
//    var btn = $(this);
//    btn.button('loading');
//    
//    
//    setTimeout(function (){
//    	//alert("called");
//    	var btn = $('#loading-btn');    	
//        btn.button('reset');
//        setTimeout(function(){document.getElementById('load-file-btn').click();
//},1000);
//        
//    },1500);
    
    
	document.getElementById('load-file-btn').click();
    
  });


function update(){
	//alert("called");
	var btn = $('#loading-btn');
	
	showPorgrssBar();
	document.getElementById('load-file-btn').click();
    updateProgressBar(100);
    btn.button('reset');
}
function showPorgrssBar(){
	document.getElementById("loading-bar").setAttribute('style','');
}


function updateProgressBar(currentProgress){
	document.getElementById("loading-bar").setAttribute('style','');
	document.getElementById("loading-bar-content").setAttribute('aria-valuenow',currentProgress);
	document.getElementById("loading-bar-content").setAttribute('style','width:'+currentProgress+'%');
	document.getElementById("loading-bar-indicator").innerHTML = currentProgress + "%";
}
function hidePorgrssBar(){
	document.getElementById("loading-bar").setAttribute('style','display:none');
}

$('#deleting-btn').click(function () {
    var btn = $(this)
    btn.button('deleting')
    
  });

$('#reset-background-btn').click(function(){
	bootbox.confirm("Are you sure to reset the background?", function(result) {
		if(!result){
		  Popup.show("Cancel Reset Background!");
		}
		else{
			document.getElementById("divtest-player").setAttribute("style","");
			document.getElementById("divtest-player").innerHTML="";
			Popup.show("Reset Background Successfully!");
		}
		
		}); 
});
$('#reset-character-btn').click(function(){
	bootbox.confirm("Are you sure to delete all characters?", function(result) {
		if(!result){
		  Popup.show("Cancel Reset Character!");
		}
		else{
			document.getElementById("divtest").innerHTML="";
			Popup.show("Reset Character Successfully!");
		}
		
		}); 
});

