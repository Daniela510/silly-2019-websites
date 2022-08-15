/**
 * What, code!?
 */

// SO GLOBAL. YES!
var i=0;
function generateMicro() {

  if (i>= 50)//2700-is good to fill up
      return;

    // this statement creates a new <div>
    var myMicro = $("<div>");

    // this statement adds the class cat1 to this div
    myMicro.addClass("micro");
    myMicro.on("mouseover",function(){
      $(this).remove();
    });
console.log("not the java");
    // this statement adds the div to the html document (important!)
    $(".ooo").append( myMicro );

    // this statement generates a random value between 0 and 14
    var n = Math.floor( Math.random() *10);
    // this statement uses the generated value to create a filename
    var path_to_img = "url(images/micro_" + n + ".png)";
    // this statement now uses the generated filename to change the background-image of the new div
    myMicro.css("background-image",path_to_img);

    var x = Math.random() * $(window).width();
    myMicro.css("left",x);

    var y = Math.random() * $(window).height();
    myMicro.css("top",y);
    //console.log(i);
    i++

}

var t = setInterval( generateMicro, 0.2 );

var damnItsTheBody = document.body;
var totalHeight = window.innerHeight;
var color1 = 'rgb(66, 66, 255)'; // super grey
var color2 = 'rgb(255, 66, 66)';   // super red!

var theWidth = 5311; // Pixels, fuck!
var theFrames = 9;
var thatWidth = theWidth / theFrames
var totalHeight = window.innerHeight;
var mobileOrigin;

var hand = document.querySelector( '.hand' );

function App() {

    this.init = function() {

    	// Wait! What! Someone Should trottle this! What! No! Damn!
		window.onmousemove = function( event ) {

			var percentage = 1 - ( event.y / totalHeight );
			var color = fadeToColor(color1, color2, percentage)
			damnItsTheBody.style.backgroundColor = color;

			var segment = Math.floor( 9 * percentage );

			// // Wrangle those final frames!
			// if ( segment > 9 ) {
    	// 		segment = 9;
  		// 	} else if ( segment < 0 ) {
  		// 		segment = 0;
  		// 	}

  			hand.style.backgroundPosition = ((-segment * thatWidth) + 'px 0px');
		}
    // Stack overflow is amazing! Smart! Kapow!
	function fadeToColor(rgbColor1, rgbColor2, ratio) {
	    var color1 = rgbColor1.substring(4, rgbColor1.length - 1).split(','),
	        color2 = rgbColor2.substring(4, rgbColor2.length - 1).split(','),
	        difference,
	        newColor = [];

	    for (var i = 0; i < color1.length; i++) {
	        difference = color2[i] - color1[i];
	        newColor.push(Math.floor(parseInt(color1[i], 10) + difference * ratio));
	    }

	    return 'rgb(' + newColor + ')';
	}


}

}

var app = new App();
app.init();
