

$("#five").click(function(){
    $(".rect").fadeTo('fast',1);
    console.log("not the java");
    var t = setInterval( away, 15000 );
});
function away(){
  $(".rect").fadeTo('slow',0);
}
var i=0;
function generateMicro() {

  if (i>= 100)//2700-is good to fill up
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
