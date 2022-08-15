$( "#last" ).click(function() {
//  alert( "Handler for .click() called." );
  var n = Math.floor( Math.random() *3);
  console.log(n);

  if (n==0) {
    window.location.href = "http://www.koalastothemax.com/?aHR0cDovL3d3dy5ibHVlLWdyb3d0aC5vcmcvUGxhc3RpY3NfV2FzdGVfVG94aW5zX1BvbGx1dGlvbi9QbGFzdGljc19QaWN0dXJlcy9wbGFzdGljX3Rvb3RocGFzdGVfbWljcm9iZWFkcy5qcGc="
  }
  if(n==1) {
    window.location.href = "http://www.koalastothemax.com/?aHR0cHM6Ly9pbWFnZXMubmV3c2NpZW50aXN0LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wNi8wMzE3MDQyOC9hYXZmYTM3Ny0xMjAweDgwMC5qcGc="}

    if(n==2) {
      window.location.href = "http://www.koalastothemax.com/?aHR0cHM6Ly9pbWFnZXMubmV3c2NpZW50aXN0LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wNi9kbjI1NzczLTFfODAwLmpwZw=="}
});
