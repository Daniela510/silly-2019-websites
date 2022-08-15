function select() {
  var oop = event.target;
  if(oop.matches('.f')){
    var aa = document.getElementsByClassName('minic')
    for(var i = 0; i < aa.length; i++) {
      aa[i].classList.remove("f");
      aa[i].classList.add("no");}
      oop.classList.add("clk");
      oop.classList.remove("no");
      console.log('initial');
} else {
  if(oop.matches('.clk')){
    oop.classList.add("no");
    oop.classList.remove("clk");
    console.log('unclick');

  }else{
    if(oop.matches('.no')){
      var bb = document.getElementsByClassName('minic')
      for(var i = 0; i < bb.length; i++) {
        bb[i].classList.remove("clk");
        bb[i].classList.add("no");
      }
      oop.classList.remove("no");
      oop.classList.add("clk");
      console.log('click');
    }
  }

}

}
