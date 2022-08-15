// this code changes the background color of the body to white
// when a key is pressed ("keydown")
var l = Math.round(Math.random() * 1200);
var t = Math.round(Math.random() * 600);
$(".reye").css("left", l);
$(".reye").css("top", t);

var l1 = Math.round(Math.random() * 1200);
var t1 = Math.round(Math.random() * 600);
$(".leye").css("left", l1);
$(".leye").css("top", t1);

var l2 = Math.round(Math.random() * 1200);
var t2 = Math.round(Math.random() * 600);
$(".nose").css("left", l2);
$(".nose").css("top", t2);

var l3 = Math.round(Math.random() * 1200);
var t3 = Math.round(Math.random() * 600);
$(".mouth").css("left", l3);
$(".mouth").css("top", t3);



$("body").on("keydown", function(e) {
  if (e.keyCode == 32) {
    var l = Math.round(Math.random() * 1200);
    var t = Math.round(Math.random() * 600);
    $(".reye").css("left", l);
    $(".reye").css("top", t);

    var l1 = Math.round(Math.random() * 1200);
    var t1 = Math.round(Math.random() * 600);
    $(".leye").css("left", l1);
    $(".leye").css("top", t1);

    var l2 = Math.round(Math.random() * 1200);
    var t2 = Math.round(Math.random() * 600);
    $(".nose").css("left", l2);
    $(".nose").css("top", t2);

    var l3 = Math.round(Math.random() * 1200);
    var t3 = Math.round(Math.random() * 600);
    $(".mouth").css("left", l3);
    $(".mouth").css("top", t3);

    $("body").css("background-image", "url(images/backk.png)");
    $("body").css("background-color", "black");
  }


});


// this code changes the background color of the body
// back to black when a key (any key) is released ("keyup")


$("body").on("keydown", function(e) {
  if (e.keyCode == 65) {
    $("body").css("background-image", "url(images/jmusk.jpg)");
  $("body").css("background-color", "white");

  }
  });
  $("body").on("keydown", function(e) {
    if (e.keyCode == 74) {
      $("body").css("background-image", "url(images/evil.jpg)");
    $("body").css("background-color", "black");
      $(".leye").css("width","0px");
      $(".reye").css("width","0px");
      $(".nose").css("width","0px");
      $(".mouth").css("width","0px");
    }

});
$("body").on("keyup", function(e) {
    $("body").css("background-image", "url(images/bacg.png)");
  $("body").css("background-color", "white");
  $(".leye").css("width","154px");
  $(".reye").css("width","166px");
  $(".nose").css("width","167px");
  $(".mouth").css("width","215px");

});
