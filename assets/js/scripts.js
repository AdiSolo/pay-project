(function($){
    /*
    *******************
        Smooth scroll down on click function
    *******************
*/
    $(".scroll-down").click(function(e) {
        e.preventDefault();
            
        $('html, body').animate({
            scrollTop: $(".how-it-works").offset().top
           }, 1000);
    });
     })(jQuery); 


var path = anime.path('.separator path');

anime({
  targets: '.separator #circle',
  translateX: path('x'),
  easing: 'linear',
  duration: 4000,
  loop: true
});


var path = anime.path('.send-process svg .send-line');

// anime({
//   targets: '.send-process #circle2',
//   translateX: path('x'),
//   translateY: path('y'),
//   rotate: path('angle'),
//   easing: 'linear',
//   duration: 4000,
//   opacity: 1,
//   loop: true
// });