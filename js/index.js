

$(document).ready(function(){






  // slick carousel
  $('.blog_slider').slick({
    dots: false,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: true,
    prevArrow: $(".t"),
    nextArrow: $(".b"),
  });





//vivus svg 

  var hi = new Vivus('Layer_1', {
    type: 'oneByOne'
    , start: 'autostart'
    , duration: 250
  }, function () {
    $('header').css({
      opacity: 1
    });
    $('.bgc_layout').css({
      opacity: 1
    });
    $('#Layer_1').fadeOut('slow');
  });


  var img2 = new Vivus('Layer_2', {
    type: 'oneByOne'
    , duration: 250
  }, function () {
    $('.bgc_layout3').css({
      opacity: 1
    });
    $('#Layer_2').fadeOut('slow');
  });



//swap images
// var allImg = $(".bgc_layout2 img");
// var currentImg = 0;

// function changeImg(){

//   $(allImg[currentImg]).fadeOut(800, function(){

//     if(currentImg == allImg.length - 1) {
//       currentImg = 0;
//     } else {
//       currentImg++;
//     }
    
//     $(allImg[currentImg]).fadeIn(800);
    
//   });



// }

// var imgTimer = setInterval(changeImg, 4000);



  $next = 1;      // fixed, please do not modfy;
  $current = 0;   // fixed, please do not modfy;
  $interval = 5500; // You can set single picture show time;
  $fadeTime = 6000;  // You can set fadeing-transition time;
  $imgNum = 2;    // How many pictures do you have
 
  $(document).ready(function(){
    //NOTE : Div Wrapper should with css: relative;
    //NOTE : img should with css: absolute;
    //NOTE : img Width & Height can change by you;
    $('.bgc_layout3').css('position','relative');
    $('.bgc_layout3 img').css({'position':'absolute'});
 
    nextFadeIn();
  });
 
  function nextFadeIn(){
    //make image fade in and fade out at one time, without splash vsual;
    $('.fadeImg img').eq($current).delay($interval).fadeOut($fadeTime)
    .end().eq($next).delay($interval).hide().fadeIn($fadeTime, nextFadeIn);
        
    // if You have 5 images, then (eq) range is 0~4 
    // so we should reset to 0 when value > 4; 
    if($next < $imgNum-1){ $next++; } else { $next = 0;}
    if($current < $imgNum-1){ $current++; } else { $current =0; }
  };





});


