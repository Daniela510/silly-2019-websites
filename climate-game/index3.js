var i=0;
var j=0;
var f=0;
function generateMicro() {

  if (i>= 2000)//2700-is good to fill up
      return;

    // this statement creates a new <div>
    var myMicro = $("<div>");

    // this statement adds the class cat1 to this div
    myMicro.addClass("micro");


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
