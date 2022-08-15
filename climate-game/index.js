
var i=0;
var j=0;
var f=0;

function generateMicro() {

  if (i>= 500)//2700-is good to fill up
      return;

    // this statement creates a new <div>
    var myMicro = $("<div>");

    // this statement adds the class cat1 to this div
    myMicro.addClass("micro");
    myMicro.on("mouseover",function(){
      j++;
      f++;
      console.log(j);
      $(this).remove();
    });

    // this statement adds the div to the html document (important!)
    $(".scrolling-pane").append( myMicro );

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

var t = setInterval( generateMicro, 0.2 );// how do i do it without the timer
//generateMicro();
var k=0;
function away(){
  $(".win").fadeTo('slow',0);
  console.log("no");
  k++;
}

//it doesnot react properly(maybe also only reacts on the original)YES- no matter if i select by class, id or div...
//only applies it to the original NOT to the gerated ones

//var bla = setInterval(  hidethose, 10000 );

function G1(){
   window.location.href = 'index2.html'
}
function G3(){
   window.location.href = 'finger.html'
}
function G4(){
   window.location.href = 'last.html'
}

function G2(){
  if (200>=j){
    window.location.href = 'index3.html'
  }
  else{ if(k<1){
    $(".win").fadeTo('slow',1);
    console.log("ye");
    $(".clean").fadeTo('fast',0);
    $(".timer").fadeTo('slow',0.8);
    $(".micro").fadeTo('slow',0.6);
    $(".dummy").fadeTo('slow',0.6);
    var bb = setInterval( away, 1500 );}
  }
}

function Glaz(){
  if(f>390){
    $(".micro").fadeTo('slow',0);
    console.log("go away");
    $(".timer").fadeTo('slow',0);
    $(".dummy").fadeTo('slow',1);
  f=0;
  }}

var bleati = setInterval(Glaz,50);
var aa = setInterval(  G2, 20000 );

$(".scrolling-pane").on("scroll",function(){

  //  console.log("scroll")

    var pos_blue = $(".left").scrollTop();
    console.log("left:" +  pos_blue )

    var pos_green = $(".right").scrollTop();
    console.log("right:" + pos_green )

    var pos_orange = $(".middle").scrollTop();
    console.log("middle:" + pos_orange )

    if (pos_blue > 230 && pos_blue < 330) {
        if (pos_green >1470&& pos_green <1524 ) {
            if (pos_orange >  650  && pos_orange< 730) {
                console.log("OK")
                var t = setInterval(G1, 500 );//time interval how?

            }
        }
    }
    if (pos_blue > 530 && pos_blue < 660) {
        if (pos_green >640&& pos_green <  715 ) {
            if (pos_orange > 240  && pos_orange< 288) {
                console.log("OK")
                var t = setInterval(G3, 500 );//time interval how?

            }
        }
    }
    if (pos_blue > 1030 && pos_blue < 1150) {
        if (pos_green >200&& pos_green <350 ) {
            if (pos_orange >  1030  && pos_orange< 1137) {
                console.log("OK")
                var t = setInterval(G4, 500 );//time interval how?

            }
        }
    }

});
