
autoSlider();
var left = 0;
var timer =0;


function autoSlider (){
  timer = setTimeout(function() {
    var polosa = document.getElementById('polosa');
    left = left - 390;
    if (left < -2730){
      left = 0;
      clearTimeout(timer);
  }
    polosa.style.left = left + 'px';
    autoSlider();
  }, 1000);

}

